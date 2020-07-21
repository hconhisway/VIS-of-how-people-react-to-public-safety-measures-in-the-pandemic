
// 舆情图谱
(function () {
  var myChart = echarts.init(document.querySelector('.panel .worldmap'));
  var option = {
    // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.3, [{
    //     offset: 0,
    //     color: '#f7f8fa'
    // }, {
    //     offset: 1,
    //     color: '#cdd0d5'
    // }]),
    // title: {
    //   text: "舆情信息图谱",
    //   top: "top",
    //   left: "center"
    // },
    tooltip: {},
    legend: [{
      // formatter: function(name) {
      //     return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
      // },
      tooltip: {
        // show: true
      },
      selectedMode: 'true',
      // bottom: 20,
      // left:20,
      textStyle:{
        color: "#fff",
        fontWeight:"bolder",
        fontSize:"15"
      }
    }],
    // 工具栏，开启了保存图片；还原配置项；查看并且可以修改数据功能
    toolbox: {
      show: true,
      feature: {
        dataView: {
          show: true,
          readOnly: true
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    layoutAnimation: true,
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      name: '舆情图谱',
      type: 'graph',
      layout: 'force',




      force: {
        repulsion: 500,
      },
      itemStyle: {
        borderColor: "#fff",

      },

      edgeSymbol: ['none', 'arrow'],

      // {
      //   "name": "高频词",
      //   // "x":0,
      //   // "y":500,
      //   // "fixed":true,
      //   "value": 0,
      //   "symbolSize": 30,
      //   "category": "武汉",
      //   // "draggable": "true",
      //   // symbol: 'image://images/star2.png'
      // }, {
      //   "name": "关键词",
      //   "value": 0,
      //   "symbolSize": 30,
      //   "category": "武汉",
      //   // "draggable": "true",
      //   // "symbol": 'image://images/star2.png'
      // }, 
      data: [{
        "name": "武汉",
        "value": 1440,
        "symbolSize": 30,
        "category": "武汉",
        // "draggable": "true",
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "疫情",
        "symbolSize": 21,
        "category": "武汉",
        // "draggable": "true",
        "value": 455,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "封城",
        "symbolSize": 21,
        "category": "封城",
        "draggable": "true",
        "value": 455,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "湖北",
        "symbolSize": 15,
        "category": "武汉",
        // "draggable": "true",
        "value": 101,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "希望",
        "symbolSize": 20,
        "category": "武汉",
        // "draggable": "true",
        "value": 239,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "加油",
        "symbolSize": 21,
        "category": "武汉",
        // "draggable": "true",
        "value": 274,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "确诊",
        "symbolSize": 17,
        "category": "武汉",
        // "draggable": "true",
        "value": 150,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "隔离",
        "value": 74,
        "symbolSize": 15,
        "category": "武汉",
        // "draggable": "true",
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "防控",
        "symbolSize": 15,
        "category": "武汉",
        // "draggable": "true",
        "value": 46,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "口罩",
        "symbolSize": 30,
        "category": "口罩",
        // "draggable": "true",
        "value": 1600,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "病毒",
        "value": 600,
        "symbolSize": 24,
        "category": "口罩",
        // "draggable": "true",
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "戴口罩",
        "symbolSize": 20,
        "category": "口罩",
        // "draggable": "true",
        "value": 392,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "传播",
        "symbolSize": 14.5,
        "category": "口罩",
        // "draggable": "true",
        "value": 217,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "飞沫",
        "value": 163,
        "symbolSize": 12.7,
        "category": "口罩",
        // "draggable": "true",
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "需要",
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        "value": 58,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "不戴口罩",
        "value": 46,
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "没有口罩",
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        "value": 20,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "过滤",
        "value": 253,
        "symbolSize": 16,
        "category": "口罩",
        // "draggable": "true",
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "N95",
        "symbolSize": 9.5,
        "category": "口罩",
        // "draggable": "true",
        "value": 89,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "防止",
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        "value": 86,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "美国",
        "value": 56,
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "咳嗽",
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        "value": 46,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "预防",
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        "value": 44,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "科学",
        "value": 41,
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "降低",
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        "value": 38,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "气溶胶",
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        "value": 36,
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "简单",
        "value": 32,
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        // "symbol": 'image://images/star2.png'
      }, {
        "name": "无用",
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        "value": 29,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "潜伏期",
        "symbolSize": 13,
        "category": "口罩",
        // "draggable": "true",
        "value": 22,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "赞同",
        "symbolSize": 15.2,
        "category": "封城",
        // "draggable": "true",
        "value": 233,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "医院",
        "symbolSize": 15,
        "category": "封城",
        // "draggable": "true",
        "value": 212,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "超市",
        "symbolSize": 13.6,
        "category": "封城",
        // "draggable": "true",
        "value": 184,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "出门",
        "symbolSize": 12.7,
        "category": "封城",
        // "draggable": "true",
        "value": 163,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "感染",
        "symbolSize": 12.2,
        "category": "封城",
        // "draggable": "true",
        "value": 151,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "政府",
        "symbolSize": 11.5,
        "category": "封城",
        // "draggable": "true",
        "value": 125,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "医疗",
        "symbolSize": 13,
        "category": "封城",
        // "draggable": "true",
        "value": 97,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "全国",
        "symbolSize": 13,
        "category": "封城",
        // "draggable": "true",
        "value": 92,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "想吃",
        "symbolSize": 13,
        "category": "封城",
        // "draggable": "true",
        "value": 17,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "自己",
        "symbolSize": 15.6,
        "category": "封城",
        // "draggable": "true",
        "value": 244,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "物资",
        "symbolSize": 12,
        "category": "封城",
        // "draggable": "true",
        "value": 143,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "时间",
        "symbolSize": 11.5,
        "category": "封城",
        // "draggable": "true",
        "value": 122,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "相信",
        "symbolSize": 13,
        "category": "封城",
        // "draggable": "true",
        "value": 86,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "医护人员",
        "symbolSize": 13,
        "category": "封城",
        // "draggable": "true",
        "value": 84,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "手机",
        "symbolSize": 13,
        "category": "封城",
        // "draggable": "true",
        "value": 42,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "理解",
        "symbolSize": 13,
        "category": "封城",
        // "draggable": "true",
        "value": 34,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "网络",
        "symbolSize": 13,
        "category": "封城",
        // "draggable": "true",
        "value": 24,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "历史",
        "symbolSize": 13,
        "category": "封城",
        // "draggable": "true",
        "value": 22,
        // "symbol": 'image://images/star2.png'

      }, {
        "name": "逃离",
        "symbolSize": 15,
        "category": "封城",
        // "draggable": "true",
        "value": 21,
        // "symbol": 'image://images/star2.png'

      }],













      links: [{
        "source": "封城",
        "target": "武汉"
      }, {
        "source": "封城",
        "target": "口罩"
      }, {
        "source": "封城",
        "target": "赞同"
      }, {
        "source": "封城",
        "target": "医院"
      }, {
        "source": "封城",
        "target": "疫情"
      }, {
        "source": "封城",
        "target": "超市"
      }, {
        "source": "封城",
        "target": "出门"
      }, {
        "source": "封城",
        "target": "感染"
      }, {
        "source": "封城",
        "target": "病毒"
      }, {
        "source": "封城",
        "target": "政府"
      }, {
        "source": "封城",
        "target": "加油"
      }, {
        "source": "医院",
        "target": "医疗"
      }, {
        "source": "封城",
        "target": "全国"
      }, {
        "source": "出门",
        "target": "想吃"
      }, {
        "source": "封城",
        "target": "自己"
      }, {
        "source": "封城",
        "target": "希望"
      }, {
        "source": "封城",
        "target": "感染"
      }, {
        "source": "封城",
        "target": "物资"
      }, {
        "source": "封城",
        "target": "时间"
      }, {
        "source": "医院",
        "target": "相信"
      }, {
        "source": "医院",
        "target": "医护人员"
      }, {
        "source": "封城",
        "target": "手机"
      }, {
        "source": "封城",
        "target": "理解"
      }, {
        "source": "手机",
        "target": "网络"
      }, {
        "source": "封城",
        "target": "历史"
      }, {
        "source": "封城",
        "target": "逃离"
      }, {
        "source": "武汉",
        "target": "湖北"
      }, {
        "source": "医院",
        "target": "确诊"
      }, {
        "source": "医院",
        "target": "隔离"
      }, {
        "source": "武汉",
        "target": "防控"
      }, {
        "source": "口罩",
        "target": "病毒"
      }, {
        "source": "N95",
        "target": "戴口罩"
      }, {
        "source": "口罩",
        "target": "传播"
      }, {
        "source": "口罩",
        "target": "飞沫"
      }, {
        "source": "N95",
        "target": "需要"
      }, {
        "source": "N95",
        "target": "不戴口罩"
      }, {
        "source": "N95",
        "target": "没有口罩"
      }, {
        "source": "N95",
        "target": "过滤"
      }, {
        "source": "口罩",
        "target": "N95"
      }, {
        "source": "口罩",
        "target": "防止"
      }, {
        "source": "口罩",
        "target": "美国"
      }, {
        "source": "口罩",
        "target": "咳嗽"
      }, {
        "source": "口罩",
        "target": "预防"
      }, {
        "source": "口罩",
        "target": "科学"
      }, {
        "source": "口罩",
        "target": "降低"
      }, {
        "source": "口罩",
        "target": "气溶胶"
      }, {
        "source": "N95",
        "target": "简单"
      }, {
        "source": "口罩",
        "target": "无用"
      }, {
        "source": "口罩",
        "target": "潜伏期"
      }, {
        "source": "疫情",
        "target": "病毒"
      }, {
        "source": "疫情",
        "target": "隔离"
      }, {
        "source": "疫情",
        "target": "防控"
      }, {
        "source": "疫情",
        "target": "确诊"
      }, {
        "source": "疫情",
        "target": "口罩"
      }, {
        "source": "疫情",
        "target": "预防"
      }, {
        "source": "疫情",
        "target": "科学"
      }, {
        "source": "疫情",
        "target": "降低"
      }, {
        "source": "疫情",
        "target": "加油"
      }, {
        "source": "疫情",
        "target": "全国"
      }, {
        "source": "疫情",
        "target": "物资"
      }, {
        "source": "疫情",
        "target": "政府"
      }, {
        "source": "疫情",
        "target": "医护人员"
      }, {
        "source": "疫情",
        "target": "医院"
      }, {
        "source": "病毒",
        "target": "疫情"
      }, {
        "source": "病毒",
        "target": "确诊"
      }, {
        "source": "病毒",
        "target": "隔离"
      }, {
        "source": "病毒",
        "target": "防控"
      }, {
        "source": "病毒",
        "target": "口罩"
      }, {
        "source": "病毒",
        "target": "传播"
      }, {
        "source": "病毒",
        "target": "飞沫"
      }, {
        "source": "病毒",
        "target": "过滤"
      }, {
        "source": "病毒",
        "target": "防止"
      }, {
        "source": "病毒",
        "target": "咳嗽"
      }, {
        "source": "病毒",
        "target": "预防"
      }, {
        "source": "病毒",
        "target": "科学"
      }, {
        "source": "病毒",
        "target": "降低"
      }, {
        "source": "病毒",
        "target": "气溶胶"
      }, {
        "source": "病毒",
        "target": "潜伏期"
      }, {
        "source": "加油",
        "target": "相信"
      }, {
        "source": "确诊",
        "target": "病毒"
      }, {
        "source": "确诊",
        "target": "医护人员"
      }, {
        "source": "确诊",
        "target": "医院"
      }, {
        "source": "确诊",
        "target": "医疗"
      }, {
        "source": "确诊",
        "target": "物资"
      }, {
        "source": "隔离",
        "target": "潜伏期"
      }, {
        "source": "隔离",
        "target": "降低"
      }, {
        "source": "隔离",
        "target": "科学"
      }, {
        "source": "隔离",
        "target": "预防"
      }, {
        "source": "隔离",
        "target": "咳嗽"
      }, {
        "source": "隔离",
        "target": "防止"
      }, {
        "source": "隔离",
        "target": "赞同"
      }, {
        "source": "戴口罩",
        "target": "需要"
      }, {
        "source": "戴口罩",
        "target": "防止"
      }, {
        "source": "戴口罩",
        "target": "科学"
      }, {
        "source": "戴口罩",
        "target": "咳嗽"
      }, {
        "source": "戴口罩",
        "target": "相信"
      }, {
        "source": "政府",
        "target": "相信"
      }, {
        "source": "全国",
        "target": "医护人员"
      }, {
        "source": "全国",
        "target": "医疗"
      }, {
        "source": "全国",
        "target": "医院"
      }, {
        "source": "全国",
        "target": "超市"
      }, {
        "source": "美国",
        "target": "感染"
      }],















      // , {
      //   "source": "武汉",
      //   "target": "关键词"
      // }, {
      //   "source": "封城",
      //   "target": "关键词"
      // }, {
      //   "source": "疫情",
      //   "target": "关键词"
      // }, {
      //   "source": "口罩",
      //   "target": "关键词"
      // }, {
      //   "source": "病毒",
      //   "target": "关键词"
      // }, {
      //   "source": "传播",
      //   "target": "关键词"
      // }, {
      //   "source": "戴口罩",
      //   "target": "关键词"
      // }, {
      //   "source": "赞同",
      //   "target": "关键词"
      // }, {
      //   "source": "医院",
      //   "target": "关键词"
      // }, {
      //   "source": "感染",
      //   "target": "关键词"
      // }, {
      //   "source": "全国",
      //   "target": "关键词"
      // }, {
      //   "source": "政府",
      //   "target": "关键词"
      // }, {
      //   "source": "希望",
      //   "target": "关键词"
      // }, {
      //   "source": "加油",
      //   "target": "关键词"
      // }, {
      //   "source": "医疗",
      //   "target": "关键词"
      // }, {
      //   "source": "医护人员",
      //   "target": "关键词"
      // }, {
      //   "source": "确诊",
      //   "target": "高频词"
      // }, {
      //   "source": "隔离",
      //   "target": "高频词"
      // }, {
      //   "source": "武汉",
      //   "target": "高频词"
      // }, {
      //   "source": "封城",
      //   "target": "高频词"
      // }, {
      //   "source": "防控",
      //   "target": "高频词"
      // }, {
      //   "source": "口罩",
      //   "target": "飞沫"
      // }, {
      //   "source": "防止",
      //   "target": "高频词"
      // }, {
      //   "source": "美国",
      //   "target": "高频词"
      // }, {
      //   "source": "咳嗽",
      //   "target": "高频词"
      // }, {
      //   "source": "气溶胶",
      //   "target": "高频词"
      // }, {
      //   "source": "潜伏期",
      //   "target": "高频词"
      // }, {
      //   "source": "传播",
      //   "target": "高频词"
      // }, {
      //   "source": "N95",
      //   "target": "高频词"
      // }, {
      //   "source": "科学",
      //   "target": "高频词"
      // }, {
      //   "source": "降低",
      //   "target": "高频词"
      // }, {
      //   "source": "过滤",
      //   "target": "高频词"
      // }, {
      //   "source": "自己",
      //   "target": "高频词"
      // }, {
      //   "source": "赞同",
      //   "target": "高频词"
      // }, {
      //   "source": "医院",
      //   "target": "高频词"
      // }, {
      //   "source": "疫情",
      //   "target": "高频词"
      // }, {
      //   "source": "出门",
      //   "target": "高频词"
      // }, {
      //   "source": "希望",
      //   "target": "高频词"
      // }, {
      //   "source": "手机",
      //   "target": "高频词"
      // }, {
      //   "source": "医护人员",
      //   "target": "高频词"
      // }, {
      //   "source": "逃离",
      //   "target": "高频词"
      // }, {
      //   "source": "历史",
      //   "target": "高频词"
      // }, {
      //   "source": "网络",
      //   "target": "高频词"
      // }, {
      //   "source": "蔬菜",
      //   "target": "高频词"
      // }, {
      //   "source": "物资",
      //   "target": "高频词"
      // }, {
      //   "source": "感染",
      //   "target": "高频词"
      // }





      // itemStyle: {
      //   // color: {
      //   //   type: 'radial',
      //   //   x: 0.5,
      //   //   y: 0.5,
      //   //   r: 0.5,
      //   //   colorStops: [{
      //   //     offset: 0, color: 'red' // 0% 处的颜色
      //   //   }, {
      //   //     offset: 1, color: 'blue' // 100% 处的颜色
      //   //   }],
      //   //   global: false // 缺省为 false
      //   // },
      //   opacity: 0.9
      // },






      categories: [{
        'name': '口罩',
        label:{
          color:"rgba(255, 255, 255, 1)"
        }
      }, {
        'name': '封城'
      }, {
        'name': '武汉'
      }

      ],

      // , {
      //   'name': '高频词'
      // }, {
      //   'name': '关键词'
      // }


      roam: true,
      label: {
        normal: {
          color: '#fff',

          show: false,
          position: 'top',

        }
      },
      lineStyle: {
        normal: {
          color: '	#F0F8FF',
          width: 3,
          curveness: 0,
          type: "solid"
        }
      },
      focusNodeAdjacency: true,
      draggable: true
    }]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();