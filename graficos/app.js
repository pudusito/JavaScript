// app.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Gráfico de Distribución por Sexo (Pie Chart) ---
    const ctxSexo = document.getElementById('sexoChart').getContext('2d');
    const sexoChart = new Chart(ctxSexo, {
        type: 'pie',
        data: {
            labels: ['Masculino', 'Femenino'],
            datasets: [{
                label: 'Nº de Recién Nacidos',
                data: [155, 137], // Datos de ejemplo
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 99, 132, 0.7)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });

    // --- Gráfico de Distribución de Peso al Nacer (Bar Chart) ---
    const ctxPeso = document.getElementById('pesoChart').getContext('2d');
    const pesoChart = new Chart(ctxPeso, {
        type: 'bar',
        data: {
            labels: ['< 2500g (Bajo Peso)', '2500g - 4000g (Normal)', '> 4000g (Macrosómico)'],
            datasets: [{
                label: 'Nº de Recién Nacidos',
                data: [25, 240, 27], // Datos de ejemplo
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // --- Gráfico de Puntuación APGAR a los 5 Minutos (Bar Chart) ---
    const ctxApgar = document.getElementById('apgarChart').getContext('2d');
    const apgarChart = new Chart(ctxApgar, {
        type: 'bar',
        data: {
            labels: ['0-3 (Crítico)', '4-6 (Bajo)', '7-10 (Normal)'],
            datasets: [{
                label: 'Nº de Recién Nacidos',
                data: [5, 18, 269], // Datos de ejemplo
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // --- Gráfico de Destino del Recién Nacido (Doughnut Chart) ---
    const ctxDestino = document.getElementById('destinoChart').getContext('2d');
    const destinoChart = new Chart(ctxDestino, {
        type: 'doughnut',
        data: {
            labels: ['Alojamiento conjunto', 'UCI Neonatal', 'UTI Neonatal', 'Fallecido'],
            datasets: [{
                label: 'Nº de Recién Nacidos',
                data: [260, 15, 12, 5], // Datos de ejemplo
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(201, 203, 207, 0.7)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });

    // --- Animación de entrada para todos los contenedores ---
    anime({
        targets: '.chart-container, .indicator-container',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100) // Aparecen uno tras otro
    });
});