import './Bio.css';
import { motion } from 'framer-motion';
import {useState, useRef, Button} from 'react';
import Setabaixo from '../../assets/seta_baixo.png';
import Imprimir from './Imprimir';
import virgula from '../../assets/virgula.png';


const Mais = () => {
    let componentRef = useRef();

    const [imprime, setImprime] = useState(false);
    
    const linha1 = "cv.Dadospessoais(), cv.Objetivo(), cv.Formacao(), cv.Experienced:-),";
    const linha2 = "cv.ProgrammingSkills(), cv.Idiomas(), cv.Cursos(), cv.Premios(), ";
    const linha3 = "cv.Qualildades(), cv.Trabalhovoluntario();";

    const sentence = { 
        hidden: {opacity: 1},
        visible: {
            opacity: 1, 
            transition: {
                delay: 2.5,
                staggerChildren: 0.02,
            },
        },
    }

    const letra = {
        hidden: {opacity: 0, y: 50}, 
        visible: {opacity: 1, y: 0},
        }

        const abreImprime = event => {
            setImprime(true);
        };
        
    return (
        <>
{imprime && <Imprimir />}        
        <div className="submenuMais">
         
                <motion.div className='chaveZero'
                    animate={{opacity: 1}}
                    transition={{delay:0, duration: 0.6}}
                    initial={{opacity: 0}}
                >
                     &#123;
                </motion.div>
                <motion.div className='chave1'
                    animate="visible"
                    variants={sentence}
                    initial= "hidden"
                >
                {linha1.split("").map((char, index) => {
                   return(
                       <motion.span key={char + "-" + index} variants={letra}>
                           {char}
                       </motion.span>
                   )
                })}
                <br />
                
                     {linha2.split("").map((char, index) => {
                        return(
                            <motion.span key={char + "-" + index} variants={letra}>
                                {char}
                            </motion.span>
                        )
                     })}
                     <br />
                     {linha3.split("").map((char, index) => {
                        return(
                            <motion.span key={char + "-" + index} variants={letra}>
                                {char}
                            </motion.span>
                        )
                     })}
                </motion.div>

                <motion.div className='chave2'
                    animate={{opacity: 1}}
                    transition={{delay:4.3, duration: 1}}
                    initial={{opacity: 0}}
                >
                     &#125;
                </motion.div>

                <motion.div className='chave3'
                    animate={{opacity: 1}}
                    transition={{delay:4.7, duration: 0.1}}
                    initial={{opacity: 0}}
                >
                    <img src={virgula}></img>
                </motion.div>
            
                <motion.div className='chave4'
                    animate={{opacity: 1}}
                    transition={{delay:5, duration: 3}}
                    initial={{opacity: 0}}
                > 
                  <a onClick={abreImprime}>export default <span className='expdefcolor'>Curriculum&#40;&nbsp;view&nbsp;&#41;</span></a>
                </motion.div>
            </div>
        
        </>
    )
};

export default Mais