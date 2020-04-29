import React from 'react';
import CardList from "./components/cardList";
import Form from "./components/form";

import './App.scss';

class App extends React.Component {
 state={
           profiles:[],
 };


   addNewProfile = (profileData)=>{
     this.setState(prevState => ({
profiles:[...prevState.profiles,profileData]
     }))
   };

    render() {
        return (
            <div className="App">
                <div className="header">gh-profiles</div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles}/>
            </div>
        );
    }


}

export default App;
