import { Math } from "core-js";

const state = {
    todos:[
        {
            id:1,
            title:'todo 1'
        },
        {
            id:2,
            title:'todo 2'
        }
    ]
};
const getters = {
    allTodos:(state)=>state.todos
};
const actions = {
    addTodo({commit},title){
        let newtodo ={id:Math.floor(Math.random() * 100),title};
        commit('newTodo',newtodo);
    },
    deleteTodo({commit},id){
      commit('removeTodo',id);
    }
};
const mutations = {
    newTodo:(state,todo)=>state.todos.unshift(todo),
    removeTodo:(state,id)=>state.todos = state.todos.filter(todo=>todo.id!=id)
};

export default{
    state,
    getters,
    actions,
    mutations
};