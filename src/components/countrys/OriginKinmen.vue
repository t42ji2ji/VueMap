<template>
  <svg :width="svgWidth" :height="svgHeight" class="countryKinmenSVG">
    <g
      v-for="country in topodata"
      :key="country.d"
      @mouseenter="sendCountryName($event,country.location)"
      @click="clickCountry($event, country)"
      :class="[{ active: isActive}, country.location]"
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
import country from "../../assets/json/Kinmen.json";
import { mapMutations } from "vuex"; //註冊 action 和 state

export default {
  name: "OriginKinmen",
  props: [
    "fill",
    "stroke",
    "width",
    "height",
    "scale",
    "lon",
    "lat",
    "fit",
    "fills"
  ],
  data: function() {
    return {
      country: country,
      topodata: null,
      isActive: false
    };
  },
  mounted() {
    this.topodata = this.topoCountry;
  },
  methods: {
    ...mapMutations(["zoomSetting", "focusContrySetting"]),
    mapRest() {
      if (this.isActive) {
        this.isActive = !this.isActive;
      }
      var g = d3.selectAll(".countryKinmenSVG");
      this.focusContrySetting(country.location);
      this.zoomSetting([0, 0, 1]);
      g.transition()
        .duration(780)
        .attr("transform", "scale(1)");
    },
    clickCountry(event, country) {
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
      if (country.location == "金門縣" || country.location == "連江縣") {
        var scale = 2;
        var offsetX = 0;
        var offsetY = 0;
      } else {
        var scale = 3;
        var offsetX = 50;
        var offsetY = 0;
      }
      var zooms = [
        -(tgCenter[0] - center[0]) - offsetX,
        -(tgCenter[1] - center[1]) - offsetY,
        scale
      ];
      if (this.isActive) {
        this.focusContrySetting(country.location);
        this.zoomSetting(zooms);
        g.transition()
          .duration(900)
          .attr(
            "transform",
            `scale(${scale})translate(${zooms[0]},${zooms[1]})`
          );
      } else {
        this.mapRest();
      }
    },
    sendCountryName(d, name) {
      this.$emit("getCountryName", name);
      var svg = document.querySelector("svg");
      svg.appendChild(d.target);
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
  fill: #ffffff
  stroke: #000000
  stroke-width: 0.5
  transition: .3s
  

</style>
