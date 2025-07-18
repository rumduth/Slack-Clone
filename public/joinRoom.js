const joinRoom = async (roomTitle, namespaceId) => {
  const ackResp = await nameSpaceSockets[namespaceId].emitWithAck(
    "joinRoom",
    roomTitle
  );

  document.querySelector(".curr-room-text").innerText = roomTitle;
  document.querySelector(
    ".curr-room-num-users"
  ).innerHTML = `${ackResp.numUsers} <span class="fa-solid fa-user"></span>`;

  let messageBox = document.querySelector("#messages");
  messageBox.innerHTML = "";
  ackResp.history.forEach(
    ({ newMessage, date, avatar, username }) =>
      (messageBox.innerHTML += `<li>
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
};

/*

 (ackResp) => {
    const numUsers = ackResp.numUsers;
   
  }
*/
