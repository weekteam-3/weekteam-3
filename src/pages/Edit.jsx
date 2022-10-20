import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __updateTodo, __getTodo } from "../redux/modules/todoModule";

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoData = useSelector((state) => state.todoModule.todo);

  const [titleValue, setTitleValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [contentValue, setContentValue] = useState();

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
  };
  const dateOnChangeHandler = (e) => {
    const inputValue = e.target.value;
    setDateValue(inputValue);
  };
  const contentOnChangeHandler = (e) => {
    const inputValue = e.target.value;
    setContentValue(inputValue);
  };

  return (
    <Box>
      <div>
        <input
          className="title"
          placeholder={todoData.title}
          onChange={titleOnChangeHandler}
        />
        <input
          className="date"
          placeholder={todoData.date}
          onChange={dateOnChangeHandler}
          type="date"
        />
      </div>
      <input
        className="text"
        placeholder={todoData.content}
        onChange={contentOnChangeHandler}
      />

      <Btn onClick={update}>수정하기</Btn>
    </Box>
  );
}
export default Edit;

const Box = styled.div`
  height: 100%;
  width: 90%;
  margin: 30px auto;
  border: 2px solid rgb(9, 234, 178);
  border-radius: 5px;
  padding: 0px 20px;
`;

const Btn = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-items: right;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
`;
