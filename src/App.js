import React from 'react';
import { motion } from "framer-motion";
import './Mobile.css';
import './App.css';
import {useState, useEffect, useRef} from 'react';
import './components/Logoabertura'
import Curriculo from './components/Curriculo/cv';
import tarotmagia from './assets/bgTarotMagia.png'
import fourReal from './assets/bg4real.png'
import qtr from './assets/bgQtr.png'
import tria from './assets/bgTria.png'
import Logoabertura from './components/Logoabertura';
import BoxHome from './components/boxHome'
import Whatsapp from './components/Whatsapp/whatsapp';
import cvBox from './assets/cvBox.png'
import cvS2g from './assets/cvS2g.png'
import cvAsus from './assets/cvAsus.png'
import cvNetshoes from './assets/cvNetshoes.png'

function App() {
  const [curriculo, setCurriculo] = useState(false)

  function OpenCv() {
    setCurriculo(true)
  }

  function CloseCv() {
    setCurriculo(false)
  }


  const refreshPage = ()=>{
    window.location.reload();  }
  return (
    <>
      <div className='flex-container'>
        {curriculo && 
          <div className='curriculo'>

            <Curriculo />
          </div>
        }
        <div className='centro'>
          <Logoabertura />

          <div className='coluna1'>
            <BoxHome bgcolor="#7c02c7" posRabicho="4" title="react native" subtitle="desenvolvedor pleno" fontColor="#FFFFFF" />
            <button className='cvBoto' onClick={()=>{OpenCv()}}>
              <img src={cvBox} />
            </button>
              <div className='cvOthers'>
                <button className='cvOthersInterna' style={{borderTopRightRadius: 0}} onClick={()=>{OpenCv()}}>
                  <img src={cvS2g} />
                </button>
                <button className='cvOthersInterna' style={{borderTopLeftRadius: 0}} onClick={()=>{OpenCv()}}>
                  <img src={cvAsus} />
                </button>
              </div>

              <button className='cvOthersInterna' style={{borderBottomLeftRadius: 0}} onClick={()=>{OpenCv()}}>
                  <img src={cvNetshoes} />
                </button>
          </div>

          <div className='coluna2'>
            <div style={{marginTop: 188}}>
              <BoxHome bgImage={tarotmagia} posRabicho="1" title="tarot magia" subtitle="android app" fontColor="#FFFFFF" />
            </div>
            <div style={{marginTop: 158}}>
              <BoxHome bgcolor='#dc00cf' posRabicho="4" title="n4 natural" subtitle="ecommerce magento" fontColor="#FFFFFF" />
            </div>
          </div>
          
          <div className='coluna3'>
            <div style={{marginTop: 18}}>
              <BoxHome bgImage={fourReal} posRabicho="4" title="4real" subtitle="android / ios app" fontColor="#FFFFFF" />
            </div>
            <div style={{marginTop: 207}}>
              <BoxHome bgImage={tria} posRabicho="2" title="embraer okto" subtitle="android / zebra app" fontColor="#FFFFFF" />
            </div>
            <div style={{marginTop: 107}}>
              <BoxHome bgImage={qtr} posRabicho="1" title="qtr?" subtitle="android / ios app" fontColor="#FFFFFF" />
            </div>
          </div>
          
          <div className='coluna4'>
              <div style={{marginTop: 100}}>
                <BoxHome bgcolor="#dcfe52" posRabicho="4" title="vyttra" subtitle="android / ios app" fontColor="#000000" />
              </div>
              <div style={{marginTop: 30}}>
                <Whatsapp />
              </div>
              <div style={{marginTop: 90}}>
                  + 55 11 95367 0683
              </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
