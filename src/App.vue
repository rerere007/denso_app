<template>
  <div id="app">
    <v-app>
      <AppBar></AppBar>
      <GmapMap :center="center" :zoom="zoom" style="width: 100%; height: 100%;">
        <GmapMarker v-for="(m,id) in marker_items"
          :position="m.position"
          :title="m.title"
          :clickable="true" :draggable="false" :key="id"></GmapMarker>
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
  data () {
    return {
      center: {lat: 35.71, lng: 139.72},
      zoom: 14,
      marker_items: [
        {position: {lat: 35.71, lng: 139.72}, title: 'marker_1'},
        {position: {lat: 35.72, lng: 139.73}, title: 'marker_2'},
        {position: {lat: 35.70, lng: 139.71}, title: 'marker_3'},
        {position: {lat: 35.71, lng: 139.70}, title: 'marker_4'}
      ]
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
