import styles from './Card.module.scss'

export function Card (props) {

  const renderCard = () => {
    return props.cat
      ? (
        <div>
          <div className="name">{ props.cat.name }</div>
          <img className={ styles.img } src={`/images/${ props.cat.image}`} alt=""></img>
        </div>
      )
      : null
  }

  return (
    <div className="card">
      { renderCard() }
    </div>
  )
}
