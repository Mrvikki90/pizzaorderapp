import { Button, Flex, Heading,Image ,Text} from '@chakra-ui/react'
import React from 'react'
import { VscArrowRight } from "react-icons/vsc";

const Homepage = () => {
  return (
<>
<Flex display='flex' justifyContent='space-around' alignItems='center' bg = '#F5FFFA'>
<Flex display="block">
<Text as='cite' fontSize='4xl'>Super Delicious</Text>
<Text  marginLeft='20' fontSize='6xl'>Pizza</Text>
<Button borderRadius='2rem' w='12rem' bg='#DAA520'>Order Now<VscArrowRight/></Button> 
</Flex>
<Flex>
<Image height='2xl' src='/images/pizza1.png' alt='pizza'/>
</Flex>

    
</Flex>



</>
  )
}

export default Homepage