import React, { Component } from "react";

import "./Agreement.scss";

class Agreement extends Component {
    render() {
        return (
            <div className="Agreement">
                <div className="checkFirst">
                    <button></button>
                    <span>이용약관 동의 (필수)</span>
                </div>
                <textarea></textarea>
                <div className="checkSecond">
                    <button></button>
                    <span>개인정보 수집 및 이용 (필수)</span>
                </div>
                <textarea></textarea>
            </div>
        );
    }
}

export default Agreement;
