import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBa_MqLuCaMi1OU4TXp_0uEZSvcg_o9xrs",
  authDomain: "my-react-project-fd60c.firebaseapp.com",
  databaseURL: "https://my-react-project-fd60c.firebaseio.com",
  projectId: "my-react-project-fd60c",
  storageBucket: "",
  messagingSenderId: "63830711760"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(){
    super();
    this.state = {data:'', count:0};
  }

  componentDidMount(){
    const db = firebase.database();
    const dbRef = db.ref();

    dbRef.on('value', snapshot => {
      this.setState({
        data: snapshot.val(),
        count: snapshot.numChildren()
      });
      console.log(this.state.data);

      for(var i=0;i<this.state.count;i++){
        var item = this.state.data[i];
        var {ar_title,contributor,definition,en_title,subject}=item;
        console.log(ar_title +' is '+en_title);
      }
    });

      /*Object.keys(d).map(function(keyName, keyIndex) {
        // use keyName to get current key's name
        // and a[keyName] to get its value
        console.log(keyName+' & '+d[keyName]);
        var e = d[keyName];
        Object.keys(e).map(function(keyName2, keyIndex2) {
          // use keyName to get current key's name
          // and a[keyName] to get its value
          console.log(keyName2+' & '+e[keyName2]);
        });

      });*/

  }//did componentDidMount

  apiCall(){
    fetch(`https://my-react-project-fd60c.firebaseio.com`,{
      headers: { "Access-Control-Allow-Origin": "*" }
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(jsonResponse) {
        console.log(jsonResponse.length);
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.state.count}</h1>
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
