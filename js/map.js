var map = L.map('mapa').setView([20.566652, -103.226747], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
L.marker([20.566652, -103.226747]).addTo(map)
    .bindPopup('GDLWebCamp 2020 <br> Boletos ya Disponibles')
    .openPopup()
    .bindTooltip('Un Tooltip')
    .openTooltip();