import styles from "./App.module.css";
function App() {
  return (
    <div className="container">
      <h1 className={styles.heading}>Heading inside the container.</h1>
      <div className={styles.box}></div>
    </div>
  );
}

export default App;
