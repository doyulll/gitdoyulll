import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate("/Login", {});
  };

  return (
    <div>
      <button
        onClick={onClickImg}
        style={{
          margin: "0 10px",
          borderRadius: "15px",
          width: "70px",
          height: "30px",
          cursor: "pointer",
        }}
      >
        로그인
      </button>
    </div>
  );
}