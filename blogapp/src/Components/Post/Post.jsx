import React from 'react';
import "./Post.css";
import {Link} from "react-router-dom";
export default function Post({post}) {

    const PF = "http://localhost:5000/images/";

    return (
      <div className="post">
        {post.photo && (
          <img className="postimg" alt="postimg" src={PF + post.photo} />
        )}
        <div className="postinfo">
          <div className="postcats">
            {post.categories.map((c) => (
              <span className="postcard">{c.name}</span>
            ))}
          </div>
          <Link to={`/post/${post._id}`} className="link">
            <span className="posttitle">{post.title}</span>
          </Link>
          <hr />
          <span className="posttime">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        <p className="postdisc">{post.desc}</p>
      </div>
    );
}
