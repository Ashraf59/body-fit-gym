import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import './Activity.css';

const Activity = () => {

    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])
    return (
        <div className='activity-container'>

            <h2>Our Excercise schedule</h2>

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
                <h1>Infor</h1>
                
            </div>
        </div>
    );
};

export default Activity;