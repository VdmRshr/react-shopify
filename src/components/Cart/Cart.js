import React, {useContext} from 'react';
import {ShopContext} from "../../context/shopContext";
import {Div, SideDrawer, Text, Row, Col, Anchor} from 'atomize';

const Cart = () => {
    const {isCartOpen, toggleCart, checkout} = useContext(ShopContext);

    return (
        <SideDrawer isOpen={isCartOpen} onClose={toggleCart}>
            <Div d='flex' flexDir='column' m={{b: '4rem'}}>
                {checkout.lineItems && checkout.lineItems.map(item => {
                    return (
                        <Row key={item.id}>
                            <Col>
                                <Div h='5rem' w='4rem' bgImg={item.variant.image.src} bgSize='cover' bgPos='center'/>
                            </Col>
                            <Col>
                                <Text>{item.title}</Text>
                                <Text>{item.variant.title}</Text>
                                <Text>{item.quantity}</Text>

                            </Col>
                            <Col>
                                <Text>{item.variant.price}</Text>
                            </Col>
                        </Row>
                    )
                })}
                <Anchor href={checkout.webUrl} target='_blank'>Checkout</Anchor>
            </Div>
        </SideDrawer>
    );
};

export default Cart;