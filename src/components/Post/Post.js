import React from 'react';

import './style.css';

function Post({ id, name, title, image, instructions }) {
    return (
        <article tabIndex={0} key={id} className="item">
            <div>
                <p>{name}</p>
                <h4>{title}</h4>
                <p>{instructions}</p>
                <img src={image} />
            </div>
        </article>
    );
}

export default Post;
