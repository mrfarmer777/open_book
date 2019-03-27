export function fetchPopBooks() {
  return (dispatch) => {
    dispatch({ type: 'BEGIN_BOOKS_REQUEST' });
    const token=JSON.stringify(localStorage.getItem('jwtToken'))
    console.log(token);
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/books`, {
    accept: 'application/json',
    headers:{
      "Authorization":token
    }
  })
      .then(response => response.json())
      .then(books => dispatch({ type: 'ADD_POP_BOOKS', payload: books }));
  };
}


export function fetchUserBooks() {
  return (dispatch) => {
    dispatch({ type: 'BEGIN_BOOKS_REQUEST' });
    const authHeader=JSON.stringify("Bearer " +localStorage.getItem('jwtToken'))
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/current_user_data`, {
      accept: 'application/json',
      headers:{
        'Content-Type': 'application/json',
        "Authorization": authHeader
      }
    })
        .then(response => response.json())
        .then(user => {
          dispatch({ type: 'ADD_BOOKS', payload: user.user_books })
          dispatch({ type: "ADD_ENTRIES", payload: user.entries })
          dispatch({ type: "COMPLETE_USER_DATA", payload: user})
        });
        
    };
}

export function fetchUserBook(id){
  return (dispatch) => {
    dispatch({ type: 'BEGIN_BOOKS_REQUEST' });
    const authHeader=JSON.stringify("Bearer " +localStorage.getItem('jwtToken'))
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/user_books/${id}`, {
      accept: 'application/json',
      headers:{
        'Content-Type': 'application/json',
        "Authorization": authHeader
      }
    })
        .then(response => response.json())
        .then(book => {
          dispatch({ type: 'UPDATE_BOOK', payload: book })
        });
        
    };
}


export function postBook(book){
  const body = JSON.stringify({book: {title: book.title, author: book.author, pages: book.pages, genres: book.genres }})
  console.log(body)
  return (dispatch) => {
    dispatch({ type: 'BEGIN_BOOKS_REQUEST' });
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/books`, {
      method: 'post',
       headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.getItem("jwtToken")
      },
      body: body
  })
      .then((res)=>res.json())
      .then((book)=>dispatch(useBook(book)))
      .then((res)=>dispatch(fetchPopBooks()));
  };
}

export function useBook(book){
  const body=JSON.stringify({ub: {book_id: book.id, pages: book.pages}})
  return (dispatch) => {
    dispatch({ type: 'BEGIN_BOOKS_REQUEST' });
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/user_books`, {
      method: 'post',
       headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.getItem("jwtToken")
      },
      body: body
  })
      .then((res)=>res.json())
      .then((book)=>dispatch({type: "ADD_BOOK",payload: book}))
  };
}


export function deleteBook(id){
  return (dispatch) => {
    dispatch({ type: 'BEGIN_BOOKS_REQUEST' });
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/user_books/${id}`, {
      method: 'delete',
       headers: {
        'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then((res)=>dispatch({type: "REMOVE_BOOK", payload: res}))
  };
}