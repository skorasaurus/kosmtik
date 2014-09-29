exports.LocalConfig = function (localizer, project) {
var loc = 'hdm',
centers = {
hdm: [-71.7325, 19.1075, 12],
burundi: [29.9377, -3.4216, 9],
sierraleone: [-13.2366965, 8.4732210, 9],
chad: [16.56874, 8.68063, 9],
mauritania: [-11.558, 19.725, 9]
};
project.mml.compareUrl = "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png";
localizer.where('center').then(centers[loc]);
localizer.where('Layer').if({'Datasource.type': 'postgis'}).then({
"Datasource.dbname": loc,
"Datasource.password": "",
"Datasource.user": "skors",
"Datasource.host": "localhost"
});
localizer.where('Layer').if({id: 'hillshade'}).then({'Datasource.file': '/home/skors/MapBox/project/shared/haiti-hillshade-80-3785.tif'});
localizer.where('Layer').if({id: 'contour_line'}).then({'Datasource.file': '/home/skors/MapBox/project/shared/ontour-25m.shp'});
localizer.where('Layer').if({id: 'land-high'}).then({'Datasource.file': '/home/skors/MapBox/project/shared/land-polygons-split-3857/land_polygons.shp'});
localizer.where('Layer').if({id: 'land-low'}).then({'Datasource.file': '/home/skors/MapBox/project/shared/simplified-land-polygons-complete-3857/simplified_land_polygons.shp'});


