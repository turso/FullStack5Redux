import React from 'react';
import PropTypes from 'prop-types';
import actionFor from '../actionCreators';
import Anecdote from './Anecdote';

class AnecdoteList extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    console.log('STORE', store);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  addVote = id => e => {
    this.context.store.dispatch(actionFor.addVote(id));
    console.log('THIS:PROPS:STORE', this.context.store);
    console.log('ID', id);
  };

  render() {
    return (
      <ul>
        {this.context.store
          .getState()
          .map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={this.addVote(anecdote.id)} />)}
      </ul>
    );
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
};

export default AnecdoteList;
