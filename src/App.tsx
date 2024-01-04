import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
import axios from "axios";

const App: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col text-center bg-gradient-to-r from-red-500 to-blue-200 w-screen h-screen ">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <ul>
        {data.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};  

export default App;
