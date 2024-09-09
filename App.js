import logo from './logo.svg';
import './App.css';
import cloud from './cloud.png';
import airquality from './airquality.png';
import wind from './wind.png';
import fog from './fog.png';
import nextten from './next10.png';
import rain from './rain.png';
import {
  BatteryHalf,
  Wifi,
  SignalStrength,
  LocationCurrent,
} from "@carbon/icons-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-bar">
            <div className="time-location">
                <p>9:23</p>
                <LocationCurrent className="icon" />
            </div>
        <div className="status-bar">
            <SignalStrength className="icon" />
            <Wifi className="icon" />
            <BatteryHalf className="icon" />
        </div>
        </div>
        <h1>San Francisco</h1>
      </header>
      <main className="App-main">
        <div className="tiles-container">
          <div className="tile square-green-tile">
            <img src={airquality} alt="Tile 1" className="tile-square-image" />
            </div>
          <div className="tile square-blank-tile"></div>
          <div className="tile rectangle-yellow-tile">
            <img src={nextten} alt="Tile 1" className="tile-rectangle-image" />
            </div>
          <div className="tile square-magenta-tile">
            <img src={wind} alt="Tile 1" className="tile-square-image" />
            </div>
          <div className="tile square-purple-tile">
            <img src={fog} alt="Tile 1" className="tile-square-image" />
            </div>
          <div className="tile rectangle-gray-tile">
            <img src={rain} alt="Tile 1" className="tile-rectangle-image" />
            </div>
        </div>
      </main>
      <footer className="App-footer">
        <img src={cloud} alt="Bottom" className="bottom-image" />
      </footer>  
    </div>
  );
}

export default App;
