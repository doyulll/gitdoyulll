import React from "react";

export default class Loginpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      email_p: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInvalid = this.handleInvalid.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleInvalid(event) {
    event.preventDefault();

    this.setState({ email_p: "올바른 이메일 주소를 입력해주세요." });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "1000px",
          }}
        >
          <h1>이메일과 비밀번호를 입력해주세요</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              height: "130px",
            }}
          >
            <label htmlFor="email">이메일</label>
            <input
              name="email"
              id="email"
              type="email"
              value={this.state.email}
              onInvalid={this.handleInvalid}
              onChange={this.handleInputChange}
              style={{
                width: "700px",
                height: "50px",
                borderRadius: "10px",
                borderColor: "rgb(200,200,200)",
                borderStyle: "solid",
                fontSize: "15px",
              }}
              required
            />
            <p style={{ color: "red" }}>{this.state.email_p}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <label htmlFor="password">비밀번호</label>
            <input
              name="password"
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              style={{
                width: "700px",
                height: "50px",
                borderRadius: "10px",
                borderColor: "rgb(200,200,200)",
                borderStyle: "solid",
                fontSize: "25px",
              }}
            />
          </div>
          <br />
          <input
            type="submit"
            value="확인"
            style={{
              backgroundColor:
                this.state.email && this.state.password
                  ? "#22254b"
                  : "rgb(200,200,200)",
              borderColor:
                this.state.email && this.state.password
                  ? "#22254b"
                  : "rgb(200,200,200)",
              borderRadius: "25px",
              fontSize: "15px",
              borderStyle: "solid",
              width: "700px",
              height: "50px",
              color: "white",
            }}
          />
        </form>
      </div>
    );
  }
}