import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Debugging from './Debugging';
import Fifteen from './Fifteen';
import PairHelp from './PairHelp';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0
    };
  }

  handleClick = () => {
    if (this.state.pageNumber < 4) {
      this.setState(prevState => ({
      pageNumber: parseInt(prevState.pageNumber) + 1
      })) 
    } else {
      this.setState({
        pageNumber: 0
        }) 
    };
  }  
  
  handleClickNo = () => {
    this.setState({
      pageNumber: 0
    }) 
  };

  /*
  0: ticket list, button: "add ticket" -> 1
  1: Question one, button: "yes" -> 2
  2: question two, button: "yes" -> 3
  3: question three, button: "yes" -> 4
  4: form, button: "ticket list" -> 0
  */

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let NoButtonText = null;
    if (this.state.pageNumber === 0) {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    } else if (this.state.pageNumber === 1) {
      currentlyVisibleState = <Debugging />
      buttonText = "Yes";
      NoButtonText = "No";
    } else if (this.state.pageNumber ===2) {
      currentlyVisibleState = <PairHelp />
      buttonText = "Yes";
      NoButtonText = "No";
    } else if (this.state.pageNumber ===3) {
      currentlyVisibleState = <Fifteen />
      buttonText = "Yes";
      NoButtonText = "No";
    } else {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List"; // new code
    }

    if (this.state.pageNumber > 0 && this.state.pageNumber < 4) {
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
          <button onClick={this.handleClickNo}>{NoButtonText}</button> { /* new code */ }
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }

}

export default TicketControl;