import { motion } from "framer-motion"
import React from 'react';
import styled from 'styled-components';
import FadeMotion from '../components/FadeMotion';
import Layout from '../components/Layout';
import Photo from '../components/Photo';
import Landing from '../components/Landing';
import {useAsync} from '../utils';

const StyledGrid = styled.div`
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

const postsSection = (isLanding) => ({
  animate: {
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: isLanding ? 2.8 : 0 
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
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }
}

const Posts = () => {
  const [data, loading] = useAsync('https://jsonplaceholder.typicode.com/photos?_limit=10');
  return <>
    {loading
    ? <div style={{textAlign: 'center'}}>로딩 중...</div>
    : <StyledGrid>{data.map((photo, i) => <Photo key={`photo-${i}`} photo={photo} index={i} />)}</StyledGrid>
    }
  </>
}

const Main = ({isLanding}) => {
  return <Layout>
    <FadeMotion>
      {isLanding && <Landing />}
      <motion.div 
        initial="initial" 
        animate="animate" 
        variants={postsSection(isLanding)} 
        className="lg:container mx-auto"
      >
        <motion.h1 variants={title} className="relative text-4xl text-center font-bold font-mono mt-10">My Photos</motion.h1>
        <motion.div variants={contents}>
          <Posts />
        </motion.div>
      </motion.div>
    </FadeMotion>
  </Layout>
}

export default Main;