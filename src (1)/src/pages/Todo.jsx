import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getTodo, __deleteTodo } from "../redux/modules/todoModule";
import Card from "../components/card/Card";

function Todo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { todoData, isLoading } = useSelector((state) => state.todo);
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
      <p className="title">제목 : {todoData.title}</p>
      <p className="date">날짜 : {todoData.date}</p>
      <div className="text">내용 : {todoData.content}</div>
      <ButtonBox>
        <Btn onClick={doUpdate}>수정</Btn>
        <Btn onClick={doDelete}>삭제</Btn>
      </ButtonBox>
      {/*?는 옵셔널 체이닝 optionalChaining */}
      <Card />
    </div>
  );
}
export default Todo;

const ButtonBox = styled.div`
  width: 100%;
  height: 30px;
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
