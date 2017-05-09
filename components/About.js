import React, {Component} from 'react';

const Month = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}
const Day = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}



class About extends Component{
  date =()=>{
let d = new Date()
let year = d.getFullYear();
let month= d.getMonth()
let dayOfTheMonth = d.getDate()
let dayOftheWeek = d.getDay()

return(
  <span> <strong>{`${Day[dayOftheWeek]}`}  {`${Month[month]}`} {`${dayOfTheMonth}`}, {year}</strong> </span>
)
  };
render(){
  return(
    <div className='container'>
        <h1>SaluD/Os</h1>
  <hr/>
  <div>
    <h4>
      Today is {this.date()}. When was the last time you consulted with a healthcare professional.
</h4>
<p>
  My name is Hillary Hernandez and my project to encourage Men to go to the seek annual medical care
</p>
  </div>
    </div>
  )
}
}

export default About
