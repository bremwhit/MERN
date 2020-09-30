import React, { Component } from 'react'

export class FilterModule extends Component {
    render() {
        return (
            <div className='FilterModule'>
                <label for="filters">Status </label>
                <select name="filters">
                    <option value="complete">Completed</option>
                    <option value="inprogress">In Progress</option>
                </select>
            </div>
        )
    }
}

export default FilterModule
