
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';



const CofeeCard = props => {

  const {avatarUrl,title,subtitle,desc,imageUrl}=props;


  return (
    <Card style={{ border:"2px dashed magenta" }}>
      <CardHeader
        avatar={
          <Avatar src={avatarUrl}></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />

      <CardMedia style={{ height: "280px", backgroundPosition:"center" }}  image={imageUrl}    />

      <CardContent>
        
        <Typography variant="body2" component="p">
            {desc}
        </Typography>

      </CardContent>
      <CardActions style={{ marginLeft: "25px" }}>

        <Button size="small" variant="contained" color="primary">Buy Now</Button>
        <Button size="small" variant="outlined" color="secondary">Offer</Button>
      </CardActions>
    </Card>
  );
}

export default CofeeCard;
