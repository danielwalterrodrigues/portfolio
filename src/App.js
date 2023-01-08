import React from 'react';
import { motion } from "framer-motion";
import './Mobile.css';
import './App.css';
import Logoabertura from './components/Logoabertura';
import {useState, useEffect, useRef} from 'react';
import './components/Structurals/Menulateral.css';
import './components/Structurals/Menuitem.css';
import curvaevirgula from './assets/curvaevirgula.png';
import sombra from './assets/sombra_menu.png';
import Mario from './components/Social/Mario';
import Bio from './components/Bio/Bio';
import Dev from './components/Dev/Dev';
import Txt from './components/Txt/Txt';
import Tx from './components/Social/Social';
import LogoMenor from './components/logoMenor';
import ReactWhatsapp from 'react-whatsapp';
import whatsapp from './assets/whatsapp.png';
import connect from './assets/connect.png';
import impressora from './assets/impressora.png';
import disponivel from './assets/disponibilidade.png';

function App() {

  const [abreLogo, setAbreLogo] = useState(true);
  const [logoMenor, setLogoMenor] = useState(false);
  const [bio, setBio] = useState(false);
  const [dev, setDev] = useState(false);
  const [txt, setTxt] = useState(false);
  const [tx, setTx] = useState(false);
  const [conexoes, setConexoes] = useState(false);

  const OcliBio = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(true);
    setDev(false);
    setTxt(false);
    setTx(false);
  }

  const OcliDev = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(false);
    setDev(true);
    setTxt(false);
    setTx(false);
  }

  const OcliTxt = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(false);
    setDev(false);
    setTxt(true);
    setTx(false);
  }

  const OcliTx = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(false);
    setDev(false);
    setTxt(false);
    setTx(true);
  }


  const abreConexoes = event => {
    setConexoes(true);
  }
  const refreshPage = ()=>{
    window.location.reload();  }
  return (
    <>
      <div className='flex-container'>
        <div className='esquerda'>
        <motion.div className='Opaco' style={{width: 50, }}
                 animate={{opacity: 0, transitionEnd: {display: 'none',}}}
                 transition={{delay: 7, duration:3, type: 'spring', bounce: 0.6}}
                 initial={{opacity: 1}}>
        </motion.div>
            <motion.div className='Barra'
              animate={{opacity: 1, x: 0}}
              transition={{delay: 6, duration:2, type: 'spring', bounce: 0.6}}
              initial={{opacity: 0, x: '-100'}}>
                <div className='headerBarra'>
                    <button onClick={refreshPage} style={{cursor: 'pointer', border: 'none',}}>
                      <img src={curvaevirgula}></img>
                    </button>
                </div>
                <div>
                    <button className='botao hover-2'style={{backgroundColor:'#ff8a00'}} onClick={OcliBio}>
                    .Bio
                  </button>
                </div>  
                <div>
                    <button className='botao hover-2' style={{backgroundColor:'#9e00e0'}} onClick={OcliDev}>
                    .Dev
                  </button>
                </div>
                <div>
                    <button className='botao hover-2' style={{backgroundColor:'#d3ff00'}} onClick={OcliTxt}>
                    <div style={{color: '#849f00',}}>.Txt</div>
                  </button>
                </div>
                <div className='separador'></div>
                <div>
                    <button className='botao hover-2' style={{backgroundColor:'#750000'}} onClick={OcliTx}>
                    .Tx
                  </button>
                </div> 
                <div className='separador'></div>
                <div>
                <ReactWhatsapp number="5511953670683" message="Olá, Daniel! Que tal agendarmos uma entrevista? :-)" style={{backgroundColor: '#ffffff', border: 'none', width: '100%', cursor: 'pointer',}}>
                    <img src={whatsapp}></img>
                </ReactWhatsapp>
                </div>
                <div>
                  <button className='botao' style={{backgroundColor: '#ffffff', marginTop: 15, textAlign: 'center !important', justifyContent: 'center', marginLeft: 15,}} onClick={abreConexoes}><img src={connect}></img></button>
                </div>
                {conexoes && 
                      <>
                        <div className='legenda' style={{backgroundColor: '#999999'}}>Links Externos</div>
                        <div id="triangulo-para-esquerda" style={{borderRightColor: '#999999'}}></div>
                      </>
                  } 
                <div>
                  <button className='botao' style={{backgroundColor: '#ffffff', marginTop: 15, textAlign: 'center', marginLeft: 15,}}>
                      <img src={impressora}></img>
                   </button>
                </div>
                <div style={{width: '100%', textAlign: 'center'}}>
                  <img src={disponivel}></img>
                </div>
            </motion.div>
            <motion.div className='sombra'
              animate={{opacity: 0.2}}
              transition={{delay: 4, duration:2, type: 'spring', bounce: 0.6}}
              initial={{opacity: 0}}>
                <img src={sombra}></img>
            </motion.div> 
        </div>
        <div className='centro'>
          {logoMenor && <LogoMenor />}
          {abreLogo && <Logoabertura />}
          {bio && <Bio/>}
          {dev && <Dev />}
          {txt && <Txt />}
          {tx && <Tx />}
        </div>
      </div>
    </>
  );
}

export default App;
