import { type } from 'os'
import React, { Component } from 'react'

type MyProps = Readonly<{
    itemTitle: string;
    quantity: number;
}>

export class SideBarItem extends Component<MyProps> {
    render() {
        return (
            <div className='SideBarItem'>
                <h3>{this.props.itemTitle}</h3>
                <h3>{this.props.quantity}</h3>
            </div>
        )
    }
}

export default SideBarItem
