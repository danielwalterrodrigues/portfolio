import React from "react";
import { motion } from "framer-motion";

const Wait = () => {

    return(
        <>
            <div>
            <motion.div style={{fontSize: '50px', float:'left'}}
                animate={{opacity: 1, y: [5, 0, 5]}}
                transition={{delay: 0, duration: 0.8, repeat: Infinity}}
                initial={{opacity: 1, y: [0, 5, 0]}}>
                .
                </motion.div>
                <motion.div style={{fontSize: '50px', marginLeft: 10, float:'left'}}
                animate={{opacity: 1, y: [5, 0, 5]}}
                transition={{delay: 0, duration: 0.6, repeat: Infinity}}
                initial={{opacity: 1, y: [0, 5, 0]}}>
                .
                </motion.div>
                <motion.div style={{fontSize: '50px', marginLeft: 10, float:'left'}}
                animate={{opacity: 1, y: [5, 0, 5]}}
                transition={{delay: 0, duration: 0.9, repeat: Infinity}}
                initial={{opacity: 1, y: [0, 5, 0]}}>
                .
                </motion.div>
                
            </div>
        </>
    )
}
export default Wait