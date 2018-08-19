export function fetchEntryStats() {
  return (dispatch) => {
    dispatch({ type: 'BEGIN_STATS_REQUEST' });
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/entries/stats`, {
    accept: 'application/json',
  })
      .then(response => response.json())
      .then(entryStats => dispatch({ type: 'ADD_ENTRY_STATS', payload: entryStats }));
  };
}

export function fetchBookStats() {
  return (dispatch) => {
    dispatch({ type: 'BEGIN_STATS_REQUEST' });
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/bookstats`, {
    accept: 'application/json',
  })
      .then(response => response.json())
      .then(entryStats => dispatch({ type: 'ADD_BOOK_STATS', payload: entryStats }));
      
  };
}