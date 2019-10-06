<template lang="pug">
  #app
    h3 {{locationName}}
    h3 {{zoom}}
    .mapRapper(:style="{width: mapWidthpx, height: mapHeightpx}")
      Country(:width="mapWidth" :height="mapHeight" @getCountryName="showName" :scale="scaleMap")
      //- transition-group(name="fade")
      Changhua(@getCountryName="showName" v-if="focusContry['彰化縣']" :width="mapWidth" :height="mapHeight" key='1' :scale="scaleMap" :zoom="zoom")
    .btn(@click="fitting") 點我
    .btn(@click="ch") 點我

</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import Changhua from './components/countrys/Changhua'

import Country from './components/countrys/Country'

import {mapState, mapMutations} from 'vuex' //註冊 action 和 state


export default {
  name: 'app',
  components: {
    HelloWorld,
    Changhua,
    Country,
  },
  data () {
    return {
      isFit: true,
      locationName: "asd",
      mapWidth: '800',
      mapHeight: '800',
      scaleMap: 8000,
      country: {
        "彰化縣" : false
      },
    }
  },
  computed: {
    ...mapState([
      'count',
      'zoom',
      'focusContry'
    ]),
    mapHeightpx() {
      return this.mapHeight + 'px'
    },
    mapWidthpx(){
      return this.mapWidth + 'px'
    }
  },
  methods: {
    ch() {
      this.focusContrySetting("彰化縣")
    },
    fitting() {
      this.reset()
    },
    showName(name) {
      this.locationName = name
    },
    ...mapMutations([
      'increment2',
      'reset',
      'focusContrySetting'
    ])
  }
}
</script>

<style lang="sass">



#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
.btn
  width: 200px
  height: 50px
  background-color: darkgray
  line-height: 50px
  z-index: 999
  cursor: pointer

.mapRapper
  position: relative
  background-color: rgba(lightblue, 0.5)
  width: 375px
  height: 667px


.fade-enter-active, .fade-leave-active
  transition: 5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
