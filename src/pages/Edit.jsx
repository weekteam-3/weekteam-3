import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __updateTodo, __getTodo } from "../redux/modules/todoModule";

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoData = useSelector((state) => state.todoModule.todo);

  const [a, setA] = useState(todoData);

  const [titleValue, setTitleValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [contentValue, setContentValue] = useState();
  //input 값을 설정해주기 위해 생성

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(__getTodo(id));
  }, [dispatch, id]);

  const update = () => {
    const newTodo = {
      id: id,
      title: titleValue,
      content: contentValue,
      date: dateValue,
    };
    dispatch(__updateTodo(newTodo));
    navigate(`/${id}`);
  };

  // const goMain = () => {
  //   navigate(`${id}`);
  // };

  const titleOnChangeHandler = (e) => {
    console.log(e.target.value);
    const inputValue = e.target.value;
    setTitleValue(inputValue);
    setA(inputValue);
  };
  const dateOnChangeHandler = (e) => {
    const inputValue = e.target.value;
    setDateValue(inputValue);
    setA(inputValue);
  };
  const contentOnChangeHandler = (e) => {
    const inputValue = e.target.value;
    setContentValue(inputValue);
    setA(inputValue);
  };

  return (
    <Box>
      <TitleBox>
        <Title
          className="title"
          placeholder={todoData.title}
          value={a.title}
          onChange={titleOnChangeHandler}
        />
        <Title
          className="date"
          placeholder={todoData.date}
          value={a.date}
          onChange={dateOnChangeHandler}
          type="date"
        />
      </TitleBox>
      <Content
        className="text"
        placeholder={todoData.content}
        value={a.content}
        onChange={contentOnChangeHandler}
      />
      <ButtonBox>
        <Btn onClick={update}>수정하기</Btn>
      </ButtonBox>
    </Box>
  );
}
export default Edit;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  margin: 30px auto;
  border: 5px solid rgb(11, 137, 18);
  border-radius: 5px;
  padding: 0px 20px;
`;

const TitleBox = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.input`
  padding: 5px;
  flex-grow: 0.2;
  border-radius: 5px;
  border: 2px solid black;
  justify-content: center;
  text-align: center;
`;

const Content = styled.textarea`
  width: 100%;
  height: 300px;
  border: 2px solid rgb(8, 10, 10);
  border-radius: 4px;
  padding: 10px;
  text-align: left;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.button`
  align-items: center;
  background: white;
  width: 48%;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
`;
