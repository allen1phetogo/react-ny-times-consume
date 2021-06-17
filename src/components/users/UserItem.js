import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { id,title, abstract, section, url } }) => {
  
  return (
    <div className='card'>
       <h6 className="topic">{section}</h6>
      <img
        src={url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h4>{title}</h4>
      <h6>{abstract}</h6>
     
      <div>
        <Link to={`/user/${id}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
