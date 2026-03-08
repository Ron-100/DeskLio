export default function DashboardSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">

      {/* Stat Cards */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl 
                       bg-white dark:bg-[#0F172A]
                       border border-gray-200 dark:border-zinc-800"
          >
            <div className="h-4 w-32 bg-gray-300 dark:bg-zinc-700 rounded mb-4"></div>
            <div className="h-8 w-16 bg-gray-300 dark:bg-zinc-700 rounded"></div>
          </div>
        ))}

      </div>

      {/* Recent Projects Title */}
      <div className="h-6 w-48 bg-gray-300 dark:bg-zinc-700 rounded"></div>

      {/* Table Skeleton */}
      <div className="bg-white dark:bg-[#0F172A] 
                      border border-gray-200 dark:border-zinc-800 
                      rounded-2xl overflow-hidden mask-b-from-0%">

        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 dark:border-zinc-800">
          <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded"></div>
        </div>

        {/* Table Rows */}
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 dark:border-zinc-800"
          >
            <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-2/3"></div>
          </div>
        ))}

      </div>

    </div>
  );
}