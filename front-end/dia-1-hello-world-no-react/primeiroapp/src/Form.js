import React from 'react';

class Form extends React.Component {
    constructor() {
      super();
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        estadoFavorito: 'Aba',
        frontOrback: 'none',
      };
    }
  
  
    handleChange({ target }) {
        console.log(target);
    const { name, value } = target;

      this.setState({
      [name]: value,
      });
    }

  render() {
    const { estadoFavorito,  frontOrBack,  } = this.state;
    return (     
      <div>
      <form className="form">       
         <select onChange={ this.handleChange }
                value={ frontOrBack }>
            <option   value= "" >Stack</option>

           <option   value= "Front End" >Front-End</option>
            <option  value= "Back End"> Back-End</option>
           </select>      

           <textarea name="estadoFavorito" value={estadoFavorito} onChange={this.handleChange} > </textarea>
       
      </form>
      </div>


    );
  }
}


export default Form;