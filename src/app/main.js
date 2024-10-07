const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 1024,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.loadFile('src/renderer/html/main.html');
}

app.whenReady().then(createWindow);