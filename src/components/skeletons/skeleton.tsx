type Props = {
  className?: string;
};

export default function Skeleton({ className = "" }: Props) {
  return <div className={`rounded-[50px] animate-pulse ${className}`} />;
}
