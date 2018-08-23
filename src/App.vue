<template>
  <div id="app">
  <div class="settings">
    <input type="radio" id="caesar" value="caesar" name="method" v-model="method">
    <label for="caesar">Caesar</label>
    
    <input type="radio" id="vigenere" value="vigenere" name="method" v-model="method">
    <label for="vigenere">Vigenere</label>
  </div>

  <div class="settings">
    <input type="radio" id="encrypt" value="encrypt" name="direction" v-model="direction">
    <label for="encrypt">Verschlüsseln</label>
    
    <input type="radio" id="decrypt" value="decrypt" name="direction" v-model="direction">
    <label for="decrypt">Entschlüsseln</label>
  </div>

  <p>Picked: {{ method }}</p>
  <p>Picked: {{ direction }}</p>


  <textarea v-model="key" placeholder="Schlüssel"></textarea>

  <textarea v-model="input" placeholder="Input"></textarea>

  <p> {{ output }} </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      method: "",
      input: ""
    }
  },
  computed: {
    output() {
      return this.input.toUpperCase();
    }
  }
}
</script>

<style lang="scss">
  #app {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  .settings {
    display: flex;
    border: 1px solid black;
    
    input {
      display: none;
    }
      
    label {
      width: 50%;
      text-align: center;
      padding: 10px 0;
      background: #fff;

      &:hover {
        background: rgb(236, 237, 240);
      }

      &:last-child {
        border-left: 1px solid #000;
      }
    }
  
    input:checked + label {
      background: #D5D6DF;
    }
  }
  
  .settings + .settings {
    border-top: none;
  } 

  textarea {
    width: 100%;
    resize: none;
    border: 1px solid #000;
    font-size: 14px;
    padding: 10px;
  }

</style>