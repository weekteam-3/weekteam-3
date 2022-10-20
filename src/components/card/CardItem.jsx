import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  __deleteComment,
  __getCommentById,
  __updateComment,
} from "../../redux/modules/cardSlice";
import useInput from "../hooks/useInput";
import DeleteSrc from "./delete.png";
import UpdateSrc from "./update.png";

const CardItem = ({ comments, feedId }) => {
  const dispatch = useDispatch();

  // 편집 모드 or 일반 모드  state / 초기에는 일반모드 (false)
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const [a, setA] = useState(comments.userComment);

  const onChangeBody = (e) => {
    const inputValue = e.target.value;
    setA(inputValue);
  };

  //   편집 모드일때 input값을 가져오기 위한 부분
  const [userBody, onChangeBodyHandler, setUserBody] = useInput();
  console.log("이거이에요", onChangeBodyHandler);
  // 취소/연필모양 버튼을 누를때
  const cancelAndUpdateBtn = () => {
    // 풀어서 생각하면 밑에 주석해놓은것임. 근데 어쨌든 둘 다 isUpdateMode를 바꿔주기만 하는거니깐 이렇게 한줄로 쓰는거 가능
    setIsUpdateMode(!isUpdateMode);
    // setA(onChangeBodyHandler.inputValue)
    // if (isUpdateMode) {
    //   // 버튼이 취소일때
    //   setIsUpdateMode(!isUpdateMode);
    // } else {
    //   // 버튼이 연필모양일때
    //   setIsUpdateMode(!isUpdateMode);
    // }
    setUserBody(userBody);
    console.log(userBody);
  };

  // 저장/쓰레기통 아이콘 누를때
  // (commentId)는 밑에서 클릭할때 함수에 감싸서 보내준 comments.id입니다.
  const saveAndDeleteBtn = (commentId) => {
    if (isUpdateMode) {
      // 저장일때
      const payload = {
        // 현재 수정하는 댓글의 아이디를 같이 redux thunk로 보내줘야함
        id: commentId,

        // edit 모드일때 나오는 input > 텍스트 입력때마다 onChangeBodyHandler가 실행 > userBody 값이 변경됨
        // 그 값이 새로 변경된 댓글내용이다. 고로 이거를 보내야한다.
        userComment: a,
      };

      // 새로운 정보를 모아서 update 요청
      dispatch(__updateComment(payload));
      dispatch(__getCommentById(feedId));
      setIsUpdateMode(!isUpdateMode);
    } else {
      // 쓰레기통 아이콘일때
      // delete 요청
      dispatch(__deleteComment(commentId));
    }
  };

  return (
    <>
      <Comment>
        <Name>{comments.userName}</Name>
        {isUpdateMode ? (
          <ContentInput
            maxLength={10}
            type={"text"}
            placeholder={"댓글을 적어주세요"}
            name="userContent"
            onChange={onChangeBody}
            // onChange={onChangeBodyHandler}
            value={a}
          />
        ) : (
          <Content>{comments.userComment}</Content>
        )}
        <Buttons>
          <button onClick={cancelAndUpdateBtn}>
            {isUpdateMode ? "취소" : <Update src={UpdateSrc} />}
          </button>

          {/* () => saveAndDeleteBtn(comments.id)에서 comments.id는 현재 수정중인 댓글 아이디 */}
          {/* saveAndDeleteBtn 함수에 감싸서 보내줌 */}
          <button onClick={() => saveAndDeleteBtn(comments.id)}>
            {isUpdateMode ? "저장" : <Delete src={DeleteSrc} />}
          </button>
        </Buttons>
      </Comment>
    </>
  );
};

export default CardItem;

// 이름과 내용이 추가되어 작성된 댓글칸입니다.
const Comment = styled.div`
  border: 1px solid black;
  /* border-radius: 5px; */

  width: 760px;
  height: 50px;

  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 작성된 댓글 안의 이름 칸입니다.
const Name = styled.div`
  background-color: red;

  width: 105px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 작성된 댓글 안의 내용칸입니다.
const Content = styled.div`
  background-color: red;

  width: 500px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 작성된 댓글 안의 수정,삭제 버튼 칸입니다.
const Buttons = styled.div`
  /* background-color: red; */
  border: 1px solid gray;
  width: 120px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 작성된 댓글을 수정하는 버튼입니다.
const Update = styled.img`
  background-image: url(${UpdateSrc});
  /* border: 1px solid black; */
  margin-right: 10px;
  width: 25px;
`;

// 작성된 댓글을 삭제하는 버튼입니다.
const Delete = styled.img`
  background-image: url(${DeleteSrc});
  /* border: 1px solid transparent; */
  width: 25px;
`;

// 댓글작성란에서 댓글 내용을 적는 칸입니다
const ContentInput = styled.input`
  border: 1px solid black;
  /* border-radius: 5px; */

  width: 495px;
  height: 30px;
`;
