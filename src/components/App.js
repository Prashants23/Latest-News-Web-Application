import React, { Component } from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';
import Message from './News/Message';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      },
      
      news4:{
        type:'top-headlines',
        query: 'category=sports&language=en'
      },
      news5:{
        type:'top-headlines',
        query: 'sources=abc-news&language=en'
      },
      

    };
  }

  render() {
    return (
      <div className="containwer-fluid">
        <div className="navbar-fixed">
          
            {/* <div className="nav-wrapper indigo lighten-4"> */}
              <p id="head"><a href="/" className="bran-logo font-weight-bold News_head ">Daily News</a></p>
            {/* </div> */}
          
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
            <News news={this.state.news4} />
            <News news={this.state.news5} />
          </div>
          <div className="col s4">
            <Sidenews news={this.state.news3}/>
            <Sidenews news={this.state.news4} />
          </div>
        </div>
        <div className="container-fluid" style={{ backgroundColor: '#ffff', height: "700px" }}>
        <BrowserRouter>
                    <Switch>
                        <Route path="/Home" exact component={Message} />
                    </Switch>
                    </BrowserRouter>
                </div>

      </div>
    );
  }
}

export default App;
