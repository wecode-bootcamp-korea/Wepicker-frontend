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
            topLine: 'true',
            bottomLine: 'true',
            sideMenuBar: 'true'
        };
    }

    handleToggleClick = () => {
        this.setState({
            topLine: !this.state.topLine,
            bottomLine: !this.state.bottomLine,
            sideMenuBar: !this.state.sideMenuBar
        });
    };

    render() {
        return(
            <>         
                <div className="nav">
                    <div className="sideMenuBtn" onClick={this.handleToggleClick}>
                        <span className={this.state.topLine ? 'topLineAct' : 'topLineInAct'}/>
                        <span className={this.state.bottomLine ? 'bottomLineAct' : 'bottomLineInAct'}/>
                    </div>

                    <nav className="navBar">
                        <div className="navContents">
                                <div />

                                <img alt="Main Logo" className="mainLogo"  src={wepickerLogo} />
                                
                                <div className="socialIcon">
                                    <Link to="#">
                                        <img alt="My Page Icon" className="myPageBtn"  src={myPage} />
                                    </Link>

                                    <Link to="#">
                                        <img alt="Cart Page Icon" className="cartPageBtn"  src={cart} />
                                    </Link>

                                    <Link to="#">
                                        <img alt="Wish List Page Icon" className="wishPageBtn"  src={wish} />
                                    </Link>
                                </div>
                        </div>
                    </nav>
                </div>

                <div className={this.state.sideMenuBar ? 'hiddenSideBar' : 'showSideBar'}>
                    <SideBar />
                </div>

            </>
        );
    }
}

export default Nav;