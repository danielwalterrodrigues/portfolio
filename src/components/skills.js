import '../App.css';
import './skills.css';
import { motion } from "framer-motion";
import ColcheteAbre from '../assets/colchete_abre.png';
import ColcheteFecha from '../assets/colchete_fecha.png';
import SkillBarra from '../assets/barra_skill.png';

function Skills() {

    return (
        <motion.div className='pretoanimado'
      initial={{ y: 1000, opacity: 0}}
      animate={{ y: 0, opacity: 1}}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      {
        <>
          <div className='bloco1'>
            <div className="titskills">SKILLS</div>
             <img src={ColcheteAbre} alt=" "></img>
            </div>
          <div className='bloco2'>
            <div className='skillRow'>
                <div className='skillCol' style={{width: "100px", backgroundColor: "#000000",  float:"left", textAlign: "right", paddingRight: "10px"}}>
                  Design / UX / UI
                </div>
                <div className='porcentagem'>89%</div>
                <div className='skillCol' style={{width: "100%", fontSize: "10px", fontWeight: "bold"}}>
                    <div class="barra1" data-width="89%"></div>
                </div>
            </div>
            <div className='skillRow'>
                <div className='skillCol' style={{width: "100px", backgroundColor: "#000000",  float:"left", textAlign: "right", paddingRight: "10px"}}>
                  HTML + CSS3
                </div>
                <div className='porcentagem'>93%</div>
                <div className='skillCol' style={{width: "100%", fontSize: "10px", fontWeight: "bold"}}>
                    <div class="barra2" data-width="93%"></div>
                </div>
            </div>
            <div className='skillRow'>
                <div className='skillCol' style={{width: "100px", backgroundColor: "#000000",  float:"left", textAlign: "right", paddingRight: "10px"}}>
                  Gestão Ágil
                </div>
                <div className='porcentagem'>75%</div>
                <div className='skillCol' style={{width: "100%", fontSize: "10px", fontWeight: "bold"}}>
                    <div class="barra3" data-width="75%"></div>
                </div>
            </div>
          </div>


          <div className='bloco3'>
              
            <div className='skillRow'>
                <div className='skillCol' style={{width: "100px", backgroundColor: "#000000",  float:"left", textAlign: "right", paddingRight: "10px"}}>
                  Front End Skills
                </div>
                <div className='porcentagem'>95%</div>
                <div className='skillCol' style={{width: "100%", fontSize: "10px", fontWeight: "bold"}}>
                    <div class="barra4" data-width="95%"></div>
                </div>
            </div>
            <div className='skillRow'>
                <div className='skillCol' style={{width: "100px", backgroundColor: "#000000",  float:"left", textAlign: "right", paddingRight: "10px"}}>
                  Idioma: Inglês
                </div>
                <div className='porcentagem'>70%</div>
                <div className='skillCol' style={{width: "100%", fontSize: "10px", fontWeight: "bold"}}>
                    <div class="barra5" data-width="70%"></div>
                </div>
            </div>
            <div className='skillRow'>
                <div className='skillCol' style={{width: "100px", backgroundColor: "#000000",  float:"left", textAlign: "right", paddingRight: "10px"}}>
                  React Native / JS
                </div>
                <div className='porcentagem'>80%</div>
                <div className='skillCol' style={{width: "100%", fontSize: "10px", fontWeight: "bold"}}>
                    <div class="barra6" data-width="80%"></div>
                </div>
            </div>      
          </div>
          
          
          <div className='bloco4'><img src={ColcheteFecha} alt=" "></img></div>
        </>
      }
    </motion.div>
    
    )
}

export default Skills
