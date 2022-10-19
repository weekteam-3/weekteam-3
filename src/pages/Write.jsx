import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addTodos } from "../redux/modules/thunk";

const Write = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    date: "",
    content: "",
  };
  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.title === "") {
      alert("제목을 입력하세요");
    } else if (todo.data === "") {
      alert("날짜를 선택해주세요");
    } else if (todo.content === "") {
      alert("내용을 입력해주세요");
    } else {
      dispatch(__addTodos(todo));
      setTodo(initialState);
      navigate("/");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Box>
        <TitleBox>
          <div>
            제목 :{" "}
            <Title
              onChange={onChangeHandler}
              name="title"
              value={todo.title}
              type="text"
            />
          </div>
          <div>
            날짜 :{" "}
            <Title
              onChange={onChangeHandler}
              name="date"
              value={todo.date}
              type="date"
            />
          </div>
        </TitleBox>
        <Content
          onChange={onChangeHandler}
          name="content"
          value={todo.content}
          placeholder="내용을 입력하시오.(100자 이내)"
          maxLength={200}
          type="text"
        />
        <ButtonBox>
          <Button type="submit">추가하기</Button>
        </ButtonBox>
      </Box>
    </form>
  );
};

export default Write;

const Box = styled.div`
  height: 100%;
  width: 90%;
  margin: 30px auto;
  border: 2px solid rgb(9, 234, 178);
  border-radius: 5px;
  padding: 0px 20px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  margin: 20px auto;
`;

const Title = styled.input`
  border-radius: 5px;
  border: 2px solid rgb(9, 234, 178);

  width: 200px;
`;

const Content = styled.textarea`
  width: 100%;
  height: 500px;
  border: 2px solid rgb(8, 10, 10);
  border-radius: 4px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  border: solid 2px #ea6c81;
  border-radius: 5px;
  margin: 10px;
`;
