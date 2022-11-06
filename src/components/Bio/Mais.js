import './Bio.css';
import { motion } from 'framer-motion';
import {useState} from 'react';
import Setabaixo from '../../assets/seta_baixo.png';

const Mais = () => {
    const [mais, setMais] = useState(false);
    const linha1 = "cv.Dadospessoais(), cv.Objetivo(), cv.Formacao(), cv.Experienced:-),";
    const linha2 = "cv.ProgrammingSkills(), cv.Idiomas(), cv.Cursos(), cv.Premios(), ";
    const linha3 = "cv.Qualildades(), cv.Trabalhovoluntario();";

    const sentence = { 
        hidden: {opacity: 1},
        visible: {
            opacity: 1, 
            transition: {
                delay: 2.5,
                staggerChildren: 0.04,
            },
        },
    }

    const letra = {
        hidden: {opacity: 0, y: 50}, 
        visible: {opacity: 1, y: 0},
        }

    const abreMais = event => {
        setMais(true);
    };
    return (
        <>
        <div className="submenuMais">
          <button className="Mais" onClick={abreMais}>+</button>
          <motion.div
                initial={{ opacity: 0 }}
                transition={{duration:4}}
                animate={{ opacity:1 }}
            >
            </motion.div>
        </div>
        {mais && 
            <>
                <motion.div className='branco_fundo'
                    animate={{width: '100%'}}
                    transition={{duration:1}}
                    initial={{width: 0}}
                >
                    
                </motion.div>
                <motion.div className='chaveZero'
                    animate={{opacity: 1}}
                    transition={{delay:0, duration: 0.1}}
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
                <br /><br />
                     {linha2.split("").map((char, index) => {
                        return(
                            <motion.span key={char + "-" + index} variants={letra}>
                                {char}
                            </motion.span>
                        )
                     })}
                     <br /><br />
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
                    transition={{delay:7.3, duration: 0.1}}
                    initial={{opacity: 0}}
                >
                     &#125;
                </motion.div>

                <motion.div className='chave3'
                    animate={{opacity: 1}}
                    transition={{delay:7.7, duration: 0.1}}
                    initial={{opacity: 0}}
                >
                    &#44;
                </motion.div>
                <motion.div className='chave4'
                    animate={{opacity: 1}}
                    transition={{delay:8, duration: 3}}
                    initial={{opacity: 0}}
                > 
                  export default <span className='expdefcolor'>Bio&#40;&nbsp;.pdf <img src={Setabaixo} className="seta" alt="seta para clicar e selecionar o tipo de documento"></img>&#41;</span>
                </motion.div>
            </>
        }
        </>
    )
};

export default Mais