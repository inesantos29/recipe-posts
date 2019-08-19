import React from 'react';

import { Post } from '../Post';

function PostList({ posts }) {
    return (
        <div className="block-left">
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    name={post.name}
                    title={post.title}
                    image={post.image}
                    instructions={post.instructions}
                />
            ))}
        </div>
    );
}

PostList.defaultProps = {
    posts: []
};

export default PostList;
