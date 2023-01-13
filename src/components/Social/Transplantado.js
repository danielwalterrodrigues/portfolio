import React from "react";
import { motion } from "framer-motion";
import './Mario.css';

const Transplantado = () => {

    return(
        <>
            <motion.div
             animate={{opacity: 1}}
             transition={{delay: 20, duration: 2}}
             initial={{opacity:0}}
            style={{
                left: '50vw', 
                width: '600px',
                marginLeft: '-428px', 
                padding: '20px',
                position: 'absolute', 
                backgroundColor: '#000',
                color: '#fff',
                top: '0', 
                fontFamily: 'Gill Sans',
                fontSize: 16}}>
                    Na vida, além do jogo, às vezes a gente consegue ganhar uma vida extra também. <br />
                    Foi exatamente assim que aconteceu. No dia 21 de maio de 2021, fui submetido a um transplante de fígado. <br />
                    Considero o momento mais difícil da minha vida. (esta área do site encontra-se em construção)
            </motion.div>
        </>
    )
}
export default Transplantado