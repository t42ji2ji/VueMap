<template>
  <svg :width="svgWidth" :height="svgHeight" class="countrySVG">
    <!-- <rect width="300" height="100"
style="fill:rgb(0,0,255);stroke-width:1;
stroke:rgb(0,0,0)" @click="test($event)"/> -->
    <g
      v-for="country in topodata"
      :key="country.d"
      @mouseenter="sendCountryName($event,country.location)"
      @click="clickCountry($event, country)"
      :class="[{ active: isActive}, country.location, nameCountry[country.location]]"
    >
      <path
        :d="country.d"
        :id="country.location"
        class="country"
        :style="{fill: fill, stroke: stroke}"
      >
        <title>{{country.location}}</title>
      </path>
    </g>
  </svg>
</template>

<script>
import * as d3 from "d3";
import * as topojson from "topojson-client";
import country from "../../assets/json/country.json";
import { mapMutations, mapState } from "vuex"; //註冊 action 和 state

export default {
  name: "Country",
  props: ["fill", "stroke", "width", "height", "scale", "lon", "lat", "fit", "fills"],
  data: function() {
    return {
      country: country,
      topodata: null,
      isActive: false
    };
  },
  mounted() {
    this.topodata = this.topoCountry;
    this.$nextTick(function () {
      this.scaleMap(".Miaoli")

      this.scaleMap(".Kinmen")
      this.scaleMap(".PenghuCount")
      this.scaleMap(".Lienchiang")
    })
    // var g = d3.select(".countrySVG svg").selectAll("g")
    // console.log(g);
  },
  methods: {
    ...mapMutations(["zoomSetting", "focusContrySetting", "MaskSetting"]),
    scaleMap(town){
      var d = d3.select(town)._groups[0][0]
      var tgNode = d.getBoundingClientRect();
      var tgCenter = [
        (tgNode.right - tgNode.left) / 2 + tgNode.left,
        (tgNode.bottom - tgNode.top) / 2 + tgNode.top
      ];
      var g = d3.select(d);
      var scale = this.scaleContry[town].scale
      var zooms = [-(tgCenter[0]*scale - tgCenter[0]), -(tgCenter[1]*scale - tgCenter[1]) , 1.1];
      console.log(tgNode);
      g.transition()
        .duration(800)
        .attr("transform", `translate(${zooms[0] + this.scaleContry[town].offsetX}, ${zooms[1] + this.scaleContry[town].offsetY}) scale(${scale}) `);
    },
    mapRest() {
      if(this.isActive){
        this.isActive = !this.isActive
      }
      var g = d3.selectAll(".countrySVG");
      this.focusContrySetting(country.location)
      this.zoomSetting([0,0,1]);
      g.transition()
        .duration(780)
        .attr("transform", "scale(1)");
    },
    clickCountry(event, country) {
      this.MaskSetting()
      this.isMask = true
      this.isActive = !this.isActive;
      var pNode = event.currentTarget.parentNode.getBoundingClientRect();
      var tgNode = event.currentTarget.getBoundingClientRect();

      var center = [
        (pNode.right - pNode.left) / 2 + pNode.left,
        (pNode.bottom - pNode.top) / 2 + pNode.top
      ];
      var tgCenter = [
        (tgNode.right - tgNode.left) / 2 + tgNode.left,
        (tgNode.bottom - tgNode.top) / 2 + tgNode.top
      ];
      var g = d3.select(event.currentTarget.parentNode);
      if(country.location == "金門縣" || country.location == "連江縣" || country.location == "澎湖縣"){
        var scale = 4;
        var offsetX = 0;
        var offsetY = 0;
      } else {
        var scale = 2.8;
        var offsetX = 50;
        var offsetY = 0;
      }
      var zooms = [-(tgCenter[0] - center[0]) - offsetX, -(tgCenter[1] - center[1]) - offsetY, scale];
      if (this.isActive){           
        this.focusContrySetting(country.location)
        this.zoomSetting(zooms);
        g.transition()
          .duration(900)
          .attr("transform", `scale(${scale})translate(${zooms[0]},${zooms[1]})`);
      } else {
        this.mapRest()
      }
    },
    sendCountryName(d, name) {
      this.$emit("getCountryName", name);
      var svg = document.querySelector("svg");
      svg.appendChild(d.target);
    }
  },
  computed: {
    ...mapState(["nameCountry","scaleContry"]),
    svgWidth: function() {
      return this.width || 375;
    },
    svgHeight: function() {
      return this.height || 667;
    },
    svgScale: function() {
      return this.scale || 7800;
    },
    topoCountry: function() {
      var topo = topojson.feature(this.country, this.country.objects.map);
      var prj;
      if (this.fit == true) {
        prj = d3
          .geoMercator()
          .transition()
          .fitSize([this.svgWidth, this.svgHeight], topo);
      } else {
        prj = d3
          .geoMercator()
          .center([this.lon || 121.251864, this.lat || 23.600998])
          .scale(this.svgScale)
          .translate([this.svgWidth / 2, this.svgHeight / 2]);

      }

      var path = d3.geoPath().projection(prj);
      
      var temp = [];
      for (var i in topo.features) {
        temp.push({
          d: path(topo.features[i]),
          location: topo.features[i].properties.name
        });
      }
      return temp;
    }
  }
};
</script>

<style lang="sass" scoped>

svg
  position: absolute
  left: 0

.country 
  stroke: #000000
  stroke-width: 0.5
  transition: .3s

.Lienchiang
  outline: solid 1px black
    

// .連江縣
//   transform-origin: center
//   transform: scale(2) translate(1%, 25%)

</style>
