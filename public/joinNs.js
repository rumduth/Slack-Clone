const joinNs = (element, nsData) => {
  const nsEndpoint = element.getAttribute("ns");
  const clickedNs = nsData.find((ns) => ns.endpoint === nsEndpoint);
  const rooms = clickedNs.rooms;
  selectedNsIs = clickedNs.id;
  const roomsList = document.querySelector(".room-list");
  roomsList.innerHTML = "";
  let firstRoom;
  rooms.forEach((room, i) => {
    if (i === 0) firstRoom = room.roomTitle;
    roomsList.innerHTML += `<li class="room" namespaceId=${
      room.namespaceId
    }><span class="fa-solid fa-${room.privateRoom ? "lock" : "globe"}"></span>${
      room.roomTitle
    }</li>`;
  });
  joinRoom(firstRoom, clickedNs.id);

  const roomNodes = document.querySelectorAll(".room");
  Array.from(roomNodes).forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const namespaceId = elem.getAttribute("namespaceId");
      joinRoom(e.target.innerText, namespaceId);
    });
  });
};
