<template lang="pug">
  #app
    h3 {{locationName}}
    //- img(alt='Vue logo' src='./assets/logo.png')
    //- HelloWorld(msg='Welcome to Your Vue.js App')
    //- Country(width="800" height="600" stroke="#000000" fill="#DCDCDC" fit="true")
    .mapRapper(:style="{width: mapWidthpx, height: mapHeightpx}")
      Country(:width="mapWidth" :height="mapHeight" @getCountryName="showName" :scale="scaleMap")
      transition(name="fade")
        Changhua(@getCountryName="showName" v-if="country[0]['彰化縣']" :width="mapWidth" :height="mapHeight")
    .btn(@click="fitting") 點我

</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import Changhua from './components/countrys/Changhua'
import Country from './components/countrys/Country'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Changhua,
    Country
  },
  data () {
    return {
      isFit: true,
      locationName: "asd",
      mapWidth: '800',
      mapHeight: '900',
      scaleMap: 8000,
      country: [{
        "彰化縣" : false
      }]
    }
  },
  computed: {
    mapHeightpx() {
      return this.mapHeight + 'px'
    },
    mapWidthpx(){
      return this.mapWidth + 'px'
    }
  },
  methods: {
    fitting() {
      this.country[0]["彰化縣"] = !this.country[0]["彰化縣"]
    },
    showName(name) {
      this.locationName = name
    }
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

.mapRapper
  position: relative
  background-color: rgba(lightblue, 0.5)
  width: 375px
  height: 667px


.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
