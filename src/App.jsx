import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";

function App() {
  return (
    <div>
      {/* <MainPage /> */}
      {/* <MainDiscription /> */}

      {/* <nav> */}
      {/* <NavLink to="/">Main</NavLink> */}
      {/* <NavLink to="/login-form">LoginForm</NavLink>
        <NavLink to="/articles">Products</NavLink>
        <NavLink to="/products/:productId">Details</NavLink> */}
      {/* </nav> */}

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
    //   {/* <p>Hello</p>
    //   <h2>Hello world</h2>
    //   <div className={cssWrapper.wrapper}> */}
    //     {/* <Button type={"submit"} className={cssBtn.btn}>
    //       Click me
    //     </Button>
    //     <Button
    //       onClick={click}
    //       type={"text"}
    //       className={cssBtn.button}
    //       disabled={true}
    //     >
    //       Send
    //     </Button> */}
    //   {/* </div> */}
    //   {/* <LoginForm /> */}
    //   {/* <Http searchQuery={"node"} /> */}
    // {/* </div> */}
  );
}

export default App;
