import React, { Component } from "react";
import { Route, withRouter } from 'react-router-dom';
import List from "./List.jsx";
import Form from "./Form.jsx";
import Projects from "./Projects.jsx";
import NavBar from '../components/NavBar.jsx';
import Question from '../components/Question.jsx';
import Questions from '../components/Questions.jsx';
import Callback from './Callback';
import NewQuestion from '../components/NewQuestion.jsx';
import SecuredRoute from '../components/SecuredRoute.jsx';
import auth0Client from './Auth';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        checkingSession: true,
      }
    }
  
    async componentDidMount() {
      if (this.props.location.pathname === '/callback') {
        this.setState({checkingSession:false});
        return;
      }
      // ... leave try-catch untouched
      this.setState({checkingSession:false});
    }
  
    render() {
        return (
            <div>
                <NavBar />
                <Route exact path='/' component={Questions}/>
                <Route exact path='/question/:questionId' component={Question}/>
                <Route exact path='/callback' component={Callback}/>
                <SecuredRoute path='/new-question'
                  component={NewQuestion}
                  checkingSession={this.state.checkingSession} />
            </div>
        )
    }
}
export default withRouter(App);