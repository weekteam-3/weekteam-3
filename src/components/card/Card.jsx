import React, { useEffect } from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import { __getCommentById } from "../../redux/modules/cardSlice";
import { __addComment } from "../../redux/modules/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CardItem from "./CardItem";

function Card() {
  const dispatch = useDispatch();

  // 지금 현재 보고 있는 게시물 아이디 필요 -> params로 가져옴 -> 현재 id가 너무 많기때문에 헷갈림 -> 이거는 id에서 feedId로 변경할게요
  const params = useParams();
  const feedId = params.id;

  // feedId를 가지고 db.json에서 현재 게시물에 속한 댓글 다 뽑아내야함
  // 언제? 페이지에 처음들어왔을때 + feedId가 변경될때마다 (params값이 변경될때마다)
  useEffect(() => {
    dispatch(__getCommentById(feedId));
  }, [dispatch, feedId]);

  // useSelector로 불러와서 이제부터 commentData라고 불러주는 데이터는 현재 보고 있는 게시물의 댓글리스트입니다.
  const commentData = useSelector((state) => state.CardSlice.comments);

  const [userName, onChangeNameHandler, setUserName] = useInput();
  const [userComment, onChangeCommentHandler, setUserComment] = useInput();

  console.log({ userName });
  const onCreate = () => {
    // input창에 새로 입력하는 댓글 내용
    const newComment = {
      todoId: feedId,
      userName: userName,
      userComment: userComment,
    };

    // 새로 댓글 추가
    dispatch(__addComment(newComment));

    // 새로운 리스트 받아오기
    dispatch(__getCommentById(feedId));

    // 빈칸만들기
    setUserName("");
    setUserComment("");
  };

  return (
    <CommentBox>
      {/* 댓글 입력하는 부분 */}
      <CommentEdit>
        <NameInput
          type="text"
          placeholder={"이름"}
          minLength={2}
          name="userName"
          onChange={onChangeNameHandler}
          value={userName}
        />
        <ContentInput
          minLength={10}
          type="text"
          placeholder={"댓글을 적어주세요"}
          name="userComment"
          onChange={onChangeCommentHandler}
          value={userComment}
        />
        <AddComment type={"button"} onClick={onCreate}>
          추가하기
        </AddComment>
      </CommentEdit>

      {/* 댓글 리스트 부분 */}
      <CommentList>
        {commentData?.map((comments) => (
          // 수정버튼 하나 누르면 모든 댓글들이 편집 모드 되는건...
          // 원래 여기 map안에서 편집시 input/buttons를 다 있던걸 component 하나로 분리해서 빼서 수정했습니다.
          <CardItem comments={comments} feedId={feedId} />
        ))}
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
