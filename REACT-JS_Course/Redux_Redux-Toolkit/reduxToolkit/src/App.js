import "./App.scss";
import Button from "./components/button/Button";
import { useSelector, useDispatch } from "react-redux";
import { ADD, SUBTRACT, RESET, ADD_NUMBER } from "./slice/count.slice"
import { TOGGLE_AUTH } from "./slice/auth.slice"

function App() {
  const count = useSelector(state => state.countR.count)
  const isLoggedIn = useSelector(state => state.authR.isLoggedIn)
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
          onClick={() => dispatch(TOGGLE_AUTH())}
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
                onClick={() => dispatch(SUBTRACT())}
                btnClass={"--btn-danger"}
              >{`- Subtract`}</Button>
              <Button onClick={() => dispatch(RESET())} btnClass={null}>{`! Reset`}</Button>
              <Button
                onClick={() => dispatch(ADD())}
                btnClass={"--btn-success"}
              >{`+ Add`}</Button>
              <Button
                onClick={() => dispatch(ADD_NUMBER(5))}
                btnClass={"--btn-success"}
              >{`+ Add 5`}</Button>
            </div>
          </>)}
      </div>
    </section>
  );
}

export default App;
