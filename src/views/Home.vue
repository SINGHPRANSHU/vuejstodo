<template>
  <div class="home">
    <Todos></Todos>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '../components/Todos'

export default {
  name: 'Home',
  components: {
    Todos
  }
}
</script>
  