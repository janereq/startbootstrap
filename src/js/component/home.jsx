import React from 'react';

import Header from './_header.jsx';
import Footer from './_footer.jsx';

import JomboTron from "./_jumbotron.jsx";
import Card from './_cards.jsx';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div body>
                {/* Navbar by JD */}
                <Header />
                
                {/* Jumbotron by Cathrine */}
                <JomboTron />
                
                {/* cards by Janere */}
                <Card />
                
                {/* footer by JD */}
                <Footer />
            </div>
        );
    }
}
