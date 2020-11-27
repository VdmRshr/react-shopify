import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {ShopContext} from "../../context/shopContext";
import {Div, Text, Button, Row, Col, Container} from "atomize";

const ProductPage = () => {
    const {id} = useParams();
    const {addItemToCart, fetchProduct, toggleCart, product} = useContext(ShopContext);


    useEffect(() => {
        fetchProduct(id);
    }, [fetchProduct, id]);

    if (Object.keys(product).length === 0) return <div>Loading...</div>;
    console.log(product);
    return (
        <Container>
            <Div p="2rem">
                <Col>
                    <Div h='20rem' bgImg={product.images[0].src} bgSize='cover' bgPos='center'/>
                </Col>
                <Col>
                    <Text>{product.title}</Text>
                    <Text>{product.variants[0].price}{product.variants[0].priceV2.currencyCode}</Text>
                    <Button onClick={()=>addItemToCart(product.variants[0].id,1)}>Add to Cart</Button>
                </Col>
            </Div>
        </Container>
    );
};

export default ProductPage;