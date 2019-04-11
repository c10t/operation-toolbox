import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'
import { WithStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme: Theme) => createStyles({
  menuButton: { marginLeft: -theme.spacing.unit },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    }
  },
  iconButtonAvatar: { padding: 4 },
  avatar: {}
})

interface FirstLineProps extends WithStyles<typeof styles> {
  onDrawerToggle?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const FirstLine: React.FC<FirstLineProps> = ({ classes, onDrawerToggle }) => (
  <AppBar color="primary" position="sticky" elevation={0}>
    <Toolbar>
      <Grid container spacing={8} alignItems="center">
        <Hidden smUp>
          <Grid item>
            <IconButton color="inherit" aria-label="Open drawer"
              onClick={onDrawerToggle} className={classes.menuButton}
            >
            <MenuIcon />
          </IconButton>
        </Grid>
      </Hidden>
      <Grid item xs />
      <Grid item>
        <Typography className={classes.link} component="a"> {/* href="#" */}
          Go to docs
        </Typography>
      </Grid>
      <Grid item>
        <Tooltip title="Alerts • No alters">
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <IconButton color="inherit" className={classes.iconButtonAvatar}>
          <Avatar className={classes.avatar} src="/static/images/avatar/1.jpg" />
        </IconButton>
      </Grid>
    </Grid>
  </Toolbar>
</AppBar>
)

export default withStyles(styles)(FirstLine)
