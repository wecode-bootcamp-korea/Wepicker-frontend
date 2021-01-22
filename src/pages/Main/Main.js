import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Bestitem from '../../components/BestItems/BestItems';
import Footer from '../../components/Footer/Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from 'react-reveal/Fade';
import mainImg from "../../images/Main/main01.jpg";
import "animate.css/animate.min.css";
import './Main.scss';

export class Main extends Component {
    render() {
        return(
        <>
        <Nav/> 
        <section className="Main">
            <Fade left>
                <div className="mainBanner">
                    <img 
                    alt="Main Images" 
                    className="mainImg" 
                    src={ mainImg }/>
                </div>
            </Fade>
            <ScrollAnimation animateIn='fadeIn'>
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
                            <Link to="#">
                                <h5 className="storeLink">스토어 소개.</h5>
                            </Link>
                        </div>
                    </div>
                    <div className="midRightBanner" /> 
                </div>
            </ScrollAnimation>

            <div className="BestItemSection">
                 <Bestitem/>
            </div>
            
            <div className="bottomBanner">
                <ScrollAnimation animateIn='fadeIn'>
                        <div className="bottomBannerText">
                            <h4 className="subTitle">
                            WE PICKER OFFLINE STORE</h4>
                            <h1 className="bannerTitle"> 
                            자연의 건강함을 위하여<br />
                            지속가능한 소비문화 정착을<br />
                            선릉역 매장에서 시작하세요.<br />
                            </h1>
                        </div>
                </ScrollAnimation>
            </div>
            <Footer />
        </section>
        </>
        );
    }
}

export default Main;