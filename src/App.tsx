import { AddTask, InputTask } from "./components";

function App() {
  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <h1 className="text-grey-darkest">Todo List</h1>
          <InputTask />
          <AddTask />
        </div>
      </div>
    </>
  );
}

export default App;
