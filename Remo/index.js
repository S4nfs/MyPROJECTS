const express = require('express');
var cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); //set Cross-Origin Resource Sharing
app.post('/api', (request, response) => {
    console.log(request.body);
    response.json({
        status: 'success',
        message: 'Data received',
        data: request.body
    });
})
app.listen('3000', () => console.log('Server is running on port 3000'));
