/*-------------------------------------------------------------------
|  🐼 React FC App
|
|  🐯 Purpose: RENDERS REACT APP
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { useEffect, useState } from 'react'
import { Navigation } from './components'
import { Form } from './Form'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-900">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Navigation />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Form />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
