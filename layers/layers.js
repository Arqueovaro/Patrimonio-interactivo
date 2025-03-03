ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-76415.963020, 4677486.061746, -34928.376712, 4699423.237247]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Ortofoto202225cmRGBComunitatValenciana_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://terramapas.icv.gva.es/0202_2022CVAL0025",
                              attributions: ' ',
                              params: {
                                "LAYERS": "2022CVAL0025_RGB",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto 2022 25cm. RGB Comunitat Valenciana',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofoto202225cmRGBComunitatValenciana_1, 0]);
var lyr_NomencltorToponmicValenciNomencltorToponmicValenciNomencltorToponmicValenci_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://terramapas.icv.gva.es/toponimia_base",
                              attributions: ' ',
                              params: {
                                "LAYERS": "NOMENCLATOR_ICV",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Nomenclàtor Toponímic Valencià | Nomenclàtor Toponímic Valencià | Nomenclàtor Toponímic Valencià',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_NomencltorToponmicValenciNomencltorToponmicValenciNomencltorToponmicValenci_2, 0]);
var format_Cabezo_de_Mariola_3 = new ol.format.GeoJSON();
var features_Cabezo_de_Mariola_3 = format_Cabezo_de_Mariola_3.readFeatures(json_Cabezo_de_Mariola_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cabezo_de_Mariola_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cabezo_de_Mariola_3.addFeatures(features_Cabezo_de_Mariola_3);
var lyr_Cabezo_de_Mariola_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cabezo_de_Mariola_3, 
                style: style_Cabezo_de_Mariola_3,
                popuplayertitle: 'Cabezo_de_Mariola',
                interactive: true,
    title: 'Cabezo_de_Mariola<br />\
    <img src="styles/legend/Cabezo_de_Mariola_3_0.png" /> Cabezo de Mariola<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Ortofoto202225cmRGBComunitatValenciana_1.setVisible(true);lyr_NomencltorToponmicValenciNomencltorToponmicValenciNomencltorToponmicValenci_2.setVisible(true);lyr_Cabezo_de_Mariola_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Ortofoto202225cmRGBComunitatValenciana_1,lyr_NomencltorToponmicValenciNomencltorToponmicValenciNomencltorToponmicValenci_2,lyr_Cabezo_de_Mariola_3];
lyr_Cabezo_de_Mariola_3.set('fieldAliases', {'id': 'id', 'X': 'X', 'Y': 'Y', 'Cultura': 'Cultura', 'Enlace': 'Enlace', 'Imagen': 'Imagen', 'Nombre': 'Nombre', });
lyr_Cabezo_de_Mariola_3.set('fieldImages', {'id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Cultura': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', 'Nombre': 'TextEdit', });
lyr_Cabezo_de_Mariola_3.set('fieldLabels', {'id': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Cultura': 'inline label - visible with data', 'Enlace': 'inline label - visible with data', 'Imagen': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', });
lyr_Cabezo_de_Mariola_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});