import React, { Component } from "react";
import './Footer.scss';


export class Footer extends Component {
    render() {
        return(

            <footer className="footerSection">
                
                <div className="footerLogo">
                    <img alt="Wepicker White Logo" src="" >
                </div>

                <div className="footerText">
                        <div className="infoText">
                            <span>
                                (주)위피커 &#124; 대표 : 정민선 이새봄 구보현 홍연우<br />
                                사업자등록번호 : 777-22-210111 &#124; 통신판매업신고 : 2021-서울선릉-210111<br />
                                개인정보보호 관리책임자 : 위피커 &#124; 고객센터 : 070-2021-0111 (월-금 08:00-12:00시)<br />
                                이메일 : wepicker@wepicker.com &#124; 소재지 : 서울 강남구 테헤란로 427, 위워크타워 5F, 10F<br />
                                Hosting by (주)아임웹
                            </span>
                            <a>Terms of use</a>
                            <span>&#124;</span>
                            <a>Privacy Policy</a>
                        </div>

                        <div className="menuText">

                        </div>

                        <div className="buttonSection">

                        </div>
                </div>

                <div className="divideLine">
                    
                </div>

                <div className="copyRight">

                </div>

            </footer>


            );

        }
}

export default Footer;