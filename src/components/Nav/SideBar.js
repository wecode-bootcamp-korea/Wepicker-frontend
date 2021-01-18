import React, { Component } from 'react';
import './SideBar.scss';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {

        };
      }

    handleMouseHover = () => {
        console.log("handleMouseHover 함수 실행");
    };

    handleMouseNonHover = () => {
        console.log("handleMouseNonHover 함수 실행");
    }

    render() {
        return(
            <div className="sideMenuBoard">
                <div className="sideMenuText">
                    <ul>
                        <li 
                        className="firstDepth"
                        onMouseEnter={this.handleMouseHover}
                        onMouseLeave={this.handleMouseNonHover}>
                            HOME
                        </li>

                        <li 
                        className="firstDepth"
                        onMouseEnter={this.handleMouseHover}
                        onMouseLeave={this.handleMouseNonHover}>
                            Wipicker
                        </li>

                        <li 
                        className="firstDepth"
                        onMouseEnter={this.handleMouseHover}
                        onMouseLeave={this.handleMouseNonHover}>
                            SHOP
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;