import React, {Component} from 'react';
import { Card, Image, Reveal, Header } from 'semantic-ui-react'

class CardItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
    this.showInfo = this.showInfo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.displayInfo = this.displayInfo.bind(this);
  }

  showInfo(){
    var currentView = this.state.show;
    this.setState({
      show: !currentView
    });
  }

  handleClick(event){
    event.preventDefault();
    console.log("inside handleClick");
    this.props.stationPick(this.props.station.streamUrl);
  }

  displayInfo(station){
    return(
      <Card.Content extra>
        <Card.Description>
          <p>Popularity: {station.popularity}</p>
          <p>Reliability: {station.reliability}</p>
          <p><a onClick={this.handleClick} href="#">Click to Play this Station</a></p>
        </Card.Description>
      </Card.Content>
    )
  }

  

  render(){
    return(
      <Card key={this.props.station.id}>
        <Card.Content>
          <Image 
            onClick={this.showInfo} 
            src={this.props.station.imgUrl} />

          <Card.Header>
            {this.props.station.name}
          </Card.Header>
        </Card.Content>
        {this.state.show ? this.displayInfo(this.props.station) : ''}
      </Card>

    )
  }
}

export default CardItem;