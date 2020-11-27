import React, {Component} from "react";
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
    domain: 'rovadshop.myshopify.com',
    storefrontAccessToken: '20a61d9302e59ecc23ef0468f0370fbc'
});

export default class ShopProvider extends Component {
    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    };

    componentDidMount() {

        if (localStorage.checkoutId) {
            this.fetchCheckout(localStorage.checkoutId)
        } else { this.createCheckout();

        }
    }

    fetchCheckout = async (checkoutId) => {
        const checkout = await client.checkout.fetch(checkoutId);
        this.setState({checkout})
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem('checkoutId', checkout.id);
        this.setState({checkout});
    };
    addItemToCart = async (variantId, quantity) => {
        const lineItemsToAdd = [{
            variantId,
            quantity: parseInt(quantity, 10)
        }];
        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);
        this.setState({checkout})
    };
    fetchAllProducts = async () => {
        const products = await client.product.fetchAll();
        console.log(products);
        this.setState({products: products})
    };
    fetchProduct = async (id) => {
        const product = await client.product.fetch(id);
        this.setState({product})
    };
    toggleCart = () => {
        this.setState({isCartOpen: !this.state.isCartOpen})
    };


    render() {
        return (
            <ShopContext.Provider value={{
                ...this.state,
                fetchAllProducts: this.fetchAllProducts,
                fetchProduct: this.fetchProduct,
                toggleCart: this.toggleCart,
                addItemToCart: this.addItemToCart
            }}>
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}
const ShopConsumer = ShopContext.Consumer;
export {ShopContext, ShopConsumer};
