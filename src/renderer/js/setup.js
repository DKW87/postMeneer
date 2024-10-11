"use strict"

const { BrowserWindow } = require('electron');

let setupWindow;

function createSetupWindow(callback) {
  setupWindow = new BrowserWindow({
    width: 400,
    height: 100,
    frame: false, 
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  setupWindow.loadFile('src/renderer/html/setup.html'); 

  setTimeout(() => {
    setupWindow.close(); // Sluit het setup venster
    if (callback) callback(); // Start de main window als de setup klaar is
  }, 2000);
}

module.exports = { createSetupWindow };