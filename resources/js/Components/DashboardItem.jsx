function Item ({ title, number, description }) {
  return (
    <div className="wrapper">
      <h3 className="title">{title}</h3>
      <h4 className="number">{number}</h4>
      <p className="description">{description}</p>
    </div>
  )
}

export default Item;