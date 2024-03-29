import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todos from './Todos';
import EditTodo from './EditTodo';

export default function() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Todos} />
        <Route path="/todo/:id" component={EditTodo} />
        <Route path="/todo" component={EditTodo} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </>
  );
}
