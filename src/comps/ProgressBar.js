import React, { useEffect } from "react"
import UseStorage from "../hooks/UseStorage"
import { motion } from 'framer-motion';

function ProgressBar( {file, setFile} ) {

    const { progress, url } = UseStorage(file)

    useEffect(() => {
        if (url) {
          setFile(null);
        }
      }, [url, setFile]);
    
      return (
        <motion.div className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: progress + '%' }}
        ></motion.div>
      )
}

export default ProgressBar