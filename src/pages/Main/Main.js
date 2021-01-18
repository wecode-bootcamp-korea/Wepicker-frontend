import React, { Component } from "react";
import Nav from '../../components/Nav/Nav';
import mainImg from "../../images/Main/main01.jpg";
import './Main.scss';


export class Main extends Component {
    render() {
        return(
            <>
                <nav>
                        <Nav />
                </nav>

                <section className="Main">

                        <div className="mainBanner">
                            <img 
                            alt="Main Images" 
                            className="mainImg" 
                            src={ mainImg }/>
                        </div>  

                            
                                <div className="centerBanner">
                                    <div className="midLeftBanner">
                                        <div className="centerBannerText">
                                                <h1 className="centerEngTitle">
                                                PACKAGE-FREE LIFESTYLE</h1>

                                                <h2 className="centerKorTitle"> 
                                                제로 웨이스트<br />
                                                라이프스타일 플랫폼<br />
                                                <br />
                                                <br />
                                                </h2>
                                                <h5 className="storeLink">스토어 소개.</h5>
                                        </div>
                                    </div>
                        

                                    <div className="midRightBanner" />
                                </div>
                            
                        
                            
                                <div className="bottomBanner">
                                            <div className="bottomBannerText">
                                                <h4 className="subTitle">
                                                WE PICKER OFFLINE STORE</h4>

                                                <h1 className="bannerTitle"> 
                                                자연의 건강함을 위하여<br />
                                                지속가능한 소비문화 정착을<br />
                                                선릉역 매장에서 시작하세요.<br />
                                                </h1>
                                            </div>
                                </div>
                </section>
            </>
        );
    }
}

export default Main;