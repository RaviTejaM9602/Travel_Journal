import logo from './logo.svg';
import './App.css';
import Travel from "./Components/Travel.js"
import Data from "./Seperate.js"

export default function App(){
  const travelData = Data.map((info) => {
    return (
      <Travel
      key={info.id}
      item={info}
    /> )
})
    return (<div>
    {travelData}
    </div>)
}
