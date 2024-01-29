import React from 'react'
import MenuBar from '../../../components/MenuBar';
import { Outlet } from 'react-router-dom';


export const Home = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-1/4 h-screen'>
        <MenuBar />
        </div>
        <div className='w-11/12 h-screen'>
         <Outlet />
        </div>
       </div>
  )
}