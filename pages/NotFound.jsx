import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const onClickImg = () => {
    navigate(`/`, {});
  };

  return (
    <div style={{margin : "5vw"}}>
      <h1>해당주소를 찾지 못했습니다.</h1>
      <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <b style ={{color:"#ff0000"}} onClick={onClickImg}>메인 페이지로 이동</b>
    </div>
  );
}