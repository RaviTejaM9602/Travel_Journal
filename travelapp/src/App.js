import './App.css';
import Travel from "./Components/Travel.js"
import Data from "./Seperate.js"
import Navbar from "./Components/Navbar.js"

export default function App(){
  const travelData = Data.map((info) => {
    return (
      <Travel
      key={info.id}
      item={info}
    /> )
})
    return (<div>
      <Navbar />
    {travelData}
    </div>)
}
