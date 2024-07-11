import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Botones = ({ categorias, filterCategori }) => {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section>
      <h3>Filtrado:</h3>
      <div className="categorias">
        {categorias.map((category, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true, 
            threshold: 0.1     
          });

          return (
            <motion.button
              key={index}
              ref={ref}
              onClick={() => filterCategori(category)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default Botones;
