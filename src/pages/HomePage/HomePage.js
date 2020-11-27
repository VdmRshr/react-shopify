import React, {useContext, useEffect} from 'react';
import {ShopContext} from "../../context/shopContext";
import {Container, Text, Div, Row, Col} from 'atomize';
import {Link} from 'react-router-dom'

const HomePage = () => {
    const {addItemToCart, fetchAllProducts, fetchProduct, toggleCart, products} = useContext(ShopContext);

    useEffect(() => {
        console.log('1');
        fetchAllProducts()
    }, [fetchAllProducts]);


    if (Object.keys(products).length === 0) <div>Loading...</div>;
    return (
        <Container>
            <Row>
                {products.map(product => {
                    return (
                        <Col key={product.id} size='3'>
                            <Link to={`/product/${product.id}`}>
                                <Div p="2rem">
                                    <Div h='40rem' bgImg={product.images[0].src} bgSize='cover' bgPos='center'>

                                    </Div>
                                    <Text>{product.title}</Text>
                                    <Text>{product.variants[0].price}</Text>
                                </Div>


                            </Link>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default HomePage;