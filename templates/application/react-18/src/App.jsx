import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return <h1>Hello World</h1>
}

const rootElement = document.getElementById('app')
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)