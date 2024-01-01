// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {iplTeams} = this.props
    const {id, name, teamImageUrl} = iplTeams
    return (
      <Link to={`/team-matches/${id}`}>
        <div className="containers-small">
          <img className="images-rgb" src={teamImageUrl} alt={`${name}`} />
          <p className="rgb-heading-part">{name}</p>
        </div>
      </Link>
    )
  }
}

export default TeamCard
