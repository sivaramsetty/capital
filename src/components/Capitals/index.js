import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    initialState: countryAndCapitalsList[0].country,
    capital: countryAndCapitalsList[0].capitalDisplayText,
  }

  handler = event => {
    const filteredData = countryAndCapitalsList.find(
      each => each.capitalDisplayText === event.target.value,
    )
    this.setState({
      initialState: filteredData.country,
      capital: filteredData.capitalDisplayText,
    })
  }

  render() {
    const {initialState, capital} = this.state
    return (
      <div className="con">
        <div className="subCon">
          <h1>Countries And Capitals</h1>
          <div className="selectitem">
            <select id="countries" value={capital} onChange={this.handler}>
              {countryAndCapitalsList.map(each => (
                <option value={each.capitalDisplayText} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="countries">is capital of which country </label>
          </div>

          <p>{initialState}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
