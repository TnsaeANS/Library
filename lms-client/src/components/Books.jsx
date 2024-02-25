import React, { useState, useEffect } from "react"

function Books() {

    const [books, setBooks] = useState([])
    const [, setLoading] = useState(true)
    const [, setError] = useState(null)

    useEffect(() => {
        async function loadBooks(){
            try{
                const response = await fetch('http://127.0.0.1:3000/books')
                if (response.ok){
                    const json = await response.json();
                    setBooks(json)
                }else {
                    throw response;
                }
            } catch (e){
                setError("An error has occurred.")
                console.log("An error has occured:", e)
            } finally {
                setLoading(false);
            }
        }
        loadBooks();
    }, []);
    

    return (
       <>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Genre</th>
                        <th>Publication Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>{book.genre}</td>
                            <td>{book.pub_date}</td>
                            <td>{book.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
      );
      

}

export default Books