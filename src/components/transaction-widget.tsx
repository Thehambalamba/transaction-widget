import NavArrow from "./icons/nav-arrrow";
import TabButton from "./tab-button";
import TransactionList from "./transaction-list";
import type { transactionsResponse } from "../___mocks___/transactions-response";

type Props = {
  tabs: string[];
  activeTab: string;
  changeActiveTab: (event: React.MouseEvent<HTMLButtonElement>) => void;
  transactions: typeof transactionsResponse | null;
};

function TransactionWidget({
  tabs,
  activeTab,
  changeActiveTab,
  transactions,
}: Props) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 xl:gap-4">
          <div className="h-8 p-2 bg-secondarySand200 rounded-[74.89px] border-secondarySand300 justify-start items-start inline-flex xl:w-11 xl:h-11 2xl:h-[60px] 2xl:w-[60px] xl:justify-center xl:items-center">
            <NavArrow className="xl:w-5 xl:h-5 2xl:h-7 2xl:w-7" />
          </div>
          <p className="text-charcoal text-base font-normal font-['Basis Grotesque Pro'] leading-normal xl:leading-tight 2xl:text-lg 2xl:leading-snug">
            Transactions
          </p>
        </div>
        <div className="h-[26px] p-0.5 bg-secondarySand200 rounded-[20px] border-secondarySand50 justify-center items-center inline-flex 2xl:p-[3px] 2xl:h-[32px]">
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
      {transactions && (
        <TransactionList
          transactions={
            activeTab === "History"
              ? transactions.history
              : transactions.pending
          }
          isPending={activeTab !== "History"}
        />
      )}
    </>
  );
}

export default TransactionWidget;
