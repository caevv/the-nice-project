import './App.css';
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {createUser} from "./store/user";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Foo() {

}

Foo()

const Bar = () => {

}

const other = Bar

function App() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(name, age)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Customers
        </p>

        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">

          <TextField onInput={(e) => setName(e.target.value)} id="name" label="name" variant="outlined"/>
          <TextField onInput={(e) => setAge(e.target.value)} id="age" label="age" variant="outlined"/>

          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>

        </form>
      </header>
    </div>
  );
}

export default App;
