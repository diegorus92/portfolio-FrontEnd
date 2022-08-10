const ctx = document.getElementById('hardSkills').getContext('2d');
const cty = document.getElementById('softSkills').getContext('2d');

//Datos Hard skills
const hardSkills = new Chart(ctx,{
    type: 'doughnut',
    data:{
        labels: [
        'Programacion Frontend',
        'Programacion Backend',
        'Ciberseguridad',
        'Inteligencia Artificial',
        'Cloud Computing',
        'Análisis e interpretación de datos '
        ],
        datasets: [{
        label: 'My First Dataset',
        data: [100, 50, 100, 30, 45, 20],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(222, 150, 132)',
            'rgb(25, 100, 35)',
            'rgb(255, 50, 110)'
        ],
        hoverOffset: 4
        }]
    }
  });


//Datos Soft skills
const softSkills = new Chart(cty,{
    type: 'doughnut',
    data:{
        labels: [
        'Comunicación',
        'Administración del tiempo',
        'Pensamiento crítico',
        'Liderazgo',
        'Negociación',
        'Trabajo en equipo'
        ],
        datasets: [{
        label: 'My First Dataset',
        data: [100, 50, 85, 60, 45, 90],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(222, 150, 132)',
            'rgb(25, 100, 35)',
            'rgb(255, 50, 110)'
        ],
        hoverOffset: 4
        }]
    }
});

