import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FinanceTable from "./FinanceTable";
import Add_Icon from "./Add_Icon";

interface Props {
  data: [] | any;
  changeShowForm: any;
}

function FinanceSection(props: Props) {
  const [totalGlobal, setTotalGlobal] = useState(0);

  const appearUpAnimation = {
    opacity: [0, 1],
    y: [200, 0],
  };

  const calcTotalGlobal = () => {
    let totals = props.data.map((dataObject: any) => caclTotal(dataObject));
    let total = totals[1] - totals[0];
    setTotalGlobal(total);
  };

  const caclTotal = (dataObject: any) => {
    let total = 0;
    if (dataObject.data !== undefined) {
      const data = dataObject.data;
      data.map((value: any) => (total = total + value.value));
    }
    return total;
  };
  useEffect(() => {
    calcTotalGlobal();
  });

  const showForm = () => {
    props.changeShowForm();
  };

  return (
    <main className="min-h-screen py-8 p-4 text-slate-100 max-w-4xl w-full">
      <motion.article
        className="flex flex-wrap justify-center align-start border-2 border-slate-800 rounded-lg py-2"
        animate={appearUpAnimation}
      >
        {props.data
          ? props.data.map((dataObject: any) => {
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
      <motion.h2
        className="p-2 text-2xl text-right"
        animate={appearUpAnimation}
      >
        Total: ${totalGlobal}
      </motion.h2>
      <motion.button
        className="fixed bottom-4 right-4 p-3 bg-slate-200 rounded-xl"
        animate={appearUpAnimation}
        whileHover={{ rotate: 90 }}
        onClick={() => showForm()}
      >
        <Add_Icon />
      </motion.button>
    </main>
  );
}

export default FinanceSection;
