import NavArrow from "./icons/nav-arrrow";
import TabButton from "./tab-button";
import TransactionList from "./transaction-list";
import type { Transaction } from "../types/transaction";

type Props = {
  tabs: string[];
  activeTab: string;
  changeActiveTab: (event: React.MouseEvent<HTMLButtonElement>) => void;
  transactions: {
    history: Transaction[];
    pending: Transaction[];
  };
};

function TransactionWidget({
  tabs,
  activeTab,
  changeActiveTab,
  transactions,
}: Props) {
  return (
    <div className="min-w-p-3 bg-secondarySand50 rounded-2xl shadow-[0px_0px_8px_0px_rgba(232,221,209,0.40)] flex-col justify-start  gap-6 inline-flex overflow-hidden p-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 p-2 bg-secondarySand200 rounded-[74.89px] border-secondarySand300 justify-start items-start inline-flex">
            <NavArrow />
          </div>
          <p className="text-charcoal text-base font-normal font-['Basis Grotesque Pro'] leading-normal">
            Transactions
          </p>
        </div>
        <div className="h-[26px] p-0.5 bg-secondarySand200 rounded-[20px] border-secondarySand50 justify-center items-center inline-flex">
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              tab={tab}
              activeTab={activeTab}
              changeActiveTab={changeActiveTab}
            />
          ))}
        </div>
      </div>
      <TransactionList
        transactions={
          activeTab === "History" ? transactions.history : transactions.pending
        }
        isPending={activeTab !== "History"}
      />
    </div>
  );
}

export default TransactionWidget;
