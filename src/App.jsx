import "./App.css";
import MyComponent from "./components/MyComponent";
const App = () => {
  return (
    <>
      <div className="border p-4 ">
        <p className="pb-5 text-center">APP - PAGE</p>
        <hr />
        <br />
        <MyComponent />
      </div>
    </>
  );
};
export default App;
