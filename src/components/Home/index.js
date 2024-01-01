// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsData: []}

  componentDidMount() {
    this.getAllIplteams()
  }

  getAllIplteams = async () => {
    const responseOne = await fetch('https://apis.ccbp.in/ipl')
    const dataOne = await responseOne.json()
    console.log(dataOne)
    const formattedDataOne = dataOne.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsData: formattedDataOne})
  }

  render() {
    const {teamsData} = this.state
    console.log(teamsData)
    return (
      <Link to="/">
        <li>
          <div className="background-container">
            <li className="ipl-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo-image"
              />
              <h1 className="ipl-heading-part">IPL Dashboard</h1>
            </li>
            {teamsData.map(each => (
              <TeamCard iplTeams={each} key={each.name} />
            ))}
          </div>
        </li>
      </Link>
    )
  }
}

export default Home
