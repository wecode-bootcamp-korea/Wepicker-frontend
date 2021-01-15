import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import "./Login.scss";

// import { Link } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            idValue: "",
            pwValue: "",
            isBtnActive: false,
        };
    }

    handleIdValue = (e) => {
        this.setState(
            {
                idValue: e.target.value,
            },
            () => this.checkBtnState()
        );
    };

    handlePwValue = (e) => {
        this.setState(
            {
                pwValue: e.target.value,
            },
            () => this.checkBtnState()
        );
    };

    checkBtnState = () => {
        const { idValue, pwValue } = this.state;
        const isBtnActive = idValue.length >= 5 && pwValue.length >= 8;

        this.setState({
            isBtnActive,
        });
    };

    handleLogin = () => {
        // fetch(API, {
        //     method: "post",
        //     body: JSON.stringify({
        //         account: this.state.idValue,
        //         password: this.state.pwValue,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((res) => {
        //         if (res.message === "SUCCESS") {
        //             this.props.history.push("/main");
        //             return;
        //         }
        //         if (res.message !== "SUCCESS") {
        //             alert("아이디와 비밀번호를 다시 한 번 확인해주세요");
        //         }
        //     });
    };

    render() {
        return (
            <div className="Login">
                <div className="content">
                    <article className="loginInput">
                        <input type="text" placeholder="아이디" onChange={this.handleIdValue} />
                        <input
                            type="password"
                            placeholder="비밀번호"
                            onChange={this.handlePwValue}
                        />
                    </article>
                    <article className="loginCheckBox">
                        <input type="checkbox" id="loginState" />
                        <label for="loginState">로그인상태유지</label>
                    </article>
                    <button
                        className={
                            this.state.isBtnActive ? "loginBtn activeBtn" : "loginBtn inactiveBtn"
                        }
                        onClick={this.handleLogin}
                    >
                        로그인
                    </button>
                    <div className="signUpBtn">
                        <span>회원가입</span>
                        <span>아이디.비밀번호 찾기</span>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;
