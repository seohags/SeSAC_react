import React from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function BoardDetail() {
    const { boardId } = useParams();
  return (
    <>
    <Header/>
    <h2>{boardId} 번 게시글 내용입니다</h2>
    </>
  )
}
