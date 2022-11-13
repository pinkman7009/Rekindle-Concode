import { Routes, BrowserRouter, Route } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import { useSelector } from "react-redux";

import Layout from "./components/Layout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Memories from "./pages/memories";
import Chatbot from "./pages/chatbot";
// import Audio from "./pages/audio";
import Questions from "./pages/questions";

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

const NonAuthRoutes = ({ token }) => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/memories" element={<Memories />} />
        <Route exact path="/chatbot" element={<Chatbot />} />
        {/* <Route exact path="/audio" element={<Audio />} /> */}
        <Route exact path="/questions" element={<Questions />} />
      </Routes>
    </>
  );
};

function App() {
  let token = useSelector((state) => state.token);
  token = localStorage.getItem("token");

  if (token) {
    setAuthToken(token);
  }

  return (
    <BrowserRouter>
      {token !== null ? (
        <Layout>
          {" "}
          <NonAuthRoutes token={token} />{" "}
        </Layout>
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  );
}

export default App;
