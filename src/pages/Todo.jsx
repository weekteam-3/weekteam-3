import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getTodo, __deleteTodo } from "../redux/modules/todoModule";
import Card from "../components/card/Card";

function Todo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoData = useSelector((state) => state.todoModule.todo);

  const params = useParams();
  const id = params.id;
  //user가 url 파라미터에 입력한것 가져오게 하는 것

  useEffect(() => {
    dispatch(__getTodo(id));
  }, [dispatch, id]);

  //id를 store에 있는 __getOneTodo에 보내주는 것
  // update 새로 갈아낄 데이터를 보내주고
  // delete 삭제할 todo id를 보내주고

  const doUpdate = () => {
    navigate(`/edit/${id}`);
  };

  const doDelete = () => {
    dispatch(__deleteTodo(id));
    navigate("/");
  };

  //data를 module을 통해 db.json에 있는 정보를 select해서 가져오는 것
  //store에 저장된 todo
  //deep하게 들어가게 되는데 state의 todoModule의 todo에 있는 걸 가져오게 된다.
  return (
    <div>
      <Box>
        <TitleBox>
          <Title className="title">제목 : {todoData.title}</Title>
          <Title className="date">날짜 : {todoData.date}</Title>
        </TitleBox>
        <Content className="text">{todoData.content}</Content>
        <ButtonBox>
          <Btn onClick={doUpdate}>수정</Btn>
          <Btn onClick={doDelete}>삭제</Btn>
        </ButtonBox>
      </Box>
      {/*?는 옵셔널 체이닝 optionalChaining */}
      <Card />
    </div>
  );
}
export default Todo;

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

const Title = styled.div`
  padding: 5px;
  flex-grow: 0.2;
  border-radius: 5px;
  border: 2px solid black;
  justify-content: center;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid rgb(8, 10, 10);
  border-radius: 4px;
  padding: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: space-between;
`;

const Btn = styled.button`
  background: white;
  width: 48%;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
`;
