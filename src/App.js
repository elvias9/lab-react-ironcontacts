import React from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";


 const firstContacts = contacts.slice(0, 5)

class App extends React.Component {
 
  state = {
    contacts: firstContacts
  }

  addRandomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    console.log(randomContact)
    this.setState((state, props) => ({
      contacts: [randomContact, ...state.contacts]
    }))

  }

  sortByName = () => {
    const sortedList = this.state.contacts.sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
    // this.setState((state, props) => ({
    //   contacts: sortedList
    // }))
    this.setState({
      contacts: sortedList
    })
  }

  sortByPopularity = () => {
    const sortedPopularity = this.state.contacts.sort((a, b) => {
      if(a.popularity < b.popularity) { return -1; }
      if(a.popularity > b.popularity) { return 1; }
      return 0;
  })
    this.setState({
      contacts: sortedPopularity
    })
  }

  deleteContact = (index) => {
    const indexToDelete = this.state.contacts.indexOf(this.state.contacts[index])
     console.log(indexToDelete)
     let contactToDelete;
    if (indexToDelete > -1) {
       contactToDelete = this.state.contacts.splice(indexToDelete, 1);
    }
    this.setState((state, props) => ({
     // contacts: [contactToDelete, ...state.contacts]
    }))
  }

  render() {
     const contactsList = this.state.contacts.map((contact, index) => {
       //console.log(index)
       return (
     <tr key={contact.id}>
     <td><img src={contact.pictureUrl} style={{width: '100px'}} alt=""/></td>
       <td>{contact.name}</td>
       <td>{contact.popularity}</td>
       <td><button onClick={() => this.deleteContact(index)} >Delete</button></td>
       </tr>
     )})
     

    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact} >Add Random Contact</button>
        <button onClick={this.sortByName} >Sort by name</button>
        <button onClick={this.sortByPopularity} >Sort by popularity</button>
        <table>
        <thead>
          <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactsList}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
