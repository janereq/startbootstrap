import React from 'react';

import Header from './_header.jsx';
import Footer from './_footer.jsx';

import JomboTron from "./_jumbotron.jsx";
import Card from './_cards.jsx';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div body className = "bg-light pt-5" >
                {/* Navbar by JD */}
                <Header />
                <div className="container mt-5">
                    {/* Jumbotron by Cathrine */}
                    <JomboTron />
                
                    <div className="mt-3">
                        {/* cards by Janere */}
                        <Card />
                    </div>
                </div>
                {/* footer by JD */}
                <Footer />
            </div>
        );
    }
}
