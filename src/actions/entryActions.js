

export function fetchEntries() {
  return (dispatch) => {
    dispatch({ type: 'BEGIN_GET_ENTRIES_REQUEST' });
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/entries`, {
    accept: 'application/json',
  })
      .then(response => response.json())
      .then(entries => dispatch({ type: 'ADD_ENTRIES', payload: entries }));
  };
}