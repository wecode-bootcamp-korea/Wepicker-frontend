import React, { Component } from "react";

import "./SignUp.scss";
import { profileUrl } from "../../images/imgData";

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            idValue: "",
            pwValue: "",
            emailValue: "",
            nameValue: "",
            phoneValue: "",
        };
    }
    handleIdValue = (e) => {
        this.setState(
            {
                idValue: e.target.value,
            },
            () => this.handleSignupBtn()
        );
    };

    handlePwValue = (e) => {
        this.setState(
            {
                pwValue: e.target.value,
            },
            () => this.handleSignupBtn()
        );
    };

    handleEmailValue = (e) => {
        this.setState(
            {
                emailValue: e.target.value,
            },
            () => this.handleSignupBtn()
        );
    };

    handleNameValue = (e) => {
        this.setState(
            {
                nameValue: e.target.value,
            },
            () => this.handleSignupBtn()
        );
    };

    handlePhoneValue = (e) => {
        this.setState(
            {
                phoneValue: e.target.value,
            },
            () => this.handleSignupBtn()
        );
    };
    //account, password, name, phone, email, profile_photo

    handleSignupBtn = () => {
        fetch("http://localhost:3000/API", {
            method: "POST",
            body: JSON.stringify({
                account: this.state.idValue,
                password: this.state.pwValue,
                name: this.state.nameValue,
                phone: this.state.phoneValue,
                email: this.state.emailValue,
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.message === "SUCCESS") {
                    this.setState.push("/main");
                    return;
                }
                if (response.message !== "SUCCESS") {
                    alert("로그인실패");
                }
            });

        // const { idValue, pwValue } = this.state;
        // const isActive = idValue.length > 5 && pwValue.length >= 8;

        // this.setState({
        //     isBtnActive: isActive
        // });
    };

    render() {
        return (
            <div className="SignUp">
                <img alt="profile_image" src={profileUrl} />
                <div className="checkIdPw">
                    <input type="text" placeholder="아이디" onChange={this.handleIdValue} />
                    <input type="password" placeholder="비밀번호" onChange={this.handlePwValue} />
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        onChange={this.handlePwValue}
                    />
                </div>
                <p>이메일</p>
                <input type="email" placeholder="이메일" onChange={this.handleEmailValue} />
                <p>이름</p>
                <input
                    type="text"
                    placeholder="이름을(를) 입력하세요"
                    onChange={this.handleNameValue}
                />
                <p>연락처</p>
                <input type="number" placeholder="연락처" onChange={this.handlePhoneValue} />
                <button onClick={this.handleSignupBtn}> 가입하기</button>
            </div>
        );
    }
}

export default SignUp;
