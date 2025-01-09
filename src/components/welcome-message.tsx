import MessageSkeleton from "./skeletons/message-skeleton";

type Props = {
  firstName?: string;
  lastName?: string;
  isLoading: boolean;
};

export default function WelcomeMessage({
  firstName,
  lastName,
  isLoading,
}: Props) {
  if (isLoading) {
    return <MessageSkeleton />;
  }

  return (
    <div className="xl:h-56 2xl:h-[248px] xl:flex xl:items-center">
      <p className="text-charcoal text-xl font-normal font-['Basis Grotesque Pro'] leading-normal m-2 xl:text-[44px] xl:leading-[48px] xl:p-6 xl:m-0">
        Welcome back, <br />
        {firstName} {lastName}
      </p>
    </div>
  );
}
