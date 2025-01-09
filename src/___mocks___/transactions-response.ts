import { TransactionStatus } from "../types/enums";
import type { Transaction } from "../types/transaction";
import { getRandomAddress } from "../utils/address-generator";
import { generateRandomTimestamp } from "../utils/date-utils";

export type TransactionResponse = Transaction[];

const createTransaction = (
  id: number,
  unit: string,
  value: number,
  approvalProgress: string,
  status: TransactionStatus,
  submited: boolean
): Transaction => {
  const possibleStatuses = [
    TransactionStatus.Approved,
    TransactionStatus.Rejected,
    TransactionStatus.Submitted,
  ];

  return {
    id,
    sender: getRandomAddress(unit),
    receiver: getRandomAddress(unit),
    value,
    unit,
    approvalProgress,
    timestamp: generateRandomTimestamp(),
    status: submited
      ? possibleStatuses[Math.floor(Math.random() * possibleStatuses.length)]
      : status,
    submited,
  };
};

export const transactionsResponse: TransactionResponse = [
  createTransaction(1, "BTC", 100, "2/5", TransactionStatus.Submitted, true),
  createTransaction(2, "BTC", 250, "3/4", TransactionStatus.Rejected, false),
  createTransaction(3, "OP", 300, "1/2", TransactionStatus.Submitted, true),
  createTransaction(4, "AVAX", 400, "3/4", TransactionStatus.Submitted, true),
  createTransaction(5, "SUI", 500, "0/3", TransactionStatus.Approved, false),
  createTransaction(6, "BTC", 600, "4/5", TransactionStatus.Submitted, true),
  createTransaction(7, "BTC", 700, "2/3", TransactionStatus.Rejected, false),
  createTransaction(8, "OP", 800, "0/1", TransactionStatus.Submitted, true),
  createTransaction(9, "AVAX", 900, "3/5", TransactionStatus.Submitted, true),
  createTransaction(10, "STR", 10, "4/5", TransactionStatus.Rejected, false),
  createTransaction(11, "BTC", 100, "2/5", TransactionStatus.Submitted, true),
  createTransaction(12, "BTC", 250, "3/4", TransactionStatus.Rejected, false),
  createTransaction(13, "OP", 300, "1/2", TransactionStatus.Submitted, true),
  createTransaction(14, "AVAX", 400, "3/4", TransactionStatus.Submitted, true),
  createTransaction(15, "SUI", 500, "0/3", TransactionStatus.Approved, false),
  createTransaction(16, "BTC", 600, "4/5", TransactionStatus.Submitted, true),
  createTransaction(17, "BTC", 700, "2/3", TransactionStatus.Rejected, false),
  createTransaction(18, "OP", 800, "0/1", TransactionStatus.Submitted, true),
  createTransaction(19, "AVAX", 900, "3/5", TransactionStatus.Submitted, true),
  createTransaction(20, "STR", 10, "4/5", TransactionStatus.Rejected, false),
  createTransaction(21, "BTC", 100, "2/5", TransactionStatus.Submitted, true),
  createTransaction(22, "BTC", 250, "3/4", TransactionStatus.Rejected, false),
  createTransaction(23, "OP", 300, "1/2", TransactionStatus.Submitted, true),
  createTransaction(24, "AVAX", 400, "1/4", TransactionStatus.Submitted, true),
  createTransaction(25, "SUI", 500, "0/3", TransactionStatus.Approved, false),
  createTransaction(26, "BTC", 600, "2/5", TransactionStatus.Submitted, true),
  createTransaction(27, "BTC", 700, "2/3", TransactionStatus.Rejected, false),
  createTransaction(28, "OP", 800, "0/1", TransactionStatus.Submitted, true),
  createTransaction(29, "AVAX", 900, "3/5", TransactionStatus.Submitted, true),
  createTransaction(30, "STR", 20, "4/5", TransactionStatus.Rejected, false),
  createTransaction(31, "BTC", 100, "2/5", TransactionStatus.Submitted, true),
  createTransaction(32, "BTC", 250, "3/4", TransactionStatus.Rejected, false),
  createTransaction(33, "OP", 300, "1/2", TransactionStatus.Submitted, true),
  createTransaction(34, "AVAX", 400, "1/4", TransactionStatus.Submitted, true),
  createTransaction(35, "SUI", 500, "0/3", TransactionStatus.Approved, false),
  createTransaction(36, "BTC", 600, "3/5", TransactionStatus.Submitted, true),
  createTransaction(37, "BTC", 700, "2/3", TransactionStatus.Rejected, false),
  createTransaction(38, "OP", 800, "0/1", TransactionStatus.Submitted, true),
  createTransaction(39, "AVAX", 900, "3/5", TransactionStatus.Submitted, true),
  createTransaction(40, "STR", 20, "4/5", TransactionStatus.Rejected, false),
];
