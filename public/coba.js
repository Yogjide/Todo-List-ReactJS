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
      return setMessage('Nama Aktifitas tidak boleh kosong');
    }
    setMessage('');
    if (edit.id) {
      const updatedTodo = {
        ...edit,
        activity
      };
      const editTodoIndex = todo.findIndex(function (todoAll) {
        return todoAll.id == edit.id;
      });
      const udpatedTodos = [...todo];
      udpatedTodos[editTodoIndex] = updatedTodo;
      setTodo(udpatedTodos);
      return cancelEditHandler();
    }
    setTodo([...todo, {
      id: generateId(),
      activity: activity,
      done: false
    }]);
    setActivity('');
  }
  function removeToDoHandler(todoId) {
    const filtertodo = todo.filter(function (todo) {
      return todo.id != todoId;
    });
    setTodo(filtertodo);
    if (edit.id) {
      cancelEditHandler();
    }
  }
  function editToDoHandler(todoAll) {
    setActivity(todoAll.activity);
    setEdit(todoAll);
  }
  function cancelEditHandler() {
    setEdit([]);
    setActivity('');
  }
  function doneTodoHandler(todonow) {
    const updatetodo = {
      id: todonow.id,
      activity: todonow.activity,
      done: todonow.done ? false : true
    };
    const todoIndex = todo.findIndex(function (currentTodo) {
      return currentTodo.id == todonow.id;
    });
    const updatetodos = [...todo];
    updatetodos[todoIndex] = updatetodo;
    console.log(updatetodo);
    console.log(updatetodos);
    setTodo(updatetodos);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, " simple Todo List "), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red"
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama aktifitas",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, " ", edit.id ? "Simpan Perubahan" : "Tambah", " "), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "Batal edit")), todo.length > 0 ? /*#__PURE__*/React.createElement("ul", null, " ", todo.map(function (todoon) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      onChange: doneTodoHandler.bind(this, todoon),
      checked: todoon.done
    }), todoon.activity, "(", todoon.done ? 'Selesai' : 'Belum Selesai', ")", /*#__PURE__*/React.createElement("button", {
      onClick: editToDoHandler.bind(this, todoon)
    }, " Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeToDoHandler.bind(this, todoon.id)
    }, " Hapus"));
  }), " ") : /*#__PURE__*/React.createElement("p", null, " ", /*#__PURE__*/React.createElement("i", null, "Tidak ada ToDo")));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);