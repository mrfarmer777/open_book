export function fetchBooks() {
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
      .then(books => dispatch({ type: 'ADD_BOOKS', payload: books }));
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
          dispatch({ type: 'ADD_BOOKS', payload: user.books })
          dispatch({ type: "ADD_ENTRIES", payload: user.entries })
          dispatch({ type: "COMPLETE_USER_DATA", payload: user})
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
      .then((books)=>dispatch({type: "ADD_BOOKS",payload: books}))
  };
}


export function deleteBook(id){
  return (dispatch) => {
    dispatch({ type: 'BEGIN_BOOKS_REQUEST' });
    return fetch(`https://flatiron-2-mrfarmer7771.c9users.io/books/${id}`, {
      method: 'delete',
       headers: {
        'Content-Type': 'application/json'
      }
  })
      .then(response => console.log("Book was deleted"))
      .then(()=>dispatch(fetchBooks()))
  };
}