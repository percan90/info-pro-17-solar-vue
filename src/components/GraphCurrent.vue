<template>
    <div class="col-lg-6 col-md-6 col-xs-12">
        <h3>
            Electricity Current Graph
            <small>Watch current</small>
        </h3>
        <div id="container-current">
        </div>
</div>
</template>

<script>
export default {
  name: "GraphCurrent",
  props:["graphData"],
  data() {
    return {
      currentArr1: [],
      currentArr2: [],
      currentArr3: [],
      timestampArr: []
    };
  },
  created() {

this.solarcurrent();

  },
  methods:{

    solarcurrent(){
      let vm = this;
      for(let i=0;i<this.graphData.length;i++) {
        let current = this.graphData[i];
        let currentEntryTime = parseInt(current.unixtime);
        //console.log(currentEntryTime);
        let currentTime = Date.now();
        // show graph only for last 24h
        if(currentEntryTime > (currentTime - 86400000)){
          this.currentArr1.push(parseFloat(current.charging_current)/1000);
          this.currentArr2.push(parseFloat(current.battery_current)/1000);
          this.currentArr3.push(Math.abs(parseFloat(current.charging_current) - parseFloat(current.battery_current))/1000);
          let time = new Date(currentEntryTime);
          this.timestampArr.push(time.getHours() + ":" + time.getMinutes());
          // this.timestampArr.push(currentEntryTime);
        }


      }
      // console.log(this.graphData);
      // console.log("currentArr1:"+this.currentArr1);
      // console.log("currentArr2:"+this.currentArr2);
      // console.log("currentArr3:"+this.currentArr3);
      $(function() {
          //var currentEntryTime = (currentTime - 86400000);
        var myChartCurrent = Highcharts.chart("container-current", {
          title: {
            text: "Electricity Current"
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
              text: "Current"
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
              name: "Current in",
              data: vm.currentArr1//[1, 1, 1.25, 1.5, 1.75, 2, 3, 3, 3, 3]
            },
            {
              name: "Battery current",
              data: vm.currentArr2//[-2, -2, -1, 0, 1, 2, 3, 3, 3, 3]
            },
            {
              name: "Current out",
              data: vm.currentArr3//[3, 3, 3, 3, 3, 2, 0, 1, 1, 1]
            }
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
