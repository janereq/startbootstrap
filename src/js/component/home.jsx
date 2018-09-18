import React from 'react';

import Header from './_header.jsx';
import Footer from './_footer.jsx';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div body>
                <Header />
                <h1>This will be the Bootstrap Page</h1>
                <Footer />
            </div>
        );
    }
}
