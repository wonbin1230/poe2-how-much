import './App.css'
import { useEffect, useState } from 'react'
import { Container } from './style'
import Home from './pages/Home'

// declare global {
//   interface Window {
//     electronAPI: {
//       onClipboardText: (callback: (text: string) => void) => void
//     }
//   }
// }

const App = () => {
  const [clipboardText, setClipboardText] = useState<string>('')

  useEffect(() => {
    const clipboard = window.require('electron').clipboard
    let currentClipboardText = clipboard.readText()
    setClipboardText(currentClipboardText)

    const interval = setInterval(() => {
      const newClipboardText = clipboard.readText()
      if (newClipboardText !== currentClipboardText) {
        currentClipboardText = newClipboardText
        setClipboardText(newClipboardText)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Container>
        <Home />
        {clipboardText}
      </Container>
    </>
  )
}

export default App
