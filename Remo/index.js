const express = require('express');
var cors = require('cors');
const app = express();

app.use(express.json());
//set Cross-Origin Resource Sharing
//The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers
app.use(cors());
app.post('/api', (request, response) => {
    console.log(request.body);
    response.json({
        status: 'success',
        message: 'Data received',
        data: request.body
    });
})
app.listen('3000', () => console.log('Server is running on port 3000'));
