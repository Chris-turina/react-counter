import React from 'react';
import Header from './Header';
import CounterList from './CounterList';
import CounterForm from './CounterForm';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterCounterArray: [
        {title: 'counter1', number: 0, id: 1},
        {title: 'counter2', number: 0, id: 2},
        {title: 'counter3', number: 0, id: 3}
      ]
    }
    this.handleCountUp = this.handleCountUp.bind(this);
    this.handleCountDown = this.handleCountDown.bind(this);
    this.handleNewCounterCreation = this.handleNewCounterCreation.bind(this);
  }

  handleCountUp(id) {
    let newMasterCounterArray = this.state.masterCounterArray.slice();
    for (let i = 0; i < newMasterCounterArray.length; i++) {
      if (newMasterCounterArray[i].id === id) {
        newMasterCounterArray[i].number+=1
      }
    }
    this.setState({masterCounterArray: newMasterCounterArray});
  }

  handleCountDown(id) {
    let newMasterCounterArray = this.state.masterCounterArray.slice();
    for (let i = 0; i < newMasterCounterArray.length; i++) {
      if (newMasterCounterArray[i].id === id) {
        newMasterCounterArray[i].number-=1
      }
    }
    this.setState({masterCounterArray: newMasterCounterArray});
  }

  handleNewCounterCreation(newPost) {
    let newMasterCounterArray = this.state.masterCounterArray.slice();
    newMasterCounterArray.push(newPost)
    this.setState({masterCounterArray: newMasterCounterArray});
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=>
              <CounterList
                counterArray={this.state.masterCounterArray}
                onCounterUp={this.handleCountUp}
                onCounterDown={this.handleCountDown} />} />
          <Route path='/form' render={()=>
              <CounterForm
                onNewCounterCreation={this.handleNewCounterCreation}
              />} />
        </Switch>
      </div>
    );
  }
}

export default App;
