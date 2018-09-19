import React from 'react';

//create your first component
export default class Footer extends React.Component{
    
    render(){
        return (
            <footer className="bg-dark text-white p-5 mt-4">
                <p className="text-center">Copyright &copy; Your Website 2018</p>
            </footer>
        );
    }
}
