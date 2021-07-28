import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ReviewsView.css";
import Rating from "@material-ui/lab/Rating";

function ReviewsView({ userName, userIcon, review, stars }) {
  return (
    <div className="reviewsView">
      <div className="reviewsView__main">
        <Avatar className="reviewsView__avatar" src={userIcon} />
        <h5>{userName}</h5>
      </div>
      <Rating
        name="read-only"
        value={stars}
        readOnly
        className="reviewsView__stars"
      />
      <i>
        <p className="reviewsView__text">{review}</p>
      </i>
    </div>
  );
}

export default ReviewsView;
