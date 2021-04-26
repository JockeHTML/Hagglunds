import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    borderRadius: "3px",
    padding: "0",
    margin: "0 1rem 2rem 1rem",
  },

  paragraph: {
    padding: "1rem 1rem 0 1rem",
    lineHeight: "1.75",
    fontWeight: "400",
    fontSize: "14px",
  },
  subTitle: {
    color: "var(--green)",
    margin: "0",
  },
  content: {
    margin: "1rem 1rem 0 1rem ",
    paddingBottom: "1rem",
    borderBottom: "1px solid rgba(50, 50, 50, 0.1)",
  },
  media: {
    height: "250px",
    width: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function Staff({ name, title, text, img, extra, email }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={img}
        title="Hagglunds personal"
      />
      <CardContent>
        <div className={classes.content}>
          <h3 className={classes.title}>{name}</h3>
          <h4 className={classes.subTitle}>{title}</h4>
        </div>
        <p className={classes.paragraph}>{text}</p>
        <p className={classes.paragraph}>{email}</p>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <p className={classes.paragraph}>{extra}</p>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default Staff;
