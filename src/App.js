import React from 'react';
import { motion } from "framer-motion";
import './Mobile.css';
import './App.css';
import {useState, useEffect, useRef} from 'react';
import './components/Logoabertura'
import tarotmagia from './assets/bgTarotMagia.png'
import fourReal from './assets/bg4real.png'
import qtr from './assets/bgQtr.png'
import tria from './assets/bgTria.png'
import Logoabertura from './components/Logoabertura';
import BoxHome from './components/boxHome'
import Whatsapp from './components/Whatsapp/whatsapp';

function App() {

  const refreshPage = ()=>{
    window.location.reload();  }
  return (
    <>
      <div className='flex-container'>
        <div className='centro'>
          <Logoabertura />
          <div className='coluna1'>
            <BoxHome bgcolor="#7c02c7" posRabicho="4" title="react native" subtitle="desenvolvedor pleno" fontColor="#FFFFFF" />
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
              <BoxHome bgImage={tria} posRabicho="1" title="embraer okto" subtitle="android / zebra app" fontColor="#FFFFFF" />
            </div>
            <div style={{marginTop: 107}}>
              <BoxHome bgImage={qtr} posRabicho="1" title="qtr?" subtitle="android / ios app" fontColor="#FFFFFF" />
            </div>
          </div>
          <div className='coluna4'>
              <div style={{marginTop: 100}}>
                <BoxHome bgcolor="#dcfe52" posRabicho="4" title="vyttra" subtitle="android / ios app" fontColor="#000000" />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
