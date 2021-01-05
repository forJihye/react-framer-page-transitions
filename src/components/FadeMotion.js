import {motion} from 'framer-motion';

const FadeMotion = ({children}) => {
  return <motion.section exit={{opacity: 0}}>
    {children}
  </motion.section>
}

export default FadeMotion;