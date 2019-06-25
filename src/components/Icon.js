import React from 'react';


class Icon extends React.Component{

        

    
    render(){
        return(
            <img src = {this.props.src} width = "200px" className="icon" height = "200px" alt = {this.props.name} onClick={this.props.onClick}/>
        )
    }
}

export default Icon