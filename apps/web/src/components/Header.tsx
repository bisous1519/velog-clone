'use client';

import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import { getArticle } from '@repo/common/mock';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();
  const [writer, setWriter] = useState<string>();

  useEffect(() => {
    console.log(pathName, writer);
  }, []);
  useEffect(() => {
    if (pathName === '/') {
      setWriter(undefined);
    } else {
      const articleId = pathName.split('/').pop();
      if (articleId) {
        setWriter(getArticle(parseInt(articleId)).user);
      }
    }
  }, [pathName]);
  return (
    <header className="flex items-center justify-between w-full">
      <div className="text-2xl font-semibold">{writer ? `${writer}.log` : 'eomlog' }</div>
      <div className="flex items-center gap-5">
        <i><AiOutlineBell fontSize={22} /></i>
        <i><AiOutlineSearch fontSize={22} /></i>
        <Button name="로그인" className="bg-black text-white" />
      </div>
    </header>
  );
}
