
Chart.defaults.backgroundColor = '';
Chart.defaults.borderColor = '';
Chart.defaults.color = '';

function color(labels) {
    const borderColors = [];
    let today = new Date().getDay(); // Obtenir le jour actuel de la semaine (0 pour dimanche, 1 pour lundi)

    for (let i = 0; i < labels.length; i++) {
        if (i === (today - 1 + 7) % 7) {
            console.log(today);
            borderColors.push("hsl(186, 34%, 60%)");
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
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            borderWidth: 1,
            borderColor: color(['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']), 
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