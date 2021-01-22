import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

class Sidebar extends Component {
    render() {
        return(
        <div className="sideMenuBoard">
            <div className="sideMenuText">
                <ul>
                    <Link to="/">
                        <li>HOME</li>
                    </Link>
                    <Link to="/product/all">
                        <li>SHOP</li>
                    </Link>
                    <Link to="/wishlist">
                        <li>WISH</li>
                    </Link>
                    <Link to="/cart">
                        <li>CART</li>
                    </Link>
                </ul>
            </div>
        </div>
        );
    }
}

export default Sidebar;