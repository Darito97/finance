import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Form(props: {
  type: string;
  addNewCostOrIncome: any;
  changeShowForm: any;
  showNotification: any;
}) {
  const { type, addNewCostOrIncome, changeShowForm } = props;
  const [inputTitle, setInputTitle] = useState("");
  const [inputTitleError, setInputTitleError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputValueError, setInputValueError] = useState(false);
  const [typeOfValue, setTypeOfValue] = useState("");
  const [typeOfValueError, setTypeOfValueError] = useState(false);
  const [close, setClose] = useState(false);
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
  function submitForm(e: any) {
    e.preventDefault();
    if (inputTitle === "" || inputValue === "" || typeOfValue === "") {
      if (inputTitle === "") {
        props.showNotification("Ingresa un titulo");
        setInputTitleError(true);
      }
      if (inputValue === "") {
        props.showNotification("Ingresa el valor");
        setInputValueError(true);
      }
      if (typeOfValue === "") {
        setTypeOfValueError(true);
      }
    } else {
      let newCostOrIncome = {
        title: inputTitle,
        value: Number.parseInt(inputValue),
      };
      setClose(true);
      setTimeout(() => {
        addNewCostOrIncome(newCostOrIncome, typeOfValue);
        changeShowForm();
      }, 1000);
    }
  }
  function closeForm(e: any) {
    e.preventDefault();
    changeShowForm();
  }
  useEffect(() => {
    setInputTitleError(false);
  }, [inputTitle]);

  useEffect(() => {
    setInputValueError(false);
  }, [inputValue]);
  useEffect(() => {
    setTypeOfValueError(false);
  }, [typeOfValue]);

  return (
    <form
      className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-slate-700/70"
      onSubmit={(e) => submitForm(e)}
    >
      <motion.div
        className=" flex flex-col justify-center items-stretch gap-1 p-4 rounded-lg bg-slate-900 h-fit text-slate-100"
        initial={{ opacity: 0 }}
        animate={
          close
            ? { opacity: [1, 0], y: [0, -200] }
            : { opacity: [0, 1], y: [-200, 0] }
        }
        transition={{ type: "spring", duration: 1 }}
      >
        <button
          className="self-end active:border-1 active:border-slate-100"
          onClick={closeForm}
        >
          <Close_Icon />
        </button>
        <label htmlFor="title">Nombre</label>
        <input
          className="py-1 px-2 rounded-md text-slate-900"
          type="text"
          name="title"
          placeholder="Juguete nuevo"
          value={inputTitle}
          onChange={(event) => setInputTitle(event.target.value)}
        />
        {inputTitleError ? (
          <motion.p animate={{ x: [0, 10, 0, 10, 0] }} className="text-red-400">
            * Ingresa un titulo en este campo
          </motion.p>
        ) : (
          ""
        )}
        <label htmlFor="value">Valor</label>
        <input
          className="py-1 px-2 rounded-md text-slate-900"
          type="number"
          name="value"
          placeholder="200"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        {inputValueError ? (
          <motion.p animate={{ x: [0, 10, 0, 10, 0] }} className="text-red-400">
            * Ingresa un valor en este campo
          </motion.p>
        ) : (
          ""
        )}
        <p>¿Es un gasto o ingreso?</p>
        <div className="flex items-center justify-evenly">
          <button
            className={
              typeOfValue === "cost"
                ? "py-1 px-2 border-2 border-red-900 rounded-md bg-red-900"
                : "py-1 px-2 border-2 border-red-900 rounded-md"
            }
            onClick={(e) => {
              e.preventDefault();
              if (typeOfValue !== "cost") {
                setTypeOfValue("cost");
              } else {
                setTypeOfValue("");
              }
            }}
          >
            Gasto
          </button>
          <button
            className={
              typeOfValue === "income"
                ? "py-1 px-2 border-2 border-green-900 rounded-md bg-green-900"
                : "py-1 px-2 border-2 border-green-900 rounded-md"
            }
            onClick={(e) => {
              e.preventDefault();
              if (typeOfValue !== "income") {
                setTypeOfValue("income");
              } else {
                setTypeOfValue("");
              }
            }}
          >
            Ingreso
          </button>
        </div>

        {typeOfValueError ? (
          <motion.p animate={{ x: [0, 10, 0, 10, 0] }} className="text-red-400">
            * Ingresa un titulo en este campo
          </motion.p>
        ) : (
          ""
        )}
        <button
          className={
            type === "income"
              ? "p-1 bg-green-900 text-slate-100 rounded-md"
              : "p-1 bg-red-900 text-slate-100 border-2 border-green-900 rounded-md"
          }
          type="submit"
        >
          Agregar
        </button>
      </motion.div>
    </form>
  );
}

export default Form;
