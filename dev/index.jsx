import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Card, Container, Header, List } from 'semantic-ui-react';

import CardItem from './CardItem.jsx';
import RadioItem from './RadioItem.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stations: [],
      current: '',
      fallBack: 'http://icy3.abacast.com/empirebroadcasting-krtyfmmp3-64'
    }

    this.stationPick = this.stationPick.bind(this);
    this.handleError = this.handleError.bind(this);
    
  }

  stationPick(station){
    console.log("inside stationPick", station)
    this.setState({
      current: station
    })

  }

  handleError(){
    console.log("handleError fires");
    var fallBack = this.state.fallBack;
    this.setState({
      current: fallBack
    })
  }

  componentDidMount(){
    axios.get('http://localhost:8080/api/v1/stations')
    .then(data => {
      console.log('got the data bro ', data.data.data);
      this.setState({
        stations: data.data.data
      });
    });
  }


  render(){
    if (this.state.stations.length === 0) {
      return (
        <h3>Waiting for data...</h3>

      )
    }
    return(
      <Container className='clearfix'>
        <Header as='h1'>TuneIn's Front End SPA Project</Header>
        {console.log("the current stream is ", this.state.current)}

         <ReactPlayer 
              controls
              width='50%'
              height='50%' 
              url={this.state.current ? this.state.current : this.state.fallBack} 
              onError={this.handleError} 
              playing={true} /> 
      
        <Card.Group>
          {this.state.stations.map((station) => {
            return <CardItem 
                      key={station.id} 
                      stationPick={this.stationPick} 
                      station={station} />
          })}
        </Card.Group>
      </Container>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.target'));