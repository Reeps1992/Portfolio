import React from 'react'
import './notfound.scss'
import notfound from '../../img/404.png'


const NotFound = () => (
    <div className="notfound" >
        <figure>
            <img src={notfound} alt="404_not_found"/>           
        </figure>
    </div>
)

export default NotFound