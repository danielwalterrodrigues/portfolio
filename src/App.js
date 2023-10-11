// https://www.iconfinder.com/search/icons?family=eon => icones do menu
import React from 'react';
import { motion } from "framer-motion";
import './Mobile.css';
import './App.css';
import Logoabertura from './components/Logoabertura';
import {useState} from 'react';
import './components/Structurals/Menulateral.css';
import './components/Structurals/Menuitem.css';
import curvaevirgula from './assets/curvaevirgula.png';
import sombra from './assets/sombra_menu.png';
import Bio from './components/Bio/Bio';
import Dev from './components/Dev/Dev';
import Txt from './components/Txt/Txt';
import Tx from './components/Social/Social';
import LogoMenor from './components/logoMenor';
import Whatsapp from './components/Whatsapp/whatsapp';
import RedesSociais from './components/Structurals/redessociais';
import Curriculo from './components/Structurals/curriculo';
import Imprimir from './components/Bio/Cv';


function App() {

  const [abreLogo, setAbreLogo] = useState(true);
  const [logoMenor, setLogoMenor] = useState(false);
  const [bio, setBio] = useState(false);
  const [dev, setDev] = useState(false);
  const [txt, setTxt] = useState(false);
  const [tx, setTx] = useState(false);
  const [cv, setCv] = useState(false);
  const [cvAberto, setCvAberto] = useState(false);

  const OcliBio = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(true);
    setDev(false);
    setTxt(false);
    setTx(false);
    setCv(false);
  }

  const OcliDev = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(false);
    setDev(true);
    setTxt(false);
    setTx(false);
    setCv(false);
  }

  const OcliTxt = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(false);
    setDev(false);
    setTxt(true);
    setTx(false);
    setCv(false);
  }

  const OcliTx = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(false);
    setDev(false);
    setTxt(false);
    setTx(true);
    setCv(false);
  }
  const OcliCv = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(false);
    setDev(false);
    setTxt(false);
    setTx(false);
    setCv(true)
  }

  const refreshPage = ()=>{
    window.location.reload();  }
  return (
    <>
      <div className='flex-container'>
        <div className='esquerda'>
        
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
                <div style={{width:'55px', height: '55px', marginTop: '12px'}}><Whatsapp /></div>
                <div style={{width:'55px', height: '55px', marginTop: '12px'}}   onClick={OcliCv} ><Curriculo />
                {cvAberto && <Imprimir />}
                
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
          {cv && <Imprimir />}
        </div>
      </div>
    </>
  );
}

export default App;
