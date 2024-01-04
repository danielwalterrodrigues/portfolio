import React from 'react';
import './Mobile.css';
import './App.css';
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import './components/Logoabertura'
import Curriculo from './components/Curriculo/cv';
import tarotmagia from './assets/bgTarotMagia.png'
import fourRealbg from './assets/bg4real.png'
import qtrbg from './assets/bgQtr.png'
import triabg from './assets/bgTria.png'
import Logoabertura from './components/Logoabertura';
import BoxHome from './components/boxHome'
import Whatsapp from './components/Whatsapp/whatsapp';
import cvBox from './assets/cvBox.png'
import cvS2g from './assets/cvS2g.png'
import cvAsus from './assets/cvAsus.png'
import cvNetshoes from './assets/cvNetshoes.png'
import cvClose from './assets/cvClose.png'
import icoCoffee from './assets/icoCoffee.png'


const baseURL = 'http://localhost:3000/api/pt'
//const baseURL = 'https://portfolio-nextjs-chi-coral.vercel.app/api/pt'

function App() {
  const [curriculo, setCurriculo] = useState(false)
  const [box1, setBox1] = useState([])
  const [tarotMagia, setTatotMagia] = useState([])
  const [vyttra, setVyttra] = useState([])
  const [fourReal, setFourReal] = useState([])
  const [tria, setTria] = useState([])
  const [n4Natural, setN4Natural] = useState([])
  const [qtr, setQtr] = useState([])


  useEffect(() => {
    
    axios.get(baseURL).then((result)=>{
      setBox1(result.data.box1)
      setTatotMagia(result.data.tarotmagia)
      setVyttra(result.data.vyttra)
      setFourReal(result.data.fourReal)
      setTria(result.data.tria)
      setN4Natural(result.data.n4natural)
      setQtr(result.data.qtr)


    })
  
  }, []);

  function OpenCv() {
    setCurriculo(true)
  }

  function CloseCv() {
    setCurriculo(false)
  }

  return (
    <>
      <div className='flex-container'>
        
        {curriculo && 
          <>
            <button className='curriculoClose' onClick={()=>{CloseCv()}}>
              <img src={cvClose} style={{width: 25, height: 25}}/>
            </button>
          <div className='curriculo'>

            <Curriculo />
          </div>
          </>
        }
        <div className='centro'>
          <Logoabertura />

          <div className='coluna1'>
            <BoxHome 
              bgcolor="#7c02c7" 
              bgBackcolor="#43006c" 
              posRabicho="4" 
              posRabichoBack="3" 
              title={box1.title} 
              subtitle={box1.subTitle} 
              backContent={box1.backContent}
              backContent2={box1.backContent2} 
              fontColor="#FFFFFF" 
              fontColorBack="#FFFFFF" 
            />
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
              <BoxHome 
                bgcolor="#86201b"
                bgImage={tarotmagia} 
                posRabicho="1" 
                posRabichoBack="2" 
                bgColorBack="#8b0000" 
                colorTxt="#ffffff" 
                fontColor="#FFFFFF"
                fontColorBack="#FFFFFF" 
                title={tarotMagia.title} 
                subtitle={tarotMagia.subTitle}
                backContent={tarotMagia.backContent}
                backContent2={tarotMagia.backContent2}
                description={tarotMagia.description}
                logo={tarotMagia.logo}
                numImages={tarotMagia.numImages}
                gallery={tarotMagia.gallery}
                tags={tarotMagia.tags}
                 />
            </div>
            <div style={{marginTop: 158}}>

            <BoxHome 
                bgcolor="#dc00cf" 
                posRabicho="4" 
                posRabichoBack="3" 
                bgColorBack="#ab00a1" 
                colorTxt="#FFFFFF" 
                fontColor="#FFFFFF"
                fontColorBack="#FFFFFF" 
                title={n4Natural.title} 
                subtitle={n4Natural.subTitle}
                backContent={n4Natural.backContent}
                backContent2={n4Natural.backContent2}
                description={n4Natural.description}
                logo={n4Natural.logo}
                numImages={n4Natural.numImages}
                gallery={n4Natural.gallery}
                tags={n4Natural.tags}
                 />
            </div>
          </div>
          
          <div className='coluna3'>
            <div style={{marginTop: 18}}>
            <BoxHome 
                bgcolor="#1a403e" 
                bgImage={fourRealbg}
                posRabicho="4" 
                posRabichoBack="3" 
                bgColorBack="#1a403e" 
                colorTxt="#FFFFFF" 
                fontColor="#FFFFFF"
                fontColorBack="#FFFFFF" 
                title={fourReal.title} 
                subtitle={fourReal.subTitle}
                backContent={fourReal.backContent}
                backContent2={fourReal.backContent2}
                description={fourReal.description}
                logo={fourReal.logo}
                numImages={fourReal.numImages}
                gallery={fourReal.gallery}
                tags={fourReal.tags}
                 />
            </div>
            <div style={{marginTop: 207}}>

            <BoxHome 
                bgcolor="#00bfff" 
                bgImage={triabg}
                posRabicho="1" 
                posRabichoBack="2" 
                bgColorBack="#00bfff" 
                colorTxt="#FFFFFF" 
                fontColor="#FFFFFF"
                fontColorBack="#FFFFFF" 
                title={tria.title} 
                subtitle={tria.subTitle}
                backContent={tria.backContent}
                backContent2={tria.backContent2}
                description={tria.description}
                logo={tria.logo}
                numImages={tria.numImages}
                gallery={tria.gallery}
                tags={tria.tags}
                 />
            </div>
            <div style={{marginTop: 107}}>
            <BoxHome 
                bgcolor="#51007f" 
                bgImage={qtrbg}
                posRabicho="1" 
                posRabichoBack="2" 
                bgColorBack="#51007f" 
                colorTxt="#FFFFFF" 
                fontColor="#FFFFFF"
                fontColorBack="#FFFFFF" 
                title={qtr.title} 
                subtitle={qtr.subTitle}
                backContent={qtr.backContent}
                backContent2={qtr.backContent2}
                description={qtr.description}
                logo={qtr.logo}
                numImages={qtr.numImages}
                gallery={qtr.gallery}
                tags={qtr.tags}
                 />
            </div>
          </div>
          
          <div className='coluna4'>
              <div style={{marginTop: 100}}>
              <BoxHome 
                bgcolor="#dcfe52" 
                posRabicho="4" 
                posRabichoBack="3" 
                bgColorBack="#000000" 
                colorTxt="#000000" 
                fontColor="#000000"
                fontColorBack="#dcfe52" 
                title={vyttra.title} 
                subtitle={vyttra.subTitle}
                backContent={vyttra.backContent}
                backContent2={vyttra.backContent2}
                description={vyttra.description}
                logo={vyttra.logo}
                numImages={vyttra.numImages}
                gallery={vyttra.gallery}
                tags={vyttra.tags}
                 />
              </div>
              <div style={{marginTop: 30}}>
                <Whatsapp />
              </div>
              <div style={{marginTop: 90, fontFamily: 'Gill Sans', display:'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#a90063', borderRadius: 40, padding: 30, color: '#ffffff', fontWeight: 'bold', marginTop: 210, borderBottomRightRadius: 0, marginLeft: 5}}>
                  <img src={icoCoffee} />+ 55 11 95367 0683
              </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
