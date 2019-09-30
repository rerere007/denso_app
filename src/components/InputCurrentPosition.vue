<template>
  <div class='InputCurrentPosition'>
    <v-layout row wrap>
      <v-form ref='form' v-on:submit.prevent='addpos()'>
        <v-btn v-on:click.prevent='addpos()' color='success' dark>Submit</v-btn>
      </v-form>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'InputCurrentPosition',
  data () {
    return {
    }
  },
  methods: {
    addpos: function () {
      new Promise((resolve, reject) => {
        if (window.navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition(
            (response) => {
              resolve(response)
            },
            () => {
              alert('データの取得中にエラーが発生しました。')
            },
            {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 10000
            }
          )
        } else {
          reject(new Error('error'))
        }
      }).then((response) => {
        const { latitude, longitude } = response.coords
        let pos = {lat: latitude, lng: longitude}
        // Dispatcher
        this.$store.dispatch('TaskAdded', pos)
      }).catch(() => {
        alert('データが取得できませんでした。電波の届きやすい場所で再度お試しください')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{
  width: 130pt;
  height:30pt;
}
.button {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 70pt;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}
</style>
