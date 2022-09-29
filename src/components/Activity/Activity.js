import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png'
import Activities from '../Activities/Activities';
import './Activity.css';
import ashraf from '../../images/Ashraf.jpg';

const Activity = () => {

    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])
    return (
      <div>
        <div className='header'>
            <img src={logo} alt="" />
            <h1 className='title'>Body Fit Gym</h1>

        </div>
        <div className='activity-container'>
             <div className='exercise-item'>
           {
                activities.map(activity => 
                    <Activities
                    key = {activity.id}
                    activity = {activity}
                    
                    
                    ></Activities>)
            }
           </div>
           <div className="info-container">
                <div>
                    <img src={ashraf} alt="" />
                    <h3>Md. Ashraf Ali</h3>
                    <p><small>Chattogram, Bangladesh</small></p>
                </div>
                <div className='body-measurement'>
                   <div>
                   <h3>65<span className='weight'><small>kg</small></span></h3>
                    <p>Weight</p>
                   </div>
                   <div>
                   <h3>5.5<span className='weight'><small>kg</small></span></h3>
                    <p>Height</p>
                   </div>
                   <div>
                   <h3>36<span className='weight'><small>yrs</small></span></h3>
                    <p>Age</p>
                   </div>
                </div>
                <div>
                    <h3>Add A Break</h3>

                </div>
            </div>
           
        </div>      
      </div>
    );
};

export default Activity;