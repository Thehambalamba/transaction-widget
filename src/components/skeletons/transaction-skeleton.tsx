import Skeleton from "./skeleton";

function TransactionSkeleton() {
  return (
    <div className="w-full h-full bg-secondarySand50 rounded-2xl shadow-[0px_0px_8px_0px_rgba(232,221,209,0.40)] flex-col justify-start gap-6 inline-flex overflow-hidden p-3 xl:p-6 xl:gap-11">
      <div className="flex gap-2 items-center xl:gap-4">
        <Skeleton className="h-8 w-8 p-2 bg-secondarySand200 rounded-[74.89px] border-secondarySand300 xl:h-11 xl:w-11 2xl:w-[60px] 2xl:h-[60px]" />
        <Skeleton className="w-[159px] h-4 bg-secondarySand200 rounded-[50px] xl:h-5" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
        <Skeleton className="h-[88px] 2xl:h-[92px] w-full bg-secondarySand200 rounded-xl" />
      </div>
    </div>
  );
}

export default TransactionSkeleton;
