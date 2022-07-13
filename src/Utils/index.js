export const getResultsText = (minutes, seconds, shareText, times) => {
    let minutesText = minutes < 10 ? `0${minutes}` : minutes;
    let secondsText = seconds < 10 ? `0${seconds}` : seconds;
    let tempText = shareText;
    let tempBar = '0'
    let newTimes = times;

    tempText += ` - ${minutesText}:${secondsText}\n`;
    
    let thirtyOrLess = {
      text: '🔍 🟩 ⬛ ⬛ ⬛ ⬛ ⬛',
      bar: '0:30'
    }
    let oneOrLess = {
      text: '🔍 🟥  🟩 ⬛ ⬛ ⬛ ⬛',
      bar: '1:00'
    }
    let oneThirtyOrLess = {
      text: '🔍 🟥  🟥  🟩 ⬛ ⬛ ⬛',
      bar: '1:30'
    }
    let twoOrLess = {
      text: '🔍 🟥  🟥  🟥  🟩 ⬛ ⬛',
      bar: '2:00'
    }
    let twoThirtyOrLess = {
      text: '🔍 🟥  🟥  🟥  🟥  🟩 ⬛',
      bar: '2:30'
    }
    let threeOrLess = {
      text: '🔍 🟥  🟥  🟥  🟥  🟥  🟩',
      bar: '3:00'
    }
    let overThree = {
      text: '🔍 🟥  🟥  🟥  🟥  🟥  🟥',
      bar: '0'
    }
    
    if (minutes === 0)
    {
      if (seconds <= 30)
      {
        tempText += thirtyOrLess.text;
        tempBar = thirtyOrLess.bar;
        newTimes.thirtyOrLess += 1;
      }
      else
      {
        tempText += oneOrLess.text;
        tempBar += oneOrLess.bar;
        newTimes.oneOrLess += 1;
      }
    }
    else if (minutes === 1)
    {
      if (seconds === 0)
      {
        tempText += oneOrLess.text;
        tempBar += oneOrLess.bar;
        newTimes.oneOrLess += 1;
      }
      else if (seconds <= 30)
      {
        tempText += oneThirtyOrLess.text;
        tempBar = oneThirtyOrLess.bar;
        newTimes.oneThirtyOrLess += 1;
      }
      else
      {
        tempText += twoOrLess.text;
        tempBar += twoOrLess.bar;
        newTimes.twoOrLess += 1;
      }
    }
    else if (minutes === 2)
    {
      if (seconds === 0)
      {
        tempText += twoOrLess.text;
        tempBar += twoOrLess.bar;
        newTimes.twoOrLess += 1;
      }
      else if (seconds <= 30)
      {
        tempText += twoThirtyOrLess.text;
        tempBar = twoThirtyOrLess.bar;
        newTimes.twoThirtyOrLess += 1;
      }
      else
      {
        tempText += threeOrLess.text;
        tempBar += threeOrLess.bar;
        newTimes.threeOrLess += 1;
      }
    }
    else if (minutes === 3)
    {
      if (seconds === 0)
      {
        tempText += threeOrLess.text;
        tempBar += threeOrLess.bar;
        newTimes.threeOrLess += 1;
      }
      else
      {
        tempText += overThree.text;
        tempBar += overThree.bar;
      }
    }
    else
    {
      tempText += overThree.text;
      tempBar += overThree.bar;
    }

    return [tempText, tempBar, newTimes];
  }