import axios from 'axios';
import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import InitialTransition from '../components/InitialTransition';
import Photo from '../components/Photo';
import FadeMotion from '../components/FadeMotion';

const GridPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  font-size: 13px;
  margin-top: 40px;
  img {
    width: 100%;
    vertical-align: middle;
  }
`;

const section = (isFirstMount) => ({
  animate: {
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: isFirstMount ? 2.8 : 0 
    },
  },
});

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};


const Main = ({isFirstMount}) => {
  console.log(isFirstMount)
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async() => {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10');
      setPhotos(data);
    })();
  }, []);

  return <Layout>
    <FadeMotion>
      {isFirstMount && <InitialTransition />}
      <motion.section variants={section(isFirstMount)} animate="animate" initial="initial" className="lg:container mx-auto">
        <motion.h1 variants={title} className="relative text-4xl text-center font-bold font-mono">My Photos</motion.h1>
        {photos.length 
        ? <GridPhotos>{photos.map((photo, i) => <Photo key={`photo-${i}`} photo={photo} />)}</GridPhotos>
        : <div style={{textAlign: 'center'}}>로딩 중...</div>}
      </motion.section>
    </FadeMotion>
  </Layout>
}

export default Main;