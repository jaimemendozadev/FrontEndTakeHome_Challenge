import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { List } from 'semantic-ui-react';
import RadioItem from './RadioItem.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stations: []
    }
    
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
      <div>
        <h3>TuneIn's Front End SPA Project</h3>
        {console.log("the url is ", this.state.stations[0].streamUrl)}
        <ReactPlayer 
              controls
              width='30%'
              height='30%' url="http://icy3.abacast.com/empirebroadcasting-krtyfmmp3-64" playing />
      
        <List>
          {this.state.stations.map((station) => {
            return <RadioItem key={station.id} station={station} />
          })}
        </List>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));