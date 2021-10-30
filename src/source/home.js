import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Homepage extends Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
      };
    constructor(props){
        super(props);
        console.log(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                Homepage
            </div>
        );
    }
}