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
  data() {
    return {};
  },
  created() {
    $(function() {
      var myChartCurrent = Highcharts.chart("container-current", {
        title: {
          text: "Electricity Current"
        },
        // subtitle: {
        //     text: 'Source: thesolarfoundation.com'
        // },
        xAxis: {
          type: "datetime"
        },
        yAxis: {
          title: {
            text: "Current"
          }
        },
        plotOptions: {
          series: {
            pointStart: Date.UTC(2017, 9, 11),
            pointInterval: 1800 * 1000 // half hour
            //pointInterval: 24 * 3600 * 1000 // one day
          }
        },
        series: [
          {
            name: "Current in",
            data: [1, 1, 1.25, 1.5, 1.75, 2, 3, 3, 3, 3]
          },
          {
            name: "Battery current",
            data: [-2, -2, -1, 0, 1, 2, 3, 3, 3, 3]
          },
          {
            name: "Current out",
            data: [3, 3, 3, 3, 3, 2, 0, 1, 1, 1]
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
};
</script>

<style>

</style>
