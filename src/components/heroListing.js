import React, { Component } from 'react';
import sampleResponse from '../marvel_sample.json';

import { Paper, Typography, List, ListItem, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom'

class HeroListing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heros: [
            ]
        }

        this.getData.bind(this)
    }

    getData(){
        let limit = 20;
        let apikey = "96e614ca161fa3b24de8e5af76746f39";
        let url = `http://gateway.marvel.com/v1/public/characters?limit=${limit}&apikey=${apikey}`
        fetch(url)
            .then(response => response.json())
            .then((data) => {                
                let heros = data.data.results.map( (v)=> {
                    return {
                        "name": v.name, 
                        "id": v.id,
                        "thumbnail": v.thumbnail.path + "." + v.thumbnail.extension
                    }
                });
                this.setState( { "heros": heros } )

            })
    }

    //Lifecycle methods like
    componentWillMount(){
        console.log(this.state.heros)

        let heros = sampleResponse.data.results.map( (v)=> {
            return {
                "name": v.name, 
                "id": v.id,
                "thumbnail": v.thumbnail.path + "." + v.thumbnail.extension
            }
        });
        this.getData()
        this.setState( { "heros": heros } )
    }

    // Render method

    render() {

        console.log(this.state.heros)

       return (
           <List component="nav">
           
               { this.state.heros.map( (value, index) => { 
                   return (
                        <div key={index}>
                            <ListItem button component={Link} to={"/hero/" + value.id } >
                                <Typography variant="h4" component="h3">
                                    { value.name   }
                                    {/* <Link to="a" > { value.name  } </Link> */}
                                </Typography>
                            </ListItem>
                            <Divider />
                        </div>
                   )
                 }) 
                }
           </List>
       )
    }

}

export default HeroListing;