import { useState, useEffect } from "react";
import FinanceSection from "./components/FinanceSection";
import Header from "./components/Header";
import Form from "./components/Form";
import Notification from "./components/Notification";

import exampleData from "./data";
function App() {
  const data = exampleData;
  const [financeData, setFinanceData]: any = useState(data);
  const [showHeader, setShowHeader] = useState(true);
  function changeShowHeader() {
    setShowHeader(!showHeader);
  }
  const [showForm, setShowForm] = useState(false);
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
  const [type, setType] = useState("income");
  function changeTypeOfForm(type: string) {
    setType(type);
  }
  type typeOfCostOrIncome = {
    title: string;
    value: number;
  };
  function addCost(newCost: typeOfCostOrIncome) {
    let dataTemp = financeData;
    dataTemp[0].data.push(newCost);
    return dataTemp;
  }
  function addIncome(newIncome: typeOfCostOrIncome) {
    let dataTemp = financeData;
    dataTemp[1].data.push(newIncome);
    return dataTemp;
  }
  function addNewCostOrIncome(
    newCostOrIncome: typeOfCostOrIncome,
    type: string
  ) {
    if (type === "income") {
      let DataWithNewIncome = addIncome(newCostOrIncome);
      setFinanceData(DataWithNewIncome);
    } else {
      let DataWithNewCost = addCost(newCostOrIncome);
      setFinanceData(DataWithNewCost);
    }
  }
  const [showNotification, setShowNotification] = useState(false);
  const [messageOfNotification, setMessageOfNotification] = useState("");
  function showNot(message: string) {
    if (showNotification === false) {
      setMessageOfNotification(message);
      setShowNotification(true);
    }
    setTimeout(() => setShowNotification(false), 2000);
  }

  useEffect(() => {
    console.log(financeData);
    return financeData;
  }, [financeData]);

  return (
    <div className="bg-slate-900 h-screen flex justify-center">
      {showHeader ? <Header HideHeader={() => hideHeaderAndShowForm()} /> : ""}
      {financeData && !showHeader ? (
        <FinanceSection
          data={financeData}
          changeShowForm={() => changeShowForm()}
        />
      ) : (
        ""
      )}
      {showForm ? (
        <Form
          type={type}
          changeShowForm={() => changeShowForm()}
          showNotification={(message: string) => showNot(message)}
          addNewCostOrIncome={(
            newCostOrIncome: typeOfCostOrIncome,
            type: string
          ) => addNewCostOrIncome(newCostOrIncome, type)}
        />
      ) : (
        ""
      )}
      {showNotification ? <Notification message={messageOfNotification} /> : ""}
    </div>
  );
}

export default App;
