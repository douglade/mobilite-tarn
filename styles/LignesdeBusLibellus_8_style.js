var size = 0;
var placement = 'point';
function categories_LignesdeBusLibellus_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'LIBELLUS Chrono':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(226,0,26,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '1 AILLOT - BISSEOUS - CHARTREUSE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,110,43,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2 MILLAUD - CAPELINE - BORDE BASSE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,196,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3 CAPELANIE - LAMEILHE - BORDE BASSE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,105,9,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4 LAMEILHE - CHARTREUSE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,176,17,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '5 BISSEOUS - AILLOT - SERCLOISE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,158,224,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '6 COPORAL - ROULANDOU':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,83,160,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '7 CASTRES - LAGARRIGUE - VALDURENQUE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(241,159,193,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '8 MAZAMET':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(226,0,26,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '9 AUSSILLON':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(91,12,12,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '10 CASTRES - HOPITAL - MAZAMET':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,0,123,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_LignesdeBusLibellus_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Destinatio");
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
    
var style = categories_LignesdeBusLibellus_8(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
