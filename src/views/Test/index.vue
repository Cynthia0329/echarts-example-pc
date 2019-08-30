<template>
  <div>
    <h1>实验室</h1>
    <v-chart :options="echartsOption" class="echart"></v-chart>
  </div>
</template>

<script>
export default {
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      echartsOption: {}
    }
  },
  mounted() {
    this.setoption()
  },
  methods: {
    setoption() {
      let option = {
        title: {
          show: false,
          text: 'title',
          left: 'center',
          top: '20'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        grid: {
          width: 'auto',
          height: '200',
          bottom: '100'
        },
        toolbox: {
          show: true,
          top: '20',
          right: '60',
          feature: {
            // dataZoom: {
            //     yAxisIndex: 'none'
            // },
            magicType: {type: ['line', 'bar']},
            // restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: {
          type: 'slider'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            // smooth: true,
            areaStyle: {
              opacity: 0
            }
        }]
      }
      this.echartsOption = option
    },
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
//@import "";
.echart {
  border: 1px solid #eeeeee;
}
</style>