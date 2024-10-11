const { app, BrowserWindow } = require('electron');
const { createSetupWindow } = require('../renderer/js/setup.js'); // Verwijzing naar setup.js

function createMainWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 1024,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.loadFile('src/renderer/html/main.html');
}

app.whenReady().then(() => {
    // Start eerst de setup
    createSetupWindow(createMainWindow); // Geef de mainWindow functie mee om te starten na setup
});