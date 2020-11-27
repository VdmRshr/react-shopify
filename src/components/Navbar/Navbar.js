import React, {useContext} from 'react';
import {Container, Anchor} from 'atomize';
import {Link} from 'react-router-dom';
import {ShopContext} from "../../context/shopContext";


const Navbar = () => {
    const {toggleCart} = useContext(ShopContext);
    return (
        <Container d='flex' flexDir='row' p='2rem' justify='space-between'>
            <Link to={'/'}>Shop</Link>
            <Anchor onClick={()=>toggleCart()}>Cart</Anchor>
        </Container>
    );
};

export default Navbar;