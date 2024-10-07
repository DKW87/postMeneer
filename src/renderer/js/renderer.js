"use strict"
const axios = require('axios'); // Voor Node.js of Electron

// Gebruik fetch of axios voor HTTP requests
async function fetcher() {
    try {
        const response = await fetch(url, { 
            method: method 
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}


