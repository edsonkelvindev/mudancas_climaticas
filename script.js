// Mapa interativo (Leaflet.js)
var map = L.map('map').setView([-15.793889, -47.882778], 3); // Coordenadas do Brasil

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marcadores com informações sobre os impactos da mudança climática

var marker1 = L.marker([-3.1056, -60.0250]).addTo(map); // Amazonas
marker1.bindPopup("<b>Amazônia:</b> Desmatamento e perda de biodiversidade.").openPopup();

var marker2 = L.marker([-22.9068, -43.1729]).addTo(map); // Rio de Janeiro
marker2.bindPopup("<b>Rio de Janeiro:</b> Aumento do nível do mar e eventos climáticos extremos.").openPopup();

// Novo marcador para Bangladesh
var marker3 = L.marker([23.685, 90.3563]).addTo(map); // Bangladesh
marker3.bindPopup("<b>Bangladesh:</b> Inundações sazonais e deslocamento populacional devido ao aumento do nível do mar.").openPopup();

// Novo marcador para a região da Grande Barreira de Coral
var marker4 = L.marker([-18.2871, 147.6992]).addTo(map); // Grande Barreira de Coral, Austrália
marker4.bindPopup("<b>Grande Barreira de Coral:</b> Aquecimento dos oceanos e branqueamento de corais.").openPopup();

// Novo marcador para o Pacífico Central
var marker5 = L.marker([1.3733, 173.0358]).addTo(map); // Ilhas Marshall
marker5.bindPopup("<b>Ilhas Marshall:</b> Submersão e impactos graves na agricultura devido ao aumento do nível do mar.").openPopup();

// Novo marcador para o Japão
var marker6 = L.marker([35.6762, 139.6503]).addTo(map); // Tóquio, Japão
marker6.bindPopup("<b>Tóquio:</b> Aumento de temperatura e aumento de eventos climáticos extremos, como tufões.").openPopup();

// Novo marcador para o Nepal
var marker7 = L.marker([28.3949, 84.1240]).addTo(map); // Nepal
marker7.bindPopup("<b>Nepal:</b> Derretimento das geleiras himalaícas e impactos na agricultura.").openPopup();

// Novo marcador para a Indonésia
var marker8 = L.marker([-0.7893, 113.9213]).addTo(map); // Indonésia
marker8.bindPopup("<b>Indonésia:</b> Desmatamento e aumento de incêndios florestais.").openPopup();

// Novo marcador para a cidade de Miami
var marker9 = L.marker([25.7617, -80.1918]).addTo(map); // Miami, EUA
marker9.bindPopup("<b>Miami:</b> Elevação do nível do mar e eventos climáticos extremos, como furacões.").openPopup();

// Novo marcador para a África Subsaariana
var marker10 = L.marker([11.6730, 25.2854]).addTo(map); // Região da África Subsaariana
marker10.bindPopup("<b>África Subsaariana:</b> Escassez de água, aumento da desertificação e migração forçada.").openPopup();


// Gráfico interativo (Chart.js)
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Energia', 'Transporte', 'Indústria', 'Agricultura', 'Desmatamento', 'Resíduos'],
        datasets: [{
            label: 'Emissão de Gases de Efeito Estufa',
            data: [40, 20, 18, 14, 10, 5], // Dados de exemplo
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14 // Aumenta o tamanho da fonte da legenda
                    }
                }
            },
            title: {
                display: true,
                text: 'Contribuição de cada setor para a emissão de gases de efeito estufa',
                font: {
                    size: 16 // Aumenta o tamanho da fonte do título
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        var percentage = tooltipItem.raw;
                        return tooltipItem.label + ': ' + percentage + '%'; // Adiciona % ao label
                    }
                }
            }
        }
    }
});

// Animações
// Exemplo: animação do botão "Saiba Mais" na página inicial
const botaoSaibaMais = document.querySelector('.saiba-mais');

botaoSaibaMais.addEventListener('mouseover', () => {
    botaoSaibaMais.style.backgroundColor = '#006400'; // Muda a cor do botão ao passar o mouse
});

botaoSaibaMais.addEventListener('mouseout', () => {
    botaoSaibaMais.style.backgroundColor = '#008000'; // Retorna a cor original ao tirar o mouse
});

// Galeria de fotos (Swiper.js)
const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    loop: true, // Permite que a galeria seja infinita
    autoplay: {
        delay: 3000, // Tempo de espera entre cada slide (em milissegundos)
        disableOnInteraction: false, // Continua o autoplay mesmo após o usuário interagir
    },
});