import React from 'react';
import { motion } from 'framer-motion';

function ProductCard({ products }) {
  const animationVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <div className="product-list">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img className='foto_tabla' src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: <span>${product.price}</span></p>
            <p>Marca: {product.brand}</p>
            <p>Medida: {product.size}</p>
            <button id='añadir'>Añadir</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
