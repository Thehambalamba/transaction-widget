import { TransactionStatus } from "../types/enums";
import type { Transaction } from "../types/transaction";
import { getRandomAddress } from "../utils/address-generator";
import { generateRandomTimestamp } from "../utils/date-utils";

type TransactionResponse = {
  firstName: string;
  lastName: string;
  history: Transaction[];
  pending: Transaction[];
};

const createTransaction = (
  id: number,
  unit: string,
  value: number,
  approvalProgress: string,
  status: TransactionStatus
): Transaction => ({
  id,
  sender: getRandomAddress(unit),
  receiver: getRandomAddress(unit),
  value,
  unit,
  approvalProgress,
  timestamp: generateRandomTimestamp(),
  status,
});

export const transactionsResponse: TransactionResponse = {
  firstName: "Nikola",
  lastName: "Pervic",
  history: [
    createTransaction(1, "BTC", 100, "2/5", TransactionStatus.Approved),
    createTransaction(2, "BTC", 250, "3/4", TransactionStatus.Rejected),
    createTransaction(3, "OP", 300, "1/2", TransactionStatus.Submitted),
    createTransaction(4, "AVAX", 400, "4/4", TransactionStatus.Approved),
    createTransaction(5, "SUI", 500, "0/3", TransactionStatus.Submitted),
    createTransaction(6, "BTC", 600, "5/5", TransactionStatus.Approved),
    createTransaction(7, "BTC", 700, "2/3", TransactionStatus.Rejected),
    createTransaction(8, "OP", 800, "1/1", TransactionStatus.Approved),
    createTransaction(9, "AVAX", 900, "3/5", TransactionStatus.Submitted),
    createTransaction(10, "STR", 10, "4/5", TransactionStatus.Rejected),
    createTransaction(11, "BTC", 100, "2/5", TransactionStatus.Approved),
    createTransaction(12, "BTC", 250, "3/4", TransactionStatus.Rejected),
    createTransaction(13, "OP", 300, "1/2", TransactionStatus.Submitted),
    createTransaction(14, "AVAX", 400, "4/4", TransactionStatus.Approved),
    createTransaction(15, "SUI", 500, "0/3", TransactionStatus.Submitted),
    createTransaction(16, "BTC", 600, "5/5", TransactionStatus.Approved),
    createTransaction(17, "BTC", 700, "2/3", TransactionStatus.Rejected),
    createTransaction(18, "OP", 800, "1/1", TransactionStatus.Approved),
    createTransaction(19, "AVAX", 900, "3/5", TransactionStatus.Submitted),
    createTransaction(20, "STR", 10, "4/5", TransactionStatus.Rejected),
  ],
  pending: [
    createTransaction(1, "BTC", 100, "2/5", TransactionStatus.Approved),
    createTransaction(2, "BTC", 250, "3/4", TransactionStatus.Rejected),
    createTransaction(3, "OP", 300, "1/2", TransactionStatus.Submitted),
    createTransaction(4, "AVAX", 400, "4/4", TransactionStatus.Approved),
    createTransaction(5, "SUI", 500, "0/3", TransactionStatus.Submitted),
    createTransaction(6, "BTC", 600, "5/5", TransactionStatus.Approved),
    createTransaction(7, "BTC", 700, "2/3", TransactionStatus.Rejected),
    createTransaction(8, "OP", 800, "1/1", TransactionStatus.Approved),
    createTransaction(9, "AVAX", 900, "3/5", TransactionStatus.Submitted),
    createTransaction(10, "STR", 20, "4/5", TransactionStatus.Rejected),
    createTransaction(11, "BTC", 100, "2/5", TransactionStatus.Approved),
    createTransaction(12, "BTC", 250, "3/4", TransactionStatus.Rejected),
    createTransaction(13, "OP", 300, "1/2", TransactionStatus.Submitted),
    createTransaction(14, "AVAX", 400, "4/4", TransactionStatus.Approved),
    createTransaction(15, "SUI", 500, "0/3", TransactionStatus.Submitted),
    createTransaction(16, "BTC", 600, "5/5", TransactionStatus.Approved),
    createTransaction(17, "BTC", 700, "2/3", TransactionStatus.Rejected),
    createTransaction(18, "OP", 800, "1/1", TransactionStatus.Approved),
    createTransaction(19, "AVAX", 900, "3/5", TransactionStatus.Submitted),
    createTransaction(20, "STR", 20, "4/5", TransactionStatus.Rejected),
  ],
};
