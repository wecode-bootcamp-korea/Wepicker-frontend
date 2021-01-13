import React, { Component } from "react";
import './Nav.scss';
import wepickerLogo from '../../images/Nav/wepicker_logo.png';
import myPage from '../../images/Nav/human.png';
import cart from '../../images/Nav/cart.png';
import wish from '../../images/Nav/heart.png';

export class Nav extends Component {
    render() {
        return(
                <nav className="navBar">
                    <div className="navContents">
                            <div className="sideMenuBtn">
                                <span className="topLine"/>
                                <span className="bottomLine"/>
                            </div>

                            <img alt="Main Logo" className="mainLogo"  src={wepickerLogo} />
                            <div className="socialIcon">
                                <img alt="My Page Icon" className="myPageBtn"  src={myPage} />
                                <img alt="Cart Page Icon" className="cartPageBtn"  src={cart} />
                                <img alt="Wish List Page Icon" className="wishPageBtn"  src={wish} />
                            </div>
                    </div>
                </nav>
        );
    }
}

export default Nav;