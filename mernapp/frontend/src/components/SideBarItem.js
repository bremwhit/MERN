import React, { Component } from 'react'

export class SideBarItem extends Component {
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
