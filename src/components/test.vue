<template>
  <svg :width="svgWidth" :height="svgHeight">
    <g v-for="country in topoCountry">
        <path :d="country.d" :id="country.location" class="town" :style="{fill: fill, stroke: stroke}">
            <title>{{country.location}}</title>
        </path>
    </g>
  </svg>
</template>

<script>

import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import Changhua from '../../assets/json/towns-10007.json'

export default {
    name: 'Changhua',
    props: ['fill', 'stroke', 'width', 'height', 'scale', 'lon', 'lat', 'fit'],
    data: function(){
        return{
            Changhua: Changhua
        }
    },
    computed: {
        svgWidth: function(){
            return this.width || 375
        },
        svgHeight: function(){
            return this.height || 667
        },
        svgScale: function(){
            return this.scale || 7800
        },
        topoCountry: function(){

            var topo = topojson.feature(this.Changhua, this.Changhua.objects.map)

            if(this.fit == true){
                var prj = d3.geoMercator().fitSize([this.svgWidth, this.svgHeight], topo)
            }

            else{
                var prj = d3.geoMercator().center([this.lon || 121.251864, this.lat || 23.800998])
                    .scale(this.svgScale).translate([this.svgWidth/2, this.svgHeight/2])
                
            }

            var path = d3.geoPath().projection(prj)
        
            var temp = []
            for(var i in topo.features){
                temp.push({
                d: path(topo.features[i]),
                location: topo.features[i].properties.name,
                })
            }
            return temp
        }
    }
}
</script>

<style scoped>

.town{
    fill: #FFFFFF;
    stroke: #000000;
    stroke-width: 0.5;
}

</style>