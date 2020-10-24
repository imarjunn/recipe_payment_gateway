import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

const Card = (props) => {
    return(
        <div className="card promoting-card mt-2" style={{height: "600px"}}>
            <div className="view overlay">
                <img className="card-img-top" src={props.url} alt="Recipe" style={{height: "300px"}} />
            </div>
            <div className="card-body">
                <div className="card-image-overlay">
                    <span className="card-detail-badge m-1">{props.category}</span>
                    <span className="card-detail-badge m-1">{props.taste}</span>
                </div>
                <h5 className="card-title font-weight-bold mt-2">{props.name.toUpperCase()}</h5>
                <p className="card-text">{props.description}</p>
                <h4 className="card-text">{props.price}</h4>
                <hr className="my-3" />
                <Link className="btn btn-primary" to={`/checkout/${props.id}`}>Checkout</Link>
            </div>
        </div>          
    )
}

export default Card;