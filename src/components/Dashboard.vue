<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h3>
            Dashboard
            <small>Control panel</small>
        </h3>

        </section>

        <!-- Main content -->
        <section class="content">
          <!-- Small boxes (Stat box) -->
          <div class="row">
            <div class="col-lg-3 col-xs-6">
              <!-- small box -->
              <div class="small-box bg-aqua">
                <div class="inner">
                  <h3>12.0 <sup style="font-size: 20px">V</sup></h3>

                  <p>Battery voltage</p>
                </div>
                <div class="icon">
                  <i class="ion ion-battery-half"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-xs-6">
              <!-- small box -->
              <div class="small-box bg-green">
                <div class="inner">
                  <h3>5.34 <sup style="font-size: 20px">A</sup></h3>

                  <p>Current consumption</p>
                </div>
                <div class="icon">
                  <i class="ion ion-android-bulb"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-xs-6">
              <!-- small box -->
              <div class="small-box bg-yellow">
                <div class="inner">
                  <h3>4.31 <sup style="font-size: 20px">A</sup></h3>

                  <p>Current charging</p>
                </div>
                <div class="icon">
                  <i class="ion ion-android-sunny"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-xs-6">
              <!-- small box -->
              <div class="small-box bg-red">
                <div class="inner">
                  <h3>14.38 <sup style="font-size: 20px">h</sup></h3>

                  <p>Time left</p>
                </div>
                <div class="icon">
                  <i class="ion ion-android-time"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <!-- ./col -->
          </div>
          <!-- Main row -->

          <div class="row">

          <!-- Highcharts.js -->
                      <div class="col-lg-6 col-md-6 col-xs-12">
                          <h3>
                            Voltage Graph
                            <small>Watch voltage</small>
                        </h3>
                          <div id="container-voltage">

<!-- JS code -->
                          </div>
                      </div>

                      <div class="col-lg-6 col-md-6 col-xs-12">
                          <h3>
                            Electricity Current Graph
                            <small>Watch current</small></h3>
                        </h3>
                          <div id="container-current">



                          </div>
                      </div>
                  </div>

          <!-- /.row (main row) -->
          <div class="row">
              <div class="col-lg-12 col-md-12 col-xs-12">
                  <h3>
                    Maps
                    <small>Where is your system?</small>
                </h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d397267.31332665676!2d14.220644168366242!3d44.8948372074915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2shr!4v1512331494174" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
              </div>
          </div>
        </section>
        <!-- /.content -->
</div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {

    }
},
created() {
    this.solarvoltage();
    this.solarcurrent();
},
methods: {
    solarvoltage () {
        $(function () {
            var myChartVoltage = Highcharts.chart('container-voltage', {

            title: {
                text: 'Voltage'
            },

            // subtitle: {
            //     text: 'Source: thesolarfoundation.com'
            // },

            xAxis: {
                type: 'datetime'
            },

            yAxis: {
                title: {
                    text: 'Voltage'
                }
            },

            plotOptions: {
                series: {
                    pointStart: Date.UTC(2017, 9, 11),
                    pointInterval: 1800 * 1000 // half hour
                    //pointInterval: 24 * 3600 * 1000 // one day
                }
            },

            series: [{
                name: 'Voltage in',
                data: [10,10.5,11,11.5,12,12.5,13,13.5,14,14.5]
            }, {
                name: 'Battery voltage',
                data: [12,12.5,12,12,12,12,12,12,12,12]
            }, {
                name: 'Voltage out',
                data: [11, 11, 11, 11, 11, 0, 0, 0, 0, 0]
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
},
solarcurrent(){
    $(function () {
        var myChartCurrent = Highcharts.chart('container-current', {

        title: {
            text: 'Electricity Current'
        },

        // subtitle: {
        //     text: 'Source: thesolarfoundation.com'
        // },

        xAxis: {
            type: 'datetime'
        },

        yAxis: {
            title: {
                text: 'Current'
            }
        },

        plotOptions: {
            series: {
                pointStart: Date.UTC(2017, 9, 11),
                pointInterval: 1800 * 1000 // half hour
                //pointInterval: 24 * 3600 * 1000 // one day
            }
        },

        series: [{
            name: 'Current in',
            data: [1,1,1.25,1.5,1.75,2,3,3,3,3]
        }, {
            name: 'Battery current',
            data: [-2,-2,-1,0,1,2,3,3,3,3]
        }, {
            name: 'Current out',
            data: [3,3,3,3,3,2,0,1,1,1]
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
}
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
