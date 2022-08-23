import { Badge, Box, Button, Grid, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Cartitems = () => {

interface data {
    id : number;
    ingredents : string;
    price : number;
    createdAt : string;
    updatedAt : string;
}

const[ingdata , setIngData] = useState<data[]>([])   

useEffect(() => {
  getData();
},[])


const getData = () =>{
    let Url = "http://localhost:8000/ing/get";
    axios.get(Url)
    .then((response)=>(setIngData(response.data)))
    .catch((error)=>{
        console.log(error);
    })
}

  return (
<>
<Heading textAlign={'center'}  marginTop={'2rem'} >Ingredients</Heading>
<Grid templateColumns='repeat(3,1fr)' marginLeft={'4rem'} marginTop={'4rem'}  gap={4}>
{ingdata.map((elem)=>{
    return(
        <Box maxW='sm' borderWidth='1px' marginBottom={'4rem'} borderRadius='2rem' bg='#ADD8E6' overflow='hidden' boxShadow="2xl">
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
            </Box>
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {elem.ingredents}
            </Box>
            <Box>
            <h4>Price {elem.price} </h4>
            </Box>
            <Button size='sm' bg={'#00FF00'}>Add to cart</Button>
          </Box>
        </Box>     
    )
     })}
     </Grid>
    </>
  )
}

export default Cartitems