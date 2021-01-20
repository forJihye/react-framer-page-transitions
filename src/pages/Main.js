import axios from 'axios';
import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Photo from '../components/Photo';
import FadeMotion from '../components/FadeMotion';
import InitialTransition from '../components/InitialTransition';

const GridPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  font-size: 13px;
  margin: 40px 0;
  img {
    width: 100%;
    vertical-align: middle;
  }
`;

const section = (isFirstMount) => ({
  animate: {
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0 
      // delayChildren: isFirstMount ? 2.8 : 0 
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

const contents = {
  initial: {
    y: -20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }
}
const Main = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async() => {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10');
      setPhotos(data);
    })();
  }, []);

  return <Layout>
    <FadeMotion>
      {/* <InitialTransition /> */}
      <motion.section animate="animate" initial="initial" className="lg:container mx-auto">
        <motion.h1 variants={title} className="relative text-4xl text-center font-bold font-mono mt-10">My Photos</motion.h1>
        <motion.div variants={contents}>
          {photos.length 
          ? <GridPhotos>{photos.map((photo, i) => <Photo key={`photo-${i}`} photo={photo} />)}</GridPhotos>
          : <div style={{textAlign: 'center'}}>로딩 중...</div>}
        </motion.div>
      </motion.section>
    </FadeMotion>
  </Layout>
}

export default Main;