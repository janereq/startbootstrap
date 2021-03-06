import React from 'react';


//create your first component
export default class Header extends React.Component{
    
    render(){
        return (
            <nav className="fixed-top navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    
                    <div className = "">
                    
                        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    
                        <div className="collapse navbar-collapse align-self-end" id="navbarsExample05">
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </nav>
        );
    }
}
