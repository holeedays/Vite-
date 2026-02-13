import { useState } from 'react'
// relative paths for static file hashes them into vite's cache 
// (becomes inline if file size < 4kb  --> (converted to bit64 and input in html file) else file is kept as a separate file)
import reactLogo from './assets/react.svg' 
import scrimbaLogo from './assets/scrimba.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/headers'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div>
        < Header />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

          <a href="https://scrimba.dev" target="_blank">
          <img src={scrimbaLogo} className="logo" alt="Scrimba Logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      < Yuh />

      < Footer />
    </>
  )
}

const Yuh = () => {

  return(
    <div>
      Hello
    </div>
  )
}

export default App
