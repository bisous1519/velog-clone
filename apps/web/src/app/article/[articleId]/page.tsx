import { ArticleType } from '@repo/common/type';
import { LuDot } from 'react-icons/lu';
import Image from 'next/image';

type PropsType = {
  // params:{ articleId: string },
  searchParams: { post: string },
};

export default function DetailPage({ searchParams }: PropsType) {
  const article:ArticleType = JSON.parse(searchParams.post);
  // console.log('detailpage searchParams', searchParams.post);
  return (
    <section className="mt-20 ml-auto mr-auto w-4/5">
      <h1 className="text-[3.3rem]">{article.title}</h1>
      <div className="flex items-center gap-0.5 mt-8">
        <span className="text-lg font-semibold text-black">{article.user}</span>
        <span className="text-base text-gray-400"><LuDot /></span>
        <span className="text-base text-gray-400">{new Date(article.publishedAt).toLocaleDateString()}</span>
      </div>
      <section className="h-60 overflow-hidden mt-5">
        <Image
          src={String(article.thumbnail)}
          alt="thumbnail"
          width={0}
          height={0}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </section>
      <article className="text-xl/10 mt-10">{article.body}</article>
    </section>
  );
}
