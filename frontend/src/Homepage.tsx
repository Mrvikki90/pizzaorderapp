import { Badge, Box, Button, Flex, FormControl, FormLabel, Grid, Heading, HStack, Image, Select, Stack, Text, } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { VscArrowRight } from "react-icons/vsc";
import { cartItemType } from './Router';
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'


type props = {
  item: cartItemType[];
}

const Homepage: React.FC<props> = ({ item }) => {

  let isExisting = false;


  const [pizzaPrice, setpizzaPrice] = useState<string>('');
  console.log(pizzaPrice);



  const handleChangeofRdio = (e: any) => {
    setpizzaPrice(e.target.value);
  }

  const [checked, setChecked] = useState<any>([]);
  const [pizzaItem, setPizzaItem] = useState<any>();



  // Add/Remove checked item from list
  const handleCheck = (event: any) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 3);
    }
    setChecked(updatedList);
  };


  const checkedItems = checked.length
  ? checked.reduce((total: string, item: string) => {
      return total + ", " + item;
    })
  : "";



  const totalPrice = () => {
    let total = + Number(pizzaPrice) + Number(checkedItems);
    return total;
  }

  const addToCart = async (a: string, b: number) => {
    const result = await axios.get("http://localhost:8000/cart/get");
    if (result.data.length === 0) {
      const order = { ingredents: a, price: b };
      axios.post("http://localhost:8000/cart/add", order)
    } else {
      result.data.map((orderItem: any) => {
        if (a == orderItem.ingredents) {
          orderItem + 1;
          isExisting = true
        }
      });
      if (isExisting == false) {
        const order = {
          ingredents: a,
          price: b,
        };
        axios.post("http://localhost:8000/cart/add", order);
        if (order) {
          alert("order placed");
        }


      }
    }
  }


  return (
    <>
      <Flex display='flex' justifyContent='space-around' alignItems='center' bg='#F5FFFA'>
        <Flex display="block">
          <Text as='cite' fontSize='4xl'>Super Delicious</Text>
          <Text marginLeft='20' fontSize='6xl'>Pizza</Text>
          <Button borderRadius='2rem' w='12rem' bg='#DAA520'>Order Now<VscArrowRight /></Button>
        </Flex>
        <Flex>
          <Image height='2xl' src='/images/pizza.png' alt='pizza' />
        </Flex>
      </Flex>

      <Heading textAlign={'center'} marginTop={'2rem'}>Ingredients</Heading>
      <Grid templateColumns='repeat(3,1fr)' marginLeft={'4rem'} marginTop={'4rem'} gap={4}>
        <>
          <Box maxW='sm' borderWidth='1px' marginBottom={'4rem'} borderRadius='2rem' bg='#ADD8E6' overflow='hidden' boxShadow="2xl" key={''}>
            <Box p='6'>
              <Image src={'https://previews.123rf.com/images/foodandmore/foodandmore1611/foodandmore161100068/65412980-flame-grilled-margherita-italian-pizza-with-fresh-basil-leaves-on-a-thick-biscuit-base-with-mozzarel.jpg'} alt={'pizza'} />

              <FormControl>
                <>
                  <FormLabel mt='3' as='legend'>Pizza size</FormLabel>
                  <RadioGroup defaultValue='small'>
                    <HStack spacing='24px'>
                      <Radio value='50' onChange={handleChangeofRdio}>Small</Radio>
                      <Radio value='100' onChange={handleChangeofRdio}>Medium</Radio>
                      <Radio value='150' onChange={handleChangeofRdio}>large</Radio>
                    </HStack>
                  </RadioGroup>
                  <FormLabel mt='3' as='legend'>Toopings</FormLabel>
                  <Stack spacing={5} direction='column'>
                    {
                      item.map(({ ingredents }) => {
                        return (
                          <Checkbox
                            checked={pizzaItem}
                            onChange={handleCheck}
                            value='50'> {ingredents}</Checkbox>
                        )

                      })
                    }
                  </Stack>
                  <Text m="3" fontSize='2xl'> Price: {totalPrice()}</Text>
                </>
              </FormControl>
            </Box>
          </Box>
        </>
      </Grid>
    </>
  )
} 

export default Homepage


{/* <Button onClick={() => addToCart(ingredents, price)}
                  size='sm' bg={'#00FF00'}>Add to cart</Button> */}

