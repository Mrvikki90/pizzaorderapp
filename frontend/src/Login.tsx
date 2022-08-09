import { Button, Flex, FormControl, FormLabel, Heading, Input,Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from "react-hook-form";

const Login = () => {

  type inputs = {
    email : string;
    password : string
  }

  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<inputs>({
    reValidateMode: 'onChange'
  });
  // const onSubmit: SubmitHandler<inputs> = (data: inputs) => console.log(data);

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState(""); 

    const handelLogin = async (data:inputs) =>{
      let Url = "http://localhost:8000/user/login"; 
      let result  =  await axios.post(Url,data)
      console.log(result.data)
      if(result){
        alert("login sucscesfully");
        navigate('/cartitems');
      }else{
        alert("enter credentials")
      }
      
      
  
    }
  return (
  <>
      <Flex h="100vh" alignItems="center" justifyContent="center" bgColor='		#A9A9A9' >
        <Flex flexDirection="column"  borderRadius={8} p={12} boxShadow="2xl" bgColor='whiteAlpha.900'>
              <Heading mb={6}>Login Account </Heading>
              <FormControl display={'grid'} marginTop={'10'} alignItems={'center'} justifyContent={'center'} >
                <FormLabel>Email address</FormLabel>
                <Input type='email' 
                {...register("email",{ required: true })}
                onChange={(e:any) => setEmail(e.target.value)}   />
                {errors.email && <Text color='red'>This field is required</Text>}
                <FormLabel>Password</FormLabel>
                <Input type='password'  
                {...register("password", { required: true })}
                onChange={(e:any) => setPassword(e.target.value)}/>
                 {errors.password && <Text color='red'>This field is required</Text>}
                <Button 
                  onClick={handleSubmit(handelLogin)}
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