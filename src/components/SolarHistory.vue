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
                    <div class="form-group">
                        <div class='input-group date' id='startdate'>
                            <input type='text' class="form-control" />
                            <span class="input-group-addon">
                                <span class="glyphicon glyphicon-calendar"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- <div class="form-group col-lg-4 col-md-3 col-xs-12">
                    <h3 style="visibility: hidden;">Choose date<br>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small></h3>
                    <div class="form-group">
                        <div class='input-group date' id='enddate'>
                            <input type='text' class="form-control" />
                            <span class="input-group-addon">
                                <span class="glyphicon glyphicon-calendar"></span>
                            </span>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="form-group col-lg-4 col-md-3 col-xs-12">
                    <h3>Choose interval<br>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small></h3>
                        <select class="form-control" id="chooseInterval">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                </div> -->
            </div>
            <!-- <div class="row">
                <div class="form-group col-lg-12 col-md-3 col-xs-12">
                    <h3>What to show<br>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small></h3>
                    <label class="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox1" value="option1" checked> Voltage in
                    </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox2" value="option2" checked> Battery voltage
                    </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox3" value="option3"> Voltage out
                    </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox4" value="option4"> Current in
                    </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox5" value="option5"> Battery current
                    </label>
                    <label class="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox6" value="option6"> Battery out
                    </label>

                </div>
            </div>

                    <button type="button" class="btn btn-info" style="margin-bottom:1%;">Show graph</button>
                    -->
        </div>
        </div>


        <div class="content">
        <div class="row">
        <div class="col-lg-12 col-md-12 col-xs-12">
            <h3>
              History
              <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis sapiente sequi quidem nobis, dolor ratione molestias soluta eius dolorem autem eligendi, veritatis inventore ducimus expedita tempore aperiam vitae officiis!</small></h3>
          </h3>
          <div id="container-voltage">

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
                      var myChartVoltage = Highcharts.chart('container-voltage', {

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
                              text: 'Voltage'
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
                          name: 'Voltage out',
                          data: [11, 11, 11, 11, 11, 0, 0, 0, 0, 0]
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
