import Home from "./screens/Home";

const App = () => {
  return (  
    <div>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <h1 className="text-slate-100 flex justify-center mt-2 p-2 text-5xl">ToDo Wall</h1>
      <Home />
    </div>
  );
};

export default App;