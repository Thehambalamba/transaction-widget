import { create } from "zustand";
import type { Transaction } from "../types/transaction";
import { TransactionStatus } from "../types/enums";

type State = {
  transactions: Transaction[];
};

type Actions = {
  setTransactionsResponse: (transaction: Transaction[]) => void;
  incrementApproval: (id: number) => void;
  approve: (id: number) => void;
  reject: (id: number) => void;
};

const useTransactionStore = create<State & Actions>((set) => ({
  transactions: [],
  setTransactionsResponse: (transactions: Transaction[]) =>
    set(() => ({
      transactions: transactions.filter(
        (t): t is Transaction => t !== undefined
      ),
    })),
  incrementApproval: (id: number) =>
    set((state) => {
      const transactions = state.transactions.map((transaction) =>
        transaction.id === id
          ? {
              ...transaction,
              approvalProgress: (() => {
                const [approval, total] =
                  transaction.approvalProgress.split("/");
                return `${+approval + 1}/${total}`;
              })(),
            }
          : transaction
      );

      return {
        ...state,
        transactions,
      };
    }),
  approve: (id: number) =>
    set((state) => {
      const updatedTransaction = state.transactions.find(
        (transaction) => transaction.id === id
      );
      if (!updatedTransaction) return state;

      return {
        ...state,
        transactions: [
          {
            ...updatedTransaction,
            status: TransactionStatus.Approved,
            submited: true,
          },
          ...state.transactions.filter((t) => t.id !== id),
        ],
      };
    }),
  reject: (id: number) =>
    set((state) => {
      const updatedTransaction = state.transactions.find(
        (transaction) => transaction.id === id
      );
      if (!updatedTransaction) return state;

      return {
        ...state,
        transactions: [
          {
            ...updatedTransaction,
            status: TransactionStatus.Rejected,
            submited: true,
          },
          ...state.transactions.filter((t) => t.id !== id),
        ],
      };
    }),
}));

export default useTransactionStore;
