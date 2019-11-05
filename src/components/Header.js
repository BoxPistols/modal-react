import React from 'react';
import logo from './img/logo.svg';
class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header-logo'>
          <img src={logo} alt="Logo" />
        </div>
      </div>
    );
  }
}

export default Header;
