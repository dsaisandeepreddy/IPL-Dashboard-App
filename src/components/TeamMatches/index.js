// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import './index.css'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    eachLatestMatches: {},
    recentMatches: [],
    bannerUrl: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getEachIplTeam()
  }

  getEachIplTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const responseTwo = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const dataTwo = await responseTwo.json()
    console.log(dataTwo)
    const bannerData = dataTwo.team_banner_url
    const updatedData = {
      competingTeam: dataTwo.latest_match_details.competing_team,
      competingTeamLogo: dataTwo.latest_match_details.competing_team_logo,
      date: dataTwo.latest_match_details.date,
      firstInnings: dataTwo.latest_match_details.first_innings,
      id: dataTwo.latest_match_details.id,
      manOfTheMatch: dataTwo.latest_match_details.man_of_the_match,
      matchStatus: dataTwo.latest_match_details.match_status,
      result: dataTwo.latest_match_details.result,
      secondInnings: dataTwo.latest_match_details.second_innings,
      umpires: dataTwo.latest_match_details.umpires,
      venue: dataTwo.latest_match_details.venue,
    }
    console.log(updatedData)
    const updatedRecent = dataTwo.recent_matches.map(eachRecent => ({
      competingTeam: eachRecent.competing_team,
      competingTeamLogo: eachRecent.competing_team_logo,
      date: eachRecent.date,
      firstInnings: eachRecent.first_innings,
      id: eachRecent.id,
      manOfTheMatch: eachRecent.man_of_the_match,
      matchStatus: eachRecent.match_status,
      result: eachRecent.result,
      secondInnings: eachRecent.second_innings,
      umpires: eachRecent.umpires,
      venue: eachRecent.venue,
    }))
    this.setState({
      eachLatestMatches: updatedData,
      recentMatches: updatedRecent,
      bannerUrl: bannerData,
      isLoading: false,
    })
  }

  render() {
    const {eachLatestMatches, recentMatches, bannerUrl, isLoading} = this.state
    return (
      <div>
        <li>
          <div>
            {isLoading ? (
              <div data-testid="loader">
                <Loader type="Oval" color="#ffffff" height={50} width={50} />
              </div>
            ) : (
              <li>
                <div>
                  <div>
                    <img
                      className="kohilwidth"
                      src={bannerUrl}
                      alt="team banner"
                    />
                  </div>
                  <LatestMatch eachDataOne={eachLatestMatches} />
                  {recentMatches.map(eachrecent => (
                    <MatchCard
                      eachRecentData={eachrecent}
                      key={eachrecent.id}
                    />
                  ))}
                </div>
              </li>
            )}
          </div>
        </li>
      </div>
    )
  }
}

export default TeamMatches
