import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    zoom: [0,0,1],
    focusContry: {
      "連江縣": false,"金門縣":false,"宜蘭縣": false,"彰化縣": false,"南投縣": false,"雲林縣": false,"屏東縣": false,"臺東縣": false,"花蓮縣": false,"澎湖縣": false,"基隆市": false,"新竹市": false,"臺北市": false,"新北市": false,"臺中市": false,"臺南市": false,"桃園市": false,"苗栗縣": false,"新竹縣": false,"嘉義市": false,"嘉義縣": false,"高雄市" :false
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    increment2(state, n) {
      state.count += n;
    },
    zoomSetting(state, payload) {
      state.zoom[0] = payload[0];
      state.zoom[1] = payload[1];
      state.zoom[2] = payload[2];
    },
    focusContrySetting(state, name) {
      state.focusContry[name] = !state.focusContry[name];
    },
    reset(state) {
      state.zoom = [0,0,1];
      const idkey = Object.keys(state.focusContry);
      for(var i=0;i<idkey.length;i++){
        state.focusContry[idkey[i]] = false;
      }
    }
  },
  actions: {

  }
})