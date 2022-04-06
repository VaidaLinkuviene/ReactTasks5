import React from 'react'
import {Link} from 'react-router-dom'

export default function Card(props) {
    let {imgSrc, login}= props;
  return (
      <div className="col-lg-4">
       <img src={imgSrc} className='bd-placeholder-img rounded-circle' alt={login} width='140' height= '140' />
        <h2>{login}</h2>
       <p>
         <Link to={`/${login}`} className='btn btn-secondary'>View details &raquo;</Link>
       </p>
      </div>
  )
}
