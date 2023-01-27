const root = document.querySelector('#root');

function tick() {
    const element = `
    <div>
        <h1> Jam Sekarang </h1>
        <h2> ${new Date().toLocaleTimeString()} </h2>
    </div>`;
    root.innerHTML = element;
}
tick();
setInterval(() => { tick(); }, 1000);



const root = document.querySelector('#root');

function padaSaatdiClick(msg) {
    alert(msg)
}

const element = ( < button onClick = {
        padaSaatdiClick.bind(this, 'Hallo Aku di click')
    } > Click me < /button>);


    ReactDOM.render(element, root);


    //state

    const root = document.querySelector('#root');

    function App() {
        const state = React.useState(0);
        const count = state[0];
        const updateCount = state[1]

        return ( <
            >
            <
            button onClick = {
                function() {
                    updateCount(count - 1);
                }
            } > - < /button> <
            span > { count } < /span> <
            button onClick = {
                function() {
                    updateCount(count + 1);
                }
            } > + < /button> < / >
        )
    }



    ReactDOM.render( < App / > , root);

    // state baru

    const root = document.querySelector('#root');

    function App() {
        const [count, updateCount] = React.useState(0);

        return ( <
            >
            <
            button onClick = {
                function() {
                    updateCount(count - 1);
                }
            } > - < /button> <
            span > { count } < /span> <
            button onClick = {
                function() {
                    updateCount(count + 1);
                }
            } > + < /button> < / >
        )
    }

    //coditional rendering 

    const root = document.querySelector('#root');

    function App() {
        const [diKlik, setDiklik] = React.useState(false);
        const [count, setcount] = React.useState(0);

        React.useEffect(function() {
            console.log('init coursel');
            return function() {
                console.log('Destroy coursel');
            };
        })

        return ( <
            >
            <
            h1 id = "judul" > Hello ini judul yang di render < /h1> <
            button onClick = {
                function() {
                    setDiklik(true);
                }
            } >
            : Klik aku dong <
            /button>

            <
            button onClick = {
                function() {
                    setcount(count + 1);
                }
            } >
            Nilai saat ini: { count } <
            /button> < / >
        )
    }



    ReactDOM.render( < App / > , root);

    //conditional rendering

    const root = document.querySelector('#root');

    function App() {
        const [login, setlogin] = React.useState(false);

        if (login) {
            return ( <
                >
                <
                h1 > Udah login bang < /h1> <
                button onClick = {
                    function() {
                        setlogin(false);
                    }
                } > logout < /button> < / >
            )
        }

        return ( <
            >
            <
            h1 > Login dulu bang < /h1> <
            button onClick = {
                function() {
                    setlogin(true);
                }
            } > login < /button> < / >
        )
    }



    ReactDOM.render( < App / > , root);


    //coditional rendeering 

    const root = document.querySelector('#root');

    function App() {
        const [login, setlogin] = React.useState(false);


        return ( <
            >
            <
            h1 > Application < /h1>   <
            p > { login ? < b > Kamu sudah login < /b> : <i>Kamu belum login</i > } < /p> <
            button onClick = {
                function() {
                    setlogin(true);
                }
            } > login < /button> </ >
        )

    }



    ReactDOM.render( < App / > , root);

    // dom manipulation

    const root = document.querySelector('#root');


    function App() {
        const [login, setlogin] = React.useState(false);
        React.useEffect(function() {
            const judul = document.getElementById('judul');
            judul.textContent = 'Aplikasi'
        }, []);

        return ( <
            >
            <
            h1 id = "judul" > Application < /h1>    < / >
        )

    }



    ReactDOM.render( < App / > , root);

    // dom manipulation
    const root = document.querySelector('#root');


    function App() {
        const [login, setlogin] = React.useState(false);
        const judulRef = React.useRef(null);

        React.useEffect(function() {
            const judul = document.getElementById('judul');
            judulRef.current.textContent = 'Aplikasi'
        }, []);

        return ( <
            >
            <
            h1 ref = { judulRef } > Application < /h1>    < / >
        )

    }



    ReactDOM.render( < App / > , root);

    // list 

    const root = document.querySelector('#root');


    function App() {
        const fruits = ['Apple', 'Orange', 'Grape', 'Kelngkeng']

        return ( <
            ul > {
                fruits.map(function(fruit) {
                    return <li key = { fruit } > { fruit } < /li>
                })
            } <
            /ul>
        )

    }



    ReactDOM.render( < App / > , root);

    // uncontroll component

    const root = document.querySelector('#root');


    function App() {
        const namaRef = React.useRef(null);

        function ketikaSubmit(event) {
            event.preventDefault();
            const nama = namaRef.current.value;
            console.log("Name : ", nama)
        }

        return ( <
            form onSubmit = { ketikaSubmit } >
            <
            div >
            <
            label > Nama: < /label> <
            input type = "text"
            name = "nama"
            ref = { namaRef }
            /> < /
            div > <
            button type = "submit" > Kirim < /button> < /
            form >
        )

    }



    ReactDOM.render( < App / > , root);

    //Controll component
    const root = document.querySelector('#root');


    function App() {
        const [nama, setNama] = React.useState('');

        function ketikaSubmit(event) {
            event.preventDefault();
            console.log("name", nama)
        }

        return ( <
            form onSubmit = { ketikaSubmit } >
            <
            div >
            <
            label > Nama: < /label> <
            input type = "text"
            name = "nama"
            onChange = {
                function(event) {
                    setNama(event.target.value)
                }
            }
            /> < /
            div > <
            button type = "submit" > Kirim < /button> < /
            form >
        )

    }



    ReactDOM.render( < App / > , root);

    // fetching data chaning then

    const root = document.querySelector('#root');


    function App() {
        React.useEffect(function() {
            const Data = fetch('https://api.spaceflightnewsapi.net/v3/blogs').then(function(response) {
                return response.json();
            }).then(function(response) {
                console.log(response)
            });
            console.log(Data)
        }, [])

        return ( <
            h1 > Data Fetach < /h1>
        )

    }



    ReactDOM.render( < App / > , root);


    // menggunakan async await 

    const root = document.querySelector('#root');


    function App() {
        React.useEffect(function() {
            async function getData() {
                const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs')

                const response = await request.json();
                console.log(response)
            }
            getData();
        }, [])

        return ( <
            h1 > Data Fetach < /h1>
        )

    }



    ReactDOM.render( < App / > , root);

    //fetach data with state

    const root = document.querySelector('#root');


    function App() {
        const [news, setNews] = React.useState([]);
        const [loading, setLoading] = React.useState(true);

        React.useEffect(function() {
            async function getData() {
                const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs')

                const response = await request.json();
                setNews(response);
                setLoading(false)
            }
            getData();
        }, [])

        return ( <
                >
                <
                h1 > Data Fetach < /h1> {
                loading && < i > Loading data... < /i>} {!loading && < ul > {
                news.map(function(item) {
                    return <li key = { item.id } > { item.title } < /li>
                })
            } <
            /ul>}


        <
        />
    )

}



ReactDOM.render( < App / > , root);


// todo list


const root = document.querySelector('#root');


function App() {
    const [activity, setActivity] = React.useState('');
    const [edit, setEdit] = React.useState({});
    const [todo, setTodo] = React.useState([]);
    const [message, setMessage] = React.useState('');

    function generateId() {
        return Date.now();
    }

    function saveTodoHandler(event) {
        event.preventDefault();

        if (!activity) {
            return setMessage('Nama Aktifitas tidak boleh kosong')
        }
        setMessage('')

        if (edit.id) {
            const updatedTodo = {
                id: edit.id,
                activity,
            };
            const editTodoIndex = todo.findIndex(function(todoAll) {
                return todoAll.id == edit.id
            })

            const udpatedTodos = [...todo];
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

    function removeToDoHandler(todoId) {
        const filtertodo = todo.filter(function(todo) {
            return todo.id != todoId
        })

        setTodo(filtertodo);
        if (edit.id) {
            cancelEditHandler();
        }

    }

    function editToDoHandler(todoAll) {
        setActivity(todoAll.activity)
        setEdit(todoAll)
    }

    function cancelEditHandler() {
        setEdit([])
        setActivity('')
    }

    function doneHandler(todonow) {
        const updatetodo = {
            id: todo.id,
            activity: todo.activity,
            done: todonow.done ? false : true,
        }

        const todoIndex = todo.findIndex(function(currentTodo) {
            return currentTodo.id == todonow.id
        })
        const updatetodos = [...todo];
        updatetodos[todoIndex] = updatetodo
        console.log(updatetodos)
        setTodo(updatetodos)
    }

    return ( <
        >
        <
        h1 > simple Todo List < /h1> {
            message &&
                <
                div style = {
                    { color: "red" } } > { message } <
                /div>
        }


        <
        form onSubmit = { saveTodoHandler } >
        <
        input type = "text"
        placeholder = "Nama aktifitas"
        value = { activity }
        onChange = {
            function(event) {
                setActivity(event.target.value)
            }
        }
        />  <
        button type = "submit" > { edit.id ? "Simpan Perubahan" : "Tambah" } < /button>  {
            edit.id &&
                <
                button onClick = { cancelEditHandler } > Batal edit < /button>
        } <
        /form> {
            todo.length > 0 ?
                <
                ul > {
                    todo.map(function(todo) {
                        return <li key = { todo.id } >
                            <
                            input type = "checkbox"
                        onChange = { doneHandler.bind(this, todo) }
                        /> { todo.activity } { todo.done ? 'Selesai' : 'Belum Selesai' } <
                        button onClick = { editToDoHandler.bind(this, todo) } > Edit < /button>  <
                            button onClick = { removeToDoHandler.bind(this, todo.id) } > Hapus < /button>  <
                            /li>
                    })
                } < /ul> : <i>Tidak ada ToDo</i >
        }


        <
        />
    )

}



ReactDOM.render( < App / > , root);