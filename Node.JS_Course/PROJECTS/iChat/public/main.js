const socket = io()
const clientsTotal = document.getElementById('clients-total');
const messageContainer = document.getElementById('message-container');
const nameInput = document.getElementById('name-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault(); //to avoid page reloading
    sendMessage();
})

socket.on('clients-total', (data) => {
    clientsTotal.innerText = `Total Clients: ${data}`;
    console.log(data);
})

//sending data object to server where we broadcast to all
function sendMessage() {
    console.log(messageInput.value)
    const data = {
        name: nameInput.value,
        message: messageInput.value,
        dateTime: new Date(),
    }
    socket.emit('sendMessageToAll', data)
    addMessageToUI(true, data)
    messageInput.value = ''; //empty inputs after work done
}

//show the lobby message to all
socket.on('toALLThePeopleConnectedInTheLobby', (data) => {
    console.log(data)
    addMessageToUI(false, data)
})

function addMessageToUI(isOwnMessage, data) { //parameter includes True/False & data itself
    const element = `<li class="${isOwnMessage ? "message-right" : "message-left"}"> 
                            <p class="message">${data.message}
                                <span>
                                ${data.name} &#8226; ${moment(data.dateTime).fromNow()}
                                </span>
                            </p>
                        </li>`
    messageContainer.innerHTML += element;
}