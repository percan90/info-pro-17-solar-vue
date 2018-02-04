<template>
    <div class="col-lg-6 col-md-6 col-xs-12">
        <h3>
            Voltage Graph
            <small>Watch voltage</small>
        </h3>
        <div id="container-voltage">
        </div>
    </div>
</template>

<script>
export default {
  name: "GraphVoltage",
  props:["graphData"],
  data() {
    return {
      voltageArr1: [],
      voltageArr2: [],
      timestampArr: []
    };
  },
  created() {

this.solarvoltage();

  },
  methods:{

    solarvoltage(){
      let vm = this;
      for(let i=0;i<this.graphData.length;i++) {
        let voltage = this.graphData[i];
        let voltageEntryTime = parseInt(voltage.unixtime);
        //console.log(voltageEntryTime);
        let voltageTime = Date.now();
        // show graph only for last 24h
        if(voltageEntryTime > (voltageTime - 86400000)){
          this.voltageArr1.push(parseFloat(voltage.u1));
          this.voltageArr2.push(parseFloat(voltage.u2));
          //this.voltageArr3.push(Math.abs(parseFloat(voltage.u1) - parseFloat(voltage.u2)));
          let time = new Date(voltageEntryTime);
          this.timestampArr.push(time.getHours() + ":" + time.getMinutes());
          // this.timestampArr.push(voltageEntryTime);
        }


      }
      // console.log(this.graphData);
      console.log("voltageArr1:"+this.voltageArr1);
      console.log("voltageArr2:"+this.voltageArr2);
      // console.log("voltageArr3:"+this.voltageArr3);
      $(function() {
          //var currentEntryTime = (currentTime - 86400000);
        var myChartVoltage = Highcharts.chart("container-voltage", {
          title: {
            text: "Electricity Voltage"
          },
          // subtitle: {
          //     text: 'Source: thesolarfoundation.com'
          // },
          xAxis: {
            //type: "datetime"
            categories: vm.timestampArr
          },
          yAxis: {
            title: {
              text: "Voltage"
            }
          },
          plotOptions: {
            series: {
              //pointStart: +new Date()+3600000,
              //pointInterval: 300000
            }
          },
          series: [
            {
              name: "Voltage in",
              data: vm.voltageArr1//[1, 1, 1.25, 1.5, 1.75, 2, 3, 3, 3, 3]
            },
            {
              name: "Battery Voltage",
              data: vm.voltageArr2//[-2, -2, -1, 0, 1, 2, 3, 3, 3, 3]
            },
            // {
            //   name: "Current out",
            //   data: vm.currentArr3//[3, 3, 3, 3, 3, 2, 0, 1, 1, 1]
            // }
          ],
          responsive: {
            rules: [
              {
                condition: {
                  maxWidth: 500
                },
                chartOptions: {
                  legend: {
                    layout: "horizontal",
                    align: "center",
                    verticalAlign: "bottom"
                  }
                }
              }
            ]
          }
        });
      });

    }
  }
};
</script>

<style>

</style>
