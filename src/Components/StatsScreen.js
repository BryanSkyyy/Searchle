import React from "react";
import { MdClose } from "react-icons/md";
import "../Styles/StatsScreen.css"

const StatsScreen = ({gameOver, showStats, setShowStats, stats}) => {
    const minutes = stats.minutes;
    const seconds = stats.seconds;
    const bestMinutes = stats.bestMinutes;
    const bestSeconds = stats.bestSeconds;
    
    const distribution1 = "<= 0:30"
    const distribution2 = "<= 1:00"
    const distribution3 = "<= 2:00"
    const distribution4 = "<= 3:00"
    const distribution5 = "<= 4:00"
    const distribution6 = "<= 5:00"

    const statisticsPanel = <div id='stats-panel'>
      <h3 className='stats-header'>Statistics</h3>
      <div id='stats-section'>
        <div className='stat-item'>
          <p id='played' className="stat">{stats.played}</p>
          <p className='stat-descriptor'>Played</p>
        </div>
        <div className='stat-item'>
          <p id='win-percent' className="stat">{stats.percent}</p>
          <p className='stat-descriptor'>Win %</p>
        </div>
        <div className='stat-item'>
          <p id='current-streak' className="stat">{stats.streak}</p>
          <p className='stat-descriptor'>Current streak</p>
        </div>
        <div className='stat-item'>
          <p id='best-streak' className="stat">{stats.bestStreak}</p>
          <p className='stat-descriptor'>Best streak</p>
        </div>
        <div className='stat-item'>
          <p id='best-time' className="stat">{bestMinutes}:{bestSeconds < 10 ? `0${bestSeconds}` : bestSeconds}</p>
          <p className='stat-descriptor'>Fastest find</p>
        </div>
      </div>
      
      <h3 className='stats-header'>Time Distribution</h3>
      <div id='distribution-section' >
        <div className='distribution-item'>
          <p className="distribution-descriptor">{distribution1}</p>
          <p id='distribution-bar1' className='distribution-bar'>===</p>
        </div>
        <div className='distribution-item'>
          <p className="distribution-descriptor">{distribution2}</p>
          <p id='distribution-bar2' className='distribution-bar'>==============</p>
        </div>
        <div className='distribution-item'>
          <p className="distribution-descriptor">{distribution3}</p>
          <p id='distribution-bar3' className='distribution-bar'>=============</p>
        </div>
        <div className='distribution-item'>
          <p className="distribution-descriptor">{distribution4}</p>
          <p id='distribution-bar4' className='distribution-bar'>====================</p>
        </div>
        <div className='distribution-item'>
          <p className="distribution-descriptor">{distribution5}</p>
          <p id='distribution-bar5' className='distribution-bar'>==========</p>
        </div>
        <div className='distribution-item'>
          <p className="distribution-descriptor">{distribution6}</p>
          <p id='distribution-bar6' className='distribution-bar'>=====</p>
        </div>
      </div>
    </div>

    const closeStats = () => {
        setShowStats(false);
    }

    if (showStats && gameOver) {
        return (
            <div className='stats-overlay'>
              <div className='stats-div'>
                <div className='stats-close-div'><MdClose className='stats-close' onClick={closeStats}/></div>
                <div className='stats-timer-div'>You won in {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
                {statisticsPanel}
                <div id='stats-bottom-div'>
                  <div id='stats-next-game'>
                    <p>4:23:02 until next character</p>
                  </div>
                  <div id='stats-share'>
                    <button>Share</button>
                    </div>
                </div>
              </div>
            </div>
          );
      }

    if (showStats) {
        return (
            <div className='stats-overlay'>
              <div className='stats-div'>
                <div className='stats-close-div'><MdClose className='stats-close' onClick={closeStats}/></div>
                {statisticsPanel}
              </div>
            </div>
          );
      }
    
    return <></>;
};

export default StatsScreen;