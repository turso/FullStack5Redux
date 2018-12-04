import React from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

class App extends React.Component {
  render() {
    // const anecdotes = this.context.store.getState();
    return (
      // <div>
      //   <h2>Anecdotes</h2>
      //   {anecdotes.map(anecdote => (
      //     <div key={anecdote.id}>
      //       <div>{anecdote.content}</div>
      //       <div>
      //         has {anecdote.votes}
      //         <button>vote</button>
      //       </div>
      //     </div>
      //   ))}
      //   <h2>create new</h2>
      //   <form>
      //     <div>
      //       <input />
      //     </div>
      //     <button>create</button>
      //   </form>
      // </div>
      <div>
        <AnecdoteForm />
        <AnecdoteList />
      </div>
    );
  }
}

// App.contextType = {
//   store: PropTypes.object
// };

export default App;
