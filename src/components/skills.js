import '../App.css';
import './skills.css';
import { motion } from "framer-motion";
import ColcheteAbre from '../assets/colchete_abre.png';
import ColcheteFecha from '../assets/colchete_fecha.png';
import SkillBarra from '../assets/barra_skill.png';

function Skills() {

    return (
        <motion.div className='pretoanimado'
      initial={{ x: 1000, opacity: 0}}
      animate={{ x: 0, opacity: 1}}
      transition={{
        duration: 2.8,
        delay: 1.5,
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
                  HTML + CSS3
                </div>
                <div className='skillCol' style={{width: "100%", fontSize: "10px", fontWeight: "bold"}}>
                    <div class="barra1" data-width="90%">90%&nbsp;&nbsp;</div>
                </div>
            </div>
            <div className='skillRow'>
                <div className='skillCol' style={{width: "100px", backgroundColor: "#000000",  float:"left", textAlign: "right", paddingRight: "10px"}}>
                  Design / UX / UI
                </div>
                <div className='skillCol' style={{width: "100%", fontSize: "10px", fontWeight: "bold"}}>
                    <div class="barra2" data-width="90%">90%&nbsp;&nbsp;</div>
                </div>
            </div>
            <div className='skillRow'>
                <div className='skillCol' style={{width: "100px", backgroundColor: "#000000",  float:"left", textAlign: "right", paddingRight: "10px"}}>
                  JavaScript
                </div>
                <div className='skillCol' style={{width: "100%", fontSize: "10px", fontWeight: "bold"}}>
                    <div class="barra3" data-width="90%">90%&nbsp;&nbsp;</div>
                </div>
            </div>
          </div>


          <div className='bloco3'>
              
            <div className='skillRow'>
                <div className='skillCol' style={{width: "100px", backgroundColor: "#000000",  float:"left", textAlign: "right", paddingRight: "10px"}}>
                  HTML + CSS3
                </div>
                <div className='skillCol' style={{width: "100%", fontSize: "10px", fontWeight: "bold"}}>
                    <div class="barra1" data-width="90%">90%&nbsp;&nbsp;</div>
                </div>
            </div>
            <div className='skillRow'>
                <div className='skillCol' style={{width: "100px", backgroundColor: "#000000",  float:"left", textAlign: "right", paddingRight: "10px"}}>
                  Design / UX / UI
                </div>
                <div className='skillCol' style={{width: "100%", fontSize: "10px", fontWeight: "bold"}}>
                    <div class="barra2" data-width="90%">90%&nbsp;&nbsp;</div>
                </div>
            </div>
            <div className='skillRow'>
                <div className='skillCol' style={{width: "100px", backgroundColor: "#000000",  float:"left", textAlign: "right", paddingRight: "10px"}}>
                  JavaScript
                </div>
                <div className='skillCol' style={{width: "100%", fontSize: "10px", fontWeight: "bold"}}>
                    <div class="barra3" data-width="90%">90%&nbsp;&nbsp;</div>
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
