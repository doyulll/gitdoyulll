// TV.jsx
import React from "react";
import * as S from "./Movie.style"; // 수정: 파일 확장자(.jsx) 제거
import { useNavigate } from "react-router-dom"; // 수정: import 구문 수정

const url = "https://image.tmdb.org/t/p/w1280/";

function Movie({ name, vote_average, poster_path }) {
  const navigate = useNavigate(); // 수정: import 구문에서 useNavigate만 가져오기
  const onClickImg = () => {
    navigate(`/tv/${name}`, {
      state: {
        url: url,
        poster_path: poster_path, // 수정: 쉼표 추가 및 중괄호 제거
      },
    });
  };

  return (
    <S.Contain onClick={onClickImg}>
      <S.Imgg src={url + poster_path} alt={name} /> {/* 수정: 이미지 경로 조합 */}
      <S.Textt>
        <h4>{name}</h4>
        <span>{vote_average}</span>
      </S.Textt>
    </S.Contain>
  );
}

export default Movie;