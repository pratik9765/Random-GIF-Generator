import Random from './components/Random';
import Tag from './components/Tag'
import "./index.css";


function App() {
  return (
    <div className="relative flex flex-col items-center w-full h-screen overflow-x-hidden background">
      <h1 className=" w-11/12 text-center bg-green mt-[40px]  py-2
        text-3xl font-bold rounded-xl bg-white border-2">Random GIF</h1>
      <div className="flex flex-col items-center w-full mt-14 gap-y-10 ">
        <Random></Random>
        <Tag></Tag>
      </div>





    </div>
  )
}

export default App;