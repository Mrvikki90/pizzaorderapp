import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Nav from './Nav'
import Signup from './Signup';
import { useState } from 'react';
import { QueryKey, useQuery } from '@tanstack/react-query'
import { Heading, Progress } from '@chakra-ui/react'
import Cart from './Cart';
import { Privatecomponent } from './Privatecomponent';
import Orders from './Orders';

export interface cartItemType {
  id: number;
  ingredents: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  amount: number;
}

const getItems = async () => {
  const result = await fetch("http://localhost:8000/ing/get");
  return result.json();
}


const Router = () => {

  const { data, isLoading, error } = useQuery(
    ['products'] as QueryKey,
    getItems
  );
  //  console.log(data);

  if (isLoading) return <Progress />
  if (error) return <Heading>Something went wrong</Heading>

  return (
    <>
      <Nav />
      <Routes>
        <Route element={<Privatecomponent />} >
          <Route path='orders' element={<Orders />} />
        </Route>
        <Route path='/' element={<Homepage item={data} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default Router