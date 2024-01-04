import React, {useEffect, useState} from "react";
import './boxHome.css'
import mais from '../assets/mais.png'
import { motion } from "framer-motion";
import dirBco from '../assets/dirBco.png'
import esqBco from '../assets/esqBco.png'


const BoxHome = (props) => {
    const [detail, setDetail] = useState(false)
    const [counter, setCounter] = useState(0)
    
    let bgcolor = props.bgcolor
    let bgBackcolor = props.bgBackcolor
    let bgColorBack = props.bgColorBack
    let fontColor = props.fontColor
    let fontColorBack = props.fontColorBack
    let rabicho = 'rabicho'+props.posRabicho
    let rabichoBack = 'rabicho'+props.posRabichoBack
    let backContent = props.backContent
    let tags = props.tags
    let gallery = props.gallery


function openDetail() {
    setDetail(true)
}


    return(
        <>
        {detail &&
        <div className="boxDetalhe">
            
        <motion.div className='OpacoDetail'
                 animate={{opacity: [0, 1, 0, 1, 1]}}
                 transition={{delay: 0, duration:4, type: 'spring', bounce: 0.6}}
                 initial={{opacity: [0, 1, 0, 1, 1]}}
                 >
                    
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', height: '100%'}}>
                <div style={{textAlign: 'right'}} className="detailColumn">
                    <div style={{maxWidth: 300, height: 400, float: 'right', marginRight: 30, marginTop: 200}}>
                        {tags.map((tag, index)=>(
                            <div style={{float: 'right', color: '#757575', fontFamily: 'Gill Sans', fontSize: 14, backgroundColor: '#e0e0e0', borderRadius: 50, height: 17, paddingLeft: 12, paddingRight: 12, paddingTop: 3, paddingBottom: 3, marginBottom: 10, marginLeft: 8}}>
                                {tag.tag}
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div style={{width: 328,}}>
                    <div style={{backgroundColor: bgcolor, width: 265, display: 'flex', paddingTop: 30, paddingBottom: 40, flexDirection: 'column'}} className={rabichoBack}>
                        <div className="boxInternoTitle" style={{color: fontColor, marginLeft: -35}}>
                            {props.title}
                        </div>
                        <div className="boxInternoSubTitle" style={{color: fontColor, marginLeft: -35}}>
                            {props.subtitle}
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <button style={{cursor: 'pointer', marginTop: 200, textAlign:'center', backgroundColor: bgcolor, height: 86, width: 25, border: 0, borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}>
                            <img src={esqBco} />
                        </button>
                            <div style={{width: 268, height: 478, borderRadius: 40, backgroundColor: bgcolor, marginTop: 50, }}>
                                <img src={gallery[counter].img} style={{width: 268, height: 478, borderRadius: 40}} />
                            </div>
                        
                            <button style={{cursor: 'pointer', marginTop: 200, textAlign:'center', backgroundColor: bgcolor, height: 86, width: 25, border: 0, borderBottomRightRadius: 20, borderTopRightRadius: 20}}>
                                <img src={dirBco} />
                            </button>    
                        
                    </div>
                </div>
                <div style={{textAlign: 'left'}} className="detailColumn">
                    333
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
                        <div style={{backgroundColor: bgBackcolor, height: 190, width: 265, display: 'flex', justifyContent: 'center', flexDirection: 'column'}} className={rabichoBack}>
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