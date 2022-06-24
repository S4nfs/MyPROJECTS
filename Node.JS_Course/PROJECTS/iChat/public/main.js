const socket = io()

const clientsTotal = document.getElementById('clients-total');
socket.on('clients-total', (data) => {
    clientsTotal.innerText = `Total Clients: ${data}`;
console.log(data);
})