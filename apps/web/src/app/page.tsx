import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import Button from '@repo/common/components/Button';
import { testCode } from '@repo/common';
import { getArticle, getArticles } from '@repo/common/mock';
import { useState } from 'react';

export default function ListPage() {
  console.log(getArticles());
  testCode();
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className="flex items-center justify-between w-full">
        <div className="text-2xl">velog</div>
        <div>
          <i><AiOutlineBell /></i>
          <i><AiOutlineSearch /></i>
          {/* <button type="button">로그인</button> */}
          {/* <Button>asdf</Button> */}
          <Button name="로그인" />
        </div>
      </header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}
