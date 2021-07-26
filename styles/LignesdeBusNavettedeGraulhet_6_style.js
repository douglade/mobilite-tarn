var size = 0;
var placement = 'point';
function categories_LignesdeBusNavettedeGraulhet_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '1 SAINT PIERRE - GARE ROUTIERE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(19,157,217,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2 LA BOUSQUETARIE - GARE ROUTIERE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,21,134,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3 PLAINE DE MILLET - GARE ROUTIERE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(29,162,73,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4 LA TRANSVERSALE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(242,113,36,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_LignesdeBusNavettedeGraulhet_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Ligne");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_LignesdeBusNavettedeGraulhet_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
