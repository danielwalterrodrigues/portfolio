import './Dev.css';
import '../internas.css';
import { motion } from 'framer-motion';
import {db} from '../../firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import virgula from '../../assets/virgula.png';
import setaesq from '../../assets/seta_esq.png';
import setadir from '../../assets/seta_dir.png';
import './carrossel.css';
import { Carousel } from 'react-responsive-carousel';


const Dev = () => {

    // esses states que vão receber os resultados do fecth
    const [todosDocs, setTodosDocs] = useState([]); // usa-se o [] pra array
    //const [umdoc, setUmdoc] = useState({}); // usae {} pq é um objeto
    
    useEffect(() => {

        //setTodosDocs([]); // zerei o array
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
<>
        <motion.div className="brancoGeral"
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 1.5 }}
            initial={{ x:'305px', opacity: 0}} style={{width:'100%', display:'block',}}>
        
<Carousel>
        {todosDocs.map((doc)=>{
            return(
        
                <div key={Math.random()}>   
                    <div className='BlocoBco d-block'>
                        <div className='BlocoBco1'>
                            <div className='BlocoTit'><span className='BlocoTitTipo'>{doc.Tipo},</span> {doc.Nome}</div>
                            <div className='BlocoTitTxt'>{doc.Descricao}</div>
                        </div>
                        <div className='BlocoBco2'>
                            {doc.Imagens.map((imagens)=>{
                            return(
                                <img key={Math.random()} src={imagens} className='devImagem'></img>
                            )})}
                            <div className='tags'>
                                <img src={virgula} style={{float:'left', marginRight: 5}}></img>
                                {doc.Tags.map((tag) => {
                                    return(
                                        <div className='tag'>{tag}</div>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>
                    <div className='BlocoBcoDir'>
                        <img src={doc.Logo} className='devLogo'></img><br />
                        <a href={doc.Link} target='_blank'><img src={doc.LinkImagem} className='devLink'></img></a>
                    </div>
                </div>     
            )}
        )}
    </Carousel>    
        </motion.div>
        
    </>
                            
        
    )

}

export default Dev