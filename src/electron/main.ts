import { app, BrowserWindow } from 'electron'
import path from 'path'

// const COPY_SHORTCUT = 'CmdOrCtrl+C'

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 1000,
    transparent: true,
    resizable: false,
    icon: path.join(app.getAppPath(), '/public/favicon.png'),
    webPreferences: {
      preload: path.join(app.getAppPath(), '/dist-electron/preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  // mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
  mainWindow.loadURL('http://localhost:5173')

  // globalShortcut.register(COPY_SHORTCUT, () => {
  //   const text = clipboard.readText()
  //   console.log(text)
  //   if (mainWindow) {
  //     mainWindow.webContents.send('clipboard-text', text)
  //   }
  // })

  // app.on('will-quit', () => {
  //   globalShortcut.unregisterAll()
  // })
})