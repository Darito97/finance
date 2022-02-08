import { motion } from "framer-motion";

function Form(props: { type: string; action: any; changeShowForm: any }) {
  const { type, action, changeShowForm } = props;

  function submitForm(e: any) {
    e.preventDefault();
    console.log(e);
  }
  function closeForm(e: any) {
    e.preventDefault();
    changeShowForm();
  }
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

  return (
    <form
      className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-slate-700/70"
      onSubmit={(e) => submitForm(e)}
    >
      <motion.div
        className=" flex flex-col justify-center items-stretch gap-2 p-4 rounded-lg bg-slate-900 h-fit text-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], y: [-200, 0] }}
      >
        <button className="self-end" onClick={closeForm}>
          <Close_Icon />
        </button>
        <label htmlFor="title">Nombre</label>
        <input
          className="py-1 px-2 rounded-md text-slate-900"
          type="text"
          name="title"
          placeholder="Juguete nuevo"
        />
        <label htmlFor="value">Valor</label>
        <input
          className="py-1 px-2 rounded-md text-slate-900"
          type="number"
          name="value"
          placeholder="200"
        />
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
