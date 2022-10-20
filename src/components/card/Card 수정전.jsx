import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import DeleteSrc from "./delete.png";
import UpdateSrc from "./update.png";
import { useInput } from "../hooks/useInput";
import {
  __updateComment,
  __deleteComment,
} from "../../redux/modules/cardSlice";
import { __getCommentById } from "../../redux/modules/cardSlice";
import { __addComment } from "../../redux/modules/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

function Card() {
  const [inputs, setInputs] = useState({
    id: "",
    userName: "",
    userComment: "",
  });

  const commentData = useSelector((state) => state.CardSlice.comments);

  console.log("여기는", commentData);

  const params = useParams();
  const id = params.id;
  console.log("여기아이디야", params);

  const dispatch = useDispatch();
  // const { userName, userContent } = inputs;

  const [isUpdateMode, setIsUpdateMode] = useState(false);

  // const anotherAction = () => {
  //   setIsUpdateMode(!isUpdateMode);
  // };

  const [userName, onChangeNameHandler] = useInput();
  const [userComment, onChangeCommentHandler] = useInput();
  const [userBody, onChangeBodyHandler] = useInput();

  console.log(userName);
  console.log(userComment);
  const userData = {
    ...userName,
    ...userComment,
    ...userBody,
  };

  const [cards, setCards] = useState([
    {
      id: 1,
      name: "이복자",
      comment: "밥은 먹고 다니는겨?",
    },
  ]);

  const nextId = useRef("50");

  const onCreate = () => {
    const card = {
      id: 1,
      userName: "",
      userComment: "",
    };

    const addCommentData = {
      name: "",
      comment: "",
    };

    setCards(cards.concat(card));

    setInputs({
      userName: "",
      userComment: "",
    });

    nextId.current += 1;

    dispatch(__addComment(userData));
    dispatch(__getCommentById(id));

    // 게시물 아이디
  };

  useEffect(() => {
    dispatch(__getCommentById(id));
  }, [dispatch]);

  const saveAndDeleteBtn = () => {
    if (isUpdateMode) {
      const payload = {
        id: "",
        comments: "",
      };
      dispatch(__updateComment(payload));
    } else {
      dispatch(__deleteComment());
      // comments 의 todo id 를 찾아서, 지우는거 인데,
      // comment의 아이디
    }
  };
  console.log("너 들어오니?", commentData);
  return (
    <CommentBox>
      <CommentEdit>
        <NameInput
          type="text"
          placeholder={"이름"}
          minLength={2}
          name="userName"
          onChange={onChangeNameHandler}
          // value={userName}
        />
        <ContentInput
          minLength={10}
          type="text"
          placeholder={"댓글을 적어주세요"}
          name="userComment"
          onChange={onChangeCommentHandler}
          // value={userComment}
        ></ContentInput>
        <AddComment type={"button"} onClick={onCreate}>
          추가하기
        </AddComment>
      </CommentEdit>
      <CommentList>
        {commentData?.map((comments, index) => (
          <Comment key={index}>
            <Name>
              {/* 르탄이 */}
              {comments.userName}
            </Name>
            {isUpdateMode ? (
              <ContentInput
                maxLength={10}
                type={"text"}
                placeholder={"댓글을 적어주세요"}
                name="userContent"
                onChange={onChangeBodyHandler}
                // value={userBody}
              ></ContentInput>
            ) : (
              <Content>{comments.userName}</Content>
            )}
            ;
            <Buttons
              onClick={() => {
                setIsUpdateMode(!isUpdateMode);
              }}
            >
              <button>
                {isUpdateMode ? "취소" : <Update src={UpdateSrc} />}
              </button>
              <button onClick={saveAndDeleteBtn}>
                {isUpdateMode ? "저장" : <Delete src={DeleteSrc} />}
              </button>
            </Buttons>
          </Comment>
        ))}
        ;
      </CommentList>
    </CommentBox>
  );
}

export default Card;

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
  border: 1px solid black;
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
