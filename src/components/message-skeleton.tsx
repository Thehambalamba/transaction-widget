import Skeleton from "./skeletons/skeleton";

function MessageSkeleton() {
  return (
    <div className="flex flex-col gap-2 m-2 mt-3 mb-4 xl:gap-[10px] xl:h-56 xl:flex xl:justify-center xl:m-0 xl:p-6  2xl:h-[248px]">
      <Skeleton className="bg-secondarySand50 w-[177px] h-[20px] xl:w-[333px] xl:h-[44px]" />
      <Skeleton className="bg-secondarySand50 w-[135px] h-[20px] xl:w-[222px] xl:h-[44px]" />
    </div>
  );
}

export default MessageSkeleton;
