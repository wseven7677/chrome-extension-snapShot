
// 当tab刷新时执行：
chrome.tabs.onUpdated.addListener(function (){

    // 执行截屏功能：
    // 发现问题：截图不适配chrome模仿手机界面的截图。。。（6.9）
    chrome.tabs.captureVisibleTab(null, {
        format : "png",
        quality : 100
    }, function(data) {

        // 将图像回传到popup页面用以验证是否成功截屏了：
        localStorage['imgMsg'] = data;

        // var exeMsg = "var snapShotImg = document.getElementById('snapShotImg');snapShotImg.src = '" + localStorage['imgMsg'] + "';";

        // 在当前显示的页面上插入该截图：
        chrome.tabs.executeScript(null,
            // {code: 'setTimeOut("'+exeMsg+'",0);'},

        // 好用的img版本：
            {code: "var snapShotImg = document.getElementById('snapShotImg');snapShotImg.src = '" + localStorage['imgMsg'] + "';"},

        // backgroundImage 版本，目前无法使用：
            // {code: "var snapShotImg = document.getElementById('snapShotImg');snapShotImg.style.backgroundImage = 'url(" + localStorage['imgMsg'] + ")';"},
            function (){console.log("ok");}
        );
    });

});
