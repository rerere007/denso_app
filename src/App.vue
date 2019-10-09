<template>
  <div id="app">
    <v-app>
      <AppBar></AppBar>
      <GmapMap :center="center" :zoom="zoom" style="width: 100%; height: 100%;">
        <GmapMarker v-for="(m,id) in marker_items"
          :position="m.data.position"
          :title="m.data.title"
          :clickable="true"
          :draggable="false" :key="id"></GmapMarker>
        <GmapMarker :position="marker_center" :clickable="true" :draggable="false"></GmapMarker>
      </GmapMap>
      <InputCurrentPosition />
      <taskView />
    </v-app>
  </div>
</template>

<script>
import AppBar from './components/AppBar'
import TaskView from './components/TaskView'
import InputCurrentPosition from './components/InputCurrentPosition'

export default {
  name: 'App',
  computed: {
    marker_items () {
      return this.$store.state.marker_items
    }
  },
  data () {
    return {
      center: {lat: 34.9739239, lng: 138.3943754},
      marker_center: {lat: 34.9739239, lng: 138.3943754},
      zoom: 14
    }
  },
  components: {
    AppBar,
    TaskView,
    InputCurrentPosition
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
