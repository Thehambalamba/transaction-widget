import type { TransactionStatus } from "./enums";

export interface Transaction {
  id: number;
  sender: string; // Wallet address initiating the transaction (truncated as needed)
  receiver: string; // Wallet address receiving the transaction (truncated as needed)
  value: number; // Any positive number (e.g., 100)
  unit: string; // Any long string (e.g., BTC, OP)
  approvalProgress: string; // Approvals received out of total required (e.g., 2/5)
  timestamp: string; // Relative time showing when the transaction was created (e.g., 1 hr ago)
  status: TransactionStatus;
  submited: boolean;
}
