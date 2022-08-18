import { Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from "moment";

const Orders = () => {

  useEffect(() => {
    getOrders();
  }, [])


  const [orderItem, setOrderItem] = useState<any[]>([]);

  const getOrders = async () => {
    const token = localStorage.getItem('auth');
    const data = await axios.get("http://localhost:8000/order/get",
      {
        headers: {
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
              <Th>PizzaSize</Th>
              <Th>Items</Th>
              <Th>Order Price</Th>
              <Th>Order Date</Th>
            </Tr>
          </Thead>
          {orderItem.map((elem, index) => {
            const str = elem.createdAt;
            var date1 = new Date(str);
            return <><>
              <Tbody key={index}>
                <Tr>
                  <Td>{elem.id}</Td>
                  <Td>{elem.pizzaSize}</Td>
                  <Td>{elem.oregano && "oregano,"}{elem.cheese && "cheese,"}{elem.mozzarella && "mozzarella,"}</Td>
                  <Td>{elem.pizzaPrice}</Td>
                  <Td>{moment(date1).format('ddd MMM DD YYYY')}</Td>
                </Tr>
              </Tbody>
            </></>
          })}
        </Table>
      </TableContainer>
    </>
  )
}
export default Orders


