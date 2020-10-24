import React, {Component} from 'react';
import axios from '../../axios';
import Card from './Card';

class Home extends Component{

    state = {
        results : []
    }

    componentDidMount(){
        axios.get('/recipe')
            .then(response => {
                this.setState({results : response.data});
            })
    }
    //col-sm mt-4
    render(){
        console.log(this.state.results);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm mt-4">
                        <div className="card-columns">
                            {this.state.results.map(result => {
                                return <Card
                                    key={result.id} 
                                    id={result.id}
                                    name={result.name}
                                    url={result.image}
                                    category={result.category}
                                    taste = {result.label}
                                    description = {result.description}
                                    price = {result.price}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;