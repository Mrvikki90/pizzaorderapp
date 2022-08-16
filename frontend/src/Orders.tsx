import { Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
    List,
    ListItem,
    OrderedList,
  } from '@chakra-ui/react'
import axios from 'axios'
import { cartItemType } from './Router'
import moment from "moment";

const Orders = () => {

  useEffect(() => {
    getOrders();
    datefn();
  },[])
    

const[orderItem , setOrderItem ] = useState<cartItemType[]>([]);
    
const datefn = () => {
    orderItem.map((item)=>{
    const str = item.createdAt;
    var date1 = new Date(str);
    return moment(date1).format('ddd MMM DD YYYY')
})
}
const getOrders = async () =>{
    const token  = localStorage.getItem('auth');
    const data = await axios.get("http://localhost:8000/order/get",
    {
        headers : {
        Authorization: `Bearer ${token}`,
        }
    })
    setOrderItem(data.data);
}

  return (
    <>
    <Heading textAlign={'center'}>Your Orders</Heading>
    <TableContainer  >
  <Table size='sm' variant='striped' colorScheme='teal' >
    <Thead>
    <Tr>
    <Th>Id</Th>
    <Th>Items</Th>
    <Th>Order Date</Th>
    </Tr>
    </Thead>
{orderItem.map((elem,index)=>(  
    <><>
        <Tbody key={index}>
            <Tr>
                <Td>{elem.id}</Td>
                <Td>{elem.ingredents}</Td>
                <Td>{elem.createdAt}</Td>
            </Tr>
        </Tbody>
    </></>
))}

</Table>
</TableContainer>
     </>
    )}
          export default Orders


