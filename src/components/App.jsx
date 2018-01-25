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
    };
    this.handleCountUp = this.handleCountUp.bind(this);
    this.handleCountDown = this.handleCountDown.bind(this);
    this.handleNewCounterCreation = this.handleNewCounterCreation.bind(this);
  }

  handleCountUp(id) {
    let newMasterCounterArray = this.state.masterCounterArray.slice();
    for (let i = 0; i < newMasterCounterArray.length; i++) {
      if (newMasterCounterArray[i].id === id) {
        newMasterCounterArray[i].number+=1;

      }

    }
    const sortedArray = this.sortCounters(newMasterCounterArray);
    this.setState({masterCounterArray: sortedArray});
  }

  handleCountDown(id) {
    let newMasterCounterArray = this.state.masterCounterArray.slice();
    for (let i = 0; i < newMasterCounterArray.length; i++) {
      if (newMasterCounterArray[i].id === id) {
        newMasterCounterArray[i].number-=1;
      }
    }
    const sortedArray = this.sortCounters(newMasterCounterArray);
    this.setState({masterCounterArray: newMasterCounterArray});
  }


  handleNewCounterCreation(newPost) {
    let newMasterCounterArray = this.state.masterCounterArray.slice();
    newMasterCounterArray.push(newPost);
    this.setState({masterCounterArray: newMasterCounterArray});
  }

  sortCounters(sortArray){
    console.log('kudo smells');
    for (let i = 0; i < sortArray.length; i++) {
      sortArray.sort(function(a: sortArray, b: sortArray){
        return b.number - a.number
      })
    }
    console.log(sortArray);
    return sortArray;

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
