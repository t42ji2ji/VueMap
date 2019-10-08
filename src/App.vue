<template lang="pug">
  #app
    h3 {{locationName}}
    .mapRapper(:style="{width: mapWidthpx, height: mapHeightpx}")
      Country(:width="mapWidth" :height="mapHeight" @getCountryName="showName" :scale="scaleMap" ref="_country")
      //- transition-group(name="fade")
      Changhua(@closemap="closemap" @getCountryName="showName" v-if="focusContry['彰化縣']" :width="mapWidth" :height="mapHeight" key='1' :scale="scaleMap" :zoom="zoom")
      Chiayi(@closemap="closemap" @getCountryName="showName" v-if="focusContry['嘉義縣']" :width="mapWidth" :height="mapHeight" key='2' :scale="scaleMap" :zoom="zoom")
      ChiayiCity(@closemap="closemap" @getCountryName="showName" v-if="focusContry['嘉義市']" :width="mapWidth" :height="mapHeight" key='1' :scale="scaleMap" :zoom="zoom")
      Hsinchu(@closemap="closemap" @getCountryName="showName" v-if="focusContry['新竹縣']" :width="mapWidth" :height="mapHeight" key='3' :scale="scaleMap" :zoom="zoom")
      HsinchuCity(@closemap="closemap" @getCountryName="showName" v-if="focusContry['新竹市']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Hualien(@closemap="closemap" @getCountryName="showName" v-if="focusContry['花蓮縣']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Ilan(@closemap="closemap" @getCountryName="showName" v-if="focusContry['宜蘭縣']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Kaohsiung(@closemap="closemap" @getCountryName="showName" v-if="focusContry['高雄市']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Keelung(@closemap="closemap" @getCountryName="showName" v-if="focusContry['基隆市']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Kinmen(@closemap="closemap" @getCountryName="showName" v-if="focusContry['金門縣']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Matsu(@closemap="closemap" @getCountryName="showName" v-if="focusContry['馬祖縣']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Miaoli(@closemap="closemap" @getCountryName="showName" v-if="focusContry['苗栗縣']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Nantou(@closemap="closemap" @getCountryName="showName" v-if="focusContry['南投縣']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      NewTaipei(@closemap="closemap" @getCountryName="showName" v-if="focusContry['新北市']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Penghu(@closemap="closemap" @getCountryName="showName" v-if="focusContry['澎湖縣']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Pingtung(@closemap="closemap" @getCountryName="showName" v-if="focusContry['屏東縣']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Taichung(@closemap="closemap" @getCountryName="showName" v-if="focusContry['臺中市']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Tainan(@closemap="closemap" @getCountryName="showName" v-if="focusContry['臺南市']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Taipei(@closemap="closemap" @getCountryName="showName" v-if="focusContry['臺北市']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Taitung(@closemap="closemap" @getCountryName="showName" v-if="focusContry['臺東縣']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Taoyuan(@closemap="closemap" @getCountryName="showName" v-if="focusContry['桃園市']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")
      Yunlin(@closemap="closemap" @getCountryName="showName" v-if="focusContry['雲林縣']" :width="mapWidth" :height="mapHeight"  :scale="scaleMap" :zoom="zoom")



</template>


<script>
import Ilan from './components/countrys/Ilan.vue'
import Hsinchu from './components/countrys/Hsinchu.vue'
import HsinchuCity from './components/countrys/HsinchuCity.vue'
import Miaoli from './components/countrys/Miaoli.vue'
import Changhua from './components/countrys/Changhua.vue'
import Nantou from './components/countrys/Nantou.vue'
import Yunlin from './components/countrys/Yunlin.vue'
import Chiayi from './components/countrys/Chiayi.vue'
import ChiayiCity from './components/countrys/ChiayiCity.vue'
import Pingtung from './components/countrys/Pingtung.vue'
import Taitung from './components/countrys/Taitung.vue'
import Hualien from './components/countrys/Hualien.vue'
import Penghu from './components/countrys/Penghu.vue'
import Keelung from './components/countrys/Keelung.vue'
import Taipei from './components/countrys/Taipei.vue'
import Kaohsiung from './components/countrys/Kaohsiung.vue'
import NewTaipei from './components/countrys/NewTaipei.vue'
import Taichung from './components/countrys/Taichung.vue'
import Tainan from './components/countrys/Tainan.vue'
import Taoyuan from './components/countrys/Taoyuan.vue'
import Matsu from './components/countrys/Matsu.vue'
import Kinmen from './components/countrys/Kinmen.vue'

import Country from "./components/countrys/Country";

import { mapState, mapMutations } from "vuex"; //註冊 action 和 state

export default {
  name: "app",
  components: {
    Country,
    Ilan,
    Hsinchu,
    HsinchuCity,
    Miaoli,
    Changhua,
    Nantou,
    Yunlin,
    Chiayi,
    ChiayiCity,
    Pingtung,
    Taitung,
    Hualien,
    Penghu,
    Keelung,
    Taipei,
    Kaohsiung,
    NewTaipei,
    Taichung,
    Tainan,
    Taoyuan,
    Matsu,
    Kinmen,
  },
  data() {
    return {
      isFit: true,
      locationName: "asd",
      mapWidth: "900",
      mapHeight: "900",
      scaleMap: 9900,
      window: {
      width: 0,
      height: 0
    }
    };
  },
  computed: {
    ...mapState(["count", "zoom", "focusContry", "nameCountry", "nowCountry"]),
    mapHeightpx() {
      return this.mapHeight + "px";
    },
    mapWidthpx() {
      return this.mapWidth + "px";
    },
    nowCountrys () {
      return this.nowCountry[0]
    },
  },
  methods: {
    closemap(name) {
      console.log(name);
      this.reset();
      this.$refs._country.mapRest();
    },
    showName(name) {
      this.locationName = name;
      console.log(this.nameCountry[name]);
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      this.mapHeight = this.window.height
      this.mapWidth = this.window.width
    },
    ...mapMutations(["increment2", "reset", "focusContrySetting"]),
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style lang="sass">

h3
  position: absolute
  font-size: 5rem



.country 
  fill: #ffffff
  stroke: #000000
  stroke-width: 0.5
  transition: .3s
  
  &:hover
    fill: orange
    transform: translate(-2px, -5px) !important


.town
  fill: #FFFFFF
  stroke: #000000
  stroke-width: 0.5

  &:hover
    stroke-width: 1.2 !important

body, html
  height: 100vh
  width: 100vw
  margin: 0
  overflow: hidden


#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
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
  margin-right: 430px
  position: relative
  width: 375px
  height: 667px


.fade-enter-active, .fade-leave-active
  transition: 5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
