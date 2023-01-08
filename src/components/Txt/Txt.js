import './Txt.css';
import '../internas.css';
import '../../Mobile.css';
import { motion } from 'framer-motion';
import Titulo from '../Structurals/titulo';
import TxtItem from './TxtItem';
import Context from './TxtContext';
import {db} from '../../firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore"; 

const Txt = () => {
    const [zindexGlobal, setZindexGlobal] = useState(102);
    const [todosDocs, setTodosDocs] = useState([]); 
    const telaWidth = window.innerWidth - 600;
    const telaHeight = window.innerHeight - 250;
    useEffect(() => {

        getDocs(collection(db, "textos")).then((querysnapshot) => {
            setTodosDocs([]);

            querysnapshot.docs.forEach((doc) => {
                
                const data = {id: doc.id, ...doc.data()};
                setTodosDocs((prev) => {
                    return [...prev, data]; 
                })
            })
        })

    },[]);

    return (
        <>
        <Context.Provider value={[zindexGlobal, setZindexGlobal]}>
        <Titulo corcomplementar="#d3ff00" cortitulo="#849f00" Nome="textos, contos e afins"/>
        <motion.div className="brancoGeral"
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'0', opacity: 0}}>

            {todosDocs.map((doc)=>{
            return(
                <>
                    <TxtItem 
                    Itemid={doc.id}
                    titulo={doc.Titulo} 
                    texto={doc.Texto} 
                    zindex={Math.floor(Math.random()*99+1)}
                    left={Math.floor(Math.random()*telaWidth+0)}
                    top={Math.floor(Math.random()*telaHeight-20)}
                    opacity={(Math.random()*0.9+0.3).toFixed(2)}
                    likes={doc.Likes} 
                    origem={doc.Origem}
                    origemurl={doc.OrigemUrl} 
                    />

                </>
            )}
            )}

            
        </motion.div>
        </Context.Provider>
        </>
    )
}
export default Txt