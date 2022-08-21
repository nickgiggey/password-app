import { useState } from 'react';
import './css/reset.css'
import "./css/App.css";
import './css/hostAlgorithm.css'
import IpAddress from './ipData/ipAddress';
import FingerPrint from './fingerPrint/fingerPrint';
import BioID from './bioID/bioID';
import IpGeo from './ipData/ipGeo';

function App() {
  const [style, setStyle] = useState("cont");
  const changeStyle = () => {
    setStyle("cont2");
  };
  return (
    <section className="App-main-container">
      <div className="App"></div>
      <header className="einstein">instein</header>
      <nav className={style}>
        <i className="material-icons md-36 md-light arrow"></i>
        <ul className="menu-box-wrapper">
          <li className="ipaddress-main-container">
            <IpAddress />
          </li>
          <li className="ipgeo-main-container">
            <IpGeo />
          </li>
        </ul>
        <button className="buttonTwo" onClick={changeStyle}>
          <FingerPrint />
        </button>
        <BioID />
      </nav>
    </section>
  );
};

export default App;
