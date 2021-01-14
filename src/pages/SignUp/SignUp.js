import React, { Component } from "react";

import "./SignUp.scss";
import { profileUrl } from "../../images/imgData";

class SignUp extends Component {
    render() {
        return (
            <div className="SignUp">
                <img alt="profile_image" src={profileUrl} />
                <div className="checkIdPw">
                    <input type="text" placeholder="아이디" />
                    <input type="password" placeholder="비밀번호" />
                    <input type="password" placeholder="비밀번호 확인" />
                </div>
                <p>이메일</p>
                <input type="email" placeholder="이메일" />
                <p>이름</p>
                <input type="text" placeholder="이름을(를) 입력하세요" />
                <p>연락처</p>
                <input type="number" placeholder="연락처" />
                <button>가입하기</button>
            </div>
        );
    }
}

export default SignUp;
