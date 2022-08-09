import { Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [password , setPassword] = useState(""); 

const navigate = useNavigate();


const handelSignup = () =>{
    let Url = "http://localhost:8000/user/create"; 
    axios.post(Url,{
        name : name,
        email : email,
        password : password
    })
    .then(res=> {
        console.log(res)
        alert("Rigestration sucscesfully");
        navigate('/');
    }).catch(error => {
        console.log(error)
    })
}

  return (
<>
<Flex h="100vh" alignItems="center" justifyContent="center" bgColor='	#A9A9A9' >
    <Flex flexDirection="column"  borderRadius={8} p={12} boxShadow="2xl" bgColor='whiteAlpha.900'>
          <Heading mb={6}>Create An Acoount</Heading>
          <FormControl display={'grid'} marginTop={'10'} alignItems={'center'} justifyContent={'center'}>
          <FormLabel>Name</FormLabel>
            <Input type='name' 
                onChange={(e:any) => setName(e.target.value)}/>
            <FormLabel>Email address</FormLabel>
            <Input type='email' 
                onChange={(e:any) => setEmail(e.target.value)}/>
            <FormLabel>Password</FormLabel>
            <Input type='password' 
                onChange={(e:any) => setPassword(e.target.value)}/>
            <Button onClick={handelSignup}
                margin={4} colorScheme='teal' type='submit'>Sign Up
            </Button>
            <Link to={'/login'} > Already Have An Account ? Click Here </Link>
        </FormControl>
        </Flex>
    </Flex>


</>
  )
}

export default Signup