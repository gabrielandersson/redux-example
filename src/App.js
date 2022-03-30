import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {saveName} from './nameSlice'
import axios from 'axios';

function App() {
  const name = useSelector((state) => state.namer.value)
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    try {
      await axios({
        method: "POST",
        url: "http://localhost:3000/",
        data: {
          "name": name,
        },
        headers: { "content-Type": "application/json" }
      })
    } catch (error) {
      console.log(error)
    }
  }  
  return (
    <div className="App">
    <h1>redux example</h1>

    <span>{name}</span>
    <form className="form" onSubmit={handleSubmit} id="formie">
        <label>
          Name
        </label>
        <br />
        <input type="text" name="name" value={name} id="nameInput" onChange={(e) => dispatch(saveName(e.target.value))} required />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default App;
