import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
  };
  const data = JSON.parse(localStorage.getItem("loginAll") || "");
  return (
    <div>
      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">id</h1>
        <div className="flex flex-col justify-between p-3 leading-normal">
          <p className="mb-1 ml-96 font-normal text-gray-700 dark:text-gray-400">
            {data.id}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Name</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-80 font-normal text-gray-700 dark:text-gray-400">
            {data.name}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">UserName</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-72 font-normal text-gray-700 dark:text-gray-400">
            {data.username}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Email</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-72 font-normal text-gray-700 dark:text-gray-400">
            {data.email}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Address street</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-64 font-normal text-gray-700 dark:text-gray-400">
            {data.address.street}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Address suite</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-64 font-normal text-gray-700 dark:text-gray-400">
            {data.address.suite}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Address city</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-64 font-normal text-gray-700 dark:text-gray-400">
            {data.address.city}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Address zipcode</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-56 font-normal text-gray-700 dark:text-gray-400">
            {data.address.zipcode}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Address geo lat</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-56 font-normal text-gray-700 dark:text-gray-400">
            {data.address.geo.lat}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Address geo lng</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-56 font-normal text-gray-700 dark:text-gray-400">
            {data.address.geo.lng}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Phone</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-64 font-normal text-gray-700 dark:text-gray-400">
            {data.phone}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Website</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-72 font-normal text-gray-700 dark:text-gray-400">
            {data.website}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Company name</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-52 font-normal text-gray-700 dark:text-gray-400">
            {data.company.name}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Company catchPhrase</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-40 font-normal text-gray-700 dark:text-gray-400">
            {data.company.catchPhrase}
          </p>
        </div>
      </a>

      <a
        href="#"
        className="flex flex-col ml-96 mb-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h1 className="ml-3 font-medium text-xl">Company bs</h1>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 ml-48 font-normal text-gray-700 dark:text-gray-400">
            {data.company.bs}
          </p>
        </div>
      </a>
      <h1>day la trang home</h1>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
};
export default Home;
