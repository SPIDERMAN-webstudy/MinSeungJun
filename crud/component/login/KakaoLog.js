import React, { useState, useEffect } from "react";
import KakaoLogin from "react-kakao-login";
import Image from "./kakao_login_medium_narrow.png";
export default function KakaoLog() {
  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(tokenkey);
      }
    }
  }, []);
  return (
    <>
      <KakaoLogin
        token={tokenkey}
        onSuccess={(err) => {
          console.log("로그인성공", err);
        }} // 성공 시 실행할 함수
        onFail={(err) => {
          console.log("로그인실패", err);
        }}
        onLogout={() => {
          console.log("로그아웃");
        }}
        render={({ onClick }) => (
          <img
            src={Image}
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          ></img>
        )}
      ></KakaoLogin>
    </>
  );
}
