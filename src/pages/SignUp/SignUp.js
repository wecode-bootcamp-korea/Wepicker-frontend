import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./SignUp.scss";
import { profileUrl } from "../../images/imgData";

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            idValue: "",
            pwValue: "",
            pwCheckValue: "",
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

    handlePwCheckValue = (e) => {
        this.setState(
            {
                pwCheckValue: e.target.value,
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

    // handleSignupBtn = () => {
    //     if (6 > {});
    //     fetch(API, {
    //         method: "POST",
    //         body: JSON.stringify({
    //             account: this.state.idValue,
    //             password: this.state.pwValue,
    //             name: this.state.nameValue,
    //             phone: this.state.phoneValue,
    //             email: this.state.emailValue,
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then((res) => {
    //             if (res.message === "SUCCESS") {
    //                 this.props.history.push("/login");
    //                 return;
    //             }
    //             if (res.message !== "SUCCESS") {
    //                 alert("로그인실패");
    //             }
    //         });

    // const { idValue, pwValue } = this.state;
    // const isActive = idValue.length > 5 && pwValue.length >= 8;

    // this.setState({
    //     isBtnActive: isActive
    // });
    // };

    render() {
        return (
            <div className="SignUp">
                <img alt="profile_image" src={profileUrl} />
                <span>* 아이디는 5자 이상의 영문자만 가능합니다.</span>
                <input type="text" placeholder="아이디" onChange={this.handleIdValue} />
                <span>* 비밀번호는 8자 이상 가능합니다 (특수문자 포함).</span>
                <div className="checkPw">
                    <input type="password" placeholder="비밀번호" onChange={this.handlePwValue} />
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        onChange={this.handlePwCheckValue}
                    />
                </div>
                <p>이메일</p>
                <input
                    className="email"
                    type="email"
                    placeholder="이메일"
                    onChange={this.handleEmailValue}
                />

                <p>이름</p>
                <input
                    className="name"
                    type="text"
                    placeholder="이름을(를) 입력하세요"
                    onChange={this.handleNameValue}
                />
                <div className="phoneContainer">
                    <p>연락처</p>
                    <span>* 숫자만 입력 가능합니다</span>
                    <input
                        className="phoneContainer"
                        type="text"
                        placeholder="연락처"
                        onChange={this.handlePhoneValue}
                    />
                </div>

                <button onClick={this.handleSignupBtn}> 가입하기</button>
            </div>
        );
    }
}

export default withRouter(SignUp);
