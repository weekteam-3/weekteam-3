import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __getTodos } from "../redux/modules/thunk";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  const todos = useSelector((state) => state.todo.todos);
  return (
    <div>
      <Title
        onClick={() => {
          navigate("/write");
        }}
      >
        일기 쓰러 가기
      </Title>
      <BigBox>
        {todos.map((todos) => (
          <Box
            onClick={() => {
              navigate(`/${todos.id}`);
            }}
          >
            {todos.title}
          </Box>
        ))}
      </BigBox>
    </div>
  );
}

export default Main;

const Title = styled.button`
  width: 90%;
  height: 50px;
  text-align: center;
  margin: 30px auto;
  display: block;
  font-size: xx-large;
  border: 4px solid rgb(9, 234, 178);
  border-radius: 10px;
`;

const BigBox = styled.div`
  width: 90%;
  height: 500px;
  margin: auto;
  padding: 20px;
  border: 4px solid rgb(9, 234, 178);
  border-radius: 10px;
  overflow: auto;
`;

const Box = styled.div`
  max-width: 95%;
  height: 50px;
  margin: 5px auto;
  border: 2px solid #ea6c81;
  border-radius: 5px;
  flex-direction: column;
  text-align: center;
  font-size: xx-large;
  cursor: pointer;
`;
