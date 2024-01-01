// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachRecentData} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = eachRecentData
  return (
    <div>
      <div className="brown-color-data">
        <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
        <p className="headinglatest">{competingTeam}</p>
        <p className="headinglatest">{result}</p>
        <p className="headinglatest-one">{matchStatus}</p>
      </div>
    </div>
  )
}

export default MatchCard
