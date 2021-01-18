import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

class Sidebar extends Component {
    render() {
        return(
            <div className="sideMenuBoard">
                <div className="sideMenuText">
                    <ul>
                        <Link to="../pages/Main/Main.js">
                            <li>HOME</li>
                        </Link>

                        <Link to="#">
                            <li>WEPICKER</li>
                        </Link>

                        <Link to="#">
                            <li>FAQ</li>
                        </Link>
                        
                        <Link to="#">
                            <li>SHOP</li>
                        </Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;