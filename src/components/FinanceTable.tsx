import { motion } from "framer-motion";

function FinanceTable(props: {
  data: undefined | any[];
  title: string;
  id: string;
  total: number;
  removeCostOrIncome: any;
}) {
  const { data, title, id, total } = props;
  const Close_Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#FFFFFF"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  );
  function removeItem(id: string, title: string) {
    if (title === "Ingresos") {
      props.removeCostOrIncome(id, "income");
    } else {
      props.removeCostOrIncome(id, "cost");
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
      <ul key={id + "ul"} className=" px-5 text-slate-400">
        {data ? data.map((itemOfData) => item(itemOfData, itemOfData.id)) : ""}
      </ul>
      <h3 className="text-right px-5  text-slate-400">Total: ${total}</h3>
    </section>
  );
}
export default FinanceTable;
