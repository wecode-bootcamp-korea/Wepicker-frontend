import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
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
            }
            // () => this.handleSignupBtn()
        );
    };

    handlePwValue = (e) => {
        this.setState(
            {
                pwValue: e.target.value,
            }
            // () => this.handleSignupBtn()
        );
    };

    handlePwCheckValue = (e) => {
        this.setState(
            {
                pwCheckValue: e.target.value,
            }
            // () => this.handleSignupBtn()
        );
    };

    handleEmailValue = (e) => {
        this.setState(
            {
                emailValue: e.target.value,
            }
            // () => this.handleSignupBtn()
        );
    };

    handleNameValue = (e) => {
        this.setState(
            {
                nameValue: e.target.value,
            }
            // () => this.handleSignupBtn()
        );
    };

    handlePhoneValue = (e) => {
        this.setState(
            {
                phoneValue: e.target.value,
            }
            // () => this.handleSignupBtn()
        );
    };
    //account, password, name, phone, email, profile_photo

    handleSignupBtn = () => {
        const checkId = this.state.emailValue.includes("@", ".com");
        const checkPw = this.state.pwValue.length >= 8;
        const doubleCheckPw = this.state.pwCheckValue === this.state.pwValue;
        if (checkId && checkPw && doubleCheckPw) {
            this.setState({
                handleSignupBtn: true,
            });
            console.log("완료");
            return this.props.history.push("/login");
        }
        // fetch(API, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         account: this.state.idValue,
        //         password: this.state.pwValue,
        //         name: this.state.nameValue,
        //         phone: this.state.phoneValue,
        //         email: this.state.emailValue,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((res) => {
        //         if (res.message === "SUCCESS") {
        //             alert(`${res.name}님, 회원가입을 축하드립니다! 로그인 페이지로 이동합니다.`);
        //             this.props.history.push("/login");
        //             return;
        //         }
        //         if (res.message !== "SUCCESS") {
        //             alert("가입 형식에 맞춰 작성해주세요");
        //         }
        //     });
    };

    render() {
        return (
            <div className="SignUp">
                <div className="content">
                    <img alt="profile_image" src={profileUrl} />
                    <span>* 아이디는 5자 이상의 영문자만 가능합니다.</span>
                    <input type="text" placeholder="아이디" onChange={this.handleIdValue} />
                    <span>* 비밀번호는 8자 이상 가능합니다 (특수문자 포함).</span>
                    <div className="checkPw">
                        <input
                            type="password"
                            placeholder="비밀번호"
                            onChange={this.handlePwValue}
                        />
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
                            type="number"
                            placeholder="연락처"
                            onChange={this.handlePhoneValue}
                        />
                    </div>

                    <button onClick={this.handleSignupBtn}> 가입하기</button>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(SignUp);
