import { useState } from 'react'
import './App.css'
import './assets/style.scss'
import axios from 'axios'

async function getRandomCallUrl() {
  const apiKey = ''
  const res = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=' + apiKey)
  return res.data[0].url;
}

function App() {

  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  async function Loading() {
    setIsLoading(true)
    setUrl(await getRandomCallUrl())
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }
  return (
    <>
      {isLoading && <div className="loading">
        Đang tải...
      </div>}
      <div>
        <button onClick={Loading}>Click để lấy ảnh</button>
      </div>
      <div>
        {url && <img src={url} alt="Ảnh" />}
      </div>
    </>
  )
}

export default App
