// Write your code here
import './index.css'

const LatestMatch = props => {
  const {eachDataOne} = props
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
  } = eachDataOne
  return (
    <div>
      <p className="headinglatest">Latest Matches</p>
      <div className="three-containers">
        <div className="one-container">
          <p className="headinglatest">{competingTeam}</p>
          <p className="headinglatest">{date}</p>
          <p className="headinglatest">{venue}</p>
          <p className="headinglatest">{result}</p>
        </div>
        <li className="one-container">
          <img
            className="image-width"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </li>
        <li className="one-container">
          <p className="headinglatest">FirstInnings</p>
          <p className="headinglatest">{firstInnings}</p>
          <p className="headinglatest">SecondInnings</p>
          <p className="headinglatest">{secondInnings}</p>
          <p className="headinglatest">Man Of The Match</p>
          <p className="headinglatest">{manOfTheMatch}</p>
          <p className="headinglatest">umpires</p>
          <p className="headinglatest">{umpires}</p>
        </li>
      </div>
    </div>
  )
}

export default LatestMatch
