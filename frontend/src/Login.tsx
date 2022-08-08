import { Button, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from 'react-router-dom'

const Login = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState(""); 

  return (
  <>
      <Flex h="100vh" alignItems="center" justifyContent="center" bgColor='		#A9A9A9' >
        <Flex flexDirection="column"  borderRadius={8} p={12} boxShadow="2xl" bgColor='whiteAlpha.900'>
              <Heading mb={6}>Login Account </Heading>
              <FormControl display={'grid'} marginTop={'10'} alignItems={'center'} justifyContent={'center'}  >
                <FormLabel>Email address</FormLabel>
                <Input type='email' name='email' 
                onChange={(e:any) => setEmail(e.target.value)}/>
                <FormLabel>Password</FormLabel>
                <Input type='password' name='password'
                onChange={(e:any) => setPassword(e.target.value)}/>
                <Button 
                    margin={4} colorScheme='teal' type='submit'>Login
                </Button>
                <Link to={'/signup'} > Dont Have An Account ? Click Here </Link>
            </FormControl>
            </Flex>
            </Flex>
    
    
    </>
  )
}

export default Login