import React from 'react';

//create your first component
export default class Card extends React.Component{
    
    render(){
        return (
           <div class= "card-deck"> 
           <Cards /> 
           <Cards /> 
           <Cards /> 
           <Cards />
           </div>
        );
    }
}

function Cards(){
  return(<div class="card">
                <img src="https://via.placeholder.com/286x180" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                 <div className="card-footer text-center">
                     <a href="#" class="btn btn-primary">Find out more!!</a>
                 </div>
            </div>);
            }