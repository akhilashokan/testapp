import './App.css';
import Banner from './components/banner';
import Dashboard from './components/dashboard/dashboard';
import Greet from './components/Greet';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import Stats from './components/stats/stats';
import Weather from './components/weather/weather.js';

function App() {
  let data = {
    degree: 29,
    type: 'C',
    precp: '4',
    hum: '68',
    wind: '14',
    scale: 'metric',
    icon: '',
    niceWeather: 'Partly cloudy',
    address: 'Kochi, kerala',

  }
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <SideBar />
        <Dashboard>
          <div className='row'>
            <Banner />
            <Weather data={data} />
          </div>
          <div className='row'>
            <div className='col'>
              <Greet name={'Austin'} />
              <Stats />
            </div>
            <div className='col'>
              test
            </div>
          </div>
        </Dashboard>
      </div>
    </div>
  );
}

export default App;
