import { useState, useEffect } from "react";

function FinanceTable(props: {
  data: undefined | any[];
  title: string;
  id: string;
  total: number;
}) {
  const { data, title, id, total } = props;

  const item = (value: any, key: string) => {
    return (
      <li className="flex align-middle justify-between" key={key}>
        <p key={key + "p1"}>{value.title}</p>
        <p key={key + "p2"}>{value.value}</p>
      </li>
    );
  };

  return (
    <section
      key={id}
      className="grid grid-cols-1 grid-rows-3 items-start w-6/12"
    >
      <h2
        key={id + "h2"}
        className={
          (title === "Ingresos")
            ? "py-2 border-b-2 text-center border-green-900"
            : "py-2 border-b-2 text-center border-red-900"
        }
      >
        {title}
      </h2>
      <ul key={id + "ul"} className="py-1 px-5 text-slate-400">
        {data
          ? data.map((itemOfData) => item(itemOfData, itemOfData.title))
          : ""}
      </ul>
      <h3 className="text-right self-end px-5  text-slate-400">Total: ${total}</h3>
    </section>
  );
}
export default FinanceTable;
