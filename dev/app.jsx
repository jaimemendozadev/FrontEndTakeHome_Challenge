import React, {Component} from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Card, Container, Header, List } from 'semantic-ui-react';
import CardItem from './CardItem.jsx';

import {fetchFeed} from './actions/index.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
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
      this.props.fetchFeed();
    }
  
  
    render(){
      if (!this.props.feed.data) {
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
            {this.props.feed.data.map((station) => {
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

  function mapStateToProps({feed}) {
    return {feed};
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchFeed}, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App);