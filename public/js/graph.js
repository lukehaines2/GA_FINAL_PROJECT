// NAMESPACING
var bigData = bigData || {};
var percentageResult = percentageResult || {};

$(document).ready(function(){

    $.get('http://localhost:3000/bookings')
    .success(function(response){
      bigData = response;

      percentageResult = percentageChartLoop();
      percentageShow();
      // console.log(percentageResult)
    })


    var percentageData = [
      {
        value: 15,
        price: '55',
        color: '#811BD6'
     },
     {
        value: 10,
        price: 'Scala',
        color: '#9CBABA'
     }
    ]
  


  // PIE GRAPH
  var pieData = [
     {
        value: 25,
        label: 'Java',
        color: '#811BD6'
     },
     {
        value: 10,
        label: 'Scala',
        color: '#9CBABA'
     },
     {
        value: 30,
        label: 'PHP',
        color: '#D18177'
     },
     {
        value : 75,
        label: 'HTML',
        color: '#6AE128'
     }
  ];

  var context = document.getElementById('skills').getContext('2d');
  var skillsChart = new Chart(context).Pie(pieData);


  // BAR GRAPH
  var barData = {
      labels: ['Italy', 'UK', 'USA', 'Germany', 'France', 'Japan'],
      datasets: [
          {
              label: '2010 customers #',
              fillColor: '#382765',
              data: [2500, 1902, 1041, 610, 1245, 952]
          },
          {
              label: '2014 customers #',
              fillColor: '#7BC225',
              data: [3104, 1689, 1318, 589, 1199, 1436]
          }
      ]
  };

  var context = document.getElementById('clients').getContext('2d');
  var clientsChart = new Chart(context).Bar(barData);


  function percentageChartLoop(){
    var percentageChart = [];
    bigData.forEach(function(obj) { 
      var percentage1 = (obj['%']*100);
      var discount1 = obj['Discount']; 
      percentageChart.push({value: discount1, percentage: percentage1, color: '#7BC225'})
    });
    return percentageChart;
  }

  function percentageShow(){
    var context = document.getElementById('percentages').getContext('2d');
    var percentagesChart = new Chart(context).Doughnut(percentageResult);
    console.log(percentageResult)
  }


// DOC READY CLOSER
});




