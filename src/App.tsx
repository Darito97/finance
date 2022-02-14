import { useState, useEffect } from "react";
import FinanceSection from "./components/FinanceSection";
import Header from "./components/Header";
import Form from "./components/Form";
import Notification from "./components/Notification";

import exampleData from "./data";
import { useForceUpdate } from "framer-motion";
function App() {
  const data = exampleData;
  const [financeData, setFinanceData]: any = useState(data);
  const [financeIncomeData, setFinanceIncomeData] = useState(data[1].data);
  const [financeCostData, setFinanceCostData] = useState(data[0].data);
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
  function returnCompleteData() {
    let data = [
      {
        title: "Gastos",
        data: [...financeCostData],
      },
      {
        title: "Ingresos",
        data: [...financeIncomeData],
      },
    ];
    return data;
  }
  const [type, setType] = useState("income");
  function changeTypeOfForm(type: string) {
    setType(type);
  }
  type typeOfCostOrIncome = {
    id: string;
    title: string;
    value: number;
  };
  function addCost(newCost: typeOfCostOrIncome) {
    let dataTemp = financeCostData;
    dataTemp.push(newCost);
    return dataTemp;
  }
  function addIncome(newIncome: typeOfCostOrIncome) {
    let dataTemp = financeIncomeData;
    dataTemp.push(newIncome);
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
  function removeCostOrIncome(id: string, type: string) {
    let data = type === "income" ? financeIncomeData : financeCostData;
    data = data.filter((item: typeOfCostOrIncome) => item.id !== id);
    if (type === "income") {
      setFinanceIncomeData(data);
    } else {
      setFinanceCostData(data);
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
        <FinanceSection
          data={returnCompleteData()}
          changeShowForm={() => changeShowForm()}
          removeCostOrIncome={(id: string, type: string) =>
            removeCostOrIncome(id, type)
          }
        />
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
