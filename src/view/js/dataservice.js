/**
 * Created by Administrator on 2016/5/26.
 */



var app = angular.module("infoApp", [])

    .service("dataservice", function () {
        this.datas = {
            name: "张广超",
            age: 26,
            sex: "男",
            english:"精通",
            address:"北京",
            health:"健康",
            married:"未婚",
            face: true,
            education:"本科",
            major:"自动化",
            home:"辽宁朝阳",
            tel:"13654008330",
            email:"13654008330@163.com",
            info:"2012年毕业于辽宁科技大学，"
        };
    })
