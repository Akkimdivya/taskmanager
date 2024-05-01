import React from 'react'
import {Link} from 'react-router-dom';
import {FiCalendar, FiClock, FiDollarSign, FiMapPin,} from "react-icons/fi"


const Card = ({data}) => {
  const {_id,task,priority,status,deadline,description,postedBy,myMail}=data;  
  return (
    <section className='card'>
        <Link to={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
            <div>
                <h4 className='mb-1 text-primary'>{priority}</h4>
                <h3 className='text-lg font-semibold mb-2 text-black'>{task}</h3>
                <div className='text-base flex flex-wrap gap-2 mb-2'>
                    <span className='text-primary flex items-center gap-2'>
                        <FiMapPin/>{status}
                    </span>
                    <span className='text-primary flex items-center gap-2'>
                        <FiClock/>{deadline}
                    </span>
                    <span className='text-primary flex items-center gap-2'>
                        <FiCalendar/>{postedBy}
                    </span>
                </div>
                <p className='text-base text-primary/70'>{description}</p>
            </div>
        </Link>
    </section>
  )
}

export default Card