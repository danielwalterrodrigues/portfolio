import './Dev.css';
import './card.css';
import '../../Mobile.css';
import '../internas.css';
import { motion } from 'framer-motion';
import Titulo from '../Structurals/titulo';
import {db} from '../../firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import './detalhe.css';
import Detalhe from './detalhe';

const Dev = () => {
    
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
    <section id='topo'></section>
    <Titulo corcomplementar="#440062" Nome="DESENVOLVEDOR" />
    {/* <div className='loguinhos'><img src={devloguinhos} style={{marginLeft: 10, marginTop: 80,}}></img></div> */}
    <motion.div className="brancoGeral" id="flex"
            animate={{ x:'20px', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}}>
                
{todosDocs.map((doc)=>{
return(
    <>
        <Detalhe Nome={doc.Nome} Tags={doc.Tags} Imagens={doc.Imagens} Logo={doc.Logo} Descricao={doc.Descricao} Imgbg={doc.Imagens[0]} TecDefault={doc.TecDefault} Tipo={doc.Tipo} DescricaoCurta={doc.DescricaoCurta}/>

    </>
)}
)}

    </motion.div>
    </>
    );
}

export default Dev