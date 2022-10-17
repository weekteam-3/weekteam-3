import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Main() {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  return (
    <div>
      <Layout>
        <button>홈</button>
        <div>오늘의 일기</div>
      </Layout>
      <Title
        onClick={() => {
          navigate("/write");
        }}
      >
        일기 쓰러 가기
      </Title>
      <BigBox>
        <Box>제목</Box>
        <Box>오늘 밥 먹음</Box>
        <Box>오늘 숙제 함</Box>
      </BigBox>
    </div>
  );
}

export default Main;

const Layout = styled.div`
  align-items: center;
  border: 2px solid rgb(9, 234, 178);
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  gap: 20px;
`;

const Title = styled.button`
  width: 90%;
  height: 50px;
  text-align: center;
  margin: 20px auto;
  display: block;
  font-size: xx-large;
  border: 2px solid rgb(9, 234, 178);
`;

const BigBox = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
  border: 2px solid rgb(9, 234, 178);
`;

const Box = styled.div`
  max-width: 95%;
  height: 50px;
  margin: auto;
  border: 1px solid #dec8c8;
  flex-direction: column;
  text-align: center;
  font-size: xx-large;
`;
