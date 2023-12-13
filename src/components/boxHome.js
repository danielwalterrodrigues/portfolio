import React, {useEffect, useState} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import './boxHome.css'
import { db } from "../firebase";


const BoxHome = (props) => {

    const [todosDocs, setTodosDocs] = useState([]);

    useEffect(()=>{
        const projetos = collection(db, "projetos");
        const projeto = query(projetos, where("id", "==", "tarotmagia"));
    }, [])   

    
    let bgcolor = props.bgcolor
    let bgColorBack = props.bgColorBack
    let colorTxt = props.colorTxt
    let rabicho = 'rabicho'+props.posRabicho
    let rabichoBack = 'rabicho'+props.posRabichoBack


    return(
        <>
        
        <div className='card'>
            
                <div class="content">
                    <div class="front">
                        <div style={{backgroundColor: bgcolor, backgroundImage:`url(${props.bgImage})` ,height: 190, width: 265, display: 'flex', justifyContent: 'center', flexDirection: 'column'}} className={rabicho}>
                            <div className="boxInternoTitle" style={{color: props.fontColor}}>
                                {props.title}
                            </div>
                            <div className="boxInternoSubTitle" style={{color: props.fontColor}}>
                                {props.subtitle}
                            </div>
                        </div>
                    </div>
                    <div class="back">
                        <div className={rabichoBack} style={{backgroundColor: bgColorBack, color: colorTxt , height: 190, width: 265, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                            CONTEUDO COSTAS - {projeto.Descricao} -
                        </div>
                    </div>
                </div>
            
        </div>



        </>
    )
}

export default BoxHome