# Mooc
#### Mooc是一个电子商城站点DEMO
#### DEMO地址:https://ajinjing.github.io/mooc/
#### 此作品内容来源于mooc的PSD设计稿,制作原则是根据PSD的设计比例和尺寸,尽可能完美的转换成符合W3C标准的网页,把静态页面文件转成具有交互感的动态网页.
#### 所有的commits展现了我是如何将PSD设计稿转换成网页的,除了所有网页的代码,还包括了[PSD设计原稿](https://github.com/ajinjing/mooc/tree/gh-pages/psd),使用的自动化构建工具的[gulp配置文件](https://github.com/ajinjing/mooc/blob/gh-pages/gulpfile.js),sass预处理程序文件,以及包管理工具npm的配置文件等内容.

## 所用到的工具
- 编辑器:Sublime Text,Webstorm
- 版本控制: Github
- 自动化构建工具: gulp
- CSS预处理器: Sass
- CSS后处理器: autoprefixer
- CSS压缩: gulp-clean-css
- JS压缩: gulp-concat,gulp-uglify
- 图片压缩: tinypng,gulp-imagemin
- 包管理工具: npm
- 调试工具: Chrome Dev Tool,Firefox Dev Tool,Browser-sync(自动刷新)
- 切图工具: Photoshop,Cutterman

## 所用到的技术
- 基本的HTML,CSS,JavaScript
- HTML5常用标签
- CSS3属性:transform,transition,rotate,box-sizing等
- JavaScript函数封装

## 性能优化
####具体的优化:
- 合并文件,尽可能减少http请求数,提升加载速度
- 压缩CSS,JS,图片
- 将CSS放在页面的顶部的Head中,提高浏览器的渲染性能,避免出现页面空白和闪烁的问题
- JS代码放在页面底部,避免加载缓慢
- 把复用性高的CSS和JS放在外部文件中,减少页面体积的同时也可以提高代码的可维护性

## 交互体验优化
- 轮播图效果增加事件监听(addEventListener),避免鼠标悬停无效和重新激活当前窗口时轮播图片出现多次闪跳的问题
- 增加除首页之外的导航条子模块自动隐藏效果,提升用户体验

## 测试平台(所有效果正常)
- Chrome 54,Firefox 49,Safari 9,UC浏览器5.7,QQ浏览器9.5
- 该项目站点已经通过W3C validator (https://validator.w3.org/) 的语义检测,即符合W3C的语义规范.
