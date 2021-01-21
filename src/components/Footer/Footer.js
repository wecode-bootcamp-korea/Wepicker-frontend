import React, { Component } from "react";
import { Link } from 'react-router-dom';
import whiteLogo from "../../images/Footer/wepicker_logo_white.png"
import './Footer.scss';

export class Footer extends Component {
    render() {
        return(
                <footer className="footerSection">
                    <div className="footerLogo">
                        <img alt="Wepicker White Logo" src={whiteLogo} />
                    </div>

                    <div className="footerText">
                            <div className="infoText">
                                <span className="infoDetail">
                                    (주)위피커 &nbsp;&#124;&nbsp; 대표 : 정민선 구보현 홍연우 이새봄<br />
                                    사업자등록번호 : 777-22-210111 &nbsp;&#124;&nbsp; 통신판매업신고 : 2021-서울선릉-210111<br />
                                    개인정보보호 관리책 임자 : 위피커 &nbsp;&#124;&nbsp; 고객센터 : 070-2021-0111 (월-금 08:00-12:00시)<br />
                                    이메일 : wepicker@wepicker.com &nbsp;&#124;&nbsp; 소재지 : 서울 강남구 테헤란로 427, 위워크타워 5F, 10F<br />
                                    Hosting by (주)아임웹
                                </span>
                            </div>

                            <div className="menuText">
                                <div className="topMenu">
                                    <Link to="/">
                                    <span>HOME</span>
                                    </Link>
                                    <Link to="/product/all">
                                    <span>SHOP</span>
                                    </Link>
                                </div>
                                
                                <div className="bottomMenu">
                                    <span>ABOUT</span>
                                    <span>FAQ</span>
                                </div>
                            </div>
                    </div>

                    <div className="usePolicy">
                                <span>Terms of use</span>
                                <span className="verticalLine">&#124;</span>
                                <span>Privacy Policy</span>
                    </div>

                    <hr className="horizontalLine" />

                    <span className="reservedText">Copyright ⓒ 2021 위피커(Wepicker) store all rights reserved.</span>
                </footer>
            );
        }
}

export default Footer;