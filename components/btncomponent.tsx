import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';

export default function AnimatedButton() {
    const [isHovered, setHovered] = useState(false); 

    const buttonVariants = {
        initial: { background: 'linear-gradient(0deg, #fff 0%, #fff 80%, #9575cd 50%, #9575cd 100%)',
            color: '#000000'},
        hover: { background: 'linear-gradient(360deg, #000 0%, #000 50%, #000 50%, #000 100%)', color: '#FFFFFF'
        },
    };

        
    return (
        <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3, type: 'spring', stiffness: 150 }}
            className="text-white font-bold py-2 px-4 rounded"
        >
            Dark Mode
        </motion.button>
    );
}