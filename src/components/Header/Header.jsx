import Form from '../Form/Form'
import styles from './header.module.css'

function Header() {
  return (
    <header className="d-flex justify-content-center">
      <div className={styles.inputgroup}>
        <Form />
        <button
          type="button"
          className={`btn btn-primary ${styles.addbutton}`}
        >
          Search
        </button>
      </div>
    </header>
  )
}

export default Header
