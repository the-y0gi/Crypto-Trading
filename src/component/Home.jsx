import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {motion} from "framer-motion";
import img from "../img/2.webp";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={'full'} h={'85vh'} >
      <motion.div 
         style={{
          height:'80vh',

         }}
         animate={{
          translateY:'20px',
         }}
         transition={{
          duration:1,
          repeat: Infinity,
          repeatType: "reverse",
         }}
         
         >
         <Image w={'full'} h={'full'} objectFit={'cover'} src={img} />

         <Text
        fontSize={'6xl'} 
        textAlign={'center'}
        fontWeight={'thin'}
        color={'whiteAlpha.700'} 
        mt ={-20}       
        >
        Crypto Trading
      </Text>

      </motion.div>
      
      
    </Box>
  )
}

export default Home