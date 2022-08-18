import { Badge, Box, Button, Flex, FormControl, FormLabel, Grid, Heading, HStack, Image, Select, Stack, Text, } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { VscArrowRight } from "react-icons/vsc";
import { cartItemType } from './Router';
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react';
import { scroller } from 'react-scroll';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



type props = {
  item: cartItemType[];
}

const Homepage: React.FC<props> = ({ item }) => {


  const navigate = useNavigate();

  const [pizzaPrice, setPizzaPrice] = useState<number>(0);
  const [pizzaItems, setPizzaItems] = useState<any>({});
  const [pizzaSize, setPizzaSize] = useState<any>();
  console.log(pizzaSize);

  const[oregano , setOregano] = useState<boolean>(false)
  const[cheese , setCheese] = useState<boolean>(false)
  const[mozzarella , setMozzarella] = useState<boolean>(false)


   const [isChecked, setIsChecked] = useState<any>(false);

  const handleSelectAll = () => {
    setIsChecked(false);
  };

  const scrollToSection = () => {
    scroller.scrollTo("main", {
      duration: 100,
      delay: 0,
      smooth: true,
      isDynamic: true
    });
  };


  const handleChangeofRdio = (size:string,price:number) => {
    setPizzaPrice(price);
    setPizzaSize(size);
  }


  // Add/Remove checked item from list
  const handleCheck = (e: any) => {
    setPizzaItems({ ...pizzaItems, [e.target.name]: e.target.checked })
      e.target.checked ?
      setPizzaPrice(pizzaPrice + Number(e.target.value)) :
      setPizzaPrice(pizzaPrice - Number(e.target.value))
  };


  const addToCart = async (a: string, b: string, c: number) => {
    const result = await axios.get("http://localhost:8000/cart/get");
    // if (result.data.length === 0) {
      const order = { pizzaSize: a, pizzaItem: b, pizzaPrice: c };
      console.log(order)
      console.log(order.pizzaItem);
      axios.post("http://localhost:8000/cart/add", order,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
  }

 
  const alertModal = (pizzaSize: string, pizzaItems: string, pizzaPrice: number) => {
    Swal.fire({
      toast: true,
      icon: 'success',
      position: 'top-right',
      title: 'Items are added to cart',
      timer: 2000,
      timerProgressBar: true,
    }).then((result) => {
      if (result.isConfirmed == true) {
        addToCart(pizzaSize, pizzaItems, pizzaPrice);
        navigate('/');
      }
    });
  }


  return (
    <>
      <Flex display='flex' justifyContent='space-around' alignItems='center' bg='#F5FFFA'>
        <Flex display="block">
          <Text as='cite' fontSize='4xl'>Super Delicious</Text>
          <Text marginLeft='20' fontSize='6xl'>Pizza</Text>
          <Button onClick={scrollToSection}
            borderRadius='2rem' w='12rem' bg='#DAA520'>Order Now<VscArrowRight /></Button>
        </Flex>
        <Flex>
          <Image height='2xl' src='/images/pizza.png' alt='pizza' />
        </Flex>
      </Flex>

      <Heading textAlign={'center'} marginTop={'2rem'}>Customize Your Pizza</Heading>
      <>
        <Box className='main' maxW='sm' borderWidth='1px' margin='auto' marginBottom="4rem" borderRadius='2rem' bg='#ADD8E6' overflow='hidden' boxShadow="2xl" key={''}>
          <Box p='6'>
            <Image src={'https://previews.123rf.com/images/foodandmore/foodandmore1611/foodandmore161100068/65412980-flame-grilled-margherita-italian-pizza-with-fresh-basil-leaves-on-a-thick-biscuit-base-with-mozzarel.jpg'} alt={'pizza'} />
            <FormControl>
              <>
                <FormLabel mt='3' as='legend'>Pizza size</FormLabel>
                <RadioGroup >
                  <HStack spacing='24px'>
                    <Radio value={"small"} name="small"   onChange={()=>handleChangeofRdio('small',50)}>Small</Radio>
                    <Radio value={"medium"} name="medium"   onChange={()=>handleChangeofRdio('medium',100)}>Medium</Radio>
                    <Radio value={"large"} name="large"  onChange={()=>handleChangeofRdio('large',150)}>large</Radio>
                  </HStack>
                </RadioGroup>
                <FormLabel mt='3' as='legend'>Toopings</FormLabel>
                <Stack spacing={5} direction='column'>
                  {
                    item.map(({ id, ingredents, ingPrice }) => {
                      return (
                        <><Checkbox
                          id={String(id)}
                          name={ingredents}
                          onChange={(e) => handleCheck(e)}
                          // checked = {true}
                          isChecked={oregano}
                          value={ingPrice}>{ingredents}
                        </Checkbox>
                        </>
                      )
                    })}
                </Stack>
                <Text m="3" fontSize='2xl'> Price: {pizzaPrice}</Text>
                <Button onClick={() => alertModal(pizzaSize, pizzaItems, pizzaPrice)}
                  size='sm' bg={'#00FF00'}>Add to cart</Button>
              </>
            </FormControl>
          </Box>
        </Box>
      </>
    </>
  )
}

export default Homepage




