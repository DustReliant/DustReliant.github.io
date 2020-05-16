<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://i.loli.net/2020/05/17/SuZUV3d9enEGBc1.png");
         document.title = 'ヽ(●-`Д´-)ノ你要玩捉迷藏嘛';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://i.loli.net/2020/05/17/SuZUV3d9enEGBc1.png");
         document.title = 'ヾ(Ő∀Ő3)ノ好哦！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });