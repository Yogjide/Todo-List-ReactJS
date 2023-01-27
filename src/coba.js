const root = document.querySelector('#root');


function App() {
    const [activity, setActivity] = React.useState('');
    const [edit, setEdit] = React.useState({});
    const [todo, setTodo] = React.useState([]);
    const [message, setMessage] = React.useState('');

    function generateId(){
        return Date.now();
    }
    function saveTodoHandler(event) {
        event.preventDefault();

        if(!activity){
            return setMessage('Nama Aktifitas tidak boleh kosong')
        }
        setMessage('')

        if(edit.id){
            const updatedTodo = {
                ... edit,
                activity,
            };
            const editTodoIndex = todo.findIndex(function(todoAll){
                return todoAll.id == edit.id
            })

            const udpatedTodos = [ ... todo];
            udpatedTodos[editTodoIndex] = updatedTodo;
            
            setTodo(udpatedTodos);
            return cancelEditHandler();

        }

        setTodo([...todo, {
            id: generateId(),
            activity: activity,
            done: false,
        }])
        setActivity('')
    }

    function removeToDoHandler(todoId){
        const filtertodo = todo.filter(function (todo){
            return todo.id != todoId
        })

        setTodo(filtertodo);
        if (edit.id){
            cancelEditHandler();
        }
        
    }

    function editToDoHandler(todoAll){
        setActivity(todoAll.activity)
        setEdit(todoAll)
    }

    function cancelEditHandler(){
        setEdit([])
        setActivity('')
    }

    function doneTodoHandler(todonow){
        const updatetodo = {
            id: todonow.id,
            activity: todonow.activity,
            done: todonow.done ? false : true,
        }

        const todoIndex = todo.findIndex(function(currentTodo){
            return currentTodo.id == todonow.id
        })
        const updatetodos = [... todo];
        updatetodos[todoIndex] = updatetodo
        console.log(updatetodo)

        console.log(updatetodos)

        setTodo(updatetodos)
    }

    return ( 
    <>
        <h1> simple Todo List </h1>
        {message && 
        <div style={{color: "red"}}>
            {message}
        </div>
        }
        

        <form onSubmit = { saveTodoHandler } >
        <input type = "text"
        placeholder = "Nama aktifitas"
        value = {activity}
        onChange = {
            function(event) {
                setActivity(event.target.value)
            }
        }/> 
        <button type = "submit" > {edit.id ? "Simpan Perubahan" : "Tambah"} </button> 
        {edit.id &&
        <button onClick={cancelEditHandler}>Batal edit</button>
        }
        </form>
        {todo.length > 0 ?
        <ul> {
            todo.map(function(todoon) {
                return (<li key={todo.id}> 
                    <input type="checkbox" onChange={doneTodoHandler.bind(this, todoon)} checked={todoon.done}/>
                    { todoon.activity } 
                    ({todoon.done ? 'Selesai' : 'Belum Selesai'})
                    <button onClick = {editToDoHandler.bind(this, todoon)}> Edit</button> 
                    <button onClick = {removeToDoHandler.bind(this, todoon.id)}> Hapus</button> 
                </li>)
            })
        } </ul> : <p> <i>Tidak ada ToDo</i></p>
        }

        
        </>
    )

}



ReactDOM.render( <App/> , root);