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
                    <!-- show last battery status -->
                  <h3>{{cpBatteryVoltage}} <sup style="font-size: 20px">V</sup></h3>

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
                  <h3>{{cpCurrentConsumption}} <sup style="font-size: 20px">A</sup></h3>

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
                  <h3>{{cpCurrentCharging}} <sup style="font-size: 20px">A</sup></h3>

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
                  <h3>{{cpTimeLeft}} <sup style="font-size: 20px">h</sup></h3>

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

                <!-- graphCurrentConsumption = show output voltage if current consumption > 0 -->
                <GraphVoltage v-if="podaci" :graphData="podaci" :graphCurrentConsumption="cpCurrentConsumption"/>

                <GraphCurrent v-if="podaci" :graphData="podaci" />
            </div>

          <!-- /.row (main row) -->
          <div class="row">
              <div class="col-lg-12 col-md-12 col-xs-12">
                  <h3>
                    Maps
                    <small>Where is your system?</small>
                </h3>
                <div id="map"></div>
                <!-- API key: AIzaSyBYc8W1NHeWJDt8mfcY9K-LihkJK_VAdEI
                    width="100%" height="450"-->
                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d397267.31332665676!2d14.220644168366242!3d44.8948372074915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2shr!4v1512331494174" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> -->
                <!-- <iframe :src="'https://www.google.com/maps/embed/v1/place?q='+gps1+','+gps2+'&amp;key=AIzaSyD5Tvs36CoTCn62jYIluimTkkogwv4OerU'" width="100%" height="450" frameborder="0" style="border:0" ></iframe> -->
                <iframe :src="'http://maps.google.com/maps?q=' + gps1 + ','+ gps2 + '&z=17&output=embed'" width="100%" height="450" frameborder="0" style="border:0"></iframe>
              </div>
          </div>
        </section>
        <!-- /.content -->
</div>
</template>

<script>
import GraphCurrent from './GraphCurrent'
import GraphVoltage from './GraphVoltage'
export default {
  name: 'Dashboard',
  components: {GraphVoltage, GraphCurrent},
  data () {
    return {
      podaci: null,//[{"i1":1,"i2":4},{"i1":2,"i2":6}]
      // Control Panel small box sample data
      cpBatteryVoltage:"calc",
      cpCurrentConsumption:"calc",
      cpCurrentCharging:"calc",
      cpTimeLeft: "calc",
      gps1: null,
      gps2: null
    }
    },
    created() {
        let vm = this;
        // get json data
        $.get("http://pauro.ddns.net/getJSON.php").then(data => {
          //console.log(data);
          vm.podaci = data;
          // get only last data
          vm.cpBatteryVoltage = data[data.length-1].battery_voltage;
          vm.cpCurrentCharging = (data[data.length-1].charging_current)/1000;
          vm.cpCurrentConsumption = Math.abs(parseFloat(data[data.length-1].charging_current) - parseFloat(data[data.length-1].battery_current))/1000;
          vm.gps1 = data[data.length-1].gps1;
          vm.gps2 = data[data.length-1].gps2;

          //vm.gps1 = "59.91631";
          //vm.gps2 = "10.7459999";
          // battery capacity = 210Ah
          // TimeLeft = capacity / consumption
          let batteryCapacity = parseInt(60);
          let consumption = vm.cpCurrentConsumption;
          let charging = vm.cpCurrentCharging;
          // console.log("charging" + charging);
          // console.log("battery" + batteryCapacity);
          // console.log("consumption" + consumption);

          if(charging < 0.1) {
              vm.cpTimeLeft = batteryCapacity / consumption;
          } else {
              vm.cpTimeLeft = "Charging";
          }


      })

    },
    methods: {
        solarvoltage () {

        },
        solarcurrent() {

        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
