import { NEWS } from "@config";

export default function Timeline() {
  return (
    <ol class="border-gray-200 dark:border-gray-700 relative mt-2 border-s">
      {NEWS.map(data => (
        <li class="mb-1 ms-4">
          <div class="bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
          <time class="text-gray-400 dark:text-gray-500 text-sm font-normal leading-none">
            {data.date} - {data.title}
          </time>
        </li>
      ))}
    </ol>
  );
}
