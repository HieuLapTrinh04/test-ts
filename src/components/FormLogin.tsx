import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormLogin : React.FC = () => {
   const navigate = useNavigate();
   const User = [{
    username: 'minhhieu',
    password: '123456'
   }, {
    username: 'buihieu',
    password: '123456'
   }]
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username, password)
    checkAccount();
  };
  const handleChangeUsername = (event: any) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const checkAccount = () => {
    const index = User.findIndex(e => e.username === username && e.password === password)
    if (index === -1) {
        alert('Sai mật khẩu hoặc tài khoản!!!')
    return 
    }

    localStorage.setItem('isLoggedIn', 'true')
    navigate('/about')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Username..."
            autoFocus={true}
            className="mb-5 w-64 m-auto h-10 border-red-500 rounded-lg  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset p-2"
            value={username}
            onChange={handleChangeUsername}
          />
          <input
            type="password"
            placeholder="Password..."
            className="m-auto w-64 mb-5 h-10 border-red-500 rounded-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset p-2"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div>
          <button type="submit" className="rounded-full w-64 h-12 bg-emerald-400 mt-7 mb-7 hover:bg-emerald-500">Login</button>
        </div>
      </form>
    </>
  );
};
export default FormLogin;
