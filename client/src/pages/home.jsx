import React from 'react'
import {motion, AnimatePresence} from "framer-motion";
import {useSnapshot} from "valtio";

import state from "../store/index"

import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'


const home = () => {
  const snap = useSnapshot(state);

  return (
  <AnimatePresence>
    {snap.intro && (
      <motion.section className='home' {...slideAnimation("left")}>
        <motion.header {...slideAnimation("down")}>
          <img 
            src="./threejs.png" 
            alt="logo" 
            className='w-8 h-8 object-contain'
          />
        </motion.header>
        <motion.div className='home-content' {...headContainerAnimation}>
          
        <motion.div {...headTextAnimation}>
          <h1 className='head-text'>
            VAMOS <br className='xl:block hidden' /> A HACERLO
          </h1>
        </motion.div>
        <motion.div
        {...headContainerAnimation}
        className='flex flex-col gap-5'
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, fugiat officiis libero facere suscipit aperiam laudantium dolor ipsa, et numquam minima nobis, labore aspernatur dicta! Provident illum velit veritatis enim!
          </p>
          <CustomButton
          type="filled"
          title="Empezar"
          handleClick={()=>state.intro = false}
          customStyles="w-fit px-4 py-2.5 font-bold text-sm"
          >
            
          </CustomButton>        
        </motion.div>
            </motion.div>
      </motion.section>
    )}

  </AnimatePresence>
  )
}

export default home