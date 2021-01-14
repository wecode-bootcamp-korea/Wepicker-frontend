import React, { Component } from "react";

import "./Login.scss";

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <article className="loginInput">
                    <input type="text" placeholder="아이디" />
                    <input type="password" placeholder="비밀번호" />
                </article>
                <article className="checkBox">
                    <input type="checkbox" id="loginState" />
                    <label for="loginState">로그인상태유지</label>
                </article>
                <button>로그인</button>
                <div className="signUpBtn">
                    <span>회원가입</span>
                    <span>아이디.비밀번호 찾기</span>
                </div>
            </div>
        );
    }
}

export default Login;
