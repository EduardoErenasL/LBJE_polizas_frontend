import routes from '../src/routes/index.jsx'
import { BrowserRouter, useRoutes } from 'react-router-dom'

function Element () {
  const element = useRoutes(routes)

  return element
}

function App () {
  return <BrowserRouter><Element /></BrowserRouter>
}

export default App
