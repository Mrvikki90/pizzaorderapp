import { Badge, Box, Button, Heading, Image, ListItem, OrderedList, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, UnorderedList } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const Cart = () => {

    interface cartItemType {
        id: number;
        pizzaSize: string;
        pizzaPrice: number;
        oregano: boolean;
        cheese: boolean;
        mozzarella: boolean;
        createdAt: string;
        updatedAt: string;
    }


    const [item, setItems] = useState<cartItemType[]>([]);
    const [itemSum, setItemSum] = useState<string>();
    console.log(item);

    const navigate = useNavigate();

    useEffect(() => {
        loadItems();
    }, [])

    const auth = localStorage.getItem('auth');


    const loadItems = async () => {
        const result = await axios.get("http://localhost:8000/cart/get");
        console.log(result.data);
        setItems(result.data);
        const sum = await axios.get("http://localhost:8000/cart/sum");
        const sumDt = JSON.stringify(sum.data[0]);
        setItemSum(sumDt);
        // console.log(result.data)
    }

    const deleteOrder = async (id: number) => {
        await axios.delete(`http://localhost:8000/cart/delete/${id}`)
        loadItems();
    }

    const alertModal2 = (id: number) => {
        Swal.fire({
            toast: true,
            title: 'Are you sure?',
            text: 'This record and it`s details will be permanantly deleted!',
            icon: 'warning',
            confirmButtonText: 'Delete',
            showCancelButton: true,
            timerProgressBar: true,
        }).then((result) => {
            if (result.isConfirmed == true) {
                deleteOrder(id);
            }
        });
    }



    const placeOrder = async () => {
        const token = localStorage.getItem('auth');
        let result = await axios.post("http://localhost:8000/order/add", item,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });


        if (result) {
            navigate('/orders')
        } else
            console.log("error while placing order");
    }



    const alertModal = () => {
        Swal.fire({
            toast: true,
            icon: 'success',    
            position: 'top-right',
            title: 'Order Placed Succesfully ',
            timer: 2000,
            timerProgressBar: true,
        }).then((result) => {
            if (result.isConfirmed == true) {
                placeOrder();
                navigate('/');
            }
        });
    }


    return (
        <>
            <Heading textAlign={'center'}> Your cart items</Heading>
            <TableContainer  >
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>PizzaSize</Th>
                            <Th>Ingredients</Th>
                            <Th>Price</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    {item.length === 0 ? <Text textAlign={'center'}>No items in cart</Text> : item.map((elem, index) => (
                        <><>
                            <Tbody key={index}>
                                <Tr>
                                    <Td>{elem.pizzaSize}</Td>
                                    <Td>{elem.oregano && "oregano,"}{elem.cheese && "cheese,"}{elem.mozzarella && "mozzarella,"}</Td>
                                    <Td>{elem.pizzaPrice}</Td>
                                    <Td><Button onClick={() => alertModal2(elem.id)}
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
                                    {auth ?
                                        <Button onClick={() => alertModal()}
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
    )
}
export default Cart
