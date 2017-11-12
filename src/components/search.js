import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    //define and initialize state 
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <div className='search-bar'>
                <input 
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        ); 
    

    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar; 




    // //event handlier
    // onInputChange(event) {
    //     // console.log(event.target.value);
    //     this.setState({term : event.target.value});

    // }

    // Value of the input: {this.state.term}
//STATE: plain js object that is used to record and react to user events. each class based component that we define has its own state object whenever a component state is changed, the component immediately renders and forces all of its children to render as well


//ES6 CLASS COMPONENTS: used when you want a component to have some type of internal record keeping ability for it to be aware of itself and what happened to it since its been rendered

//CLASS BASED COMPONENTS: 'extend react.component' gives search bar a bunch of functionality from the react doc component class. every component that we create (thats class based) must have a render method


// const SearchBar = () => {
//     return <input />
// }
//FUNCTIONAL COMPONENTS: literally a function, one function where some info goes in, some JSX comes out

//control component: value set by state, value only change when state changes, 

//EVENT HANDLER: a function that runs whenever an event occurs, need to pass event handler to the element that we want to monitor for events.