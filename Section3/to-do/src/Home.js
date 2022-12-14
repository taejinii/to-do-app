import { useState, useEffect } from "react";
import TasksList from "./components/TasksList";
import Loading from "./components/Loading";
import Footer from "./pages/Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Weather from "./components/Weather";
const Home = ({ tasks, isPending }) => {
  const [value, onChange] = useState(new Date());
  const [data, setData] = useState([]);

  useEffect(() => {
    if (tasks) {
      const firstDay = new Date(
        value.getFullYear(),
        value.getMonth(),
        value.getDate()
      ).getTime();
      const lastDay = new Date(
        value.getFullYear(),
        value.getMonth(),
        value.getDate() + 1
      ).getTime();

      setData(tasks.filter((el) => firstDay <= el.date && el.date <= lastDay));
    }
  }, [value, tasks]);
  return (
    <div className="home">
      {isPending && <Loading />}
      <div className="home-wrapper">
        <Calendar onChange={onChange} value={value} />
        {tasks ? <TasksList tasks={data} /> : <Loading />}
        <div className="weather-wrapper">
          <Weather />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
