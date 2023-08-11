import axios from 'axios';
import useState, { Fragment as Fr } from 'react';
import icon from './Assets/img/clearsky.png';

const App = ({ ApiKey }) => {
  const [data, setData] = useState({});
  const [iconUrl, setIconUrl] = useState('');
  const [location, setLocation] = useState();

  const url = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${ApiKey}`)
      .then(res => {
        setData(res.data)
        setIconUrl(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)
      })
  };

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      return url();
    } else {
      return null;
    }
  };

  return (
    <div className="app">
      <input value={location} onChange={(e) => { setLocation(e.target.value) }} placeholder='Enter a location' onKeyDown={searchLocation} />
      <div className='container'>
        <div className='top'>
          <div className='city'>
            Current City :
            {data.name ? <h1 className='bold white'>{data.name}</h1> : <h1 className='bold white'>Denver</h1>}
          </div>
          <div className='temp'>
            <div>
              And currently it is:
              {data.main ? <div className='bold white'>{data.main.temp.toFixed()} °F</div> : <div className='bold white'>278 °F</div>}
            </div>
          </div>
          <div className='weather'>
            Weather Is:
            <div className='i-weather'>
              <div className='bold white'>{data.weather ? <Fr>{data.weather[0].description}</Fr> : <div className='bold white'>Clear Sky</div>}
              </div>
              {iconUrl ? <img src={iconUrl} alt='icon' /> : <img src={icon} alt='icon' />}
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>feels like</p>
            {data.main ? <Fr className='bold white'>{data.main.feels_like.toFixed()} °F</Fr> : <div className='bold white'>89 °F</div>}

          </div>
          <div className='wind'>
            <p>Wind Speed</p>
            {data.wind ? <Fr className='bold white'>{data.wind.speed.toFixed()} MPH</Fr> : <div className='bold white'>2 MPH</div>}

          </div>
          <div className='humidity'>
            <p>Humidity</p>
            {data.main ? <Fr className='bold white'>{data.main.humidity} %</Fr> : <div className='bold white'>64 %</div>}

          </div>
        </div>
        <div className='author'>made by Gremlin⚡</div>
      </div>
    </div>
  );
}

export default App;
