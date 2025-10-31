import React, { useState } from 'react';
import NavbarCom from './NavbarCom';
import { Circle, CircleX, Menu } from 'lucide-react';

            

const menus = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/Contact", name: "Contact Us" },
];



const Navbar = () => {
    const [open,setOpen]=useState(false)


    const menubar=menus.map(menu => <NavbarCom key={menu.id} menu={menu}></NavbarCom>)
    
    console.log(menus);
    return (

        <div className='flex justify-between mx-10'>
            <span className='flex' onClick={()=>setOpen(!open)}>
                {
                    open ? <CircleX className='md:hidden'></CircleX> :<Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute duration-1000
                    ${open ? 'top-8':'top-[-200px]'}
                    bg-amber-300`}>
                    {
                        menubar
                    }
                </ul>
                <h1 className='ml-4'>MyNav</h1>
            </span>
            <ul className='md:flex hidden'>
                {
                    // menus.map(menu => <NavbarCom key={menu.id} menu={menu}></NavbarCom>)
                    menubar
                }
            </ul>
            <p><a href="/singup">Sing up</a></p>
        </div>

        // <ol className='flex'>
        //     {
        //         menus.map(menu=><li key={menu.id} className='mr-10'><a href={menu.path}>{menu.name}</a></li>)
        //     }
        // </ol>

        // <ol className='flex'>
        //     <li className='mr-10'><a href="/">Home</a></li>
        //     <li className='mr-10'><a href="/about">About</a></li>
        //     <li className='mr-10'><a href="/service">Services</a></li>
        //     <li className='mr-10'><a href="/contac">Contac Us</a></li>
        // </ol>
    );
};

export default Navbar;