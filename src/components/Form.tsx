function Form(props: { type: string; action: any }) {
  const { type, action } = props;

  function submitForm(e: any) {
    action(e);
  }

  return (
    <form
      className="fixed top-0 bottom-0 left-0 right-0 flex justify-center align-middle bg-slate-700/20 blur-sm"
      onSubmit={(e) => submitForm(e)}
    >
      <div className="p-4 rounded-lg bg-slate-900">
        <label htmlFor="title">Nombre</label>
        <input type="text" name="title" placeholder="Juguete nuevo" />
        <label htmlFor="value">Valor</label>
        <input type="number" name="value" placeholder="200" />
        <button
          className={
            type === "income"
              ? "border-2 border-green-900 rounded-sm"
              : "border-2 border-red-900 rounded-sm"
          }
          type="submit"
        >
          Agregar
        </button>
      </div>
    </form>
  );
}

export default Form;
