import { useState } from "react";
import FinanceSection from "./components/FinanceSection";
import Header from "./components/Header";

import exampleData from "./data";
function App() {
  const data = exampleData;
  const [financeData, setFinanceData]: null | any = useState(null);
  function hideHeader() {
    setFinanceData(data);
  }

  return (
    <div className="bg-slate-900 h-screen">
      {financeData ? (
        <FinanceSection data={data} />
      ) : (
        <Header HideHeader={() => hideHeader()} />
      )}
    </div>
  );
}

export default App;
