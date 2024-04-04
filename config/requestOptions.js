require('dotenv').config();

const origin = (process.env.NODE_ENV === 'development') ? process.env.UNIBLI_SERVER_LOCALHOST_HTTP : process.env.UNIBLI_SERVER_HTTP

const requestOptionsGET = {
    method: 'GET',
    mode: 'cors', // Isso faz com que o navegador envie o cabeçalho Origin
    headers: {
        'Content-Type': 'application/json',
        'Origin': `${origin}`
    }
};


module.exports = {requestOptionsGET}