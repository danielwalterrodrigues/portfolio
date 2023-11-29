import React, { useEffect, useState } from "react";
import { Draggable } from 'drag-react';
import './whatsapp.css';
import '.././../Mobile.css';
import whatsRabichoEu from '../../assets/whatsRabichoEu.png';
import whatsRabichoTu from '../../assets/whatsRabichoTu.png';


const BlocoMsg = (props) => {

    const [person, setPerson] = useState()

    useEffect(() => {
        if (props.person === '0') {
            setPerson(true);
        } else {
            setPerson(false);
        }
    },[])
    return(
        <>
            <div className="Bloco" style={{justifyContent: person ? 'left' : 'right'}}> 
                <div className={person ? 'eu' : 'tu'}>
                    {props.texto}
                </div>
                <div className={person ? 'euSeta' : 'tuSeta'}>
                    <img src={person ? whatsRabichoEu : whatsRabichoTu} style={{width:18, height:'auto'}}></img>
                </div>
                
            </div>
        </>
    )
}
export default BlocoMsg