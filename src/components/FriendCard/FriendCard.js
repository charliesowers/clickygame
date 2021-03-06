import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className = 'card'>
  <div className="img-container" onClick={() => props.clickFriend(props.id)}>
    <img alt={props.name} src={props.image} />
  </div>
  </div>
    
);

export default FriendCard;
