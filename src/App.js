import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array

  state = {
    friends: friends,
    high: 0,
    score: 0
  };

  clickFriend = id => {

    function shuffle(arra1) {
      let ctr = arra1.length;
      let temp;
      let index;
  
      while (ctr > 0) {
        
        index = Math.floor(Math.random() * ctr);
        
        ctr--;
        
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
      }
      return arra1;
  }
    
    let friends = this.state.friends;

    let friendInd = friends.findIndex(function(friend) {
      return friend.id === id;
    });

    let friend = friends[friendInd];

    if(!friend.clicked){
      friend.clicked = true;
      friends = shuffle(friends);
      let score = this.state.score+1;
      let high = this.state.high;
      if(score > high){
        high = score;
      }
      console.log(friends);
      this.setState({ friends, score, high });
    }
    else{
      friends.sort(function(a, b){return a.id - b.id});
      friends.forEach(function(friend) {
        friend.clicked = false;
      });
      console.log(friends);
      let score = 0;
      this.setState({ friends, score });
    }

    
    // Set this.state.friends equal to the new friends array

    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div><Title>Friends List</Title>
        <Scoreboard score={this.state.score} high = {this.state.high}></Scoreboard>
        </div>
        <br/>
        <div>
        {this.state.friends.map(friend => (
          <FriendCard
            clickFriend={this.clickFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
