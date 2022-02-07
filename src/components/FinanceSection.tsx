import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FinanceTable from "./FinanceTable";

function FinanceSection(props: { data: any }) {
  const data: [] | any[] = props.data;
  const [totalGlobal, setTotalGlobal] = useState(0);

  const appearUpAnimation = {
    opacity: [0,1],
    y: [200, 0]
  }

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
      <motion.article
        className="flex flex-wrap justify-center align-start border-2 border-slate-800 rounded-lg py-2"
        animate={appearUpAnimation}
      >
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
      </motion.article>
      <motion.h2 className="p-2 text-2xl text-right" animate={appearUpAnimation}>Total: ${totalGlobal}</motion.h2>
    </main>
  );
}

export default FinanceSection;
