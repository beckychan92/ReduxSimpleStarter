import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyDl_FM4NQNnwUoyWFHEGl82RchwkycG6Qs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'dog'}, (data) => {
      this.setState({videos: data});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[3]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  };

}

ReactDOM.render(<App />, document.querySelector('.container'));

//Downward Data Flow: most parent component are responsible for fetching data (API, flux, redux)

// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }