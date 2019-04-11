import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import HelpIcon from '@material-ui/icons/Help'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'
import { WithStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'


const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme: Theme) => createStyles({
  secondaryBar: { zIndex: 0 },
  button: { borderColor: lightColor }
})

interface LineSecondProps extends WithStyles<typeof styles> {}

const LineSecond: React.FC<LineSecondProps> = ({ classes }) => (
  <AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0} >
    <Toolbar>
      <Grid container alignItems="center" spacing={8}>
        <Grid item xs>
          <Typography color="inherit" variant="h5">
            Authentication
          </Typography>
        </Grid>
        <Grid item>
          <Button className={classes.button} variant="outlined" color="inherit" size="small">
            Web setup
          </Button>
        </Grid>
        <Grid item>
          <Tooltip title="Help">
            <IconButton color="inherit">
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(LineSecond)
