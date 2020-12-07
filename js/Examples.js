
/*******************************************  falseBody()  ************************************************/

/**
 *  <body>
 *      <header></header>
 *      <div id="M_body"></div>
 *      <footer></footer>
 *  </body>
 */

// 假 body 设置
function falseBody() {

    // 获取 M_body(假body) 对象
    var getMBody = document.getElementById('M_body');

    if (typeof (getMBody) != "undefined") {     // 判断 getMBody 是否存在

        // 获取 HTML、body 对象
        var getHtml = document.documentElement;
        var getBody = document.body;
        console.log("屏幕高度：" + getHtml.clientHeight);

        // 将body设为超出隐藏，为M_body添加滚动条
        getBody.style.overflowY = 'hidden';
        getMBody.style = 'display: block;width: 100%;overflow: auto;';
        // 创建变量储存滚动条样式
        var overflowText = '#M_body::-webkit-scrollbar{display:block;width:16px;}#M_body::-webkit-scrollbar-thumb{background-color:#8a8a8a;border:1px solid #fff;}#M_body::-webkit-scrollbar-track-piece{background-color:#fff;}';
        var getStyle = document.getElementsByTagName('style')[0];
        var text = document.createTextNode(overflowText);   //创建节点
        if(getStyle == null){
            var style = document.createElement("style");        //创建标签
            style.appendChild(text);                            //追加节点
            document.getElementsByTagName("head")[0].appendChild(style);
        }else{
            getStyle.appendChild(text);
        }

        // 设置变量 MBodyHeight 储存M_body的高度
        var MBodyHeight = getHtml.clientHeight;

        //获得 头部导航栏header、尾部导航栏footer 对象
        var getHeader = document.getElementsByTagName("header")[0];
        var getFooter = document.getElementsByTagName("footer")[0];
        if (typeof (getHeader) != "undefined") {    // 判断 getHeader 是否存在
            MBodyHeight -= getHeader.clientHeight;
            console.log("头部高度：" + getHeader.clientHeight);
        }
        if (typeof (getFooter) != "undefined") {    // 判断 getFooter 是否存在
            MBodyHeight -= getFooter.clientHeight;
            console.log("尾部导航：" + getFooter.clientHeight);
        }

        // 设置 M_body 的高度
        getMBody.style.height = MBodyHeight + 'px';
        console.log("页面主体：" + getMBody.clientHeight);
    }

}


/*******************************************  Date()  ************************************************/


// 时间 Date()的get方法
function time() {
    var date = new Date();  //格式化日期
    console.log(date);  //中国标准时间时间
    console.log(date.toLocaleString()); //当前时间与日期
    console.log(date.toLocaleTimeString()); //当前时间
    console.log(date.getFullYear());    //当前年份
    console.log(date.getMonth() + 1); //当前月份 返回的月份比实际月份小1个月
    console.log(date.getDate());    //当前月份中的日数
    console.log(date.getDay());     //当前星期中的日数 周一到周六返回 1-6  周日返回 0
    console.log(date.getHours());   //当前小时
    console.log(date.getMinutes()); //当前分钟
    console.log(date.getSeconds()); //当前秒
    console.log(date.getMilliseconds());    //当前毫秒
    console.log(date.getTime());    //毫秒的当前时间戳
}

// 自定义格式展示方法
function showtime() {
    var date = new Date();  //格式化日期
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']; //定义周时间
    console.log(date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日");  //打印年月日
    console.log(arr[date.getDay()]);    //打印周日期
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());   //打印时分秒
    console.log(date.getMilliseconds());    //打印毫秒
}

// 时间转换为字符串 “YYYY-mm-dd HH:MM:SS”
function dateFormat(fmt, date) {
	let ret;
	const opt = {
		"Y+": date.getFullYear().toString(),        // 年
		"m+": (date.getMonth() + 1).toString(),     // 月
		"d+": date.getDate().toString(),            // 日
		"H+": date.getHours().toString(),           // 时
		"M+": date.getMinutes().toString(),         // 分
		"S+": date.getSeconds().toString()          // 秒
		// 有其他格式化字符需求可以继续添加，必须转化成字符串
	};
	for (let k in opt) {
		ret = new RegExp("(" + k + ")").exec(fmt);
		if (ret) {
			fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
		};
	};
	return fmt;
}

// 倒计时方法
function countdown() {
    var zdyDate = new Date("2020/6/17 19:08:02");   //自定义时间格式化
    console.log(zdyDate);
    var lefttime = zdyDate.getTime() - new Date().getTime(),      //自定义倒计时 单位：毫秒 1s=ms
        lefth = Math.floor(lefttime / (1000 * 60 * 60)),    //计算小时数 数字类型
        leftm = Math.floor(lefttime / (1000 * 60) % 60),    //计算分钟数 数字类型
        lefts = Math.floor(lefttime / 1000 % 60)            //计算秒种数 数字类型
        ;
    console.log(lefth + ":" + leftm + ":" + lefts);
}