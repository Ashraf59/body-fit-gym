import React from 'react';
import './Activities.css'

const Activities = ({activity, exercise, setExercise}) => {
    console.log(activity)
    const {img, name, time, id} = activity;
    let prevTime = 0;
    const handleAddtoCart = (id) => {
        prevTime = prevTime + time;
        setExercise(prevTime + exercise)
    }

    return (
        <div className='activities-item'>
            
            <img src={img} alt="" />
           <div className='activities-details'>
           <h3>{name}</h3>
            <p>Exercise Time: {time}m</p>
            <button onClick={() => handleAddtoCart(id)} className='btn-item'>Add to List</button>

           </div>

        </div>
    );
};

export default Activities;