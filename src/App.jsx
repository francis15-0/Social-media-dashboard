import Switch from '@mui/material/Switch';
import './App.css'
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);
  document.body.className = dark ? 'dark' : 'light';
  const handleToggle = () => {
    setDark(prev => {
      const newTheme = !prev;
      document.body.className = newTheme ? 'dark' : 'light'; // <-- update body class
      return newTheme;
    });
  };

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
          <Switch checked={dark} onChange={handleToggle} />
        </div>

        </div>

        <div className='social-box'>

          <div className='box'>

            <div className='box-content'> 
              
              <div className='username'>
              <img src="/images/icon-facebook.svg" alt="facebook" />
              <p>@nathanf</p>
              </div>      
              <h1>1987</h1>
              <p className='followers'>Followers</p>
              <p className='date'>12 Today</p>
            </div>
          </div>
          <div className='box'>

            <div className='box-content'> 
              
              <div className='username'>
              <img src="/images/icon-twitter.svg" alt="facebook" />
              <p>@nathanf</p>
              </div>      
              <h1>1044</h1>
              <p className='followers'>Followers</p>
              <p className='date'>99 Today</p>
            </div>
          </div>
          <div className='box'>

            <div className='box-content'> 
              
              <div className='username'>
              <img src="/images/icon-instagram.svg" alt="facebook" />
              <p>@nathanf</p>
              </div>      
              <h1>11k</h1>
              <p className='followers'>Followers</p>
              <p className='date'>1099 Today</p>
            </div>
          </div>
          <div className='box'>

            <div className='box-content'> 
              
              <div className='username'>
              <img src="/images/icon-youtube.svg" alt="facebook" />
              <p>@nathanf</p>
              </div>      
              <h1>8239</h1>
              <p className='followers'>Followers</p>
              <p className='date'>144 Today</p>
            </div>
          </div>
          
        </div>


        <div className='overview-box'>

        </div>

      
    </>
  )
}

export default App
