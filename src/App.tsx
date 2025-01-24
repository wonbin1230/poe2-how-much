import './App.css'
// import { useEffect, useState } from 'react'

import useClipboardUpdate from './hooks/useClipboardUpdate'

import { Container } from './style'
import Home from './pages/Home/Home'

// declare global {
//   interface Window {
//     electronAPI: {
//       onClipboardText: (callback: (text: string) => void) => void
//     }
//   }
// }

const App = () => {
  const [clipboardText] = useClipboardUpdate(1000)
  console.log(clipboardText)

  return (
    <>
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default App
