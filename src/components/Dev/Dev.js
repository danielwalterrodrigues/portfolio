import './Dev.css';
import '../internas.css';
import { motion } from 'framer-motion';
import {db} from '../../firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore"; 


const Dev = () => {

    // esses states que vão receber os resultados do fecth
    const [todosDocs, setTodosDocs] = useState([]); // usa-se o [] pra array
    //const [umdoc, setUmdoc] = useState({}); // usae {} pq é um objeto
    
    useEffect(() => {

        setTodosDocs([]); // zerei o array
        getDocs(collection(db, "projetos")).then((querysnapshot) => { // colecao projetos tá aqui e o then é um snapshot
            querysnapshot.docs.forEach((doc) => { // meti um foreach pra ler tudo
                const data = doc.data(); // joguei tudo nesse doc.data
                setTodosDocs((prev) => {
                    return [...prev, data]; 
                })
            })
         })

},[]);

    return (
        <motion.div className="brancoGeral"
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}}>
            Bio rolando
        
        <div className='Bloco'>
            <p className='Titulo'>Buscando dados do Firestore</p>
                {todosDocs.map((doc)=>{
                    return(
                        <div key={Math.random()}>
                            {doc.Tipo}, {doc.Nome} - {doc.Icones} - {doc.Tags}<br />
                            {doc.Descricao}
                        </div>
                        
                    )
                })
                }
        </div>
        </motion.div>

        
    )

}

export default Dev