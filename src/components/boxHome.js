import React, {useEffect, useState} from "react";
import './boxHome.css'


const BoxHome = (props) => {
    
    let bgcolor = props.bgcolor
    let rabicho = 'rabicho'+props.posRabicho

    return(
        <div style={{backgroundColor: bgcolor, backgroundImage:`url(${props.bgImage})` ,height: 190, width: 265, display: 'flex', justifyContent: 'center', flexDirection: 'column'}} className={rabicho}>
            <div className="boxInternoTitle" style={{color: props.fontColor}}>
                {props.title}
            </div>
            <div className="boxInternoSubTitle" style={{color: props.fontColor}}>
                {props.subtitle}
            </div>
        </div>
    )
}

export default BoxHome