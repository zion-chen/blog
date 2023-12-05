---
title: Butterfly主题美化记录
date: 2023-07-18 21:45:11
tags: 
  - Butterfly
  - Hexo
categories: 博客搭建
description: 记录一下对Butterfly主题的改造方案，方便今后主题升级
cover: https://pic.imgdb.cn/item/656af6b9c458853aef130eae.jpg
---
## 前言
选用 `Butterfly` 主题主要也是因为国内使用者很多，网络上有非常多的魔改美化教程。本文用来记录个人网站的美化方案，尤其是涉及到更改主题源码的部分，方便今后主题升级。
## 引入自定义css和js文件
引入自定义css和js文件可以对博客原本的样式进行修改，是一切美化步骤的基础。
1. 创建 `[blogRoot]/source/css/custom.css` 文件，在 `custom.css` 文件中写入css样式。
2. 创建 `[blogRoot]/source/css/script.js` 文件，在 `script.js` 文件中写入js代码。
3. 在主题配置文件 `_config.butterfly.yml` 中引入 `custom.css` 文件和 `script.js` 文件：
```yml
inject:
  head:
    # - <link rel="stylesheet" href="/xxx.css">
    # 其中 media="defer" onload="this.media='all'" 是异步加载配置项，确保自定义样式会在页面加载完成后才继续渲染。
    - <link rel="stylesheet" href="/css/custom.css" media="defer" onload="this.media='all'">
  bottom:
    # - <script src="xxxx"></script>
    - <script src="/js/script.js"></script>
```
## 全局字体修改
1. 创建 `[blogRoot]/source/fonts` 文件夹，将下载好的字体文件放入此文件夹。
2. 创建 `[blogRoot]/source/css/font.css` 文件，将字体信息引入。
```css
@font-face{
    font-family: 'SmileySans-Oblique';
    font-display: swap;
    src: url('../fonts/SmileySans-Oblique.ttf') format("truetype");
}

@font-face{
    font-family: 'DongFangDaKai';
    font-display: swap;
    /* unicode-range: U+4E00-9FA5; */
    src: url('../fonts/Alimama_DongFangDaKai_Regular.ttf') format("truetype");
}

@font-face{
    font-family: 'SanJiYuanTiJian';
    font-display: swap;
    src: url('../fonts/SanJiYuanTiJian-Cu-2.ttf') format("truetype");
}

@font-face{
    font-family: 'FiraCode';
    font-display: swap;
    src: url('../fonts/FiraCode-Regular.ttf') format("truetype");
}
```
3. 在主题配置文件 `_config.butterfly.yml` 中修改如下配置项，配置标题字体、正文字体、代码块字体
```yml
# Global font settings
# Don't modify the following settings unless you know how they work (非必要不要修改)
font:
  global-font-size: 17px
  code-font-size: 15px
  font-family: SanJiYuanTiJian, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Lato, Roboto, "PingFang SC", "Microsoft YaHei", "Microsoft JhengHei", sans-serif
  code-font-family: Cascadia Mono, consolas, Menlo, "PingFang SC", "Microsoft YaHei", "Microsoft JhengHei", sans-serif

# Font settings for the site title and site subtitle
# 左上角網站名字 主頁居中網站名字
blog_title_font: 
  font_link:
  font-family: DongFangDaKai, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Lato, Roboto, "PingFang SC", "Microsoft JhengHei", "Microsoft YaHei", sans-serif
```
## 网站背景一图流
{% note info modern %}
此部分参考文章：{% link 博客背景使用一图流-QianChengGit の小森林 https://qianchenggit.github.io/2021/10/06/%E5%8D%9A%E5%AE%A2%E8%83%8C%E6%99%AF%E4%BD%BF%E7%94%A8%E4%B8%80%E5%9B%BE%E6%B5%81/ %} 
{% endnote %}
### 去除博客背景配置
1. 在主题配置文件 `_config.butterfly.yml` 中修改如下配置项，去除网站背景
```yml
# Disable all banner image
disable_top_img: false

# The banner image of home page
index_img: 

# If the banner of page not setting, it will show the top_img
default_top_img: transparent

# The banner image of archive page
archive_img:

# If the banner of tag page not setting, it will show the top_img
# note: tag page, not tags page (子標籤頁面的 top_img)
tag_img:

# The banner image of tag page
# format:
#  - tag name: xxxxx
tag_per_img:

# If the banner of category page not setting, it will show the top_img
# note: category page, not categories page (子分類頁面的 top_img)
category_img:

# The banner image of category page
# format:
#  - category name: xxxxx
category_per_img:

```
2. 在主题配置文件 `_config.butterfly.yml` 中修改如下配置项，将网站背景 `background` 设置为自己的背景图url，将页脚背景 `footer_bg` 设置为透明。
```yml
# Website Background (設置網站背景)
# can set it to color or image (可設置圖片 或者 顔色)
# The formal of image: url(http://xxxxxx.com/xxx.jpg)
background: url(https://pic.imgdb.cn/item/64a025d81ddac507cc20e93e.png)

# Footer Background
footer_bg: transparent

```
### 修改css样式
在 `custom.css` 文件中加入以下代码。
其中，日间模式卡片背景色透明度设置为 `0.9` ，夜间模式卡片背景透明度设置为为 `0.5`。
```css
/* 首页文章卡片 */
#recent-posts > .recent-post-item{
    background:rgba(255, 255, 255, 0.95);
  }
  /* 首页侧栏卡片 */
  .card-widget{
  background:rgba(255, 255, 255, 0.95)!important;
  }
  /* 文章页面正文背景 */
  div#post{
  background: rgba(255, 255, 255, 0.95);
  }
  /* 分页页面 */
  div#page{
  background: rgba(255, 255, 255, 0.95);
  }
  /* 归档页面 */
  div#archive{
  background: rgba(255, 255, 255, 0.95);
  }
  /* 标签页面 */
  div#tag{
  background: rgba(255, 255, 255, 0.95);
  }
  /* 分类页面 */
  div#category{
  background: rgba(255, 255, 255, 0.95);
  }
  
  /* 页脚透明 */
  #footer{
    background: transparent!important;
  }
  /* 头图透明 */
  #page-header{
    background: transparent!important;
  }
  /*白天模式伪类遮罩层透明*/
  [data-theme="light"]
    #footer::before{
        background: transparent!important;
      }
  /*夜间模式伪类遮罩层透明*/
  [data-theme="dark"]
    #footer::before{
        background: transparent!important;
      }
  [data-theme="dark"]
    #page-header::before{
      background: transparent!important;
      }
  /*夜间模式页面背景设置为半透明*/
  [data-theme="dark"]
    div.recent-post-item{
        background: rgba(0, 0, 0, 0.5)!important;
      }
  [data-theme="dark"]
    #aside-content .card-widget{
        background: rgba(0, 0, 0, 0.5)!important;
      }
  [data-theme="dark"]
    div#post{
      background: rgba(0, 0, 0, 0.5)!important;
      }
  [data-theme="dark"]
    div#page{
      background: rgba(0, 0, 0, 0.5)!important;
      }
  [data-theme="dark"]
    div#archive{
      background: rgba(0, 0, 0, 0.5)!important;
      }
  [data-theme="dark"]
    div#tag{
      background: rgba(0, 0, 0, 0.5)!important;
    }
  [data-theme="dark"]
    div#category{
      background: rgba(0, 0, 0, 0.5)!important;
    }
    
  /*阅读模式*/
  .read-mode #aside-content .card-widget{
        background: rgba(158, 204, 171, 0.5)!important;
      }
  .read-mode div#post{
      background: rgba(158, 204, 171, 0.5)!important;
      }
  /*夜间阅读模式*/
  [data-theme="dark"]
    .read-mode #aside-content .card-widget{
          background: rgba(0, 0, 0, 0.5)!important;
          color: #eeeeee;
        }
  [data-theme="dark"]  
    .read-mode div#post{
        background: rgba(0, 0, 0, 0.5)!important;
        color: #eeeeee;
        }
```
## 上一篇下一篇按钮美化
{% note danger modern %}
已知bug：~~IOS端点击按钮后圆角效果短暂失效~~（已修改）
{% endnote %}
在 `custom.css` 文件中加入以下代码：
```css
/* 上一篇下一篇圆角，背景色 */
#pagination.pagination-post {
  border-radius: 20px;
  background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
}

:root {
  --default-bg-color: rgb(0, 0, 0, 0.3);
}
```
## 各种卡片圆角美化
{% note info modern %}
此部分参考文章：{% link Butterfly主题魔改美化-贰点伍-Blog by Eacls https://www.eacls.top/posts/da3e1e9b/ %} 
{% endnote %}
在 `custom.css` 文件中加入以下代码：
```css
/*个人信息按钮圆角，按钮背景颜色渐变过渡*/
#card-info-btn {
  background: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%);
  background-size: 140%;
  transition: background-position .5s;
  border-radius: 25px;
  overflow: hidden;
}

#card-info-btn:hover {
  background-position: 100% 0;
}

/*页码按钮美化*/
.layout>.recent-posts .pagination> {
  display: inline-block;
  margin: 0 6px;
  width: 2.5em;
  height: 2.5em;
  line-height: 2.5em;
}

/*页码按钮圆角*/
#pagination .page-number.current {
    border-radius: 7px;
}

/*文章卡片圆角*/
.layout > div:first-child:not(.recent-posts) {
  border-radius: 35px;
}

/*目录卡片圆角*/
#aside-content .card-widget {
  border-radius: 20px;
}

#aside-content #card-toc .toc-content .toc-link.active {
  background: #475D90;
  border-radius: 10px;
}

/*首页文章圆角*/
.layout > .recent-posts > .recent-post-item {
  border-radius: 20px !important
}

/*图片圆角*/
#article-container img {
  border-radius: 15px;
}

/*个人信息美化*/
#aside-content>.card-widget.card-info {
  /* background: #fff url(https://www.eacls.top/img/info.webp) top 18% center no-repeat !important; */
  position: relative;
}
#aside-content .card-info .site-data {
  display: none;
}

.site-data > a .headline {
  color: rgb(0 0 0 / 100%);
}
```
## 访客位置信息
{% note info modern %}
此部分参考文章：{% link Butterfly的魔改教程：个性定位信息-MeuiCat https://meuicat.com/blog/57/index.html %} 
{% endnote %}
### 数据支持
1. 进入 {% link 腾讯位置服务 https://lbs.qq.com/dev/console/application/mine %} 应用管理界面
2. 点击 `创建应用` ，应用名称和类型随便填
3. 在新创建的应用中点击添加 `key` ，产品选择 `WebServiceAPI` ，域名白名单不填
4. 把得到的 `key` 记下
5. 在主题配置文件 `_config.butterfly.yml` 中引入 `jquery.min.js`：
```yml
inject:
  head:
    - ···
  bottom:
    - <script type="text/javascript" src="https://unpkg.zhimg.com/jquery@latest/dist/jquery.min.js"></script> # 腾讯地图定位 - 定制化JS

```
### 创建数据
1. 创建 `[blogRoot]/source/js/txmap.js` 文件，并加入以下代码：
```js
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
```
2. 在主题配置文件 `_config.butterfly.yml` 中引入 `txmap.js`：
```yml
inject:
  head:
    - ···
  bottom:
    - <script async data-pjax src="/js/txmap.js"></script> # 腾讯地图定位 - API
```
### 新增自定义侧边栏
修改 `[blogRoot]/source/_data/widget.yml` 文件，新增 `name` `icon` `html` 项的内容：
```yml
top:
  - class_name:
    id_name:
    name: 你在哪里呢？
    icon: fa-sharp fa-solid fa-location-dot
    html: <div id="welcome-info"></div>
```
### 修改样式
在 `custom.css` 文件中加入以下代码：
```css
/* 访客位置信息 */
#welcome-info {
  overflow: hidden;
  --welcome-card-color: #475D90;
}

#welcome-info .welcome-time {
  width: 100%;
  margin: 12px 0 0;
  display: inline-flex;
}

#welcome-info .welcome-message {
  width: 100%;
  margin-bottom: 8px;
  display: inline-flex;
}
```
## 全局吸底音乐播放器
{% note info modern %}
此部分参考文章：
1.{% link Hexo-Butterfly音乐播放器的添加-GuoDong の Blog https://www.guodongblog.com/posts/91597d56b19f/ %}
2.{% link Butterfly主题Aplayer播放器的美化与调整-阿定の小站 https://blog.saop.cc/p/8dc9/ %}
{% endnote %}
### 安装插件
在博客根目录下执行以下指令：
```bash
npm install --save hexo-tag-aplayer
```
### 修改配置文件
1. 在Hexo配置文件 `_config.yml` 中修改如下配置项，开启 `aplayer`。
```yml
aplayer:
  meting: true
  asset_inject: false
```
2. 在主题配置文件 `_config.butterfly.yml` 中修改如下配置项，开启 `aplayerInject`。
```yml
# Inject the css and script (aplayer/meting)
aplayerInject:
  enable: true
  per_page: true
```
3. 在主题配置文件 `_config.butterfly.yml` 中引入如下 `HTML` 代码：
```yml
inject:
  head:
  bottom:
    - <div class="aplayer no-destroy" data-id="8546473026" data-server="netease" data-type="playlist" data-fixed="true" data-autoplay="true" data-lrcType="-1" data-order="random"> </div>
```
### 修改样式
在 `custom.css` 文件中加入以下代码：
```css
/* 全局吸底播放器 */
/* Aplayer日间模式调整 */
/* 背景色 */
.aplayer {
  background: rgba(255, 255, 255, 0.9) !important;
  border-radius: 10px 10px 0 0 !important;
  font-family: SanJiYuanTiJian, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Lato, Roboto, "PingFang SC", "Microsoft JhengHei", "Microsoft YaHei", sans-serif !important;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  position: relative;
}

.aplayer.aplayer-fixed .aplayer-lrc:after,
.aplayer.aplayer-fixed .aplayer-lrc:before {
  display: none;
}

.aplayer.aplayer.aplayer-fixed .aplayer-body {
  background: rgba(255, 255, 255, 0.9) !important;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
}

/* 圆角 */
.aplayer.aplayer-fixed .aplayer-list {
  border-radius: 10px 10px 0 0 !important;
}

.aplayer.aplayer-fixed .aplayer-miniswitcher {
  border-radius: 0 10px 10px 0 !important;
}

.aplayer.aplayer-fixed.aplayer-narrow .aplayer-body {
  transition: 0.28s !important;
  border-radius: 10px !important;
}

/* 选中与播放中歌曲激活颜色 */
.aplayer .aplayer-list ol li:hover {
  background: rgb(230, 103, 103, 0.9) !important;
}

.aplayer .aplayer-list ol li.aplayer-list-light {
  background: rgb(230, 103, 103, 0.9) !important;
}

/* 歌词 */
.aplayer-lrc p {
  color: #ffffff !important;
  text-shadow: #000000 1px 0 0, #000000 0 1px 0, #000000 -1px 0 0, #000000
      0 -1px 0 !important;
}

/* Aplayer黑暗模式 */
[data-theme="dark"] .aplayer {
  background: rgba(22, 22, 22, 0.5) !important;
  color: rgb(255, 255, 255);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .aplayer.aplayer-fixed .aplayer-body {
  background: rgba(22, 22, 22, 0.5) !important;
  color: rgb(255, 255, 255);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
}

[data-theme="dark"]
  .aplayer
  .aplayer-info
  .aplayer-controller
  .aplayer-time
  .aplayer-icon
  path {
  fill: #d4d4d4;
}

[data-theme="dark"] .aplayer .aplayer-list ol li:hover {
  background: rgb(230, 103, 103, 0.6) !important;
}

[data-theme="dark"] .aplayer .aplayer-list ol li.aplayer-list-light {
  background: rgb(230, 103, 103, 0.6) !important;
}

[data-theme="dark"] .aplayer .aplayer-info .aplayer-controller .aplayer-time {
  color: #d4d4d4;
}

[data-theme="dark"] .aplayer .aplayer-list ol li .aplayer-list-index {
  color: #d4d4d4;
}

[data-theme="dark"] .aplayer .aplayer-list ol li .aplayer-list-author {
  color: #d4d4d4;
}

/* Width的值可根据喜好调整（屏幕的宽度） */
@media (max-width: 960px) {
  /* Aplayer音乐标签伸缩 */
  .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body {
    left: -66px !important;
    /* 默认情况下缩进左侧66px，只留一点箭头部分 */
  }

  .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body:hover {
    left: 0 !important;
    /* 鼠标悬停是左侧缩进归零，完全显示按钮 */
  }
}
```
## 博客运行时间
{% note info modern %}
此部分参考文章：{% link 博客底部运行时间-Leonus https://blog.leonus.cn/2022/footer.html %} 
{% endnote %}
1. 在主题配置文件 `_config.butterfly.yml` 中修改页脚配置 `footer` 中的 `custom_text` 内容。
```yml
footer:
  owner:
    enable: true
    since: 2023
  custom_text: <div id="runtime"></div>
  copyright: true # Copyright of theme and framework
```
2. 在 `script.js` 文件中加入以下代码：
```js
setInterval(() => {
    // let create_time = Math.round(new Date('2021-10-15 00:00:00').getTime() / 1000); //在此行修改建站时间
    // 有苹果用户发现safari浏览器不能正常运行，百度了一下发现是格式化的问题，改成下面这种应该就可以了。感谢反馈。
    let create_time = Math.round(new Date('2023/6/3 12:46:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);

    var nol = function(h) {
        return h > 9 ? h : '0' + h;
    }
    if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = nol(parseInt(second / 3600));
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = nol(parseInt(second / 60));
        second %= 60;
    }
    if (second >= 0) {
        time[4] = nol(second);
    }
    let currentTimeHtml = "本站已运行 "
    if (time[0] != 0) {
        currentTimeHtml += time[0] + ' 年 '
    }
    currentTimeHtml += time[1] + ' 天 ' + time[2] + ' 小时 ' + time[3] + ' 分 ' + time[4] + ' 秒';
    document.getElementById("runtime").innerHTML = currentTimeHtml;
}, 1000);
```
3. 在 `custom.css` 文件中加入以下代码：
```css
/* 底部运行时间样式 */
div#runtime {
  margin: 10px auto;
  width: fit-content;
  color: #fff;
  font-family: 'DongFangDaKai';
  padding: 0 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
}

[data-theme="dark"] div#runtime {
  color: rgb(230, 103, 103, 0.9);
  box-shadow: 0 0 5px rgba(28, 69, 218, 0.71);
}
```
## 藏宝阁页面
{% note info modern %}
此部分参考文章：{% link 藏宝阁页面的实现-Leonus https://blog.leonus.cn/2023/collectPage.html %} 
{% endnote %}
考虑到移动端无法直接显示导航栏，我就把 `关于我` 页面写到 `藏宝阁` 页面里了，并没有采用标签外挂是因为样式不是很满意。
### 修改源码
1. 修改 `page.pug`
在 `[blogRoot]/node_modules/hexo-theme-butterfly/layout/page.pug` 中加入以下代码：
```js
when 'tags'
  include includes/page/tags.pug
when 'link'
  include includes/page/flink.pug
when 'categories'
  include includes/page/categories.pug
//- 新增 collect 页面
when 'collect'
  include includes/page/collect.pug
default
  include includes/page/default-page.pug
```
2. 新建 `collect.pug`
在 `[blogRoot]/node_modules/hexo-theme-butterfly/layout/includes/page` 下新建 `collect.pug` 文件并加入以下代码：
```js
#article-container
  .collect
    - let collectPageContent = page.content
    if site.data.collect
      - let result = ""
      each i in site.data.collect
        - let className = i.class_name ? `<h2 ${i.class_desc?'':'style="margin-bottom:12px"'}>${i.class_name} (${i.link_list.length})</h2>` : ""
        - let classDesc = i.class_desc ? `<div class="collect-desc">${i.class_desc}</div>` : ""
        - let listResult = ""
        each j in i.link_list
          - 
            listResult += `
              <div title="${j.name}" referrerPolicy="no-referrer" class="collect_box" style="${j.img?`background-image: url(${j.img})`:'background-color: #333;'}">
                  <div class="collect_top">
                    <i class="${j.icon?j.icon:'fa-solid fa-film'}"></i>
                    <span>${j.tip?j.tip:'电影'}</span>
                  </div>
                  <div class="collect_content">
                    <span>${j.name?j.name:'未知'}</span>
                    <div>${j.score?toStar(j.score):toStar(0)}</div>
                  </div>
                </div>
              `
          -
        - result += `${className}${classDesc} <div class="collect-list">${listResult}</div>`
      - collectPageContent = collectPageContent + result
    != collectPageContent
```
3. 新建 `collect.styl`
在 `[blogRoot]/node_modules/hexo-theme-butterfly/source/css/_page` 下新建 `collect.styl` 文件并加入以下代码：
```styl
.collect
  h2
    margin-bottom: 0
  .collect-desc
    margin-bottom: 10px
  .collect-list
    display: flex
    gap: 18px
    flex-wrap: wrap
    .collect_box
      --w: calc(100% / 4 - 15px)
      width: var(--w)
      display: flex
      justify-content: space-between
      flex-direction: column
      background-position: center
      background-size: cover
      border-radius: 20px
      position: relative
      overflow: hidden
      padding: 10px
      color: #fff
      transition: .5s
      &::after
        content: ''
        position: absolute
        height: 100%
        width: 100%
        left: 0
        top: 0
        background: rgba(0,0,0,0.3)
        z-index: 0
        transition: .5s
      &:hover
        transform: translateY(-10px)
        &::after
          background: rgba(0,0,0,0.1)
      .collect_top
        display: flex
        z-index: 1
        align-items: center
        justify-content: space-between
      .collect_content
        z-index: 1
        margin-top: 86%
        span
          display: block
          font-size: 18px
          font-weight: bold
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis

[data-theme='dark']
  .collect .collect-list .collect_box
    color: #ddd !important
    &:hover
      transform: translateY(-10px)
      &::after
        background: rgba(0,0,0,0.2)
    &::after
      background: rgba(0,0,0,0.5)
.collect .collect-list
  @media screen and (max-width: 1100px)
    gap: 15px
    .collect_box
      --w: calc(20% - 12px)
  @media screen and (max-width: 900px)
    gap: 16px
    .collect_box
      --w: calc(25% - 12px)
  @media screen and (max-width: 768px)
    gap: 15px
    .collect_box
      --w: calc(100% / 3 - 10px)
  @media screen and (max-width: 500px)
    gap: 16px
    .collect_box
      --w: calc(50% - 8px)
```
4. 添加辅助函数
在 `[blogRoot]/node_modules/hexo-theme-butterfly/scripts/helpers/page.js` 的合适位置加入以下代码：
```js
// 藏宝阁星星
hexo.extend.helper.register('toStar', function(num) {
    let tmp = ''
    for (let i = 0; i < Math.floor(num); i++) { tmp += '<i class="fa-solid fa-star"></i>' } // 整数部分加 实心星星
    if (num - Math.floor(num) != 0) tmp += '<i class="fa-solid fa-star-half-alt"></i>' // 小数部分转成 半星
    for (let i = 0; i < 5 - Math.ceil(num); i++) { tmp += '<i class="fa-regular fa-star"></i>' } // 不够5个补 空心星星
    return tmp
})
```
### 新增页面和数据源
1. 新建 `collect` 页面
在博客根目录执行以下指令：
```bash
hexo n page collect
```
2. 新建 `collect.yml`
在 `[blogRoot]/source/_data` 下面新建 `collect.yml` ，格式如下：
```yml
- class_name: 🍉 动漫
  class_desc: #分类描述
  link_list:
    - name: 古见同学有交流障碍症 #名字
      img: https://pic.imgdb.cn/item/64b2b7941ddac507ccbc4f12.jpg #图片链接
      score: 5 # 1-5星
      icon: fa-brands fa-bilibili #左上角图标
      tip: 日漫 # 右上角文字
```
## 网站加载动画
{% note info modern %}
此部分参考文章：{% link Heo同款loading动画-安知鱼 https://blog.anheyu.com/posts/52d8.html#6d1fdae9e3b643d1a6e27513756baf91 %} 
{% endnote %}
### 修改源码
1. 修改 `[blogRoot]/node_modules/hexo-theme-butterfly/layout/includes/loading/fullpage-loading.pug`
```js
#loading-box(onclick='document.getElementById("loading-box").classList.add("loaded")')
  .loading-bg
    div.loading-img
    .loading-image-dot

script.
  const preloader = {
    endLoading: () => {
      document.body.style.overflow = 'auto';
      document.getElementById('loading-box').classList.add("loaded")
    },
    initLoading: () => {
      document.body.style.overflow = '';
      document.getElementById('loading-box').classList.remove("loaded")

    }
  }
  window.addEventListener('load',()=> { preloader.endLoading() })

  if (!{theme.pjax && theme.pjax.enable}) {
    document.addEventListener('pjax:send', () => { preloader.initLoading() })
    document.addEventListener('pjax:complete', () => { preloader.endLoading() })
  }
```
2. 修改 `[blogRoot]/node_modules/hexo-theme-butterfly/layout/includes/loading/index.pug`
```js
if theme.preloader.source === 1
  include ./fullpage-loading.pug
else if theme.preloader.source === 2
  include ./pace.pug
else
  include ./fullpage-loading.pug
  include ./pace.pug
```
3. 修改 `[blogRoot]/node_modules/hexo-theme-butterfly/source/css/_layout/loading.styl`
```styl
if hexo-config('preloader')
  .loading-bg
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #fff;
    z-index: 1001;
    opacity: 1;
    transition: .3s;

  #loading-box
    .loading-img
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: auto;
      border: 4px solid #f0f0f2;
      animation-duration: .3s;
      animation-name: loadingAction;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    .loading-image-dot
      width: 30px;
      height: 30px;
      background: #6bdf8f;
      position: absolute;
      border-radius: 50%;
      border: 6px solid #fff;
      top: 50%;
      left: 50%;
      transform: translate(18px, 24px);
    &.loaded
      .loading-bg
        opacity: 0;
        z-index: -1000;

  @keyframes loadingAction
    0% {
        opacity: 1;
    }

    100% {
        opacity: .4;
    }
```
### 修改样式
1. 新建 `[blogRoot]/source/css/progress_bar.css` 并加入以下代码：
```css
.pace {
  -webkit-pointer-events: none;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  z-index: 2000;
  position: fixed;
  margin: auto;
  top: 10px;
  left: 0;
  right: 0;
  height: 8px;
  border-radius: 8px;
  width: 4rem;
  background: #eaecf2;
  border: 1px #e3e8f7;
  overflow: hidden;
}

.pace-inactive .pace-progress {
  opacity: 0;
  transition: 0.3s ease-in;
}

.pace .pace-progress {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  max-width: 200px;
  position: absolute;
  z-index: 2000;
  display: block;
  top: 0;
  right: 100%;
  height: 100%;
  width: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  animation: gradient 1.5s ease infinite;
  background-size: 200%;
}

.pace.pace-inactive {
  opacity: 0;
  transition: 0.3s;
  top: -8px;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```
2. 在 `custom.css` 文件中加入以下代码：
```css
/* 加载动画 */
.loading-img {
  background: url(https://pic.imgdb.cn/item/64ac12ac1ddac507cc4a66b8.jpg) no-repeat center center;
  background-size: cover;
}
```
### 修改配置
在主题配置文件 `_config.butterfly.yml` 中修改 `preloader` 选项, 改完以后 `source: 1` 为满屏加载无pace胶囊，`source: 2` 为pace胶囊无满屏动画，`source: 3` 是两者都启用。
```yml
# Loading Animation (加载动画)
preloader:
  enable: true
  # source
  # 1. fullpage-loading
  # 2. pace (progress bar)
  # else all
  source: 3
  # pace theme (see https://codebyzach.github.io/pace/)
  pace_css_url: /css/progress_bar.css
```