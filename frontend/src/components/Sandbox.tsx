import * as React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Sandbox extends React.Component {

  public render() {
    return (
      <div>
        <Card color="textSecondary">
          <CardContent>
            <Typography>
              Word of the Day
            </Typography>
            <Typography variant="headline" component="h2">
              Wirtschaftswissenschaften
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Sandbox;
