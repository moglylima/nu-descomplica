function Voos() {
  const voosDisponiveis = [
    {
      id: 1,
      title: "Voo 1",
      details: [
        {
          id: 1,
          title: "Detalhe 1",
        },
        {
          id: 2,
          title: "Detalhe 2",
        },
        {
          id: 3,
          title: "Detalhe 3",
        },
      ],
    },
    {
      id: 2,
      title: "Voo 2",
      details: [
        {
          id: 1,
          title: "Detalhe 1",
        },
        {
          id: 2,
          title: "Detalhe 2",
        },
        {
          id: 3,
          title: "Detalhe 3",
        },
      ],
    },
  ];

  function ItemVooDetails({ details }) {
    return (
      <ul>
        {details.map((detail) => (
          <li key={detail.id}>{detail.title}</li>
        ))}
      </ul>
    );
  }
  function ItemVoo(props) {
    return (
      <div className="voo">
        <header>
          <h3>{props.title}</h3>
        </header>
        <div className="detalhes">
          <ItemVooDetails details={props.details} />
        </div>
      </div>
    );
  }
  return (
    <div className="voos">
      {voosDisponiveis.map((voo) => (
        <ItemVoo key={voo.id} title={voo.title} details={voo.details} />
      ))}
    </div>
  );
}

export { Voos };
