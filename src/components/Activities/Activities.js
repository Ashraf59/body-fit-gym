import React from 'react';
import './Activities.css'

const Activities = ({activity}) => {
    console.log(activity)
    const {img, name, time} = activity;
    return (
        <div className='activities-item'>
            
            <img src={img} alt="" />
           <div className='activities-details'>
           <h3>{name}</h3>
            <p>Exercise Time: {time}</p>
           </div>

            <button className='btn-item'>
                <p>Add to List</p>
            
            </button>
        </div>
    );
};

export default Activities;