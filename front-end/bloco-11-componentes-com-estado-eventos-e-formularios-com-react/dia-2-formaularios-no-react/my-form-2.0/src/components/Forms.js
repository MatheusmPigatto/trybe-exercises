import React: { Component } from "react"

class Forms extends Component {
  constructor() {
    super();
s
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: false,
    }

    render() {
      return (
        <form>
          Name:    <input tpye='text' name= 'Name'/>
          Email:   <input tpye='text' name= 'Email'/>
          CPF:     <input tpye='text' name= 'Cpf'/>
          Address: <input tpye='text' name= 'Address'/>
          City:    <input tpye='text' name= 'City'/>
          State:   <input tpye='' name= 'State'/>
          Type:    <input tpye='radio' name= 'Type'/>
        </form>
      )
    }
  }
}

export default Forms
