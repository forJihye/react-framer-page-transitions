import { motion } from "framer-motion"
import Layout from '../components/Layout';
import FadeMotion from '../components/FadeMotion';

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

const form = {
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

const Contact = () => {
  return <Layout>
    <FadeMotion>
      <motion.div 
        variants={content} 
        initial="initial" 
        animate="animate" 
        className="w-4/12 px-5 py-24 mx-auto"
      >
        <motion.h1 variants={title} className="relative text-4xl text-center font-bold font-mono mb-10">Contact</motion.h1>
        <motion.div variants={form} className="text-center w-full">
          <div className="flex flex-wrap w-fll">
            <div className="w-full p-2">
              <input
                className="w-full px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="w-full p-2">
              <input
                className="w-full px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="w-full p-2">
              <textarea
                className="block w-full h-48 px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded resize-none focus:outline-none focus:border-indigo-500"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="w-full p-2 mt-5">
              <button className="px-8 py-2 mx-auto text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </FadeMotion>
  </Layout>
}

export default Contact;