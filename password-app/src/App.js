import { useState } from 'react';
import './css/reset.css'
import "./css/App.css";
import IpAddress from './ipData/ipAddress';
import RandoAlgorithm from './hostAlgorithmComponent/triggerGenerator';
import FrequencyHop from './hostAlgorithmComponent/frequencyHop';
import FingerPrint from './fingerPrint/fingerPrint';
import BioID from './bioID/bioID';
import IpGeo from './ipData/ipGeo';

export const App = () => {
  const [style, setStyle] = useState("cont");
  const changeStyle = () => {
    console.log("Connected");
    setStyle("cont2");
  };
  return (
    <>
      <div className="App"></div>
      <header className="einstein">instein </header>
      <nav className={style}>
        <i className="material-icons md-36 md-light arrow"></i>
        <ul className="menu-box-wrapper">
          <li className="ipaddress-main-container">
            <IpAddress />
          </li>
          <li className="ipgeo-main-container">
            <IpGeo />
          </li>
          <li className="randoalgorithm-main-container">
            <RandoAlgorithm />
          </li>
          <li className="frequencyhop-main-container">
            <FrequencyHop />
          </li>
        </ul>
        <button className="buttonTwo" onClick={changeStyle}><FingerPrint /></button>
        <BioID />
      </nav>
    </>
  );
};

export default App;
