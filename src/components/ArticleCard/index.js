import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// author: "Alex Baker-Whitcomb"
// content: "Netflix releases some subtle but significant sound improvements, a science squad gets ready to take on aggro-asteroids, and there's a big sale to nerd out over. Here's the news you need to know in two minutes or less.
// ↵Your Netflix binges are about to sound b… [+1572 chars]"
// description: "Catch up on the most important news today in 2 minutes or less."
// publishedAt: "2019-05-01T23:22:34Z"
// source: {id: "wired", name: "Wired"}
// title: "Netflix Amps Up Its Sound, an Asteroid Task Force, and More News"
// url: "https://www.wired.com/story/netflix-audio-update-asteroid-defense/"
// urlToImage: "https://media.wired.com/photos/5cca256bb683182462a251fc/191:100/pass/Speakers-200198850-001.jpg"

const StyledCard = styled(Card)`
    width: 340px;
    img {
        object-fit: cover;
    }
`;

export default (props) => {
  const { title, description, urlToImage } = props.article;
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
              Share
        </Button>
        <Button size="small" color="primary">
              Learn More
        </Button>
      </CardActions>
    </StyledCard>
  );
};
