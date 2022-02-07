function FinanceTable(props: { data: undefined | any[]; title: string }) {
  const { data, title } = props;

  const item = (value: any, key: number) => {
    return <li key={key}>{value}</li>;
  };

  return (
    <section>
      <h2>{title}</h2>
      <ul>{ data ? data.map((itemOfData, index) => item(itemOfData, index)) : ""}</ul>
    </section>
  );
}
export default FinanceTable;
