import React, {useEffect, useState} from "react";
import './boxHome.css'
import { isMobile } from "react-device-detect";
import mais from '../assets/mais.png'
import { motion } from "framer-motion";
import dirBco from '../assets/dirBco.png'
import esqBco from '../assets/esqBco.png'


const BoxHome = (props) => {
    const [detail, setDetail] = useState(false)
    const [counter, setCounter] = useState(0)
    const [load, setLoad] = useState(false)
    const [mobile, setMobile] = useState(false)

    useEffect(()=>{
        if (isMobile) {
            setMobile(true)
        }
    }, [])
    
    let bgcolor = props.bgcolor
    let bgColorBack = props.bgColorBack
    let fontColor = props.fontColor
    let fontColorBack = props.fontColorBack
    let rabicho = 'rabicho'+props.posRabicho
    let rabichoBack = 'rabicho'+props.posRabichoBack
    let backContent = props.backContent
    let tags = props.tags
    let numImages = props.numImages
    let gallery = props.gallery
    let description = props.description
    let logo = props.logo


function openDetail() {
    setDetail(true)
}

function galleryMoveMais() {
    if (counter > (numImages-2)) {
        setCounter(0)
        console.log("counter é"+counter)

    } else {
        setCounter(counter+1)
        console.log("counter é"+counter)
    }
}

function galleryMoveMenos() {
    if (counter == 0) {
        setCounter(numImages-1)
        console.log("counter é"+counter)

    } else {
        setCounter(counter-1)
        console.log("counter é"+counter)
    }
}

    return(
        <>
        {detail &&
        <div className="boxDetalhe">
            
            <motion.div className={mobile ? 'OpacoDetailMobile' : 'OpacoDetail'}
                 animate={{opacity: [0, 1]}}
                 transition={{delay: 0, duration:2, type: 'spring', bounce: 0.6}}
                 initial={{opacity: [0, 1]}}
                 exit={{opacity: 0}}
                 >
        </motion.div>
            
        <motion.div style={{position: 'absolute', left: mobile ? 40 : 0, top: 45, width: '100%', height: '100%', zIndex: 99999}}
                 animate={{opacity: [0, 1]}}
                 transition={{delay: 1, duration:4, type: 'spring', bounce: 0.6}}
                 initial={{opacity: [0, 1]}}
                 exit={{opacity: 0}}
                 >
            <div style={{display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-around', width: '100%', height: '100%'}}>
                <div style={{textAlign: 'right'}} className="detailColumn">
                    <div style={{maxWidth: 300, height: 400, float: 'right', marginRight: 10, marginTop: 200}}>
                        {tags.map((tag, index)=>(
                            <div style={{float: 'right', color: '#757575', fontFamily: 'Gill Sans', fontSize: 14, backgroundColor: '#e0e0e0', borderRadius: 50, height: 17, paddingLeft: 12, paddingRight: 12, paddingTop: 3, paddingBottom: 3, marginBottom: 10, marginLeft: 8}}>
                                {tag.tag}
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div style={{width: 328}}>
                    <div style={{backgroundColor: bgColorBack, width: 265, display: 'flex', paddingTop: 30, paddingBottom: 40, flexDirection: 'column', marginLeft: 30}} className={rabichoBack}>
                        <div className="boxInternoTitle" style={{color: fontColorBack, marginLeft: -35}}>
                            {props.title}
                        </div>
                        <div className="boxInternoSubTitle" style={{color: fontColorBack, marginLeft: -35}}>
                            {props.subtitle}
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <button onClick={()=>{galleryMoveMenos()}} style={{cursor: 'pointer', paddingLeft: 10, marginTop: 200, textAlign:'center', backgroundColor: bgColorBack, height: 86, width: 25, border: 0, borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}>
                            <img src={esqBco}/>
                        </button>
                            <div style={{width: 268, height: 478, borderRadius: 40, backgroundColor: bgColorBack, marginTop: 50, }}>
                    
                                <img src={gallery[counter].img} style={{width: 268, height: 478, borderRadius: 40}} />
                            </div>
                        
                            <button onClick={()=>{galleryMoveMais()}} style={{cursor: 'pointer', paddingRight: 10, marginTop: 200, textAlign:'center', backgroundColor: bgColorBack, height: 86, width: 25, border: 0, borderBottomRightRadius: 20, borderTopRightRadius: 20}}>
                                <img src={dirBco} />
                            </button>    
                        
                    </div>
                </div>
                <div style={{textAlign: 'left'}} className="detailColumn">
                    <div style={{width: 300, fontFamily: 'Gill Sans', marginTop: mobile ? 30 : 200, lineHeight: 2.1, marginLeft: 20}}>
                        {description}
                    </div>
                    <div style={{backgroundColor: bgColorBack, width: 300, height: 180, paddingTop: 20, marginLeft: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: 20, marginTop: 40, borderRadius: 60, borderTopLeftRadius: 0}} className="rabicho1">
                        <img src={logo} />
                    </div>
                    <div style={{width: 320, textAlign:'right', marginTop: 40}}>
                        <button onClick={()=>{setDetail(false)}} style={{backgroundColor: bgColorBack, color: fontColorBack, fontSize: 20, fontWeight: 'bolder', padding: 10, paddingLeft: 15, paddingRight: 15, borderWidth: 0, borderRadius: 50, borderBottomLeftRadius: 0 }}>
                            X
                        </button>
                    </div>
                </div>
            </div>                    
        </motion.div>
        
        </div>
        }
        <div className='card'>
            
                <div className="content">
                    <div className="front">
                        <div style={{backgroundColor: bgcolor, backgroundImage:`url(${props.bgImage})` ,height: 190, width: 265, display: 'flex', justifyContent: 'center', flexDirection: 'column'}} className={rabicho}>
                            <div className="boxInternoTitle" style={{color: fontColor}}>
                                {props.title}
                            </div>
                            <div className="boxInternoSubTitle" style={{color: fontColor}}>
                                {props.subtitle}
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div style={{backgroundColor: bgColorBack, height: 190, width: 265, display: 'flex', justifyContent: 'center', flexDirection: 'column'}} className={rabichoBack}>
                            <div className={rabichoBack} style={{backgroundColor: bgColorBack, color: fontColorBack , height: 190, width: 205, display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: 40, paddingRight: 20}}>
                                {backContent}
                                <div style={{ width: '100%', textAlign: 'center', marginLeft: -20}}>
                                    <button onClick={()=>{openDetail()}} style={{backgroundColor: bgColorBack, border: 0}}>
                                        <img src={mais} style={{width: 27, height: 28, padding: 10, paddingBottom: 0, paddingTop: 18}} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>



        </>
    )
}

export default BoxHome