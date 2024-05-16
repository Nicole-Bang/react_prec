import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "방미연",
        comment: "안녕하세요 React 강의 듣는 중 입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요.",
    },
    {
        name: "양정인",
        comment: "저도 리액트 배워보고 싶어요!",
    },
];

function CommentList(props) {
    return(  
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
