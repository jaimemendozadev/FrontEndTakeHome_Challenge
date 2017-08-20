import axios from 'axios';

export const FEED = 'FEED';

export function fetchFeed() {
  var data = axios.get('http://localhost:8080/api/v1/stations');

  return {
    type: FEED,
    payload: data
  }
}




