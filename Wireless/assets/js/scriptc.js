function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function changeSlide(direction) {
    slides[currentSlide].classList.add('hide');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // Ciclo a través de las imágenes
    slides[currentSlide].classList.remove('hide');
}

// Slider automático
setInterval(() => {
    changeSlide(1);
}, 5000); // Cambia cada 5 segundos

function toggleInfo() {
    var infoDiv = document.getElementById("infoCommunication");
    if (infoDiv) { // Asegúrate de que el div exista
        infoDiv.classList.toggle("hide");
    } else {
        console.error("El elemento infoCommunication no se encuentra");
    }

    // Opcionalmente puedes ocultar el formulario, si lo deseas
    const formContainer = document.getElementById('contactFormContainer');
    if (formContainer) {
        formContainer.classList.toggle('hide');
    }
}

// Funciones del Modal
function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImage.src = src;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Cierras el modal al hacer clic en el fondo
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

const zoneData = {
    Miranda: ["Zona 1", "Zona 2", "Zona 3"],
    Carabobo: ["Zona A", "Zona B"],
    Zulia: ["Zona X", "Zona Y", "Zona Z"],
    Táchira: ["Zona Alpha", "Zona Beta"],
    Anzoátegui: ["Zona 1", "Zona 2"],
    Apure: ["Zona A", "Zona B"],
    Aragua: ["Zona 1", "Zona 2", "Zona 3"],
    Barinas: ["Zona A"],
    Bolívar: ["Zona 1", "Zona 2", "Zona 3"],
    Duariero: ["Zona A", "Zona B"],
    Falcon: ["Zona 1"],
    Guárico: ["Zona A"],
    Lara: ["Zona 1", "Zona 2", "Zona 3"],
    Monagas: ["Zona A"],
    NuevaEsparta: ["Zona 1", "Zona 2"],
    Portuguesa: ["Zona A"],
    Sucre: ["Zona 1"],
    Trujillo: [
        "Betijoque (Rafael Rangel)",
        "Boquerón (Escuque)",
        "El Alto de Escuque (Escuque)",
        "El corozo (Escuque)",
        "Isnotu (Rafael Rangel)",
        "Juan Díaz (Escuque)",
        "Quevedo (Escuque)",
        "San Agustín (Rafael Rangel)",
        "San Juan de Isnotu (Rafael Rangel)",
        "Sara linda (Rafael Rangel)",
        "Sabana libre (Escuque)",
        "Santa Rita (Escuque)",
        "Urbanización Colinas de Carmania (Escuque)",
        "Vista Hermosa (Sabana Libre)",
        "Conucos de la paz (Valera)"
    ],
    Yaracuy: ["Zona 1"],
};

document.getElementById('state-selector').addEventListener('change', function() {
    const selectedState = this.value;
    const zonesDiv = document.getElementById('zones');

    // Limpiar zonas anteriores
    zonesDiv.innerHTML = '';

    if (selectedState && zoneData[selectedState]) {
        const zones = zoneData[selectedState];
        const zonesContainer = document.createElement('div');
        zonesContainer.classList.add('zones-container'); // Clase para el contenedor de zonas

        zones.forEach(zone => {
            const zoneItem = document.createElement('div');
            zoneItem.classList.add('zone-item'); // Clase para cada zona
            zoneItem.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${zone}`;
            zonesContainer.appendChild(zoneItem);
        });

        zonesDiv.appendChild(zonesContainer);
    }
});
