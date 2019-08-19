import React from 'react';

import './style.css';

function Post({ id, name, title, image, instructions }) {
    return (
        <div className="post-card">
            <div className="post-card__img">
                <p>{name}</p>
                <img src={image}/>
            </div>

            <div className="post-card__text">
                <h4>{title} </h4>
                <p>{instructions}</p>
            </div>
        </div>
    );
}

export default Post;
