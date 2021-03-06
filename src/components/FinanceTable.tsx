import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { removeCostAction, removeIncomeAction } from "../redux/financeDuck";
import { storeInterface } from "../redux/store";
import Close_Icon from "./Close_Icon";

function FinanceTable(props: {
  data: undefined | any[];
  title: string;
  id: string;
  total: number;
}) {
  const { data, title, id, total } = props;
  const [dataIsClear, setDataIsClear] = useState(false);
  const dispatch = useDispatch();
  const financeState = useSelector((state: storeInterface) => state.finance);

  function removeItem(id: string, title: string) {
    if (title === "Ingresos") {
      dispatch(removeIncomeAction(id, financeState));
    } else {
      dispatch(removeCostAction(id, financeState));
    }
  }
  const item = (value: any, key: string) => {
    return (
      <motion.li
        animate={{
          backgroundColor: ["rgba(100,100,100, 0.25)", "rgba(0,0,0,0)"],
        }}
        transition={{
          duration: 1,
        }}
        className="flex align-middle justify-between p-1 rounded-md"
        key={key}
      >
        <p key={key + "p1"}>{value.title}</p>
        <div className="flex gap-2">
          <p key={key + "p2"}>{value.value}</p>
          <button onClick={() => removeItem(key, title)}>
            <Close_Icon />
          </button>
        </div>
      </motion.li>
    );
  };
  useEffect(() => {
    if (data?.length === 0) {
      setDataIsClear(true);
    } else {
      setDataIsClear(false);
    }
  });
  return (
    <section
      key={id}
      className="grid grid-rows-[auto_1fr_auto] items-start gap-2 w-6/12"
    >
      <h2
        key={id + "h2"}
        className={
          title === "Ingresos"
            ? "py-2 border-b-2 text-center border-green-900"
            : "py-2 border-b-2 text-center border-red-900"
        }
      >
        {title}
      </h2>
      <ul key={id + "ul"} className=" px-5 text-slate-300">
        {data ? data.map((itemOfData) => item(itemOfData, itemOfData.id)) : ""}
      </ul>
      {dataIsClear ? (
        <h3 className="px-5 text-center text-slate-500">No hay datos</h3>
      ) : (
        ""
      )}
      <h3 className="h-auto text-right px-5  text-slate-400">
        Total: ${total}
      </h3>
    </section>
  );
}
export default FinanceTable;
