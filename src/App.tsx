import styles from './App.module.css'

function App() {

  return (
    <>
     <img className={styles.pdfContainer} src="./copy.svg" />
     <div className={styles.absoluteBoxBuy}>
        <button onClick={() => {
          window.location.href = 'https://hotm.art/zuSCugl1'
        }} className={styles.button}>COMPRAR</button>
     </div>
    </>
  )
}

export default App
