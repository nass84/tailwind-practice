import "./App.css";
import InlineCard from "./components/card-inlinestyles";
import ButtonCard from "./components/card-button";
import Flex from "./components/flex";


function App() {
  return (
    <div className="app">
<InlineCard />
<ButtonCard />
<h1 className=" font-mono text-4xl mt-10 "> Flex </h1>
<h2 className="text-2xl ml-12 mt-5 text-red-600"> Flex Direction </h2>
 <Flex />
 </div>

  );
}

export default App;
