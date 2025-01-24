import { useState, useEffect } from "react";

const useClipboardUpdate = (milliSecond: number) => {
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
    }, milliSecond)

    return () => clearInterval(interval)
  }, [])

  return [clipboardText]
}

export default useClipboardUpdate