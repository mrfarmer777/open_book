

export function fetchEntries() {
  return (dispatch) => {
    dispatch({ type: 'BEGIN_GET_ENTRIES_REQUEST' });
    return fetch('/api/entries')
      .then(response => response.json())
      .then(entries => dispatch({ type: 'ADD_ENTRIES', payload: entries }));
  };
}