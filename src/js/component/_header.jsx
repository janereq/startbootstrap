import React from 'react';


//create your first component
export default class Header extends React.Component{
    
    render(){
        return (
            <div className="text-center mt-5">
                <h1>This will be the header</h1>
            </div>
        );
    }
}
