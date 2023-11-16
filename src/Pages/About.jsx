import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const About = () => {

        const [isAnimating, setIsAnimating] = useState(false);

        const handleButtonClick = () => {
            setIsAnimating(!isAnimating);
        };

        return (
            <div>
                <button onClick={handleButtonClick}>Animate</button>
                <AnimatePresence>
                    {isAnimating && (
                        <motion.div
                            initial={{ opacity: 1, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 1, x: 50 }}
                        >
                            {/* Your content to be animated */}
                            <p>Hello, I'm animating!</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );

};

export default About;