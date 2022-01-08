var ctrlBtn = document.getElementById('ctrlBtn');
var crtStepBtn = document.getElementById('crtStepBtn');
var spaceInp = document.getElementById('spaceInp');
var stepRotate = document.getElementById('stepRotate');
var stepRotateBox = document.getElementById('stepRotateBox');
var stepRotateValue = document.getElementById('stepRotateValue');//引用对象
/**加载地图*/
var map = new AMap.Map("app", {
    resizeEnable: true,
    zooms: [4,22],                            
    zoom: 18,
    center: [116.400274, 39.905812]
});
/**加载地图控件 */
AMap.plugin([
    'AMap.ToolBar',
    'AMap.Scale',
    'AMap.MapType',
    'AMap.Geolocation',
], function(){
    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    map.addControl(new AMap.ToolBar());

    // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
    map.addControl(new AMap.Scale());

    // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    map.addControl(new AMap.MapType());
   
    // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
    map.addControl(new AMap.Geolocation());
});
var state = {
    isReadyDrawPolygon: false,
    isBeginDraw: false
}


/**绘制折线 */
var polygon = {
    layer: new AMap.Polygon({
        map: map,
        strokeColor: '#f00',
        fillColor: '#f5f5f5',
        strokeWeight: 1,
        fillOpacity: 0.5,
        strokeOpacity: 1
    }),
    latlngs: [],
};//这个是路径规划区域的边框
var polyline = {
    layer: new AMap.Polyline({
        map: map,
        showDir:true,
        strokeColor: '#0f0',
        strokeWeight: 4,
        strokeOpacity: 1
    }),
    latlngs: []
}//这个是规定区域边框下规划出来的路径


cpRPA.setDistanceFn(distance);
cpRPA.setLatlng2PxFn(latlng2Px);
cpRPA.setPx2LatlngFn(px2Latlng);//cpRPA.min调用这里的函数


stepRotate.addEventListener('change', function() {
    stepRotateValue.innerText = this.value;
});
stepRotate.addEventListener('input', function() {
    stepRotateValue.innerText = this.value;
    renderPolyline();
})//用于旋转

ctrlBtn.addEventListener('click', function() {
    state.isReadyDrawPolygon = !state.isReadyDrawPolygon;
    if (state.isReadyDrawPolygon) {
        this.innerText = "清除"
        map.add([polygon.layer, polyline.layer,passedPolyline.layer]);
    } else {
        this.innerText = "绘制凸多边形地块"
        initDraw();//清除和绘制路径
    }
});

crtStepBtn.addEventListener('click', function() {
    renderPolyline();
    startAnimation ();
})//链接按钮，对应旋转的功能  





map.on('click', function(e) {
    if (state.isReadyDrawPolygon) {
        polygon.latlngs.push(e.lnglat);
        polygon.layer.setPath(polygon.latlngs);
    }
    if (polygon.latlngs.length > 2) {
        crtStepBtn.className = spaceInp.className = stepRotateBox.className = "";
    }
});//把鼠标点击的点，即凸多边形的顶点的经纬度放到polygon.latlngs数组里

function initDraw() {
    polygon.latlngs = [];
    polygon.layer.setPath(polygon.latlngs);
    polyline.latlngs = [];
    polyline.layer.setPath(polyline.latlngs);
    //polyline.latlngs = [];
    //passedPolyline.layer.setPath(polyline.latlngs);
    crtStepBtn.className = spaceInp.className = stepRotateBox.className = "hide";
}//绘制边框线和航线

//由旁向重叠率计算相邻航线的间距 
function OverlapRate() {
    p=parseFloat(spaceInp.value)*0.01;
    var H,D,a=90,f=0.05,G=0.2,b=0.00009;//D为相邻航线间距，H为飞行高度,p为旁向重叠率，a为横向视场角，f为相机焦距，G为地面分辨率，b为像元尺
    H=(f*G)/b;
    D=(1-p)*2*h*tan(0.5*a);
    return 0.5*D       //这里可能有点问题，飞行间隔不知道是D还是0.5D 
}
/*var marker,lineArr = mapLatlng2Apoint( polyline.latlngs = cpRPA.setOptions({
    polygon: polygon.latlngs,
    rotate: parseFloat(stepRotate.value) || 0,
    space: parseFloat(spaceInp.value) || 5
}));*/
//使得以走过路径和原有路径区分开
//map.setFitView();
//function startAnimation () {
   // marker.moveAlong(lineArr, 200);
//}
var passedPolyline ={
    layer: new AMap.Polyline({
    map: map,
    strokeColor: "#AF5",
    strokeWeight: 2,
}),
     latlngs: []
}//动画中的重复路径

marker = new AMap.Marker({
    map: map,
    position: [116.400274, 39.905812],
    icon: "../airplane.jpg",
    offset: new AMap.Pixel(-26, -13),
    autoRotation: true,
    angle:0,
});
marker.on('moving', function (e) {
    polyline.latlngs = [];
    passedPolyline.layer.setPath(polyline.latlngs);
});
function startAnimation () {
    polyline.latlngs = cpRPA.setOptions({
        polygon: polygon.latlngs,
        rotate: parseFloat(stepRotate.value) || 0,
        space: parseFloat(spaceInp.value) || 5
    });
    lineArr = mapLatlng2Apoint(polyline.latlngs);
    marker.moveAlong(lineArr, 400);
    crtStepBtn.className = 'hide';
}

function renderPolyline() {
    polyline.latlngs = cpRPA.setOptions({
        polygon: polygon.latlngs,
        rotate: parseFloat(stepRotate.value) || 0,
        space: parseFloat(spaceInp.value) || 5
    });
    polyline.layer.setPath(
        mapLatlng2Apoint(polyline.latlngs)
    )
}

function mapLatlng2Apoint(arr) {
    var a = [];
    for (var i = 0; i < arr.length; i++) {
        a.push(new AMap.LngLat(arr[i].lng, arr[i].lat));
    }
    return a
}


function distance(p1, p2) {
    return new AMap.LngLat(p1.lng, p1.lat).distance(new AMap.LngLat(p2.lng, p2.lat))
}//高德地图计算两点之间距离函数

function latlng2Px(latlng) {
    return map.lngLatToContainer(new AMap.LngLat(latlng.lng, latlng.lat))
}//经纬度转地图像素坐标

function px2Latlng(px) {
    return map.containerToLngLat(new AMap.Pixel(px[0], px[1]))
}//地图像素转地图像素坐标