import React, { Component } from 'react';
import saludHeader from '../images/salud-header.jpg'
import bear from '../images/cute-bear.jpg';
import Hillary from '../images/Hillary-profile.jpg'

class Home extends Component{
  render(){
  return(
    <div className='container'>
      <div className='homeHeader jumbotron text-center'>
        <h1 className='saludos-Title'>SaluD/Os</h1>
      </div>
      <hr />
      <div>
        <h1 className='text-center'>Promoting Health Awareness</h1>
        <hr />
      </div>
      <div className='row text-center'>

          <div className='col-xs-6 col-md-3'>
          <img className='imageThumb' src={Hillary}/>
            <div className="caption">
              <h3>Hillary Hernandez</h3>
              <h4>Future Doctor</h4>
              <hr/>
            </div>
        </div>
        <div className='col-xs-6 col-md-3'>
        <img className='imageThumb' src='data:image/jpeg;base64,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'/>
        <div className="caption">
          <h3>Wali Gauvin, M.D.</h3>
          <h4>Pediatric Cardiologist</h4>
          <hr/>
        </div>
        </div>
        <div className='col-xs-6 col-md-3'>
        <img className='imageThumb' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/USA_Virginia_location_map.svg/250px-USA_Virginia_location_map.svg.png'/>
        <div className="caption">
          <h3>Woodbridge, Virginia</h3>

          <hr/>
        </div>
        </div>
        <div className='col-xs-6 col-md-3'>
        <img className='imageThumb' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS7YRYAOL47vZOcB5vMD2X_bvw6Wm8mAZh-l90VehUUX-d0KFZY'/>
        <div className="caption">
          <h3>The Team</h3>

          <hr/>
        </div>
        </div>

      </div>

          </div>
  )
}
}

export default Home
