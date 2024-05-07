import {Component} from 'react'

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
    initialState: countryAndCapitalsList[0].id,
    paragraph: countryAndCapitalsList[0].country,
  }

  changer = event => {
    const data = event.target.value
    console.log(data)
    const filteredData = countryAndCapitalsList.find(each => each.id === data)

    this.setState({
      initialState: data,
      paragraph: filteredData.country,
    })
  }

  render() {
    const {initialState, paragraph} = this.state
    console.log(paragraph)
    return (
      <div>
        <div>
          <h1>Countries And Capitals</h1>
          <select id="selected" value={initialState} onChange={this.changer}>
            {countryAndCapitalsList.map(each => (
              <option key={each.id} value={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="selected">is capital of which country?</label>
          <p>{paragraph}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
