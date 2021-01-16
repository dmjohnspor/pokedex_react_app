import React from 'react';
import {
    Container,
    Grid,
    Card,
    Typography,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from './pokedex.jpg'

const useStyles = makeStyles(theme => ({
    card: {
        padding: 'auto',
        margin: 'auto',
        marginTop: '100px',
        height: '446px',
        width: '342px',
        backgroundImage: `url(${Image})`
    },
    button: {
        color: 'white',
        background: 'red',
        marginTop: '10px'
    },
    title: {
        marginTop: '130px'
    }
}));

const Intro = (props) => {
    const classes = useStyles();
    const { history } = props;

    return (
        <Container>
            <Card className={classes.card} raised>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Typography
                        className={classes.title}
                        variant='h6'
                    >Choose a Pokedex
                    </Typography>
                    <Button
                        className={classes.button}
                        variant="contained"
                        onClick={() => history.push('/pokedexNat')}
                    >
                        National Pokedex
                </Button>
                </Grid>
            </Card>
        </Container>
    )
};

export default Intro;