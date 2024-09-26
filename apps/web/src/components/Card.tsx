import { ArticleType } from '@repo/common/type';
import Image from 'next/image';
import { LuDot } from 'react-icons/lu';
import { IoIosHeart } from 'react-icons/io';
import Link from 'next/link';

type CardPropsType = {
  article: ArticleType,
};

export default function Card({ article }: CardPropsType) {
  return (
    <Link
      href={`/article/${article.id}`}
      passHref
      className="w-80 bg-[#ffffff] transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-gray-300 hover:-translate-y-2"
    >
      <section className="h-40 overflow-hidden">
        <Image src={String(article.thumbnail)} alt="thumbnail" width={0} height={0} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </section>
      <article className="h-44 p-3 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 truncate">{article.title}</h3>
        <p className="text-gray-600 flex-1 line-clamp-3 ">{article.body}</p>
        <div className="flex items-center gap-0.5 mt-5">
          <span className="text-sm text-gray-400">{new Date(article.publishedAt).toLocaleDateString()}</span>
          <span className="text-sm text-gray-400"><LuDot /></span>
          <span className="text-sm text-gray-400">0개의 댓글</span>
        </div>
      </article>
      <section className="p-3 border-t border-gray-300 flex items-center justify-between">
        <ul className="flex items-center gap-2">
          <li className="rounded-full overflow-hidden">
            <Image src={String(article.thumbnail)} alt="profileImage" width={0} height={0} style={{ width: '2rem', height: '2rem', objectFit: 'cover' }} />
          </li>
          <li className="text-gray-400 text-[0.8rem]">by</li>
          <li className="text-[0.9rem] font-semibold">{article.user}</li>
        </ul>
        <div className="flex items-center gap-1">
          <i className="text-sm"><IoIosHeart /></i>
          <span className="text-[0.8rem] text-gray-600">25</span>
        </div>
      </section>
    </Link>
  );
}
