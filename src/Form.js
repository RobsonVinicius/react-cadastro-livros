import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);

    this.stateInitial = {
      name:'',
      book: '', 
      price: '',
    }

    this.state = this.stateInitial;

  }

  inputListener = event => {
    const { name, value } = event.target;

    this.setState({
      [name] : value
    });
  }

  render() {

    const { name, book, price } = this.state;

    return (
      <form>
        <label htmlFor="name">Nome</label>
        <input 
          id="name"
          type="text"
          name="name"
          value={name} 
          onChange = {this.inputListener} />      
        
        <label htmlForm="livro">Livro</label>
        <input 
          id="book"
          type="text"
          name="book"
          value={book}
          onChange = {this.inputListener} />
        
        <label htmlFor="price">Preço</label>
        <input 
          id="price"
          type="text"
          name="price" 
          value={price}
          onChange = {this.inputListener} />
        
        <button type="button">Salvar</button>

      </form>
    )
  };  
}


export default Form;