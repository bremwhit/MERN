import React, { Component } from 'react'
import SearchModule from './SearchModule'
import FilterModule from './FilterModule'
import AddOrderModule from './AddOrderModule'

export class QueryBar extends Component {
    render() {
        return (
            <div className='QueryBar'>
                <SearchModule />
                <FilterModule />
                <AddOrderModule />
            </div>
        )
    }
}

export default QueryBar
