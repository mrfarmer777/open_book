


//Fetches all entries, from before user layer was implemented
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



//Posts a new entry and adds it to the store
export function postEntry(entry){
  const body = JSON.stringify({entry: {user_book_id: entry.user_book_id, time: entry.time, pages: entry.pages}})
  console.log(body)
  return (dispatch) => {
    dispatch({ type: 'BEGIN_GET_ENTRIES_REQUEST' });
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/entries`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+localStorage.getItem("jwtToken")
      },
      body: body
  })
      .then(response => response.json())
      .then(entry => dispatch({ type: 'ADD_ENTRY', payload: entry }))
  };
}


//Deletes entry and then removes it from the store 
export function deleteEntry(id){
  return (dispatch) => {
    dispatch({ type: 'BEGIN_GET_ENTRIES_REQUEST' });
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/entries/${id}`, {
      method: 'delete',
       headers: {
        'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then((entry)=>dispatch({type: "REMOVE_ENTRY", payload: entry}))
  };
}

export function fetchUserEntries() {
  return (dispatch) => {
    dispatch({ type: 'BEGIN_ENTRIES_REQUEST' });
    const authHeader=JSON.stringify("Bearer " +localStorage.getItem('jwtToken'))
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/current_user_entries`, {
      accept: 'application/json',
      headers:{
        'Content-Type': 'application/json',
        "Authorization": authHeader
      }
    })
        .then(response => response.json())
        .then(user => {
          dispatch({ type: 'ADD_ENTRIES', payload: user.entries})
        });
        
    };
}