import React from 'react';
import './App.css';
import icons from "./icons.json"
import Icon from "./components/Icon.js"

class App extends React.Component {
  state = {
    score: 0,
    highscore: 0,
    icons: icons,
    picked: []
  }

  shuffle = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  onClick = (event) =>{
    const chosen = event.target.alt

    if(this.state.picked.indexOf(chosen) === -1){

      this.state.picked.push(chosen)
      console.log(this.state.picked)

      this.state.score++

      if(this.state.score > this.state.highscore){
        this.setState({highscore: this.state.score})
      }

      
    }
    else{
      this.setState({picked: []});

      this.setState({score: 0})
    }

    this.setState({icons: this.shuffle(icons)})
  }



  render(){
    return (
      <div>
        <h1>Clicky Game</h1>

        <div className="flex-container" id = "score-flex">
          <p>Score: {this.state.score}</p>
          <p>Highscore: {this.state.highscore}</p>
        </div>
        
        <div className="flex-container" id = "icon-flex">
          {icons.map( icon => (

            <Icon src={icon.src} id={icon.id} key={icon.id} name={icon.name} icon={icon} onClick={this.onClick}/>
          )
           
          )}
        </div>
      </div>
    )
  }
}

export default App;
