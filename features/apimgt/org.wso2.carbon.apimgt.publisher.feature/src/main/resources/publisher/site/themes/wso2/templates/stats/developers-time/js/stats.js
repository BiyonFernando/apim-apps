var chart;
var chartData;
var apiFilter = "allAPIs";

function update_chart(data) {
    //clear previous data
    d3.select("svg").selectAll("*").remove();
    // Update the SVG with the new data and call chart
    chartData.datum(data).transition().duration(500).call(chart);
    nv.utils.windowResize(chart.update);
};

$(document).ready(function(){
    chart = "";
    chartData = ""; 
    /* Load date range picker */
    $('#date-range').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        format: 'YYYY-MM-DD HH:mm:ss',
        startDate: moment().subtract(1, 'month'),
        endDate: moment().add(1, 'day').format('YYYY-MM-DD HH:mm:ss'),
        opens: 'left',
    });

    /***
     * Filter controllers.
     */
    $('#date-range').on('apply.daterangepicker', function(ev, picker) {
       $("body").trigger("update_chart");
    });    

    //day picker
    $('#today-btn').on('click',function(){
        $('#date-range').data('daterangepicker').setStartDate(moment().startOf('day'));
        $('#date-range').data('daterangepicker').setEndDate(moment().format('YYYY-MM-DD HH:mm:ss'));
        $("body").trigger("update_chart");
    });

    //hour picker
    $('#hour-btn').on('click',function(){
        $('#date-range').data('daterangepicker').setStartDate(moment().startOf('hour'));
        $('#date-range').data('daterangepicker').setEndDate(moment().format('YYYY-MM-DD HH:mm:ss'));
        $("body").trigger("update_chart");
    })

    //week picker
    $('#week-btn').on('click',function(){
        $('#date-range').data('daterangepicker').setStartDate(moment().startOf('week'));
        $('#date-range').data('daterangepicker').setEndDate(moment().format('YYYY-MM-DD HH:mm:ss'));
        $("body").trigger("update_chart");
    })

    //month picker
    $('#month-btn').on('click',function(){
        $('#date-range').data('daterangepicker').setStartDate(moment().startOf('month'));
        $('#date-range').data('daterangepicker').setEndDate(moment().format('YYYY-MM-DD HH:mm:ss'));
        $("body").trigger("update_chart");
    });

    $("#apiFilter").change(function (e) {
        $('#apiSelect').empty();
        $('#apiSelect').append('<option> '+i18n.t('All')+' </option>');
        apiFilter = this.value;
        apiFilterList();
    });

    nv.addGraph(function () {
        chart = nv.models.lineChart()
            .margin({right: 30, left: 75})
            //.useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
            .transitionDuration(350)  //how fast do you want the lines to transition?
            .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
            .showYAxis(true)        //Show the y-axis
            .showXAxis(true) ;       //Show the x-axis

        chart.xAxis.axisLabel(i18n.t('Time'))
        .rotateLabels(-20)
        .tickFormat(function (d) {
             return d3.time.format('%m/%d %H:%M')(new Date(d)) });

        chart.yAxis.axisLabel(i18n.t('Developer Signups'))
            .tickFormat(d3.format('d'));

        chart.tooltipContent(function(key, x, y, e, graph) {
            return '<p><b>'+x+'</b> -' + key + ': ' + y + '</p>'
        });

        // Assign the SVG selction
        chartData = d3.select('#chartContainer svg').datum([]);
        chartData.transition().duration(500).call(chart);

        nv.utils.windowResize(chart.update);
        return chart;
    });

    function apiFilterList(){
        jagg.post("/site/blocks/stats/apis-list/ajax/stats.jag",
            {
                "apiFilter" : apiFilter
            },
            function (json) {
                if (!json.error) {
                    var  apiName = '';
                    for ( var i=0; i< json.data.length ; i++){
                        apiName += '<option>'+ json.data[i].apiName+'</option>'
                    }
                    $('#apiSelect')
                       .append(apiName)
                       .selectpicker('refresh');
                    $("body").trigger("update_chart");
                    $('#apiSelect').on('change', function() {
                        $("body").trigger("update_chart");
                    });
                }
            else {
                if (json.message == "AuthenticateError") {
                    jagg.showLogin();
                } else {
                    jagg.message({content: json.message, type: "error"});
                }
             }
        }, "json");
    }
    //update api list
    apiFilterList();

    $("body").on("update_chart",function(){
        jagg.post("/site/blocks/stats/developers-time/ajax/stats.jag" + window.location.search, 
            { 
                "fromDate": $('#date-range').data('daterangepicker').startDate.format('YYYY-MM-DD HH:mm:ss'),
                "toDate": $('#date-range').data('daterangepicker').endDate.format('YYYY-MM-DD HH:mm:ss'),
                "subscribedApi": $('#apiSelect').val(),
                "apiFilter": apiFilter
            },
            function (json) {
            if (!json.error) {
                update_chart(json.data);
            }
            else {
                if (json.message == "AuthenticateError") {
                    jagg.showLogin();
                } else {
                    jagg.message({content: json.message, type: "error"});
                }
            }
        }, "json");
    });
});