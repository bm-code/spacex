import logo from './assets/logo.png'
import LaunchItem from './components/LaunchItem';
import { useState, useEffect } from 'react';
import * as API from './services/launches'


function App() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches()
      .then(data => setLaunches(data))
  }, []);

  return (
    <>
      <img src={logo} width={300} title="Space X Logo" alt="Space X Logo" />
      <h1>SpaceX Launches</h1>
      {
        launches.map(launch => {
          return <LaunchItem key={launch.flight_number} {...launch} />
        })
      }

    </>
  );
}

export default App;
