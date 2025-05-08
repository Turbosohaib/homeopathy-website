import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div>
      {/* Hero Section Skeleton */}
      <section className="relative h-[83vh] sm:h-[84.5vh]">
        <Skeleton className="h-full w-full" />
      </section>

      <main className="flex-1 w-full flex flex-col justify-center items-center">
        {/* Breadcrumb Skeleton */}
        <section className="border-b bg-muted/30 w-full px-6 z-10">
          <div className="py-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-16 pt-5 w-full">
          <div className="px-6 sm:pr-10 sm:pl-0">
            <div className="grid md:grid-cols-10 gap-10">
              {/* Sidebar Skeleton */}
              <div className="md:col-span-3">
                <Skeleton className="h-[600px] w-full rounded-lg" />
              </div>

              {/* Main Content Skeleton */}
              <div className="md:col-span-7 pt-10">
                <Skeleton className="h-10 w-64 mb-4" />
                <Skeleton className="h-1 w-20 mb-8" />
                <Skeleton className="h-24 w-full mb-10" />

                {/* Content Cards Skeletons */}
                <div className="space-y-10">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="border-0 shadow-lg bg-[#f7fcf9] p-6 rounded-lg">
                      <div className="flex items-start">
                        <Skeleton className="h-8 w-8 mr-4 flex-shrink-0 rounded-md" />
                        <div className="w-full">
                          <Skeleton className="h-7 w-64 mb-3" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-3/4 mb-4" />

                          <div className="pl-6 space-y-2 mt-4">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                          </div>

                          <Skeleton className="h-4 w-full mt-4" />
                          <Skeleton className="h-4 w-5/6 mt-2" />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Patient Experiences Skeleton */}
                  <div className="bg-muted/30 p-6 rounded-lg mt-8">
                    <Skeleton className="h-7 w-48 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />

                    <div className="pl-6 space-y-2 mt-4">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>

                    <Skeleton className="h-4 w-full mt-4" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                  </div>

                  {/* Conclusion Skeleton */}
                  <div className="mt-10">
                    <Skeleton className="h-7 w-48 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />

                    <div className="pl-6 space-y-2 mt-4">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>

                    <Skeleton className="h-4 w-full mt-4" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                  </div>

                  {/* Navigation Buttons Skeleton */}
                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <Skeleton className="h-10 w-48" />
                    <Skeleton className="h-10 w-64" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
