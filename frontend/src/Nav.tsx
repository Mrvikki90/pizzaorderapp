import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { GrCart } from 'react-icons/gr'
import Wrapper from './Wrapper'
const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('auth');
  const logout = () => {
    localStorage.clear();
    navigate('/');
  }
  return (
    <>
      <Wrapper>
        <Flex minWidth='max-content' height='4rem' alignItems='center' gap='2' bg='#008080' boxShadow='2xl' p='6' rounded='md' >
          <Box p='2'>
            <Link to='/'> <Heading size='md'>Pizza App</Heading></Link>
          </Box>
          <Spacer />
          <ButtonGroup gap='2' marginRight='5'>
            {auth ? <>
              <Link to={'/orders'} ><Text fontSize='2xl'>orders</Text></Link>
              <Button onClick={logout} bg={'#FFFAFA'}>logout</Button>
            </>
              :
              <>
                <Link to='/signup'> <Button bg={'#FFFAFA'}>Sign Up</Button> </Link>
                <Link to='/login'> <Button bg={'#FFFAFA'}>Log in</Button></Link>
              </>
            }
            <Link to={'/cart'}> <GrCart /> Cart  </Link>
          </ButtonGroup>
        </Flex>
      </Wrapper>
    </>
  )
}

export default Nav