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
                    <small>Show 24h history for selected date.</small></h3>

                    <div class="input-group">

                        <!-- /btn-group -->
                        <input v-model="queryDateHistory" type="date" class="form-control"  placeholder="dd.mm.yy">
                        <div class="input-group-btn">
                            <button @click="showHistory" type="button" class="btn btn-warning">Show</button>
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
      queryDateHistory: "2018-04-01",
      podaci: null,
      voltageArr1: [],
      voltageArr2: [],
      voltageArr3: [],
      timestampArr: [],
      currentArr1: [],
      currentArr2: [],
      currentArr3: []

    }
},
created() {
    //this.solarhistory();
    this.queryDateHistory = new Date().toISOString().split('T')[0];
},
methods: {

    solarHistory () {
      let vm = this;
      $(function () {
          var myChartHistory = Highcharts.chart('container-history', {

                        title: {
                            text: 'Voltage and current'
                        },

                        subtitle: {
                            text: vm.fixDate()
                        },

                        xAxis: {
                            //type: 'datetime'
                            categories: vm.timestampArr
                        },

                        yAxis: {
                            title: {
                                text: 'Voltage and current'
                            }
                        },

                        plotOptions: {
                            series: {
                                // pointStart: Date.UTC(2017, 9, 11),
                                // //pointInterval: 1800 * 1000 // half hour
                                // pointInterval: 24 * 3600 * 1000 // one day
                            }
                        },

                        series: [{
                            name: 'Voltage in',
                            data: vm.voltageArr1
                        }, {
                            name: 'Battery voltage',
                            data: vm.voltageArr2
                        }, {
                            name: 'Voltage out',
                            data: vm.voltageArr3
                        }, {
                            name: 'Current in',
                            data: vm.currentArr1
                        }, {
                            name: 'Battery current',
                            data: vm.currentArr2
                        }, {
                            name: 'Current out',
                            data: vm.currentArr3
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
clearArrays() {
  this.voltageArr1 = [];
  this.voltageArr2 = [];
  this.voltageArr3 = [];
  this.timestampArr = [];
  this.currentArr1 = [];
  this.currentArr2 = [];
  this.currentArr3 = [];
},
fixDate() {
  // new array, get date and reverse it
  let dateArr = this.queryDateHistory.split("-");
  let day = dateArr[2];
  let month = dateArr[1];
  let year = dateArr[0];
  // if is day or month with 0 ()< 10), remove 0
  if(parseInt(day) < 10) {
      day = day[1];
  }
  if(parseInt(month) < 10) {
      month = month[1];
  }
  // create url for history query
  return day + "." + month + "." + year;
},
str_pad(n) {
    return String("00" + n).slice(-2);
},
showHistory() {
  // delete all arrays
  this.clearArrays();

  let vm = this;

  //console.log(dateUrl);

  let url = "http://pauro.ddns.net/customDateJSON.php?queryDate=" + this.fixDate();
  console.log("url: " +url);
  //$.get("https://solarprojekt.000webhostapp.com/customDateJSON.php?queryDate=" +dateUrl).then(data => {
  $.get(url).then(data => {
    console.log(data);
    vm.podaci = data;

    // foreach - pass through all data for queryDate
    data.forEach(record => {
      vm.voltageArr1.push(parseFloat(record.charging_voltage));
      vm.voltageArr2.push(parseFloat(record.battery_voltage));
      if (Math.abs(parseFloat(record.charging_voltage) - parseFloat(record.battery_voltage))) {
          vm.voltageArr3.push(12);
      } else {
          vm.voltageArr3.push(0);
      }
      vm.currentArr1.push(parseFloat(record.charging_current)/1000);
      vm.currentArr2.push(parseFloat(record.battery_current)/1000);
      vm.currentArr3.push(Math.abs(parseFloat(record.charging_current) - parseFloat(record.battery_current))/1000);

      let recordEntryTime = parseInt(record.unixtime);
      let time = new Date(recordEntryTime);
      // str_pad is for leading zeroes (08:00 instead of 8:0) :)
      let hours = vm.str_pad(time.getHours());
      let minutes = vm.str_pad(time.getMinutes());
      vm.timestampArr.push(hours + ":" + minutes);

    }); // end foreach

    vm.solarHistory();
});
}
}
,}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
