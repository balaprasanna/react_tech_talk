import React, { Component } from 'react';
import AppHeader from './header';

import { Card, CardHeader, CardContent, CardMedia, CardActions, Button, GridList } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    card: {
        padding: 20,
    //   maxWidth: 345,
    },
    media: {
      height: 500,
    },
  };
  

class HeroDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id, //Get matched parms from url.
            hero : {
                thumbnail : {},
                series: {
                    items: []
                },
                comics: {
                    items: []
                }
            }
        }

        this.getData.bind(this);
    }


    getData() {
        let limit = 20;
        let apikey = "96e614ca161fa3b24de8e5af76746f39";
        let url = `http://gateway.marvel.com/v1/public/characters/${this.state.id}?limit=${limit}&apikey=${apikey}`
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                let hero = data.data.results[0]
                this.setState( {hero} )
            })
    }

    componentWillMount(){
        this.getData();
    }

    render(){
        console.log("comp rendered...")
        console.log(this.state.hero)
        return (
            <div>
                <AppHeader title="Marvel Heros Details" />

                <Card style={styles.card} >
                    <CardHeader 
                        title={ this.state.hero.name }
                        subheader={ this.state.hero.series.items.length + " series " + this.state.hero.comics.items.length + " comics " }
                    />

                    <CardMedia style={styles.media}
                        image = { this.state.hero.thumbnail.path + "." + this.state.hero.thumbnail.extension }
                        title="testing...123"
                    />

                    <CardContent>
                    </CardContent>

                    <CardActions>
                        <Button variant="outlined" size="small" color="primary" component={Link} to="/home">
                            Back
                        </Button>    
                    </CardActions>
                    
                </Card>

            </div>
        )
    }

    p
}


export default HeroDetails;