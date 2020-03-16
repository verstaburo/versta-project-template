/* eslint-disable */
// http://leafletjs.com
// Для кластеров использовать: https://github.com/Leaflet/Leaflet.markercluster
import L from 'leaflet';

const $ = window.$;

export function maps() {
  if (!$('#map').length) return;

  const coords = [55.755162, 37.619681];

  const map = L.map('map', {
    scrollWheelZoom: false,
    touchZoom: false,
  }).setView(coords, 14);

  L.tileLayer('https://api.mapbox.com/styles/v1/theververy1/cjxdfqbre00pg1cl727etu3fb/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 500,
    accessToken: 'pk.eyJ1IjoidGhldmVydmVyeTEiLCJhIjoiY2lzZXdzaXZ4MDBjaTJudm93dDI4MGVrMCJ9.Z8KKk0M_lpDTPB6_JtJBxg',
  }).addTo(map);

  const icon = L.icon({
    iconUrl: 'assets/images/pin.svg',
    shadowUrl: false,
    iconSize: [28, 39],
    iconAnchor: [14, 39],
    popupAnchor: [0, -50],
  });

  const marker = L.marker(coords, {
    icon: icon,
    title: 'Маркер',
  }).addTo(map).bindPopup('Кастомный HTML-попап');
}
/* eslint-enable */
