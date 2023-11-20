import React, { useRef, useState} from "react";
import './css/List.css'
import list from './data/movie.js'

function List(){
    
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
        <div className='movielist'>
            <div style={{overflowX:'auto'}}>
            <AddList setList = {setList }/>
            <form className="form-list" onSubmit={handleSubmit}>
            <table>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr className="list-row">
                            <td className="list-data">{current.name}</td>
                            <td className="list-data">{current.director}</td>
                            <td className="list-data">{current.language}</td>
                            <td className="list-data">{current.year}</td>
                            <td className="list-data">{current.rating}</td>
                            <td className="list-data">
                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const director = event.target.elements.director.value
        const language = event.target.elements.language.value
        const year = event.target.elements.year.value
        const rating = event.target.elements.rating.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, director: director, language: language, year: year, rating: rating} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, name :value} : li
        ))

        setList(newlist)
    }
    function handInputdirector(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, director :value} : li
        ))

        setList(newlist)
    }
    function handInputlanguage(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, language :value} : li
        ))

        setList(newlist)
    }
    function handInputyear(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, year :value} : li
        ))

        setList(newlist)
    }
    function handInputrating(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, rating :value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>
            <td><input className="add-input" type="text" onChange={handInputname} name='name' value={current.name}/></td>
            <td><input className="add-input" type="text" onChange={handInputdirector} name='director' value={current.director}/></td>
            <td><input className="add-input" type="text" onChange={handInputlanguage} name='language' value={current.language}/></td>
            <td><input className="add-input" type="text" onChange={handInputyear} name='year' value={current.year}/></td>
            <td><input className="add-input" type="text" onChange={handInputrating} name='rating' value={current.rating}/></td>
            <td><button className="buttons" type='submit' >Update</button></td>
        </tr>
    )
}

function AddList({setList}) {
    const nameRef = useRef()
    const directorRef = useRef()
    const languageRef = useRef()
    const yearRef = useRef()
    const ratingRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const director = event.target.elements.director.value;
        const language = event.target.elements.language.value;
        const year = event.target.elements.year.value;
        const rating = event.target.elements.rating.value;
        const newlist = {
            id: 3,
            name,
            director,
            language,
            year,
            rating
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        directorRef.current.value = ""
        languageRef.current.value = ""
        yearRef.current.value = ""
        ratingRef.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input className="add-input" type="text" name="name" placeholder="Enter Name" ref={nameRef}/>
            <input className="add-input" type="text" name="director" placeholder="Enter director" ref={directorRef}/>
            <input className="add-input" type="text" name="language" placeholder="Enter language" ref={languageRef}/>
            <input className="add-input" type="text" name="year" placeholder="Enter year" ref={yearRef}/>
            <input className="add-input" type="text" name="rating" placeholder="Enter rating" ref={ratingRef}/>
            <button className="buttons" type="submit">Add</button>
            <button className="buttons" type="submit">Filter</button>
        </form>
    )
}


export default List;