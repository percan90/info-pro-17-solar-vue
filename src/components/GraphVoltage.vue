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
  data() {
    return {};
  },
  created() {
    $(function() {
      var myChartVoltage = Highcharts.chart("container-voltage", {
        title: {
          text: "Voltage"
        },

        // subtitle: {
        //     text: 'Source: thesolarfoundation.com'
        // },

        xAxis: {
          type: "datetime"
        },

        yAxis: {
          title: {
            text: "Voltage"
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
            name: "Voltage in",
            data: [10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5]
          },
          {
            name: "Battery voltage",
            data: [12, 12.5, 12, 12, 12, 12, 12, 12, 12, 12]
          },
          {
            name: "Voltage out",
            data: [11, 11, 11, 11, 11, 0, 0, 0, 0, 0]
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
