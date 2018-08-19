
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


export function postEntry(entry){
  const body = JSON.stringify({entry: {book_id: entry.book_id, time: entry.time, pages: entry.pages}})
  console.log(body)
  return (dispatch) => {
    dispatch({ type: 'BEGIN_GET_ENTRIES_REQUEST' });
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/entries`, {
      method: 'post',
       headers: {
        'Content-Type': 'application/json'
      },
      body: body
  })
      .then(response => response.json())
      .then(entries => dispatch({ type: 'ADD_ENTRIES', payload: entries }));
  };
}


export function deleteEntry(id){
  return (dispatch) => {
    dispatch({ type: 'BEGIN_GET_ENTRIES_REQUEST' });
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/entries/${id}`, {
      method: 'delete',
       headers: {
        'Content-Type': 'application/json'
      }
  })
      .then(response => console.log("Item was deleted"))
      .then(()=>dispatch(fetchEntries()))
  };
}