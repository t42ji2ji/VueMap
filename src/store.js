import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    zoom: [0, 0, 1],
    focusContry: {
      "連江縣": false,
      "金門縣": false,
      "宜蘭縣": false,
      "彰化縣": false,
      "南投縣": false,
      "雲林縣": false,
      "屏東縣": false,
      "臺東縣": false,
      "花蓮縣": false,
      "澎湖縣": false,
      "基隆市": false,
      "新竹市": false,
      "臺北市": false,
      "新北市": false,
      "臺中市": false,
      "臺南市": false,
      "桃園市": false,
      "苗栗縣": false,
      "新竹縣": false,
      "嘉義市": false,
      "嘉義縣": false,
      "高雄市": false
    },
    nameCountry: {
      新北市: "NewTaipei",
      臺北縣: "Taipei",
      板橋市: "Banciao",
      三重市: "Sanchong",
      中和市: "Jhonghe",
      永和市: "Yonghe",
      新莊市: "Sinjhuang",
      新店市: "Sindian",
      樹林市: "Shulin",
      鶯歌鎮: "Yingge",
      三峽鎮: "Sansia",
      淡水鎮: "Danshuei",
      汐止市: "Sijhih",
      瑞芳鎮: "Rueifang",
      土城市: "Tucheng",
      蘆洲市: "Lujhou",
      五股鄉: "Wugu",
      泰山鄉: "Taishan",
      林口鄉: "Linkou",
      深坑鄉: "Shenkeng",
      石碇鄉: "Shihding",
      坪林鄉: "Pinglin",
      三芝鄉: "Sanjhih",
      石門鄉: "Shihmen",
      八里鄉: "Bali",
      平溪鄉: "Pingsi",
      雙溪鄉: "Shuangsi",
      貢寮鄉: "Gongliao",
      金山鄉: "Jinshan",
      萬里鄉: "Wanli",
      烏來鄉: "Wulai",
      宜蘭縣: "Yilan",
      宜蘭市: "YilanCity",
      羅東鎮: "Luodong",
      蘇澳鎮: "Su-ao",
      頭城鎮: "Toucheng",
      礁溪鄉: "Jiaosi",
      壯圍鄉: "Jhuangwei",
      員山鄉: "Yuanshan",
      冬山鄉: "Dongshan",
      五結鄉: "Wujie",
      三星鄉: "Sansing",
      大同鄉: "Datong",
      南澳鄉: "Nan-ao",
      桃園縣: "Taoyuan",
      桃園市: "TaoyuanCity",
      中壢市: "Jhongli",
      大溪鎮: "Dasi",
      楊梅鎮: "Yangmei",
      蘆竹鄉: "Lujhu",
      大園鄉: "Dayuan",
      龜山鄉: "Gueishan",
      八德市: "Bade",
      龍潭鄉: "Longtan",
      平鎮市: "Pingjhen",
      新屋鄉: "Sinwu",
      觀音鄉: "Guanyin",
      復興鄉: "Fusing",
      新竹縣: "Hsinchu",
      竹北市: "Jhubei",
      竹東鎮: "Jhudong",
      新埔鎮: "Sinpu",
      關西鎮: "Guansi",
      湖口鄉: "Hukou",
      新豐鄉: "Sinfong",
      芎林鄉: "Cyonglin",
      橫山鄉: "Hengshan",
      北埔鄉: "Beipu",
      寶山鄉: "Baoshan",
      峨眉鄉: "Emei",
      尖石鄉: "Jianshih",
      五峰鄉: "Wufong",
      苗栗縣: "Miaoli",
      苗栗市: "MiaoliCity",
      苑裡鎮: "Yuanli",
      通霄鎮: "Tongsiao",
      竹南鎮: "Jhunan",
      頭份鎮: "Toufen",
      後龍鎮: "Houlong",
      卓蘭鎮: "Jhuolan",
      大湖鄉: "Dahu",
      公館鄉: "Gongguan",
      銅鑼鄉: "Tongluo",
      南庄鄉: "Nanjhuang",
      頭屋鄉: "Touwu",
      三義鄉: "Sanyi",
      西湖鄉: "Sihu",
      造橋鄉: "Zaociao",
      三灣鄉: "Sanwan",
      獅潭鄉: "Shihtan",
      泰安鄉: "Tai-an",
      臺中縣: "Taichung",
      豐原市: "Fongyuan",
      東勢鎮: "Dongshih",
      大甲鎮: "Dajia",
      清水鎮: "Cingshuei",
      沙鹿鎮: "Shalu",
      梧棲鎮: "Wuci",
      后里鄉: "Houli",
      神岡鄉: "Shengang",
      潭子鄉: "Tanzih",
      大雅鄉: "Daya",

      新社鄉: "Sinshe",

      石岡鄉: "Shihgang",

      外埔鄉: "Waipu",

      大安鄉: "Da-an",

      烏日鄉: "Wurih",

      大肚鄉: "Dadu",

      龍井鄉: "Longjing",

      霧峰鄉: "Wufong",

      太平市: "Taiping",

      大里市: "Dali",

      和平鄉: "Heping",

      彰化縣: "Changhua",

      彰化市: "ChanghuaCity",

      鹿港鎮: "Lugang",

      和美鎮: "Hemei",

      線西鄉: "Siansi",

      伸港鄉: "Shengang",

      福興鄉: "Fusing",

      秀水鄉: "Sioushuei",

      花壇鄉: "Huatan",

      芬園鄉: "Fenyuan",

      員林鎮: "Yuanlin",

      溪湖鎮: "Sihu",

      田中鎮: "Tianjhong",

      大村鄉: "Dacun",

      埔鹽鄉: "Puyan",

      埔心鄉: "Pusin",

      永靖鄉: "Yongjing",

      社頭鄉: "Shetou",

      二水鄉: "Ershuei",

      北斗鎮: "Beidou",

      二林鎮: "Erlin",

      田尾鄉: "Tianwei",

      埤頭鄉: "Pitou",

      芳苑鄉: "Fangyuan",

      大城鄉: "Dacheng",

      竹塘鄉: "Jhutang",

      溪州鄉: "Sijhou",

      南投縣: "Nantou",

      南投市: "NantouCity",

      埔里鎮: "Puli",

      草屯鎮: "Caotun",

      竹山鎮: "Jhushan",

      集集鎮: "Jiji",

      名間鄉: "Mingjian",

      鹿谷鄉: "Lugu",

      中寮鄉: "Jhongliao",

      魚池鄉: "Yuchih",

      國姓鄉: "Guosing",

      水里鄉: "Shueili",

      信義鄉: "Sinyi",

      仁愛鄉: "Ren-ai",

      雲林縣: "Yunlin",

      斗六市: "Douliou",

      斗南鎮: "Dounan",

      虎尾鎮: "Huwei",

      西螺鎮: "Siluo",

      土庫鎮: "Tuku",

      北港鎮: "Beigang",

      古坑鄉: "Gukeng",

      大埤鄉: "Dapi",

      莿桐鄉: "Cihtong",

      林內鄉: "Linnei",

      二崙鄉: "Erlun",

      崙背鄉: "Lunbei",

      麥寮鄉: "Mailiao",

      東勢鄉: "Dongshih",

      褒忠鄉: "Baojhong",

      臺西鄉: "Taisi",

      元長鄉: "Yuanchang",

      四湖鄉: "Sihhu",

      口湖鄉: "Kouhu",

      水林鄉: "Shueilin",

      嘉義縣: "Chiayi",

      太保市: "Taibao",

      朴子市: "Puzih",

      布袋鎮: "Budai",

      大林鎮: "Dalin",

      民雄鄉: "Minsyong",

      溪口鄉: "Sikou",

      新港鄉: "Singang",

      六腳鄉: "Lioujiao",

      東石鄉: "Dongshih",

      義竹鄉: "Yijhu",

      鹿草鄉: "Lucao",

      水上鄉: "Shueishang",

      中埔鄉: "Jhongpu",

      竹崎鄉: "Jhuci",

      梅山鄉: "Meishan",

      番路鄉: "Fanlu",

      大埔鄉: "Dapu",

      阿里山鄉: "Alishan",

      臺南縣: "Tainan",

      新營市: "Sinying",

      鹽水鎮: "Yanshuei",

      白河鎮: "Baihe",

      柳營鄉: "Liouying",

      後壁鄉: "Houbi",

      東山鄉: "Dongshan",

      麻豆鎮: "Madou",

      下營鄉: "Siaying",

      六甲鄉: "Lioujia",

      官田鄉: "Guantian",

      大內鄉: "Danei",

      佳里鎮: "Jiali",

      學甲鎮: "Syuejia",

      西港鄉: "Sigang",

      七股鄉: "Cigu",

      將軍鄉: "Jiangjyun",

      北門鄉: "Beimen",

      新化鎮: "Sinhua",

      善化鎮: "Shanhua",

      新市鄉: "Sinshih",

      安定鄉: "Anding",

      山上鄉: "Shanshang",

      玉井鄉: "Yujing",

      楠西鄉: "Nansi",

      南化鄉: "Nanhua",

      左鎮鄉: "Zuojhen",

      仁德鄉: "Rende",

      歸仁鄉: "Gueiren",

      關廟鄉: "Guanmiao",

      龍崎鄉: "Longci",

      永康市: "Yongkang",

      高雄縣: "Kaohsiung",

      鳳山市: "Fongshan",

      林園鄉: "Linyuan",

      大寮鄉: "Daliao",

      大樹鄉: "Dashu",

      大社鄉: "Dashe",

      仁武鄉: "Renwu",

      鳥松鄉: "Niaosong",

      岡山鎮: "Gangshan",

      橋頭鄉: "Ciaotou",

      燕巢鄉: "Yanchao",

      田寮鄉: "Tianliao",

      阿蓮鄉: "Alian",

      路竹鄉: "Lujhu",

      湖內鄉: "Hunei",

      茄萣鄉: "Jiading",

      永安鄉: "Yongan",

      彌陀鄉: "Mituo",

      梓官鄉: "Zihguan",

      旗山鎮: "Cishan",

      美濃鎮: "Meinong",

      六龜鄉: "Liouguei",

      甲仙鄉: "Jiasian",

      杉林鄉: "Shanlin",

      內門鄉: "Neimen",

      茂林鄉: "Maolin",

      桃源鄉: "Taoyuan",

      三民鄉: "Sanmin",

      屏東縣: "Pingtung",

      屏東市: "Pingtung",

      潮州鎮: "Chaojhou",

      東港鎮: "Donggang",

      恆春鎮: "Hengchun",

      萬丹鄉: "Wandan",

      長治鄉: "Changjhih",

      麟洛鄉: "Linluo",

      九如鄉: "Jiouru",

      里港鄉: "Ligang",

      鹽埔鄉: "Yanpu",

      高樹鄉: "Gaoshu",

      萬巒鄉: "Wanluan",

      內埔鄉: "Neipu",

      竹田鄉: "Jhutian",

      新埤鄉: "Sinpi",

      枋寮鄉: "Fangliao",

      新園鄉: "Sinyuan",

      崁頂鄉: "Kanding",

      林邊鄉: "Linbian",

      南州鄉: "Nanjhou",

      佳冬鄉: "Jiadong",

      琉球鄉: "Liouciou",

      車城鄉: "Checheng",

      滿州鄉: "Manjhou",

      枋山鄉: "Fangshan",

      三地門鄉: "Sandimen",

      霧臺鄉: "Wutai",

      瑪家鄉: "Majia",

      泰武鄉: "Taiwu",

      來義鄉: "Laiyi",

      春日鄉: "Chunrih",

      獅子鄉: "Shihzih",

      牡丹鄉: "Mudan",

      臺東縣: "Taitung",

      臺東市: "TaitungCity",

      成功鎮: "Chenggong",

      關山鎮: "GuanshanTownship",

      卑南鄉: "BeinanTownshi",

      鹿野鄉: "LuyeTownshi",

      池上鄉: "Chihshang",

      東河鄉: "Donghe",

      長濱鄉: "Changbin",

      太麻里鄉: "Taimali",

      大武鄉: "Dawu",

      綠島鄉: "Lyudao",

      海端鄉: "Haiduan",

      延平鄉: "Yanping",

      金峰鄉: "Jinfong",

      達仁鄉: "Daren",

      蘭嶼鄉: "Lanyu",

      花蓮縣: "Hualien",

      花蓮市: "HualienCity",

      鳳林鎮: "Fonglin",

      玉里鎮: "Yuli",

      新城鄉: "Sincheng",

      吉安鄉: "Ji-an",

      壽豐鄉: "Shoufong",

      光復鄉: "Guangfu",

      豐濱鄉: "Fongbin",

      瑞穗鄉: "Rueisuei",

      富里鄉: "Fuli",

      秀林鄉: "Sioulin",

      萬榮鄉: "Wanrong",

      卓溪鄉: "Jhuosi",

      澎湖縣: "PenghuCount",

      馬公市: "Magong",

      湖西鄉: "Husi",

      白沙鄉: "Baisha",

      西嶼鄉: "Siyu",

      望安鄉: "Wang-an",

      七美鄉: "Cimei",

      基隆市: "KeelungCity",

      中正區: "JhongjhengDistrict",

      七堵區: "CiduDistrict",

      暖暖區: "NuannuanDistrict",

      仁愛區: "Ren-aiDistrict",

      中山區: "JhongshanDistrict",

      安樂區: "AnleDistrict",

      信義區: "SinyiDistrict",

      新竹市: "HsinchuCity",

      東區: "EastDistrict",

      北區: "NorthDistrict",

      香山區: "SiangshanDistrict",

      臺中市: "TaichungCity",

      中區: "CentralDistrict",


      南區: "SouthDistrict",

      西區: "WestDistrict",


      西屯區: "SitunDistrict",

      南屯區: "NantunDistrict",

      北屯區: "BeitunDistrict",

      嘉義市: "ChiayiCity",


      臺南市: "TainanCity",





      安南區: "AnnanDistrict",

      安平區: "AnpingDistrict",
      臺北市: "TaipeiCity",
      松山區: "SongshanDistrict",


      大安區: "Da-anDistrict",



      大同區: "DatongDistrict",

      萬華區: "WanhuaDistrict",

      文山區: "WunshanDistrict",

      南港區: "NangangDistrict",

      內湖區: "NeihuDistrict",

      士林區: "ShihlinDistrict",

      北投區: "BeitouDistrict",

      高雄市: "Kaohsiung",

      鹽埕區: "YanchengDistrict",

      鼓山區: "GushanDistrict",

      左營區: "ZuoyingDistrict",

      楠梓區: "NanzihDistrict",

      三民區: "SanminDistrict",

      新興區: "SinsingDistrict",

      前金區: "CianjinDistrict",

      苓雅區: "LingyaDistrict",

      前鎮區: "CianjhenDistrict",

      旗津區: "CijinDistrict",

      小港區: "SiaogangDistrict",

      連江縣: "Lienchiang",

      南竿鄉: "Nangan",

      北竿鄉: "Beigan",

      莒光鄉: "Jyuguang",

      東引鄉: "Dongyin",

      金門縣: "Kinmen",

      金城鎮: "Jincheng",

      金沙鎮: "Jinsha",

      金湖鎮: "Jinhu",

      金寧鄉: "Jinning",

      烈嶼鄉: "Lieyu",

      烏坵鄉: "Wuciou"
    },
    nowCountry: ["",""]
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
      state.nowCountry[0] = state.nameCountry[name];
      state.nowCountry[1] = state.focusContry[name];
      console.log(state.nameCountry[name]);
    },
    reset(state) {
      state.zoom = [0, 0, 1];
      const idkey = Object.keys(state.focusContry);
      for (var i = 0; i < idkey.length; i++) {
        state.focusContry[idkey[i]] = false;
      }
    }
  },
  actions: {

  }
});