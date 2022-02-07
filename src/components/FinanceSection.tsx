import { useState, useEffect } from "react";
import FinanceTable from "./FinanceTable";

function FinanceSection(props: { data: any }) {
  const data: [] | any[] = props.data;
  const [totalGlobal, setTotalGlobal] = useState(0);

  const calcTotalGlobal = () => {
    let totals = data.map((dataObject) => caclTotal(dataObject));
    let total = totals[1] - totals[0];
    setTotalGlobal(total);
  };

  const caclTotal = (dataObject: any) => {
    let total = 0;
    const data = dataObject.data;
    data.map((value: any) => (total = total + value.value));
    return total;
  };
  useEffect(() => {
    calcTotalGlobal();
  }, []);

  return (
    <main className="h-screen py-8 p-4 text-slate-100">
      <article className="flex flex-wrap justify-center align-start border-2 border-slate-800 rounded-lg py-2">
        {data
          ? data.map((dataObject: any) => {
              let total = caclTotal(dataObject);

              return (
                <FinanceTable
                  title={dataObject.title}
                  data={dataObject.data}
                  id={dataObject.title}
                  key={dataObject.title}
                  total={total}
                />
              );
            })
          : ""}
      </article>
      <h2 className="p-2 text-2xl text-center">
        Total <br />${totalGlobal}
      </h2>
    </main>
  );
}

export default FinanceSection;
