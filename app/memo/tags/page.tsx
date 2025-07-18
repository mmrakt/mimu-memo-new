import Image from 'next/image';
import Link from 'next/link';
import { getTagIconPath } from '@/memo/components/utils';
import { getAllTags } from '@/memo/services/tag-service';

export default async function TagsPage() {
  const tags = await getAllTags();

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Tag list</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tags.map((tag) => (
            <Link
              key={tag.name}
              href={`/memo/tag/${tag.name}`}
              className="group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400 transition-colors"
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={getTagIconPath(tag.name)}
                  alt={`${tag.name} icon`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-grow">
                <h2 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                  {tag.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tag.count} 件の記事</p>
              </div>
            </Link>
          ))}
        </div>

        {tags.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            タグが見つかりませんでした。
          </p>
        )}
      </div>
    </div>
  );
}
