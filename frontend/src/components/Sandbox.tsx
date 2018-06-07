import * as React from 'react';

// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';

import  { withStyles, WithStyles } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Search from '@material-ui/icons/Search';

const styles = (theme: Theme) => createStyles({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    width: '100%',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

type ClassNames = keyof typeof styles;
 
interface ISampleListProps extends WithStyles<typeof styles> {
  foo: number;
  data: IRecord[];
};

interface IRecord {
  id: number;
  name: string;
  condition: string;
}

const dummyData: IRecord[] = [
  {id: 1, name: "@master", condition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id: 2, name: "@poo", condition: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
  {id: 3, name: "@tres3", condition: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
  {id: 4, name: "@zzzsleepzzz", condition: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
];

const SearchBar: React.SFC = () => {
  return (
    <div>
      <Typography variant="title" style={{margin: 8}}>SUPER AWESOME TITLE</Typography>
      <TextField
        style={{margin: 8}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
};

const TableContent: React.SFC<{data: IRecord[]}> = ({ data }) => {
  return (
    <div>
      { data.map(item => (
        <TableRow key={item.id}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.condition}</TableCell>
        </TableRow>
      ))}
    </div>
  );
}

class Sandbox extends React.Component<ISampleListProps & WithStyles<ClassNames>, {}> {

  public render() {
    const { classes } = this.props;
    const data = dummyData;

    return (
      <div>
        <Paper className={classes.root}>
          <SearchBar />
          <Table>
            <TableHead>
              <TableCell className={classes.head}>Name</TableCell>
              <TableCell className={classes.head}>Condition</TableCell>
            </TableHead>
            <TableBody>
              <TableContent data={data}/>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles<{} & ClassNames>(styles)<ISampleListProps>(Sandbox);
