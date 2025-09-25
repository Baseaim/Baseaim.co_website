'use client'

import React from 'react';
import { motion } from 'framer-motion';

const PillBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="pill-box"
    >
      <div className="pill-box-dot"></div>
      <span className="pill-box-text">3 Spots Left</span>
    </motion.div>
  );
};

export default PillBox;