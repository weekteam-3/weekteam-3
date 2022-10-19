import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addTodo } from "../redux/modules/Modules";

const Write = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: 1,
    title: "",
    date: "",
    content: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(addTodo(todo));
  };
  return (
    <form onSubmit={onSubmit}>
      <Layout>
        <button
          onClick={() => {
            navigate("/");
          }}>
          홈
        </button>
        <div>오늘의 일기</div>
      </Layout>
      <Box>
        <TitleBox>
          제목 :{" "}
          <Title
            onChange={onChangeHandler}
            name="title"
            value={todo.title}
            type="text"
          />
          날짜 :{" "}
          <Title
            onChange={onChangeHandler}
            name="date"
            value={todo.date}
            type="date"
          />
        </TitleBox>
        <Content
          onChange={onChangeHandler}
          name="content"
          value={todo.content}
          placeholder="내용을 입력하시오.(100자 이내)"
          maxLength={200}
          type="text"
        />
        <button>추가하기</button>
      </Box>
    </form>
  );
};

export default Write;

const Layout = styled.div`
  align-items: center;
  border: 2px solid rgb(9, 234, 178);
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  gap: 20px;
`;

const Box = styled.div`
  background-color: gray;
  height: 100%;
  width: 90%;
  margin: 30px auto;
  border: 2px solid rgb(9, 234, 178);
  border-radius: 5px;
`;

const TitleBox = styled.div`
  background-color: red;
  height: 100px;
  width: 100%;
  margin: 20px auto;
`;

const Title = styled.input`
  border-radius: 5px;
  border: 2px solid rgb(9, 234, 178);
  margin: 40px 5px;
`;

const Content = styled.textarea`
  background-color: green;
  width: 100%;
  height: 500px;
  border: 2px solid rgb(8, 10, 10);
  border-radius: 4px;
`;
