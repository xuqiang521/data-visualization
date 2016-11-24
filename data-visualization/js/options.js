// 双饼图
var option1 = JSON.stringify({
    title : {
        text: '组件配置测试版本',
        subtext: '作者:强大大',
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['30%', '45%'],
            itemStyle: {
                normal: {
                    label: {
                        formatter: "{b}" + " : " + "{c} ( {d}% )",
                    },
                    labelLine: {
                        show: true
                    }
                }
            },
            data: [
                {
                    value: 335,
                    name: '直接访问'
                },
                {
                    value: 310,
                    name: '邮件营销'
                },
                {
                    value: 234,
                    name: '联盟广告'
                },
            ]
        }
    ]
});
// 折线图
var option2 = JSON.stringify({
    tooltip: {
        show: true
    },
    title: {
        text: '折线图配置',
        subtext: '作者:强大大'
    },
    legend: {
       data: ['2015迁徙人数', '2016迁徙人数']
    },
    grid: {
        x: 56,
        y: 60,
        x2: 60,
        y2: 33,
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        splitLine: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLabel: {
            textStyle: {
                color: '#b4effe',
                fontSize: '10px',
                margin: "15px"
            }
        }
	}],
    yAxis: [{
        type: 'value',
        splitLine: false,
        axisLabel: {
            textStyle: {
                color: '#b4effe',
                fontSize: '10px',
                margin: "15px"
            }
        }
	}],

    series: [
        {
            name: '2015迁徙人数',
            type: 'line',
            data: [400, 600, 700, 1000, 1200, 1400, 1600, 1700, 1800, 1900, 2300, 2100]
    	},{
            name: '2016迁徙人数',
            type: 'line',
            data: [200, 400, 500, 900, 1000, 1200, 1300, 1400, 1500, 1600, 2000, 1800]
	   }
    ]
})
var _COMMON_ = {
    title : {
        x:'center',
        y:'top',
        textStyle:{
            fontSize:16,
            color: '#fff'
        },
        subtextStyle:{
            fontSize:13
        }
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        show: true,
        orient: 'vertical',
        x: 'left',
        y: 'top',
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
    },
}
