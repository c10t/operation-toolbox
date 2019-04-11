import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

import { withStyles } from '@material-ui/core/styles'
import { WithStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'

const styles = (theme: Theme) => createStyles({
  secondaryBar: { zIndex: 0 }
})

interface LineThirdProps extends WithStyles<typeof styles> {}

const LineThird: React.FC<LineThirdProps> = ({ classes }) => (
  <AppBar
    component="div"
    className={classes.secondaryBar}
    color="primary"
    position="static"
    elevation={0}
  >
    <Tabs value={0} textColor="inherit">
      <Tab textColor="inherit" label="Users" />
      <Tab textColor="inherit" label="Sign-in method" />
      <Tab textColor="inherit" label="Templates" />
      <Tab textColor="inherit" label="Usage" />
    </Tabs>
  </AppBar>
)

export default withStyles(styles)(LineThird)
