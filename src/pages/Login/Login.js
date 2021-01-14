import React, { Component } from "react";

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

    handleIdValue = (event) => {
        this.setState(
            {
                idValue: event.target.value,
            },
            () => this.checkBtnState() //value가 전부 들어오고 나서 함수실행(메서드 써주기)
        );
    };

    handlePwValue = (event) => {
        this.setState(
            {
                pwValue: event.target.value,
            },
            () => this.checkBtnState()
        );
    };

    checkBtnState = () => {
        const { idValue, pwValue } = this.state;
        const isActive = idValue.length > 5 && pwValue.length >= 8;

        this.setState({
            isBtnActive: isActive ? true : false,
        });
    };

    handleLogin = () => {};

    render() {
        return (
            <div className="Login">
                <article className="loginInput">
                    <input type="text" placeholder="아이디" onChange={this.handleIdValue} />
                    <input type="password" placeholder="비밀번호" onChange={this.handlePwValue} />
                </article>
                <article className="checkBox">
                    <input type="checkbox" id="loginState" />
                    <label for="loginState">로그인상태유지</label>
                </article>
                <button className={this.state.isBtnActive} onClick={this.handleLogin}>
                    {" "}
                    로그인
                </button>
                <div className="signUpBtn">
                    <span>회원가입</span>
                    <span>아이디.비밀번호 찾기</span>
                </div>
            </div>
        );
    }
}

export default Login;
