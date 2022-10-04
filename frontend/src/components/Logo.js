import React from 'react';
import logo from '../logo.png';

class Logo extends React.Component {
    render() {
        return (
            <div className="tool-box">
        <div className="logo-text"></div>
        <div className="Search-box">
          <div className="field has-addons">
            <div className="control">
              <img alt='logo' src={logo}></img>
            </div>
            <div className="control">

            </div>
          </div>
        </div>
        <div  className="cart-box" >
        </div>
      </div>
        )
    }
}

export default Logo;