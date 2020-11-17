import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      guests:[],
      guestName:"",
      guestLast:"",
    }
  }

  addGuestName =(e)=>{
    this.setState({
      guestName: e.target.value
    })
  }

  addGuestLastName =(e)=>{
    this.setState({
      guestLast: e.target.value
    })
  }

  startSubmit = (e)=>{
    e.preventDefault();
    if (this.state.guestName !== "" && this.state.guestLast!== ""){
    
    var taskId = this.state.guests.length + 1
    this.setState({
      guests:this.state.guests.concat({id: taskId, name: this.state.guestName, lastName: this.state.guestLast }),
      guestName:"",
      guestLast:"",
    })
    }
  e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.startSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.guestName} onChange={this.addGuestName}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.guestLast} onChange={this.addGuestLastName}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
              {this.state.guests.map((guest, id) => <tr> <td key={id.toString()}>{guest.name}</td> <td key={id.toString()}>{guest.lastName}</td> </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


