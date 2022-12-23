import "./App.scss";
import Button from "./components/button/Button";
import { useSelector, useDispatch } from "react-redux";
import { handleAdd, handleReset, handleSubtract, handleAddNumber } from "./actions/count.action"
import { toggleAuth } from "./actions/auth.action"

function App() {
  const count = useSelector(state => state.count)
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const dispatch = useDispatch();




  let color = "#fff";
  if (count >= 1) {
    color = "yellow";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "white";
  }

  return (
    <section className="counter-sec --flex-center">
      <div className="container counter --card --center-all ">
        <Button
          onClick={() => dispatch(toggleAuth())}
          btnClass={"--btn-primary"}
        >{isLoggedIn ? "Logout" : "Login"}</Button>

        {!isLoggedIn ? <p>Please Login</p> : (
          <>
            <h1 className="--text-light">React Counter App</h1>
            <p className="count --my2 --text-md --text-light --fw-bold"
              style={{ color: color }}>
              {count}
            </p>
            <div className="buttons">
              <Button
                onClick={() => dispatch(handleSubtract())}
                btnClass={"--btn-danger"}
              >{`- Subtract`}</Button>
              <Button onClick={() => dispatch(handleReset())} btnClass={null}>{`! Reset`}</Button>
              <Button
                onClick={() => dispatch(handleAdd())}
                btnClass={"--btn-success"}
              >{`+ Add`}</Button>
              <Button
                onClick={() => dispatch(handleAddNumber(5))}
                btnClass={"--btn-success"}
              >{`+ Add 5`}</Button>
            </div>
          </>)}
      </div>
    </section>
  );
}

export default App;
