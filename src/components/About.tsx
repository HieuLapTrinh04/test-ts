import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
  return (
    <div>
      <h1>day la trang about</h1>
      <button onClick={handleClick}>quay lai trang truoc</button>
    </div>
  );
};
export default About
