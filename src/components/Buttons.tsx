import addIcon from "../resources/addIcon.svg";

function Buttons(props: {hideHeader: any}) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-red-500 text-slate-100 rounded-lg w-50"
        onClick={() => props.hideHeader()}
      >
        <img src={addIcon} alt="add icon" />
        Agregar gasto
      </button>
      <button
        className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-green-500 text-slate-100 rounded-lg w-50"
        onClick={() => props.hideHeader()}
      >
        <img src={addIcon} alt="add icon" />
        Agregar ingreso
      </button>
    </div>
  );
}

export default Buttons;
