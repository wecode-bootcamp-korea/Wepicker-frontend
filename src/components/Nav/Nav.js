import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import wepickerLogo from '../../images/Nav/wepicker_logo.png';
import myPage from '../../images/Nav/human.png';
import cart from '../../images/Nav/cart.png';
import wish from '../../images/Nav/heart.png';
import './Nav.scss';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
        activatedTopLine: true,
        activatedBottomLine: true,
        sideMenuBar: true
        };
    }

    handleToggleClick = () => {
        const { activatedTopLine, activatedBottomLine, sideMenuBar } = this.state;
        this.setState({
        activatedTopLine: !activatedTopLine,
        activatedBottomLine: !activatedBottomLine,
        sideMenuBar: !sideMenuBar
        });
    };

    render() {
        return(
        <>         
        <nav className="nav">
            <div className="sideMenuBtn" onClick={this.handleToggleClick}>
                <span className={this.state.activatedTopLine ? 'topLineAct' : 'topLineInAct'}/>
                <span className={this.state.activatedBottomLine ? 'bottomLineAct' : 'bottomLineInAct'}/>
            </div>
            <div className="navBar">
                <div className="navContents">
                    <div />
                    <Link to="/">
                    <img alt="Main Logo" className="mainLogo"  src={wepickerLogo} />
                    </Link>
                    <div className="socialIcon">
                        <Link to="/login">
                        <img alt="My Page Icon" className="myPageBtn"  src={myPage} />
                        </Link>
                        <Link to="/cart">
                            <img alt="Cart Page Icon" className="cartPageBtn"  src={cart} />
                        </Link>
                        <Link to="/wishlist">
                            <img alt="Wish List Page Icon" className="wishPageBtn"  src={wish} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        <div className={this.state.sideMenuBar ? 'hiddenSideBar' : 'showSideBar'}>
            <SideBar />
        </div>
        </>
        );
    }
}

export default Nav;