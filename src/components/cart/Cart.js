import React, { Component } from 'react';

import { ProductConsumer } from '../../Context';

import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { carts } = value;
                    if(carts.length > 0) {
                        return (
                            <React.Fragment>
                                <Title name="Your" title="Cart" />
                                <CartColumns/>
                                <CartList value={value}/>
                                <CartTotals value={value}/>
                            </React.Fragment>
                        )
                    }
                    else {
                        return (
                            <EmptyCart/>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}


// <ProductConsumer>
//                 <section>
//                     {value => {
//                         const { cart } = value;
//                         if (cart.length > 0) {
//                             return (
//                                 <React.Fragment>
//                                     <Title name="your" title="cart" />
//                                     <CartColumns />
//                                 </React.Fragment>
//                             )
//                         }
//                     }}
//                     <EmptyCart />
//                 </section>
//             </ProductConsumer>