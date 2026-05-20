import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Home } from './Components/Home'
import { Count } from './Components/Count'

function App() {
  const [count, setCount] = useState(0)



// node modules contains installed packages with npm
// public folder: We can add our multimedia contents (images, videos)

// src: This is the main folder where we have to write our react code in this source folder
  // src/assets : We store multimedia related files
  // src/App.css : css code 
  // src/App.jsx : Its the first rendering file in our react application
  // src/index.css : optional extra css file
  // src/main.jsx : Its the entry point of our react which connects with the html file

// .gitignore : which stores ignored file
// eslint.config.js : used for debugging purpose before running the react app
// index.html : this is the root file of the react app
// package-lock.json : which contains exact version of installed packages
// package.json : which contains installed packages (any new installed package after installing react)
// README.md : contains project description
// vite.config.js : contains extra plugins to improve the react performance


// Modules vs Components


  return (
    <>
      <Home/>
      <div className='border border-2 m-2'>
        <Count/>
      </div>
    </>
  )
}

export default App
