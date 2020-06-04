import React from 'react';
import List from './trelloyesComps/List'
import './App.css';

function App(props) {
  const listComps = props.store.lists.map((list,i) => {return (
    <List key={list.id} 
          header={list.header} 
          cardIds={list.cardzIds} 
          cards={props.store.allCards}>
    </List>
  )
  });
  return (
    <main className="App"
    lists={props.store.lists}
    cards={props.store.allCards}>
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {/* <List></List> */}
        {listComps}
      </div>
    </main>
  );
}

export default App;
