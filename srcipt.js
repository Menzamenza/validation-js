
Chart.defaults.backgroundColor = '';
Chart.defaults.borderColor = '';
Chart.defaults.color = '';


function color(labels) {
    const borderColors = [];
    for (let i = 0; i < labels.length; i++) {
        let today = new Date().getDay();
        if (i === today-1) {
            borderColors.push(" hsl(186, 34%, 60%)");
        } else {
            borderColors.push('hsl(10, 79%, 65%)');
        }
    }
    return borderColors;
}

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mun', 'tue', 'wed', 'thu', 'fri', 'sat', 'sund'],
        datasets: [{
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            borderWidth: 1,
            borderColor: color(['mun', 'tue', 'wed', 'thu', 'fri', 'sat', 'sund']), 
            borderRadius:7,
            legend: {
                display: false
             }
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                border:{
                    display:false, //pour enlever les axes
                },
                ticks:{
                    display:false //enlever les valeurs de l'axe
                }
            },
            x:{
                border:{
                    display:false
                }
            }
        },
        plugins:{
            legend:{
                display:false
            }
        }
    }
});