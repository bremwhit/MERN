import React, { Component } from 'react';
import Logo from '../assets/logo.png';

export class Header extends Component {
    render() {
        console.log(typeof (
            <div className='Header'>
                <img src={Logo} alt='logo' />
            </div>)
            );
        return (
            <div className='Header'>
                <img src={Logo} alt='logo' />
            </div>
        );
    }
}

export default Header