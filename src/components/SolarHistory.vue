<template>
    <div>
    <section class="content-header">
          <h3>
            History
            <small>You can find your history here</small>
        </h3>
          <!-- <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Dashboard</li>
          </ol> -->
        </section>

        <!-- Main content -->
        <!-- <section class="content">
            <div class="container-settings">

            </div>
        </section> -->

        <div class="content" style="min-height:100px !important;">
            <div class="container-settings">
            <div class="controls-row row">
                <div class="form-group col-lg-6 col-md-12 col-xs-12">
                    <h3>Choose date range<br>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small></h3>

                    <div class="input-group">

                        <!-- /btn-group -->
                        <input type="text" class="form-control"  placeholder="dd.mm.yy">
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-warning">Show</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </div>


        <div class="content">
        <div class="row">
        <div class="col-lg-12 col-md-12 col-xs-12">

          <div id="container-history">

          </div>
        </div>
    </div>
    </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'SolarHistory',
  data () {
    return {

    }
},
created() {
    this.solarhistory();
},
methods: {
    solarhistory () {
    $(function () {
        var myChartHistory = Highcharts.chart('container-history', {

                      title: {
                          text: 'Voltage and current'
                      },

                      subtitle: {
                          text: '11.10.2017 - 20.10.2017'
                      },

                      xAxis: {
                          type: 'datetime'
                      },

                      yAxis: {
                          title: {
                              text: 'Voltage and current'
                          }
                      },

                      plotOptions: {
                          series: {
                              pointStart: Date.UTC(2017, 9, 11),
                              //pointInterval: 1800 * 1000 // half hour
                              pointInterval: 24 * 3600 * 1000 // one day
                          }
                      },

                      series: [{
                          name: 'Voltage in',
                          data: [10,10.5,11,11.5,12,12.5,13,13.5,14,14.5]
                      }, {
                          name: 'Battery voltage',
                          data: [12,12.5,12,12,12,12,12,12,12,12]
                      }, {
                          name: 'Current in',
                          data: [1,1,1.25,1.5,1.75,2,2,2,2,2]
                      }, {
                          name: 'Battery current',
                          data: [-2,-2,-1,0,2,2,3,3,3,3]
                      }, {
                          name: 'Current out',
                          data: [3,3,3,3,3,4,0,1,1,1]
                      }],

                      responsive: {
                          rules: [{
                              condition: {
                                  maxWidth: 500
                              },
                              chartOptions: {
                                  legend: {
                                      layout: 'horizontal',
                                      align: 'center',
                                      verticalAlign: 'bottom'
                                  }
                              }
                          }]
                      }

                  });
                  });
}},}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
