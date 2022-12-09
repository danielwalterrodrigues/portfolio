import './Dev.css';
import './card.css';
import '../../Mobile.css';
import '../internas.css';
import { motion } from 'framer-motion';
import Titulo from '../Structurals/titulo';
import devloguinhos from '../../assets/devloguinhos.png';
import imagemteste from '../../assets/4real/4real3.png';
import {db} from '../../firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore"; 

const Dev = () => {
    // esses states que vão receber os resultados do fecth
        
    const [todosDocs, setTodosDocs] = useState([]); // usa-se o [] pra array
    //const [umdoc, setUmdoc] = useState({}); // usae {} pq é um objeto
    
    useEffect(() => {

        getDocs(collection(db, "projetos")).then((querysnapshot) => { // colecao projetos tá aqui e o then é um snapshot
            setTodosDocs([]); // zerei o array
            querysnapshot.docs.forEach((doc) => { // meti um foreach pra ler tudo
                
                const data = doc.data(); // joguei tudo nesse doc.data
                setTodosDocs((prev) => {
                    return [...prev, data]; 
                })
            })
        })

    },[]); 
    return (
    <>
    <Titulo corcomplementar="#440062" Nome="DESENVOLVEDOR" />
    <div className='loguinhos'><img src={devloguinhos} style={{marginLeft: 10, marginTop: 80,}}></img></div>
    <motion.div className="brancoGeral" id="flex"
            animate={{ x:'20px', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}}>
                
{todosDocs.map((doc)=>{
return(
        <div className='card'>
        <div className='BoxProjeto' style={{order:(Math.floor(Math. random()*(1-170)+170))}}>
                <div class="content" style={{height:((Math. random()*(37-5)+5)*10),}}>
                    <div class="front" style={{backgroundImage: 'url('+doc.Imagens[2]+')', backgroundSize: '120%',}}>
                        <div className='cardBranco'>
                        </div>
                        <div className='title'>{doc.Nome}</div>
                        <div className='subtitle'>{doc.TecDefault}</div>
                        <div className='tipo'>{doc.Tipo}</div>
                        
                    </div>
                    <div class="back">
                        <p class="description">
                            {doc.DescricaoCurta}
                        </p>
                        <div className='cardlogo'>
                            <button className='Mais'>+</button>
                        </div>
                    </div>
                </div>
        </div>
        </div>
)}
)}

    </motion.div>
    </>
    );
}

export default Dev