import React, {Component} from 'react';
import { List, Image } from 'semantic-ui-react';

class RadioItem extends Component {
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
      <List.Content>
        <List.Header as='a'>{station.name}</List.Header>
        <List.Description>
          <p>Popularity: {station.popularity}</p>
          <p>Reliability: {station.reliability}</p>
          <p><a onClick={this.handleClick} href="#">Click to Play this Station</a></p>
        </List.Description>
      </List.Content>
    )
  }

  

  render(){
    return(
      <List.Item onClick={this.showInfo} key={this.props.station.id}>
        <Image avatar src={this.props.station.imgUrl} />
          {this.state.show ? this.displayInfo(this.props.station) : ''}
      </List.Item>
    )
  }
}

export default RadioItem;