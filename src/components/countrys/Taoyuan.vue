<template>
  <svg :width="svgWidth" :height="svgHeight" class="townSVG">
    <!-- <svg :width="svgWidth" :height="svgHeight" :transform="`scale(${zoom[2]}), translate(${zoom[0]},${zoom[1]})`"> -->
    <g
      v-for="country in topoCountry"
      :key="country.d"
      @mouseenter="sendCountryName(country.location)"
      @click="close(country.location)"
    >
      <path
        :d="country.d"
        :id="country.location"
        class="town"
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
import Taoyuan from '../../assets/json/towns-68000.json'

export default {
  name: "Taoyuan",
  props: [
    "fill",
    "stroke",
    "width",
    "height",
    "scale",
    "lon",
    "lat",
    "fit",
    "zoom"
  ],
  data: function() {
    return {
      CountryType: Taoyuan,
      mapStyle: {
        fill: "red"
      }
    };
  },
  mounted() {
    var g = d3.selectAll(".townSVG");
    console.log(g);
    console.log(this.zoom);
    g.transition()
      .duration(900)
      .style("opacity", 1.0)
      .attr(
        "transform",
        `scale(${this.zoom[2]})translate(${this.zoom[0]},${this.zoom[1]})`
      );
  },
  beforeDestroy: function() {
    //移除 vue instance 之後
    console.log('destroyed');
  },
  methods: {
    sendCountryName(name) {
      this.$emit("getCountryName", name);
    },
    async close(name) {
      var g = d3.selectAll(".townSVG");
      await g.transition()
        .duration(900)
        .style("opacity", 0.0)
        .attr(
          "transform",
          `scale(1)translate(0,0)`
        );
      await this.$emit("closemap", name)
    }
  },
  computed: {
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
      var topo = topojson.feature(this.CountryType, this.CountryType.objects.map);
      var prj;
      if (this.fit == true) {
        prj = d3.geoMercator().fitSize([this.svgWidth, this.svgHeight], topo);
      } else {
        prj = d3
          .geoMercator()
          .center([this.lon || 121.251864, this.lat || 23.800998])
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
  opacity: 0

.town
  fill: #FFFFFF
  stroke: #000000
  stroke-width: 0.5


  &:hover
    stroke-width: 1.5

</style>