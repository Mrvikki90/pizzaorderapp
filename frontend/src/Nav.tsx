import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { GrCart } from 'react-icons/gr'
const Nav = () => {
  return (
<>

<Flex minWidth='max-content' height='4rem'  alignItems='center' gap='2' bg='#008080'   boxShadow='2xl' p='6' rounded='md' > 
  <Box p='2'>
  <Link  to='/'> <Heading size='md'>Pizza App</Heading></Link>
  </Box>
  <Spacer />
  <ButtonGroup gap='2' marginRight='5' >
  <Link  to='/signup'> <Button bg={'#FFFAFA'}>Sign Up</Button> </Link>
  <Link  to='/login'> <Button bg={'#FFFAFA'}>Log in</Button></Link>
  <Link  to='/cart'><GrCart /> Cart </Link>
  </ButtonGroup>
</Flex>
</>
  )
}

export default Nav