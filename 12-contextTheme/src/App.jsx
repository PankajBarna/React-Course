
import './App.css'
import Dashboard from './Components/Dashboard'
import { AppProvider } from './AppContext'

function App() {

  return (
    <AppProvider>
      <Dashboard />
      
    </AppProvider>
  )
}

export default App
