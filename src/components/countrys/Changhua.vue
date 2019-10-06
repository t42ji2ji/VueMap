<template>
  <svg :width="svgWidth" :height="svgHeight" class="t">
    <!-- <svg :width="svgWidth" :height="svgHeight" :transform="`scale(${zoom[2]}), translate(${zoom[0]},${zoom[1]})`"> -->
    <g
      v-for="country in topoCountry"
      :key="country.d"
      @mouseenter="sendCountryName(country.location)"
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
import Changhua from "../../assets/json/towns-10007.json";

export default {
  name: "Changhua",
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
      Changhua: Changhua,
      mapStyle: {
        fill: "red"
      }
    };
  },
  mounted() {
    var g = d3.selectAll(".t");
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
  methods: {
    sendCountryName(name) {
      this.$emit("getCountryName", name);
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
      var topo = topojson.feature(this.Changhua, this.Changhua.objects.map);
      var prj;
      if (this.fit == true) {
        prj = d3.geoMercator().fitSize([this.svgWidth, this.svgHeight], topo);
      } else {
        prj = d3
          .geoMercator()
          .center([this.lon || 120.751864, this.lat || 23.400998])
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