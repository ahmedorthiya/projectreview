import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
  Button
} from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import LinkOffIcon from '@material-ui/icons/LinkOff';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = props => {
  const { className, product, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={product.imageUrl}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          {product.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {product.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
            {
              product.connected ? <Button color="secondary"   onClick={()=>props.openModal(product)}>Connect</Button> : <Button>Disconnect</Button>
            }
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            {
              product.connected ? (
                <>
                  <LinkOffIcon className={classes.statsIcon} />
                  <Typography
                    display="inline"
                    variant="body2"
                  >
                    Unlinked
                  </Typography>
                </>
              ) :
                (
                  <>
                    <DoneAllIcon className={classes.statsIcon} />
                    <Typography
                      display="inline"
                      variant="body2"
                    >
                      Linked
                    </Typography>
                  </>
                )
            }
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
