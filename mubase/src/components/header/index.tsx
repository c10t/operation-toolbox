import * as React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { WithStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import LineFirst from './line-first';
import LineSecond from './line-second';
import LineThird from './line-third';


const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme: Theme) => createStyles({})

interface HeaderProps extends WithStyles<typeof styles> {
  onDrawerToggle?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Header: React.FC<HeaderProps> = ({ classes, onDrawerToggle }) => {
  return (
    <React.Fragment>
      <LineFirst onDrawerToggle={onDrawerToggle} />
      <LineSecond />
      <LineThird />
    </React.Fragment>
  )
}

export default Header
