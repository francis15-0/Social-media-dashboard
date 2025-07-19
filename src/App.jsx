import Switch from '@mui/material/Switch';
import './App.css'

function App() {
  

  return (
    <>
      <div className='Header'>
        <div>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <hr />

        <div className='subHeader'>
          <p>Dark Mode</p>
          <Switch />
        </div>

      </div>
    </>
  )
}

export default App
