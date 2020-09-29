import React, { Component } from 'react'

export class ItemHeader extends Component {
    render() {
        return (
            <div className='ItemHeader' >
            <h4>Product Code</h4>
            <h4>Product</h4>
            <h4>Instructions</h4>
            <h4>Status</h4>
            <h4>Date</h4>
            <h4>Quantity</h4>
        </div>
        )
    }
}

export default ItemHeader
