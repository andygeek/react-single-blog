import React from "react";
import "./CardPost.css";

export const CardPost = (props) => {
  return (
    <div className="card-container">
      <hr className="line-card" />
      <div className="card-image">
        <img src={props.image} alt="iamge-desc" />
      </div>
      <h3 className="card-title">Titulo</h3>
      <p className="card-description">
        You are allowed to convert this template as any kind of CMS theme or
        template for your custom website builder. You can also use this for your
        clients. Thank you for choosing us.
      </p>
      <div className="card-row-1">
        <div className="card-category">Categories</div>
        <div className="card-date">Date</div>
      </div>
      <hr className="line-card" />
      <div className="card-row-2">
        <div className="card-comment">Comentarios</div>
        <div className="card-author">Autor</div>
      </div>
    </div>
  );
};
