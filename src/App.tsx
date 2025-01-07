import { useState, useEffect } from "react";
import { transactionsResponse } from "./___mocks___/transactions-response";
import WelcomeMessage from "./components/welcome-message";
import TransactionWidget from "./components/transaction-widget";

function App() {
  const tabs = ["Pending", "History"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [transactions, setTransactions] = useState<
    typeof transactionsResponse | null
  >(null);

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

  return (
    <div className="p-5 flex flex-col gap-4 xl:pt-12 xl:p-6 xl:gap-3 xl:min-h-screen">
      <WelcomeMessage
        firstName={transactions?.firstName}
        lastName={transactions?.lastName}
      />
      <div className="w-full xl:grid xl:grid-cols-3 xl:gap-3 xl:flex-1">
        <div className="hidden xl:block h-full p-6 bg-[#fbfaf8] rounded-[20px]" />
        <TransactionWidget
          tabs={tabs}
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
          transactions={transactions}
        />
        <div className="hidden xl:block h-full p-6 bg-[#fbfaf8] rounded-[20px]" />
      </div>
    </div>
  );
}

export default App;
