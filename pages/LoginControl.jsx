import React from "react";


export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: true };

    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    // useNavigate link to '/login'
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  }

  render() {
    return (
      <div style={{ color: "white" }}>
        <button
          onClick={() => {
            this.handleLoginClick();
          }}
          style={{
            margin: "0 10px",
            borderRadius: "15px",
            width: "70px",
            height: "30px",
          }}
        >
          {this.state.isLoggedIn ? "로그인" : "로그아웃"}
        </button>
        {this.state.isLoggedIn ? "로그인해주세요!" : "환영합니다!"}
      </div>
    );
  }
}