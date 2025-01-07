import { TransactionStatus } from "../types/enums";
import type { Transaction } from "../types/transaction";

type Props = Pick<Transaction, "status">;

function StatusBadge({ status }: Props) {
  const statusStyles = {
    [TransactionStatus.Approved]: "bg-primaryBlueSky50 text-primaryBlueSky900",
    [TransactionStatus.Submitted]: "bg-secondarySand200 text-secondarySand950",
    [TransactionStatus.Rejected]: "bg-primaryOrange50 text-primaryOrange500",
  };

  return (
    <div
      className={`px-3 py-1  rounded-2xl justify-start items-center gap-1 inline-flex ${statusStyles[status]}`}
    >
      <p className="text-inherit text-xs font-normal font-['Basis Grotesque Pro'] leading-[14px] pt-0.5">
        {status}
      </p>
    </div>
  );
}

export default StatusBadge;
