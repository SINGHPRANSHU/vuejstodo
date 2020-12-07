<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in allTodos">
            {{todo.title}}
            <button @click="deleteTodo(todo.id)">delete</button>
        </div>
        
    </div>
</template>



<script>
import { mapGetters,mapActions } from 'vuex';

export default {
    name:'Todos',
    computed:mapGetters(['allTodos']),
    methods:{
        ...mapActions(['deleteTodo'])
    }
}
</script>




<style scoped>

</style>