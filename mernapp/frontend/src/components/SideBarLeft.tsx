import React, { Component } from 'react'
import SideBarItem from "./SideBarItem";

export class SideBarLeft extends Component {
    render() {
        return (
            <div className='SideBarLeft'>
                <h3>Overview</h3>
                <SideBarItem itemTitle='Orders Today' quantity='5'/>
                <SideBarItem itemTitle='Pending Orders' quantity='5'/>
                <SideBarItem itemTitle='Delivered Orders' quantity='5'/>
                <SideBarItem itemTitle='Cancelled Orders' quantity='5'/>
            </div>
        )
    }
}

export default SideBarLeft
