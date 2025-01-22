import { clipboard } from "electron";

window.addEventListener('DOMContentLoaded', () => {
  clipboard.writeText('Hello, world!')
})

// contextBridge.exposeInMainWorld('electronAPI', {
//   onClipboardText: (callback: (text: string) => void) => {
//     ipcRenderer.on('clipboard-text', (event, text) => callback(text))
//   }
// })