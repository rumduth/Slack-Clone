const express = require("express");
const socketio = require("socket.io");

const path = require("path");

const namespaces = require("./data/namespaces");
const Room = require("./classes/Room");

const app = express();

const validUsers = [
  { username: "Duth", password: "123456" },
  { username: "Taylor", password: "123456" },
];

app.use(express.static(path.join(__dirname, "public")));

//manufactured way to change an ns
app.get("/change-ns", (req, res) => {
  //Update namespaces array
  namespaces[0].addRoom(new Room(0, "Deleted Articles", 0));
  //Let everyone know in this namespace that it changed
  io.of(namespaces[0].endpoint).emit("nsChange", namespaces[0]);
  res.json("Page hit");
});

const server = app.listen(8000);
const io = socketio(server);

io.on("connection", (socket) => {
  const username = socket.handshake.auth.username;
  const password = socket.handshake.auth.password;
  const isValidUser = validUsers.find(
    (user) => user.password === password && user.username === username
  );
  if (isValidUser) {
    socket.emit("welcome", "welcome to the server");
    socket.emit("nsList", namespaces);
  }
});

namespaces.forEach((namespace) => {
  io.of(namespace.endpoint).on("connection", (socket) => {
    socket.on("joinRoom", async (roomTitle, ackCallBack) => {
      //leave all rooms because client can only be in one room
      const rooms = socket.rooms;
      Array.from(rooms).forEach((room, idx) => {
        if (idx !== 0) socket.leave(room);
      });

      socket.join(roomTitle);
      const history = namespace.rooms.find(
        (r) => r.roomTitle === roomTitle
      ).history;
      //fetch the number of sockets in this room
      const sockets = await io
        .of(namespace.endpoint)
        .in(roomTitle)
        .fetchSockets();

      ackCallBack({ numUsers: sockets.length, history: history });
    });
    socket.on("newMessageToRoom", (messageObj) => {
      //broadcaset this to all the connected clients... this room only
      const rooms = Array.from(socket.rooms);
      //send out this messageObj to everyone including the sender
      const currentRoom = namespace.rooms.find((r) => r.roomTitle === rooms[1]);
      currentRoom.addMessage(messageObj);
      io.of(namespace.endpoint).to(rooms[1]).emit("messageToRoom", messageObj);
    });
  });
});
