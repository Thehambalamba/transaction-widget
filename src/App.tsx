import { useState, useEffect, useRef } from "react";
import { transactionsResponse } from "./___mocks___/transactions-response";
import WelcomeMessage from "./components/welcome-message";
import TransactionWidget from "./components/transaction-widget";
import useWindowDimensions from "./hooks/useWindowDimensions";
import TransactionSkeleton from "./components/skeletons/transaction-skeleton";

function App() {
  const { height: windowHeight, isDesktop } = useWindowDimensions();
  const tabs = ["Pending", "History"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [transactions, setTransactions] = useState<
    typeof transactionsResponse | null
  >(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      // Simulate server delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setTransactions(transactionsResponse);
    };

    fetchTransactions();
  }, []);

  function changeActiveTab(event: React.MouseEvent<HTMLButtonElement>) {
    setActiveTab(event.currentTarget.name);
  }

  const desktopPadding = 84;
  const mobilePadding = desktopPadding - 24;

  const height = ref.current?.offsetHeight ?? 0;
  const widgetHeight =
    windowHeight - (height + (isDesktop ? desktopPadding : mobilePadding));

  return (
    <div className="p-5 flex flex-col gap-4 xl:pt-12 xl:p-6 xl:gap-3 xl:min-h-screen">
      <div ref={ref}>
        <WelcomeMessage
          firstName={transactions?.firstName}
          lastName={transactions?.lastName}
        />
      </div>
      <div className="w-full xl:grid xl:grid-cols-3 xl:gap-3 xl:flex-1">
        <div className="hidden xl:block h-full p-6 bg-secondarySand50 rounded-[20px]" />
        {!transactions ? (
          <div className="overflow-hidden" style={{ maxHeight: widgetHeight }}>
            <TransactionSkeleton />
          </div>
        ) : (
          <div
            className="w-full h-full bg-secondarySand50 rounded-2xl shadow-[0px_0px_8px_0px_rgba(232,221,209,0.40)] flex-col justify-start gap-6 inline-flex p-3 xl:p-6 xl:gap-11 xl:min-w-[375px] overflow-y-scroll scrollbar-hide"
            style={{ height: widgetHeight }}
          >
            <TransactionWidget
              tabs={tabs}
              activeTab={activeTab}
              changeActiveTab={changeActiveTab}
              transactions={transactions}
            />
          </div>
        )}

        <div className="hidden xl:block h-full p-6 bg-secondarySand50 rounded-[20px]" />
      </div>
    </div>
  );
}

export default App;
