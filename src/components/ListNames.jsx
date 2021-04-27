import styles from './ListNames.module.scss'

export function ListNames (props) {

  const clickElement = (elementId) => {
    props.click(elementId)
  }

  return (
    <div className={ styles.list }>
      { 
        props.list.map(element => (
          <div
            key={ element.id }
            className={ styles.element }
            onClick={ () => clickElement(element.id) }
          >
            { element.name }
          </div>
        ))
      }
    </div>
  )
}
