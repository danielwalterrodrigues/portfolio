import React, { useState, useContext } from 'react';
import { doc, updateDoc, increment, onSnapshot, getDoc } from "firebase/firestore";
import { db } from '../../firebase';
import '../../Mobile.css';
import Context from './TxtContext';
import './Txt.css';
import { Draggable } from 'drag-react';
import setaAbre from '../../assets/txtAbre.png';
import setaFecha from '../../assets/txtFecha.png';
import tresPontos from '../../assets/txt3pontos.png';
import txtIcoLink from '../../assets/txtIcoLink.png';
import txtIcoLinkBco from '../../assets/txtIcoLinkBco.png';
import txtIcoCopy from '../../assets/txtIcoCopy.png';
import txtIcoCopyBco from '../../assets/txtIcoCopyBco.png';
import txtIcoHeart from '../../assets/txtIcoHeart.png';
import txtIcoHeartBco from '../../assets/txtIcoHeartBco.png';
import txtIcoInfo from '../../assets/txtIcoInfo.png';
import txtIcoInfoBco from '../../assets/txtIcoInfoBco.png';
import txtIcoCheckBco from '../../assets/txtIcoCheckBco.png';



const TxtItem = (props) => {
    const [zindexGlobal, setZindexGlobal] = useContext(Context);
    const [aberto, setAberto] = useState(false);
    const [botoAberto, setBotoAberto] = useState(false);
    const [left] = useState(props.left);
    const [top] = useState(props.top);
    const [heart, abreHeart] = useState(false);
    const [copy, abreCopy] = useState(false);
    const [copyUrl, setCopyUrl] = useState(false);
    const [link, abreLink] = useState(false);
    const [info, abreInfo] = useState(false);
    const [like, setLike] = useState(props.likes);
    const [boxStyle, setBoxStyle] = useState([
        {
            cor: '#d6d6d6',
            zindex: props.zindex,
            opacity: props.opacity
        }
    ]);

    const addHeart = doc(db, "textos", props.Itemid);

    async function sumHeart() {

        await updateDoc(addHeart, {
            Likes: increment(1)
        });
        setLike(like + 1);
    }


    function BoxChange() {

        setZindexGlobal(zindexGlobal+1);
        setBotoAberto(true);
        setBoxStyle([
            {
                cor: '#d3ff00',
                zindex: zindexGlobal,
                opacity: 1

            }])
    }
    function copyOrigem() {
        navigator.clipboard.writeText(props.origemurl);
        setCopyUrl(true);

    }
    return(
        <div className='ItemBox' style={{
            zIndex: boxStyle.map(e=>e.zindex), 
            opacity: boxStyle.map(e=>e.opacity)
            }}>
            <Draggable className='vazio' style={{left: left, top: top}}>
                <div className='ItemBoxFix'>
                    <div className='ItemTit' style={{backgroundColor: boxStyle.map(e=>e.cor)}} onClick={BoxChange}>
                        <div style={{float:'left', margin: '12px', }}>
                            <img src={tresPontos} alt='' style={{marginRight: '10px', float: 'left'}}></img>
                            <div style={{float: 'left', paddingTop: 4}}>{props.titulo}</div>
                        </div>
                    </div>
                     
                            {botoAberto ?

                                aberto ?
                                    <div onClick={()=>setAberto(false)} className='ItemAbre' style={{backgroundColor: '#333333'}}>
                                    <img src={setaFecha} className='ItemAbreFecha' alt='Fechar box de texto' /> 
                                    </div>
                                :
                                    <div onClick={()=>setAberto(true)} className='ItemAbre'>
                                    <img src={setaAbre} className='ItemAbreFecha' alt='Abrir box de texto' /> 
                                    </div>    
                            : null    
                            }
                    
                    {aberto ? 
                        <div className='ItemAberto'>
                            <div className='ItemAbertoTxt'>... {props.texto} ...</div>
                            <div className='ItemAbertoBarra'>
                                        {heart ?
                                            <>
                                            <div className='ItemIcoAberto'>
                                                <div className='ItemIcoAbertoTxt' onClick={sumHeart}>Gostei!
                                                    <div style={{marginLeft: 5, float: 'right'}}>
                                                        ( {like} )
                                                    </div></div>
                                                <div className='ItemIcoAbertoIco' onClick={()=>abreHeart(false)}>
                                                    <img src={txtIcoHeartBco}></img>
                                                </div>
                                            </div>
                                            </>
                                        : 
                                        <div className='ItemIco' onClick={()=>abreHeart(true)}>
                                            <img src={txtIcoHeart} alt=''></img>
                                        </div> 
                                        }

                                        {copy ?
                                            <>
                                            <div className='ItemIcoAberto'>
                                                <div className='ItemIcoAbertoTxt' onClick={copyOrigem}>
                                                    {copyUrl ? 'URL Copiada :-)' : 'Copiar URL'}
                                                </div>
                                                <div className='ItemIcoAbertoIco' onClick={()=>abreCopy(false)}>
                                                    <img src={txtIcoCopyBco}></img>
                                                </div>
                                            </div>
                                            </>
                                        : 
                                        <div className='ItemIco' onClick={()=>abreCopy(true)}>
                                            <img src={txtIcoCopy} alt=''></img>
                                        </div> 
                                        }

                                        {link ?
                                            <>
                                            <div className='ItemIcoAberto'>
                                                <div className='ItemIcoAbertoTxt'><a href={props.origemurl} target='_blank'>Abrir link original</a></div>
                                                <div className='ItemIcoAbertoIco' onClick={()=>abreLink(false)}>
                                                    <img src={txtIcoLinkBco}></img>
                                                </div>
                                            </div>
                                            </>
                                        : 
                                        <div className='ItemIco' onClick={()=>abreLink(true)}>
                                            <img src={txtIcoLink} alt=''></img>
                                        </div> 
                                        }

                                        {info ?
                                            <>
                                            <div className='ItemIcoAbertoInfo'>
                                                <div className='ItemIcoAbertoTxt'>Via: {props.origem}</div>
                                                <div className='ItemIcoAbertoIco' onClick={()=>abreInfo(false)}>
                                                    <img src={txtIcoInfoBco}></img>
                                                </div>
                                            </div>
                                            </>
                                        : 
                                        <div className='ItemIco' onClick={()=>abreInfo(true)}>
                                            <img src={txtIcoInfo} alt=''></img>
                                        </div> 
                                        }
                            </div>
                        </div>
                    : null }
                </div>
            </Draggable>
        </div>
    )
}

export default TxtItem