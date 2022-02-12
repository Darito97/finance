import { useState } from "react";
import FinanceSection from "./components/FinanceSection";
import Header from "./components/Header";
import Form from "./components/Form";
import Notification from "./components/Notification";

import exampleData from "./data";
function App() {
  const data = exampleData;
  const [financeData, setFinanceData]: null | any = useState(null);
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
    console.log(dataTemp, newCost);
  }
  function addIncome(newIncome: typeOfCostOrIncome) {
    let dataTemp = financeData;
    console.log(dataTemp, newIncome);
  }
  function addNewCostOrIncome(
    newCostOrIncome: typeOfCostOrIncome,
    type: string
  ) {
    if (type === "income") {
      addIncome(newCostOrIncome);
    } else {
      addCost(newCostOrIncome);
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
  return (
    <div className="bg-slate-900 h-screen flex justify-center">
      {showHeader ? (
        <Header HideHeader={() => hideHeaderAndShowForm()} />
      ) : (
        <FinanceSection data={data} changeShowForm={() => changeShowForm()} />
      )}
      {showForm ? (
        <Form
          type={type}
          action={""}
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
