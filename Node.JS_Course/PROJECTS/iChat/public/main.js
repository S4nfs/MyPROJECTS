const socket = io() //connection setup
const clientsTotal = document.getElementById('clients-total');
const messageContainer = document.getElementById('message-container');
const nameInput = document.getElementById('name-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageTone = new Audio('./notify.mp3')

messageForm.addEventListener('submit', (e) => {
    e.preventDefault(); //to avoid page reloading
    sendMessage();
})

socket.on('clients-total', (data) => {
    clientsTotal.innerText = `Total Clients: ${data}`;
    console.log(data);
})

//sending data object to server where we broadcast to all -----------------------------------
function sendMessage() {
    if (messageInput.value === '') return
    // console.log(messageInput.value)
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
    messageTone.play();
    addMessageToUI(false, data)
})

function addMessageToUI(isOwnMessage, data) { //parameter includes True/False & data itself
    clearFeedback()
    const element = `<li class="flex ${isOwnMessage ? "justify-end" : "justify-start"}"> 
                        <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow  ${isOwnMessage ? "bg-gray-100" : ""}">
                            <span class="block">${data.message}</span>
                            <span class="text-xs italic ">${data.name} &#8226; ${moment(data.dateTime).fromNow()} </span>
                        </div>
                     </li>`
    messageContainer.innerHTML += element;
    scrollToBottom()
}

//auto scroll to bottom
function scrollToBottom() {
    messageContainer.scrollTo(0, messageContainer.scrollHeight) //scrollTo() method accepts two parameters - x(coord) and y(coord)
}

//feedback
messageInput.addEventListener('focus', (e) => {
    socket.emit('someoneIsTyping', {
        feedback: `${nameInput.value} is typing a message..`,
    })
})

messageInput.addEventListener('keypress', (e) => {
    socket.emit('someoneIsTyping', {
        feedback: `${nameInput.value} is typing a now..`,
    })
})

messageInput.addEventListener('blur', (e) => {
    socket.emit('someoneIsTyping', {
        feedback: '',
    })
})

socket.on('feedback', (data) => {
    clearFeedback()
    const element = `<li class="message-feedback">
                        <p class="feedback text-xs text-center italic " id="feedback">
                            ${data.feedback}
                        </p>
                     </li>`
    messageContainer.innerHTML += element;
})

//clear feedbacks when writing is done
function clearFeedback() {
    document.querySelectorAll('li.message-feedback').forEach(element => {
        element.parentNode.removeChild(element);
    })
}

