import type { Transaction } from "../types/transaction";
import TransactionDetails from "./transaction-details";

type Props = {
  transactions: Transaction[];
};

function TransactionList({ transactions }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {transactions.length ? (
        transactions.map(
          ({
            id,
            status,
            value,
            unit,
            receiver,
            sender,
            approvalProgress,
            timestamp,
            submited,
          }) => (
            <TransactionDetails
              key={id}
              status={status}
              value={value}
              unit={unit}
              receiver={receiver}
              sender={sender}
              approvalProgress={approvalProgress}
              timestamp={timestamp}
              submited={submited}
              id={id}
            />
          )
        )
      ) : (
        <h1>No pending transactions</h1>
      )}
    </div>
  );
}

export default TransactionList;
