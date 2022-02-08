import { motion } from "framer-motion";
function Buttons(props: { hideHeader: any }) {
  const Add_Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#FFFFFF"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-red-500 text-slate-100 rounded-lg w-50"
        onClick={() => props.hideHeader()}
      >
        <Add_Icon />
        Agregar gasto
      </button>
      <button
        className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-green-500 text-slate-100 rounded-lg w-50"
        onClick={() => props.hideHeader()}
      >
        <Add_Icon />
        Agregar ingreso
      </button>
    </div>
  );
}

export default Buttons;
