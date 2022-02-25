import { useState, useEffect } from "react";
import FinanceSection from "./components/FinanceSection";
import Header from "./components/Header";
import Form from "./components/Form";
import Notification from "./components/Notification";
import { useSelector } from "react-redux";
import { storeInterface } from "./redux/store";

function App() {
  //const [financeData, setFinanceData]: any = useState(data);
  const [showHeader, setShowHeader] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [messageOfNotification, setMessageOfNotification] = useState("");
  const [showForm, setShowForm] = useState(false);
  const CostsState = useSelector(
    (state: storeInterface) => state.finance.Costs
  );
  const IncomesState = useSelector(
    (state: storeInterface) => state.finance.Incomes
  );

  function changeShowHeader() {
    setShowHeader(!showHeader);
  }
  function changeShowForm() {
    setShowForm(!showForm);
  }
  function hideHeaderAndShowForm() {
    if (showHeader === true) {
      changeShowHeader();
    }
    if (showForm !== true) {
      changeShowForm();
    }
  }
  function returnCompleteData() {
    return [CostsState, IncomesState];
  }
  function showNot(message: string) {
    if (showNotification === false) {
      setMessageOfNotification(message);
      setShowNotification(true);
    }
    setTimeout(() => setShowNotification(false), 2000);
  }
  return (
    <div className="bg-slate-900 h-screen flex justify-center">
      {showHeader ? (
        <Header HideHeader={() => hideHeaderAndShowForm()} />
      ) : (
        <FinanceSection
          data={returnCompleteData()}
          changeShowForm={() => changeShowForm()}
        />
      )}
      {showForm ? (
        <Form
          changeShowForm={() => changeShowForm()}
          showNotification={(message: string) => showNot(message)}
        />
      ) : (
        ""
      )}
      {showNotification ? <Notification message={messageOfNotification} /> : ""}
    </div>
  );
}

export default App;
