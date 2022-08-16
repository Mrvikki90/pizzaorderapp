import { Badge, Box,Button,Heading,Image, ListItem, OrderedList, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, UnorderedList } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';


const Cart = () => {

     interface cartItemType {
        id : number;
        ingredents : string;
        price : number;
        qty : number;
        createdAt : string;
        updatedAt : string;
      }


const [item , setItems] = useState<cartItemType[]>([]);
const [itemSum , setItemSum] = useState<string>();
console.log(item);

const navigate = useNavigate();

useEffect(()=>{
    loadItems();
},[])

const auth = localStorage.getItem('auth');


const loadItems = async () => {
    const result = await  axios.get("http://localhost:8000/cart/get");
    setItems(result.data);
    const sum = await axios.get("http://localhost:8000/cart/sum");
    const sumDt = JSON.stringify(sum.data[0]);
    setItemSum(sumDt);
    // console.log(result.data)
}

const deleteOrder = async (id: number) => {
    let isDelete = window.confirm("Are You Sure? This item will be removed from your cart");
    if(isDelete){
        await axios.delete(`http://localhost:8000/cart/delete/${id}`)
        loadItems();
    }}


    const placeOrder = async () => {
        const token  = localStorage.getItem('auth');
        let result  = await axios.post("http://localhost:8000/order/add",item,
        {
            headers : {
            Authorization: `Bearer ${token}`,
            }
        });
        


        if(result){
        alert("order placed");
        navigate('/')
        }else
        console.log("error while placing order");
    }


return (
<>
<Heading textAlign={'center'}> Your cart items</Heading>
<TableContainer  >
  <Table size='sm'>
    <Thead>
    <Tr>
    <Th>Ingredients</Th>
    <Th>Price</Th>
    <Th>Action</Th>
    </Tr>
    </Thead>
{item.length === 0 ? <Text textAlign={'center'}>No items in cart</Text>:item.map((elem,index)=>(  
    <><>
        <Tbody key={index}>
            <Tr>
                <Td>{elem.ingredents}</Td>
                <Td>{elem.price}</Td>
                <Td><Button onClick={() => deleteOrder(elem.id)}
                    variant='outline' size='sm' colorScheme='red'>Delete item</Button></Td>
            </Tr>
        </Tbody>
    </></>
))}
 <Tfoot> 
    <Tr>
        <Th>items</Th>
        <Th>{itemSum}</Th>
        {item.length === 0 ? "" :
        <Th>
        { auth ?
        <Button onClick={() => placeOrder()}
        variant='outline' size='sm' colorScheme='twitter'>place order</Button>
        :
        <Link to={'/login'}> Place Order</Link>
        }
        </Th>
        }
        </Tr>
    </Tfoot>
</Table>
</TableContainer>
</>
)}
export default Cart
