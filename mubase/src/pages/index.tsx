import * as React from 'react'
import { WithStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'

import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';

import Content from '../components/content'
import Header from '../components/header'
import Navigator from '../components/navigator'
import withRoot, { theme } from '../withRoot'

const drawerWidth = 256;

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
    padding: '48px 36px 0',
    background: '#eaeff1',
  },
})

interface Props extends WithStyles<typeof styles> {}

const Paperbase: React.FC<Props> = ({ classes }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="js">
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <Hidden xsDown implementation="css">
          <Navigator PaperProps={{ style: { width: drawerWidth } }} />
        </Hidden>
      </nav>
      <div className={classes.appContent}>
        <Header onDrawerToggle={handleDrawerToggle} />
        <main className={classes.mainContent}>
          <Content />
        </main>
      </div>
    </div>
  )
}

export default withRoot(withStyles(styles)(Paperbase))
