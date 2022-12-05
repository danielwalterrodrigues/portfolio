import React from 'react';
import './Mobile.css';
import './App.css';
import Logoabertura from './components/Logoabertura';
import {useState} from 'react';
import './components/Structurals/Menulateral.css';
import './components/Structurals/Menuitem.css';
import curvaevirgula from './assets/curvaevirgula.png';
import sombra from './assets/sombra_menu.png';
import Mario from './components/Structurals/Mario';
import Bio from './components/Bio/Bio';
import Dev from './components/Dev/Dev';
import Txt from './components/Txt/Txt';
import Tx from './components/Social/Social';
import LogoMenor from './components/logoMenor';

function App() {

  const [abreLogo, setAbreLogo] = useState(true);
  const [logoMenor, setLogoMenor] = useState(false);
  const [hoverTx, setHoverTx] = useState(false);
  const [hoverBio, setHoverBio] = useState(false);
  const [hoverDev, setHoverDev] = useState(false);
  const [hoverTxt, setHoverTxt] = useState(false);
  const [bio, setBio] = useState(false);
  const [dev, setDev] = useState(false);
  const [txt, setTxt] = useState(false);
  const [tx, setTx] = useState(false);

  const MoverBio = event => {
    setHoverBio(true)
  }
  const MoutBio = event => {
    setHoverBio(false)
  }
  const OcliBio = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(true);
    setDev(false);
    setTxt(false);
    setTx(false);
  }


  const MoverDev = event => {
    setHoverDev(true)
  }
  const MoutDev = event => {
    setHoverDev(false)
  }
  const OcliDev = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(false);
    setDev(true);
    setTxt(false);
    setTx(false);
  }


  const MoverTxt = event => {
    setHoverTxt(true)
  }
  const MoutTxt = event => {
    setHoverTxt(false)
  }
  const OcliTxt = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(false);
    setDev(false);
    setTxt(true);
    setTx(false);
  }


  const MoverTx = event => {
    setHoverTx(true)
  }
  const MoutTx = event => {
    setHoverTx(false)
  }
  const OcliTx = event => {
    setAbreLogo(false);
    setLogoMenor(true);
    setBio(false);
    setDev(false);
    setTxt(false);
    setTx(true);
  }

  return (
    <>
      <div className='flex-container'>
        <div className='esquerda'>
            <div className='Barra'>
                <div className='headerBarra'>
                    <img src={curvaevirgula}></img>
                </div>
                <div>
                    <button className='botao hover-2' onMouseOver={MoverBio} onMouseOut={MoutBio} style={{backgroundColor:'#ff8a00'}} onClick={OcliBio}>
                    .Bio
                  </button>
                </div>
                    {hoverBio && 
                        <>
                          <div className='legenda' style={{backgroundColor: '#ff6c00'}}>BIOGRAFIA</div>
                          <div id="triangulo-para-esquerda" style={{borderRightColor: '#ff6c00'}}></div>
                        </>
                        
                    }   
                <div>
                    <button className='botao hover-2' onMouseOver={MoverDev} onMouseOut={MoutDev} style={{backgroundColor:'#9e00e0'}} onClick={OcliDev}>
                    .Dev
                  </button>
                </div>
                  {hoverDev && 
                      <>
                        <div className='legenda' style={{backgroundColor: '#440062'}}>DESENVOLVIMENTO</div>
                        <div id="triangulo-para-esquerda" style={{borderRightColor: '#440062'}}></div>
                      </>
                  }   
                <div>
                    <button className='botao hover-2' onMouseOver={MoverTxt} onMouseOut={MoutTxt} style={{backgroundColor:'#84c900'}} onClick={OcliTxt}>
                    .Txt
                  </button>
                </div>
                  {hoverTxt && 
                      <>
                        <div className='legenda' style={{backgroundColor: '#6aa100'}}>Textos, crônicas e contos</div>
                        <div id="triangulo-para-esquerda" style={{borderRightColor: '#6aa100'}}></div>
                      </>
                  }   
                <div className='separador'></div>
                <div>
                    <button className='botao hover-2' onMouseOver={MoverTx} onMouseOut={MoutTx} style={{backgroundColor:'#750000'}} onClick={OcliTx}>
                    .Tx
                  </button>
                </div>
                  {hoverTx && 
                      <>
                        <div className='legenda' style={{backgroundColor: '#750000'}}>Projeto Transplantado</div>
                        <div id="triangulo-para-esquerda" style={{borderRightColor: '#750000'}}></div>
                        <Mario />
                      </>
                  }      
                <div className='separador'></div>

            </div>
            <div className='sombra'>
                <img src={sombra}></img>
            </div> 
        </div>
        <div className='centro'>
          {logoMenor && <LogoMenor />}
          {abreLogo && <Logoabertura />}
          {bio && <Bio />}
          {dev && <Dev />}
          {txt && <Txt />}
          {tx && <Tx />}
        </div>
      </div>
    </>
  );
}

export default App;
