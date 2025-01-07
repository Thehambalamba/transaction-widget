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
      await new Promise((resolve) => setTimeout(resolve, 500));
      setTransactions(transactionsResponse);
    };

    fetchTransactions();
  }, []);

  function changeActiveTab(event: React.MouseEvent<HTMLButtonElement>) {
    setActiveTab(event.currentTarget.name);
  }

  return (
    <div className="p-5 flex flex-col gap-4">
      {transactions ? (
        <>
          <WelcomeMessage
            firstName={transactions.firstName}
            lastName={transactions.lastName}
          />
          <TransactionWidget
            tabs={tabs}
            activeTab={activeTab}
            changeActiveTab={changeActiveTab}
            transactions={transactions}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
