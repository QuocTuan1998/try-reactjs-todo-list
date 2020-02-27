import React, { Component } from 'react'

import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        carts:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal:0
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tmpProducts = [];
        storeProducts.forEach( item => {
            const singleItem = {...item};
            tmpProducts = [...tmpProducts, singleItem];
        })
        this.setState(() => {
            return {products: tmpProducts}
        })
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
    };

    addToCart = (id) => {
        let tmpProducts = [...this.state.products];
        const index = tmpProducts.indexOf(this.getItem(id));
        const product = tmpProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            
            return { products:tmpProducts, carts:[...this.state.carts, product] };
        }, () => {
            this.addTotals();    
        })
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState( () => {
            return {modalProduct: product, modalOpen:true}
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    getSlectedProductInCarts = (id) => {
        let tmpCarts = [...this.state.carts]
        const selectedProduct = tmpCarts.find(item => item.id === id);
        const index = tmpCarts.indexOf(selectedProduct);
        const product = tmpCarts[index];

        return {tmpCarts: tmpCarts, product: product}
    }

    increment = (id) => {
        const { tmpCarts, product } = this.getSlectedProductInCarts(id);

        console.log(tmpCarts)
        

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return { carts:[...tmpCarts] }
        }, () => {
            this.addTotals();
        })
    }

    decrement = (id) => {
        const { tmpCarts, product } = this.getSlectedProductInCarts(id);
        
        product.count = product.count - 1;
        if (product.count === 0 ) {
            this.removeItem(id)
        }
        else {
            product.total = product.count * product.price;
        }

        this.setState(() => {
            return { carts:[...tmpCarts] }
        }, () => {
            this.addTotals();
        })

    }

    removeItem = (id) => {
        let tmpProducts = [...this.state.products]
        let tmpCarts = [...this.state.carts]

        tmpCarts = tmpCarts.filter(item => item.id !== id);

        const index = tmpProducts.indexOf(this.getItem(id))
        let removedProduct = tmpProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return { carts: [...tmpCarts], products: [tmpProducts] }
        }, () => {
            this.addTotals();
        })
    }

    clearCart = () => {
        this.setState(() => {
            return {carts: []}
        }, () => {
            this.setProducts();
            this.addTotals();
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.carts.map(item => {
            subTotal += item.total
        })
        const tmpTax = subTotal * 0.1
        const tax = parseFloat(tmpTax.toFixed(2));
        const total = subTotal + tax
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    };
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };