import TasksList from "./components/TasksList";
import Loading from "./components/Loading";
import Footer from "./pages/Footer";
const Home = ({ tasks, isPending }) => {
  return (
    <>
      {isPending && <Loading />}
      {tasks ? <TasksList tasks={tasks} /> : <Loading />}
      <Footer />
    </>
  );
};
export default Home;
