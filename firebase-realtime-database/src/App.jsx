import "./App.css";
import { useState, useEffect } from "react";
import { push, onValue, remove, ref } from "firebase/database";

import { database, dbRef } from "./components/utils/firebaseConfig";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState();

  // console.log(list);

  useEffect(() => {
    // Get data from the database
    onValue(dbRef, function (snapshot) {
      const data = snapshot.val();
      // console.log(data);
      // TIP: Data is comming here.

      if (data) {
        const valueWithKey = Object.entries(data);
        setList(valueWithKey);
      } else setList([]);
    });
  }, []);

  function changeHandler(e) {
    // Update the state with the value from the input field
    setItem(e.target.value);
  }

  function clickHandler() {
    // Check if the input field is empty
    if (!item) {
      alert("Please enter a item");
      return;
    }

    // Push data to the database
    push(dbRef, item);

    // Clear the input field
    setItem("");
  }

  function deleteHandler(id) {
    // Remove the item from the database
    const exactItemInDB = ref(database, `item/${id}`);
    remove(exactItemInDB);
  }

  return (
    <div className="app_container">
      <h1>Firebase Notes App</h1>
      <input
        placeholder="Enter item..."
        value={item}
        type="text"
        onChange={changeHandler}
      />
      <button type="button" onClick={clickHandler}>
        Add item
      </button>

      <ul>
        {list?.length >= 1 ? (
          list?.map((item) => {
            return (
              <li key={item[0]} onDoubleClick={() => deleteHandler(item[0])}>
                {item[1]}
              </li>
            );
          })
        ) : (
          <p>Add list item...</p>
        )}
      </ul>
    </div>
  );
}

export default App;
