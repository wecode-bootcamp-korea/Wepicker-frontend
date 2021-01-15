import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./SignUp.scss";
import { profileUrl } from "../../images/imgData";

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            imgValue: "",
            idValue: "",
            pwValue: "",
            pwCheckValue: "",
            emailValue: "",
            nameValue: "",
            phoneValue: "",
        };
    }
    handleImgValue = (e) => {
        this.setState({
            imgValue: e.target.value,
        });
    };

    handleIdValue = (e) => {
        this.setState({
            idValue: e.target.value,
        });
    };

    handlePwValue = (e) => {
        this.setState({
            pwValue: e.target.value,
        });
    };

    handlePwCheckValue = (e) => {
        this.setState({
            pwCheckValue: e.target.value,
        });
    };

    handleEmailValue = (e) => {
        this.setState({
            emailValue: e.target.value,
        });
    };

    handleNameValue = (e) => {
        this.setState({
            nameValue: e.target.value,
        });
    };

    handlePhoneValue = (e) => {
        this.setState({
            phoneValue: e.target.value,
        });
    };
    //account, password, name, phone, email, profile_photo

    handleSignupBtn = () => {
        const { idValue, pwValue, emailValue, pwCheckValue } = this.state;
        const checkId = emailValue.includes("@", ".com");
        const checkIdPw = idValue.length >= 5 && pwValue.length >= 8;
        const doubleCheckPw = pwCheckValue === pwValue;
        if (checkId && checkIdPw && doubleCheckPw) {
            this.setState({
                handleSignupBtn: true,
            });
        }
        // fetch(API, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         account: this.state.idValue,
        //         password: this.state.pwValue,
        //         name: this.state.nameValue,
        //         phone: this.state.phoneValue,
        //         email: this.state.emailValue,
        //         profile_photo: this.state.imgValue,
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
                    <div className="profileImg">
                        <img alt="profile_image" src={profileUrl} />
                        <button />
                    </div>
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
