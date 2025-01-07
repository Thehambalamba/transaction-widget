import type { Transaction } from "../types/transaction";
import TransactionDetails from "./transaction-details";

type Props = {
  transactions: Transaction[];
  isPending: boolean;
};

function TransactionList({ transactions, isPending }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {transactions.map(
        ({
          id,
          status,
          value,
          unit,
          receiver,
          sender,
          approvalProgress,
          timestamp,
        }) => (
          <TransactionDetails
            key={id}
            status={status}
            value={value}
            unit={unit}
            receiver={receiver}
            sender={sender}
            approvalProgress={approvalProgress}
            isPending={isPending}
            timestamp={timestamp}
          />
        )
      )}
    </div>
  );
}

export default TransactionList;
