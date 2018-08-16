<template>
  <div id="app">

		<select name="method" v-model="method">
			<option>Caesar</option>
			<option>Vigenere</option>
		</select>


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>

<style lang="scss">
  #app {
  }
</style>