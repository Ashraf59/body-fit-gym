import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png'
import ashraf from '../../images/ashraf.jpg'

import Activities from '../Activities/Activities';
import './Activity.css';

const Activity = () => {

    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState();
    const [exercise, setExercise] = useState(0);
    useEffect(() => {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])

    const handleBreakTime = (time) => {
        setTime(time);
    }
    return (
      <div>
        <div className='header'>
            <img src={logo} alt="" />
            <h1 className='header-title'>Body Fit Gym</h1>

        </div>
        <div className='activity-container'>
             <div className='exercise-item'>
           {
                activities.map(activity => 
                    <Activities
                    key = {activity.id}
                    activity = {activity}
                    setActivities = {setActivities}
                    setExercise = {setExercise}
                    exercise = {exercise}

                    
                    
                    ></Activities>)
            }
           </div>
           <div className="info-container">
                <div className='my-profile'>
                    <img src={ashraf} alt="" />
                    <h3>Md. Ashraf Ali</h3>
                </div>
                <p><small>Chattogram, Bangladesh</small></p>

                <div className='body-measurement'>
                   <div className='measurement'>
                   <h3>65<span className='weight'><small>kg</small></span></h3>
                    <p>Weight</p>
                   </div>
                   <div className='measurement'>
                   <h3>5.5<span className='weight'><small>kg</small></span></h3>
                    <p>Height</p>
                   </div>
                   <div className='measurement'>
                   <h3>36<span className='weight'><small>yrs</small></span></h3>
                    <p>Age</p>
                   </div>
                </div>
                <div className="break-info">
                        <h2 className='title'>Add a break</h2>
                        <div className="break-button">
                            <button className='btn-break' onClick={() => handleBreakTime(10)}>10s</button>
                            <button className='btn-break' onClick={() => handleBreakTime(20)}>20s</button>
                            <button className='btn-break' onClick={() => handleBreakTime(30)}>30s</button>
                            <button className='btn-break' onClick={() => handleBreakTime(40)}>40s</button>
                        </div>
                    </div>
                    <div className="exercise-details">
                        <h2 className='title'>Study Details</h2>
                        <input type="text" placeholder='exercise time' className='input-field' value={exercise} />
                        <input type="text" placeholder='Break-time' className='input-field' value={time} onChange={() => handleBreakTime} />
                        <button className='activity-button'>Activity Completed</button>
                    </div>
            </div>
           
        </div>      
      </div>
    );
};

export default Activity;