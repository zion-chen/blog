//get请求
$.ajax({
    type: 'get',
    url: 'https://apis.map.qq.com/ws/location/v1/ip',
    data: {
        key: 'PYUBZ-IMZWJ-22RFM-XCMAC-W4UIS-2JBYR',
        output: 'jsonp',
    },
    dataType: 'jsonp',
    success: function (res) {
        ipLoacation = res;
    }
})
function getDistance(e1, n1, e2, n2) {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
        e *= PI / 180
        n *= PI / 180
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }

    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
}

function showWelcome() {

    let dist = getDistance(114.460188, 38.115084, ipLoacation.result.location.lng, ipLoacation.result.location.lat); //这里换成自己的经纬度
    let pos = ipLoacation.result.ad_info.nation;
    let ip;
    let posdesc;
    //根据国家、省份、城市信息自定义欢迎语
    switch (ipLoacation.result.ad_info.nation) {
        case "日本":
            posdesc = "よろしく，一起去看樱花吗";
            break;
        case "美国":
            posdesc = "Let us live in peace!";
            break;
        case "英国":
            posdesc = "日不落帝国";
            break;
        case "俄罗斯":
            posdesc = "干了这瓶伏特加！";
            break;
        case "法国":
            posdesc = "C'est La Vie";
            break;
        case "德国":
            posdesc = "Die Zeit verging im Fluge.";
            break;
        case "澳大利亚":
            posdesc = "一起去大堡礁吧！";
            break;
        case "加拿大":
            posdesc = "拾起一片枫叶赠予你";
            break;
        case "中国":
            
            switch (ipLoacation.result.ad_info.province) {
                case "北京市":
                case "上海市":
                case "重庆市":
                case "天津市":
                    pos = "中国 " + ipLoacation.result.ad_info.city + " " + ipLoacation.result.ad_info.district;
                    break;
                default:
                    pos = ipLoacation.result.ad_info.province + " " + ipLoacation.result.ad_info.city + " " + ipLoacation.result.ad_info.district;
                    break;
            }
            
            ip = ipLoacation.result.ip;
            switch (ipLoacation.result.ad_info.province) {
                // 华北地区：北京11，天津12，河北13，山西14，内蒙古15，
                case "北京市":
                    posdesc = "东方古都，长城故乡";
                    break;
                case "天津市":
                    posdesc = "近代中国看天津";
                    break;
                case "河北省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "石家庄市":
                            posdesc = "石啊庄";
                            break;
                        default:
                            posdesc = "这么近，那么美，周末到河北";
                            break;
                    }
                    break;
                case "山西省":
                    posdesc = "晋善晋美";
                    break;
                case "内蒙古自治区":
                    posdesc = "祖国正北方，亮丽内蒙古";
                    break;
                // 东北地区：辽宁21，吉林22，黑龙江23
                case "辽宁省":
                    posdesc = "乐游辽宁，不虚此行";
                    break;
                case "吉林省":
                    posdesc = "白山松水，豪爽吉林";
                    break;
                case "黑龙江省":
                    posdesc = "北国好风光，自然黑龙江";
                    break;
                // 华东地区：上海31，江苏32，浙江33，安徽34，福建35，江西36，山东37
                case "上海市":
                    posdesc = "上善若水，海纳百川";
                    break;
                case "江苏省":
                    posdesc = "畅游江苏，感受美好";
                    break;
                case "浙江省":
                    posdesc = "诗面江南，山水浙江";
                    break;
                case "安徽省":
                    posdesc = "美好安徽，迎客天下";
                    break;
                case "福建省":
                    posdesc = "福来福往，自由自在";
                    break;
                case "江西省":
                    posdesc = "江西风景独好";
                    break;
                case "山东省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "聊城市":
                            posdesc = "江北水城，运河聊城";
                            break;
                        default:
                            posdesc = "浩克山东欢迎您";
                            break;
                    }
                    break;
                // 中南地区：河南41，湖北42，湖南43，广东44，广西45，海南46
                case "河南省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "郑州市":
                            posdesc = "中国铁路大枢纽唯一真神";
                            break;
                        default:
                            posdesc = "心灵故乡，老家河南";
                            break;
                    }
                    break;
                case "湖北省":
                    posdesc = "灵秀湖北欢迎您";
                    break;
                case "湖南省":
                    posdesc = "锦绣潇湘，伟人故里";
                    break;
                case "广东省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "广州市":
                            posdesc = "食咗饭未啊";
                            break;
                        default:
                            posdesc = "活力广东，心悦之旅";
                            break;
                    }
                    break;
                case "广西壮族自治区":
                    posdesc = "遍行天下，心仪广西";
                    break;
                case "海南省":
                    posdesc = "阳光海南，度假天堂";
                    break;
                // 西南地区：重庆50，四川51，贵州52，云南53，西藏54
                case "重庆市":
                    posdesc = "行千里 致广大 千里为重 广大为庆";
                    break;
                case "四川省":
                    posdesc = "天府四川，熊猫故乡";
                    break;
                case "贵州省":
                    posdesc = "走遍大地神州，醉美多彩贵州";
                    break;
                case "云南省":
                    posdesc = "七彩云南，旅游天堂";
                    break;
                case "西藏自治区":
                    posdesc = "世界屋脊，神奇西藏";
                    break;
                // 西北地区：陕西61，甘肃62，青海63，宁夏64，新疆65
                case "陕西省":
                    posdesc = "山水人文，大美陕西";
                    break;
                case "甘肃省":
                    posdesc = "精品丝路，绚丽甘肃";
                    break;
                case "青海省":
                    posdesc = "大美青海欢迎您";
                    break;
                case "宁夏回族自治区":
                    posdesc = "塞上江南，神奇宁夏";
                    break;
                case "新疆维吾尔自治区":
                    posdesc = "传奇丝路，大美新疆";
                    break;
                // 特别行政区
                case "台湾省":
                    posdesc = "亚洲心脏，the heart of asia";
                    break;
                case "香港特别行政区":
                    posdesc = "我在香港，找回本色";
                    break;
                case "澳门特别行政区":
                    posdesc = "感受澳门，动容时刻";
                    break;
                default:
                    posdesc = "带我去你的城市逛逛吧！";
                    break;
            }
            break;
        default:
            posdesc = "带我去你的国家逛逛吧";
            break;
    }

    //根据本地时间切换欢迎语
    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span class='welcome-time'>🌤️ 早上好，一日之计在于晨</span>";
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span class='welcome-time'>☀️ 中午好，吃完午饭记得午休</span>";
    else if (date.getHours() >= 13 && date.getHours() < 17) timeChange = "<span class='welcome-time'>🕞 下午好，点杯奶茶喝下吧</span>";
    else if (date.getHours() >= 17 && date.getHours() < 19) timeChange = "<span class='welcome-time'>🚶‍♂️ 傍晚好，晚上吃啥好吃的了？</span>";
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span class='welcome-time'>🌙 晚上好，这一天过的开心吗？</span>";
    else timeChange = "<span class='welcome-time'>🛌 该睡觉了，早点休息，少熬夜</span>";

    try {
        //自定义文本和需要放的位置
        document.getElementById("welcome-info").innerHTML =
            `<span>你现在位于</span><br><span><span style="color: var(--welcome-card-color);font-weight: bold;">${pos}</span></span><br><span class="welcome-message">${posdesc}</span><br>你现在距离我约 <b><span style="color: var(--welcome-card-color);font-weight: bold;">${dist}</span></b> 公里！<br><span>你的IP地址为：${ip}</span><br>${timeChange}`;
    } catch (err) {
        // console.log("Pjax无法获取#welcome-info元素🙄🙄🙄")
    }
}
window.onload = showWelcome;
// 如果使用了pjax在加上下面这行代码
document.addEventListener('pjax:complete', showWelcome);