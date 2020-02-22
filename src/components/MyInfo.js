import React from "react"

function MyInfo(props) {
    return (
        <div>
            <h1>Name: {props.product.name}</h1>
            <p>{props.product.price}</p>
        </div>
    );
}

export default MyInfo;