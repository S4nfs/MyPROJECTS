var canvas = document.getElementById("canvas");
var step = 0;
var interval = 1000;

var rawData = [];

var config = {
    type: 'line',
    data: {
        labels: [],
        datasets: [
          {
              label: 'CPU Usage Averaged',
              data: [],
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,255,255,0.5)',
              pointBackgroundColor: 'transparent',
              pointBorderColor: '#fff',
              lineTension: 0.5,
              borderWidth: 2,
              spanGaps:true,
          },
          {
              label: 'CPU Usage',
              data: [],
              backgroundColor: '',
              steppedLine:true,
              borderColor: 'transparent',
              pointBackgroundColor: 'transparent',
              pointBorderColor: 'transparent',
              lineTension: 0.1,
          }
        ]
    },
    options: {
        responsive: true,
    		elements: { 
        	point: {
          	radius: 2,
          	hitRadius: 0, 
            hoverRadius: 0 
          }
        },
    		legend: {
        		display: false,
        },
        scales: {
            xAxes: [{
            		display: false,
            }],
            yAxes: [{
            		display: true,
                ticks: {
                  display:false,
                	beginAtZero: true,
                  min:0,
                  max:100
              	},
                gridLines: {
                  display: true ,
                  color: "rgba(255,255,255,0.1)",
                  zeroLineColor: "rgba(255,255,255,0.1)",
                  borderDash: [2,3],
                  zeroLineWidth:2,
                  // tickMarkLength:0,
                  drawTicks:false,
                  drawBorder: false,
                }
            }]
        }
    }
};

function getCPU(prev){
  
  function plus_minus(){
    return (Math.random() * (10 - -10) + -10);
  }
  prev = prev || 25;
  prev = prev > 90 ? 35 + plus_minus() : prev;
  var spike = (Math.random() * (25 - 0) + 0) > 24;
  var max = spike ? 95 : prev + plus_minus();
  var min = spike ? 85 : prev + plus_minus();
  var num = Math.random() * (max - min) + min;
  return Math.abs(num);
}

function newData(){
  var a = 10;
  var d = rawData.slice(0).slice(-60);
  var n = getCPU(d[d.length - 1]);
  var average = function (arr) {
    var arr = arr || [];
    if(!arr.length){
      for (var i = 1; i <= a; i++) {
        arr.push(d[d.length - i]);
      }
    }
    return arr.reduce(function (a, b) {
      return a + b;
    }, 0) / arr.length;
  };
  
  rawData.shift();
  rawData.push(n)
  
  config.data.datasets[1].data = rawData.slice(0).slice(-60);
  
  config.data.datasets[0].data.shift();
  config.data.datasets[0].data[0] = average(rawData.slice(0,5));
  if(step >= a){
    step = 0;
    config.data.datasets[0].data.push(average());
  }else{
    step++;
    config.data.datasets[0].data[config.data.datasets[0].data.length-1] = null;
    config.data.datasets[0].data.push(average());
  }
  
  window.chart.update(0);
  setTimeout(newData, interval);
}

(function startData(){
  window.chart = new Chart(canvas, config);
  var height = canvas.height;
  
  var gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0.1, 'rgba(200,0,100,1)');
  gradient.addColorStop(0.6, 'rgba(244, 185, 66,0.3)');
  gradient.addColorStop(1, 'rgba(0,255,150,0.1)');
  
  config.data.datasets[1].backgroundColor = gradient;
  
  for (var i = 0; i < 60; i++) {
    var l = i == 59? 0 : null;
    config.data.labels.push(null);
    config.data.datasets[0].data.push(l);
    config.data.datasets[1].data.push(l);
  }
  
  for (var i = 0; i < 65; i++) {
    rawData.push(0);
  }
  
  window.chart.update(0);
  setTimeout(newData, interval);
})();