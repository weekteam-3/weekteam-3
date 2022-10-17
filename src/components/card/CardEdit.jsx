import React from "react";
import styled from "styled-components";
import DeleteSrc from "./delete.png";
import UpdateSrc from "./update.png";

function cardEdit() {
  const onClickHandler = (e) => {
    e.preventDefault();
    alert("제출완료!");
  };

  const onClickDeleteHandler = (e) => {
    e.preventDefault();
    alert("삭제되었습니다");
  };

  return (
    <CommentBox>
      <CommentEdit>
        <NameInput type={"text"} placeholder={"이름"} minLength={2}></NameInput>
        <ContentInput
          maxLength={10}
          type={"text"}
          placeholder={"댓글을 적어주세요"}
        ></ContentInput>
        <AddComment type={"button"} onClick={onClickHandler}>
          추가하기
        </AddComment>
      </CommentEdit>
      <CommentList>
        <Comment>
          <Content>여기에 글이 들어와요</Content>
          <Buttons>
            <Update>저장</Update>
            <Delete onClick={onClickDeleteHandler}>취소</Delete>
          </Buttons>
        </Comment>
      </CommentList>
    </CommentBox>
  );
}

export default cardEdit;

// 전체
const CommentBox = styled.div`
  border: 1px solid teal;

  margin: 300px auto;
  width: 800px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// 최상단 댓글작성란을 감싸는 칸입니다.
const CommentEdit = styled.div`
  border: 1px solid teal;

  width: 800px;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 댓글작성란에서 이름을 적는 칸입니다
const NameInput = styled.input`
  border: 1px solid black;
  /* border-radius: 5px; */
  display: flex;

  width: 100px;
  height: 30px;
  margin-left: 20px;
`;

// 댓글작성란에서 댓글 내용을 적는 칸입니다
const ContentInput = styled.input`
  border: 1px solid black;
  /* border-radius: 5px; */

  width: 495px;
  height: 30px;
`;

// 댓글작성란에서 추가하기 버튼 입니다.
const AddComment = styled.button`
  border: 1px solid teal;
  /* border-radius: 5px; */
  background-color: transparent;

  color: black;

  margin-right: 20px;
  width: 120px;
  height: 36px;
`;

// 댓글이 추가되어 나열될 추가될 리스트 칸입니다.
const CommentList = styled.div`
  width: 800px;
  height: 300px;
`;

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
// const Name = styled.div`
//   background-color: red;

//   width: 105px;
//   height: 40px;

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;

// 작성된 댓글 안의 내용칸입니다.
const Content = styled.div`
  background-color: red;

  width: 622px;
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

// 작성된 댓글 수정을 완료하는 버튼입니다.
const Update = styled.div`
  background-color: orange;
  margin-right: 10px;
  width: 30px;
  height: 30px;

  font-size: 15px;

  display: flex;
  align-items: center;
`;

// 작성된 댓글을 삭제하는 버튼입니다.
const Delete = styled.div`
  background-color: orange;
  border: 1px solid transparent;
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;

  font-size: 15px;
`;
