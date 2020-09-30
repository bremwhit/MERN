import React, { Component } from 'react'

export class SearchModule extends Component {
    render() {
        return (
            <div className='SearchModule'>
                <h1>In Stock</h1>
                <input type='text' id='searchBox' placeholder='Search' />
            </div>
        )
    }
}

export default SearchModule
