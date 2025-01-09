import { useState, useEffect, useRef } from "react";
import {
  type TransactionResponse,
  transactionsResponse,
} from "./___mocks___/transactions-response";
import WelcomeMessage from "./components/welcome-message";
import TransactionWidget from "./components/transaction-widget";
import useWindowDimensions from "./hooks/useWindowDimensions";
import useTransactionStore from "./context/transactions";

function App() {
  const { height: windowHeight, isDesktop } = useWindowDimensions();
  const tabs = ["Pending", "History"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const setTransactionsResponse = useTransactionStore(
    (state) => state.setTransactionsResponse
  );

  useEffect(() => {
    const fetchTransactions = async () => {
      // Simulate server delay
      const response = await new Promise<TransactionResponse>((resolve) =>
        setTimeout(() => resolve(transactionsResponse), 2000)
      );

      setTransactionsResponse(response);
      setIsLoading(false);
    };

    fetchTransactions();
  }, [setTransactionsResponse]);

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
          firstName={"Nikola"}
          lastName={"Pervic"}
          isLoading={isLoading}
        />
      </div>
      <div className="w-full xl:grid xl:grid-cols-3 xl:gap-3 xl:flex-1">
        <div className="hidden xl:block h-full p-6 bg-secondarySand50 rounded-[20px]" />
        <TransactionWidget
          maxHeight={widgetHeight}
          tabs={tabs}
          activeTab={activeTab}
          isLoading={isLoading}
          changeActiveTab={changeActiveTab}
        />
        <div className="hidden xl:block h-full p-6 bg-secondarySand50 rounded-[20px]" />
      </div>
    </div>
  );
}

export default App;
