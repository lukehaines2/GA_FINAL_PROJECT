// NAMESPACING
var bigData = bigData || {};
var percentageData = percentageData || {};

$(document).ready(function(){

    $.get('http://localhost:3000/bookings')
    .success(function(response){
      bigData = response;

      percentageData = percentageChartLoop();
      percentageShow();
    })

    // {"value":0,"color":"#7BC225"}: 65
    // {"value":10,"color":"#7BC225"}: 12
    // {"value":15,"color":"#7BC225"}: 14
    // {"value":17,"color":"#7BC225"}: 1
    // {"value":20,"color":"#7BC225"}: 24
    // {"value":22,"color":"#7BC225"}: 1
    // {"value":30,"color":"#7BC225"}: 12
    // {"value":36,"color":"#7BC225"}: 1
    // {"value":39,"color":"#7BC225"}: 1
    // {"value":40,"color":"#7BC225"}: 1
    // {"value":43,"color":"#7BC225"}: 1


  // PIE GRAPH
  // var pieData = [
  //    {
  //       value: 25,
  //       label: 'Java',
  //       color: '#811BD6'
  //    },
  //    {
  //       value: 10,
  //       label: 'Scala',
  //       color: '#9CBABA'
  //    },
  //    {
  //       value: 30,
  //       label: 'PHP',
  //       color: '#D18177'
  //    },
  //    {
  //       value : 75,
  //       label: 'HTML',
  //       color: '#6AE128'
  //    }
  // ];

  // var context = document.getElementById('skills').getContext('2d');
  // var skillsChart = new Chart(context).Pie(pieData);


  // // BAR GRAPH
  // var barData = {
  //     labels: ['Italy', 'UK', 'USA', 'Germany', 'France', 'Japan'],
  //     datasets: [
  //         {
  //             label: '2010 customers #',
  //             fillColor: '#382765',
  //             data: [2500, 1902, 1041, 610, 1245, 952]
  //         },
  //         {
  //             label: '2014 customers #',
  //             fillColor: '#7BC225',
  //             data: [3104, 1689, 1318, 589, 1199, 1436]
  //         }
  //     ]
  // };

  // var context = document.getElementById('clients').getContext('2d');
  // var clientsChart = new Chart(context).Bar(barData);


  var percentageData



  //PERCENTAGE CALC
  function percentageChartLoop(){
    var percentageChart = [];
    var uniquePercentages = [];
    var percentageObject = {};

    for (var i = 0; i < bigData.length; i++) {
      var percentage = (bigData[i]['%']*100);
      if(!percentageObject[percentage]) percentageObject[percentage] = 0

      if(uniquePercentages.indexOf(percentage) === -1) uniquePercentages.push(percentage)
      percentageObject[percentage] += 1
    };

    for(var prop in percentageObject) {
      if(percentageObject.hasOwnProperty(prop)) {
        percentageChart.push({ value: percentageObject[prop], label: prop + '%', color: 'red' })
      }
    }

    return percentageChart;
  }

  // PERCENTAGE GRAPH
  function percentageShow(){
    var context = document.getElementById('percentages').getContext('2d');
    var percentagesChart = new Chart(context).Doughnut(percentageData);
    // console.log(percentageResult)
  }

// DOC READY CLOSER
});




