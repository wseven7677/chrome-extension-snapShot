
// 当tab刷新时执行：
chrome.tabs.onUpdated.addListener(function (){

    // 执行截屏功能：
    chrome.tabs.captureVisibleTab(null, {
        format : "png",
        quality : 100
    }, function(data) {

        // 将图像回传到popup页面用以验证是否成功截屏了：
        localStorage['imgMsg'] = data;

        // 在当前显示的页面上插入该截图：
        chrome.tabs.executeScript(null,
            {code: "var snapShotImg = document.getElementById('snapShotImg');snapShotImg.src = '" + localStorage['imgMsg'] + "';"},
            // {code: "var snapShotImg = document.getElementById('snapShotImg');snapShotImg.style.backgroundImage = 'url(" + localStorage['imgMsg'] + ")';"},
            function (){console.log("ok");}
        );
    });

});
