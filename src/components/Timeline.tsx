import { NEWS } from "@config";

export default function Timeline() {
  return (
    <ol className="relative mt-2 border-s border-gray-200 dark:border-gray-700">
      {NEWS.map(data => (
        <li className="mb-1 ms-4" key={`${data.date}-${data.title}`}>
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
          <time className="text-sm font-normal leading-none">
            {data.date} - {data.title}
          </time>
        </li>
      ))}
    </ol>
  );
}
