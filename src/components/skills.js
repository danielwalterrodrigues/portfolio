import '../App.css';
import { motion } from "framer-motion";

function Skills() {

    return (
        <motion.div
      className="laranja"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    />
    
    )
}

export default Skills
