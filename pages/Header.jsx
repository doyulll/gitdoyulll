import React from "react";
import { Link } from "react-router-dom";
import LoginControl from "./LoginControl";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "#22254b",
        display: "flex",
        padding: "20px",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <img
          style={{ width: "154px", height: "20px", marginLeft: "50px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <Link
        to="/movie"
        style={{
          margin: "0px 10px 0px 20px",
          color: "white",
          textDecoration: "none",
        }}
      >
        영화
      </Link>
      <Link
        to="/tv"
        style={{ margin: "0 10px", color: "white", textDecoration: "none" }}
      >
        TV 프로그램
      </Link>
      <Link
        to="/celebirity"
        style={{ margin: "0 10px", color: "white", textDecoration: "none" }}
      >
        인물
      </Link>
      <LoginControl />
    </div>
  );
}