import { motion } from "framer-motion"
import FadeMotion from './FadeMotion';

const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

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

const inputs = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const Blog = () => {
  return <FadeMotion>
    <motion.div variants={content} animate="animate" initial="initial" class="container px-5 py-24 mx-auto">
      <motion.div variants={title} class="text-center w-full mb-12">
      blog
      </motion.div>
      <motion.div variants={inputs} class="text-center w-full">
      form
      </motion.div>
    </motion.div>
  </FadeMotion>
}

export default Blog;