import { MdRssFeed } from 'react-icons/md';
import { HiMiniArrowTrendingUp, HiOutlineClock } from 'react-icons/hi2';
import { getArticles } from '@repo/common/mock';
import { ArticleType } from '@repo/common/type';
import Card from '@/components/Card';
import { faker } from '@faker-js/faker';

export default function ListPage() {
  const articles: ArticleType[] = getArticles();
  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full">
      <nav className="mt-8">
        <ul className="flex gap-4 mb-8">
          <li className="flex items-center gap-2 pb-1.5 pl-1 pr-1 border-b-2 border-b-black">
            <i><HiMiniArrowTrendingUp fontSize="1.5rem" /></i>
            <span className="text-lg font-semibold">트렌딩</span>
          </li>
          <li className="flex items-center gap-2 pb-1.5 pl-1 pr-1">
            <i><HiOutlineClock fontSize="1.5rem" /></i>
            <span className="text-lg font-semibold">최신</span>
          </li>
          <li className="flex items-center gap-2 pb-1.5 pl-1 pr-1">
            <i><MdRssFeed fontSize="1.5rem" /></i>
            <span className="text-lg font-semibold">피드</span>
          </li>
        </ul>
      </nav>
      <main className="mt-10">
        <article className="list-none grid grid-cols-4 gap-8">
          {articles && articles.map((article) => (
            <Card key={faker.string.uuid()} article={article} />
          ))}
        </article>
      </main>
      <footer>footer</footer>
    </div>
  );
}
