<template>
  <div>
    最基础的模板
    <v-chart :options="echartsOption"></v-chart>
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
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'bar'
        }]
      }
      this.echartsOption = option
    },
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
//@import "";
</style>