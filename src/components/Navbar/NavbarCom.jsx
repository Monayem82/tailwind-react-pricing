import React from 'react';

const NavbarCom = ({menu}) => {
    return (
        <li className='px-4 hover:bg-amber-200 rounded'>
            <a href={menu.path}>{menu.name}</a>
        </li>
    );
};

export default NavbarCom;