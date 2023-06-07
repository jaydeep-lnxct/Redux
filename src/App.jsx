import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCount, decrement, increment } from "./redux/reducer/counter";
import {
  deleteuserData,
  loginUser,
  logoutUser,
  useUserData,
  userData,
} from "./redux/reducer/users";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const dispach = useDispatch();
  const selector = useSelector((state) => state.counter.value);
  const userDataa = useSelector((state) => state.user.value);
  const data = { userName: "john", password: 123456789 };

  const incrementCount = () => {
    dispach(increment(1));
  };
  const decrementCount = () => {
    if (selector !== 1) {
      dispach(decrement(1));
    }
  };
  const apiCall = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/photos");
    dispach(userData(res?.data));
  };
  const login = () => {
    dispach(loginUser({ userDetils: data, uid: 123 }));
    apiCall();
  };
  const logout = () => {
    dispach(clearCount());
    dispach(logoutUser());
    dispach(deleteuserData());
  };

  const userData2 = useUserData();

  return (
    <div className="App">
      Redux Slice
      {userDataa.userName ? (
        <>
          <div style={{ display: "flex", marginTop: 50 }}>
            <button onClick={incrementCount}>+</button>
            <p>count {selector}</p>
            <button onClick={decrementCount}>-</button>
          </div>
          <h4>User Name: {userDataa.userName}</h4>
          <h4>PassWord: {userDataa.password}</h4>
          <div style={{ display: "flex", marginTop: 50 }}>
            <button onClick={logout}>Log Out</button>
          </div>

          <div className="row">
            {userData2?.map((item) => {
              return (
                <Card className="col-3" key={item?.id}>
                  <Card.Img
                    variant="top"
                    src={item?.thumbnailUrl}
                    width={150}
                    height={150}
                  />
                  <Card.Body>
                    <Card.Title>{item?.id}</Card.Title>
                    <Card.Text>{item?.title}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default App;
