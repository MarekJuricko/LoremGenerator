import data from "./data"
import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  const [paragraphs, setParagraphs] = useState([])

  const formSubmit = (event) => {
    event.preventDefault()
    let amount = parseInt(count)

    //if the amount number is higher or lover than max/min, it is set to max/min value
    if(amount <= -1){
      amount = 1
    }else if(amount >= 6){
      amount = 5
    }

    //returns paragraphs based on amount number
    setParagraphs(data.slice(0, amount))
  }

  return (
    <div className="form-section">
      <h1>Lorem ipsum generator</h1>
      <form className="form-only-section" onSubmit={formSubmit}>
        <input type="number" placeholder="number of paragraphs" value={count} onChange={(event) => {setCount(event.target.value)}}/>
        <input type="submit" value="Generate"/>
      </form>

      {paragraphs.map((oneParagraph, index) => {
        return <p className="item" key={index}>{oneParagraph}</p>
      })}

    </div>
  )
}

export default App
