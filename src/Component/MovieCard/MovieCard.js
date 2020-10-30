import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import PropTypes from "prop-types";

const MovieCard = (movie) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={movie.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{movie.rating}</CardTitle>
                    <CardSubtitle>{movie.name}</CardSubtitle>
                    <div className="card_right__details">
                        <ul>
                            <li>{movie.date}</li>
                            <li>||</li>
                            <li>{movie.type}</li>
                        </ul>
                    </div>
                    <CardText>{movie.description}</CardText>


                </CardBody>
            </Card>
        </div>
    );
};

export default MovieCard;
MovieCard.propTypes = { movies: PropTypes.object };