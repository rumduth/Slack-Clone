const username = prompt("What is your username?");
const password = prompt("What is your password? ");

const clientOptions = {
  auth: {
    username,
    password,
  },
};
const socket = io("http://localhost:8000", clientOptions);
const nameSpaceSockets = [];

let selectedNsIs = 0;
document.querySelector("#message-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const newMessage = document.querySelector("#user-message").value;
  if (!newMessage) return;
  nameSpaceSockets[selectedNsIs].emit("newMessageToRoom", {
    newMessage,
    date: Date.now(),
    avatar: "https://placehold.co/50x50/png",
    username,
  });
  document.querySelector("#user-message").value = "";
});

//Always join the main namespace because that's where the client gets the namespaces from
socket.on("connect", () => {
  console.log("Socket connection is succesfully");
});

//Listen for the nsList event from the server which gives us the namespace
socket.on("nsList", (nsData) => {
  const nameSpacesDiv = document.querySelector(".namespaces");
  nameSpacesDiv.innerHTML = "";
  nsData.forEach(({ name, image, endpoint }, index) => {
    nameSpacesDiv.innerHTML += `<div class="namespace" ns="${endpoint}"><img src="${image}"></div>`;
    if (!nameSpaceSockets[index]) {
      nameSpaceSockets[index] = io(`http://localhost:8000${endpoint}`);
      nameSpaceSockets[index].on("nsChange", (data) => console.log(data));
      nameSpaceSockets[index].on(
        "messageToRoom",
        ({ newMessage, date, avatar, username }) =>
          (document.querySelector("#messages").innerHTML += `<li>
                    <div class="user-image">
                        <img src="${avatar}" />
                    </div>
                    <div class="user-message">
                        <div class="user-name-time">${username} <span>${new Date(
            date
          ).toLocaleString()}</span></div>
                        <div class="message-text">${newMessage}</div>
                    </div>
                </li>`)
      );
    }
  });
  Array.from(document.getElementsByClassName("namespace")).forEach(
    (element) => {
      element.addEventListener("click", (e) => {
        joinNs(element, nsData);
      });
    }
  );
  joinNs(document.getElementsByClassName("namespace")[0], nsData);
});
