import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearCount, decrement, increment } from './redux/reducer/counter'
import { loginUser, logoutUser } from './redux/reducer/users';

const App = () => {
  const dispach = useDispatch();
  const selector = useSelector(state => state.counter.value)
  const userData = useSelector(state => state.user.value)
  const data = { userName: 'john', password: 123456789 }
  const incrementCount = () => {
    dispach(increment(1))
  };
  const decrementCount = () => {
    if (selector !== 1) {
      dispach(decrement(1))
    }
  };

  const login = () => {
    dispach(loginUser({ userDetils: data , uid: 123 }))
  };
  const logout = () => {
    dispach(clearCount())
    dispach(logoutUser())
  };



  return (
    <div className="App">
      Redux Slice
      {userData.userName ? <>
        <div style={{ display: "flex", marginTop: 50 }}>
          <button onClick={incrementCount}>+</button>
          <p>count {selector}</p>
          <button onClick={decrementCount}>-</button>
        </div>
        <h4>User Name: {userData.userName}</h4>
        <h4>PassWord: {userData.password}</h4>
        <div style={{ display: "flex", marginTop: 50 }}>
          <button onClick={logout}>Log Out</button>
        </div>
      </>
        : <button onClick={login}>Login</button>}
    </div>

  )
}

export default App

