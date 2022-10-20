import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __updateTodo } from "../redux/modules/todoModule";
import { __getTodo, __deleteTodo } from "../redux/modules/todoModule";

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoData = useSelector((state) => state.todoModule.todo);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(__updateTodo(id));
  }, [dispatch, id]);

  const goMain = () => {
    navigate(`/${id}`);
  };

  return (
    <div>
      <p className="title">제목 : {todoData.title}</p>
      <p className="date">날짜 : {todoData.date}</p>
      <div className="text">내용 : {todoData.content}</div>
      <Btn onClick={goMain}>수정하기</Btn>

      {/*?는 옵셔널 체이닝 optionalChaining */}
    </div>
  );
}
export default Edit;

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
