import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __updateTodo, __getTodo } from "../redux/modules/todoModule";

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoData = useSelector((state) => state.todoModule.todo);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(__getTodo(id));
  }, [dispatch, id]);

  const goMain = () => {
    navigate(`/${id}`);
  };

  return (
    <Box>
      <TitleBox>
        <p className="title">제목 : {todoData.title}</p>
        <p className="date">날짜 : {todoData.date}</p>
      </TitleBox>
      <div className="text">내용 : {todoData.content}</div>

      <Btn onClick={goMain}>수정하기</Btn>
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

const TitleBox = `
  
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
