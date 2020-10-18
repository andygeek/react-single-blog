import React from "react";
import { CardPost } from "../../components/card-post/CardPost";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home">
      <h1>Blog Home</h1>
      <div className="blog-container">
        <CardPost image="https://picsum.photos/400/200" />
        <CardPost image="https://picsum.photos/400/200" />
        <CardPost image="https://picsum.photos/400/200" />
        <CardPost image="https://picsum.photos/400/200" />
      </div>
    </div>
  );
};
