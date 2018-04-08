# v-ui
# 初始提交为2017年9月10日提交，所用皆为最新版构建（v-ui开发环境）
> * vuejs为2.4.2
> * webpack为2.3.2
> * stylus等
> * ...

# 使用方式
> * 打开命令终端并进入v-ui
> * 编译 npm run build  会生成dist目录
> * 运行 npm run dev 浏览器输入localhost:8080/module/index.html访问

# 控件预览地址（请使用手机或者PC浏览器开发工具里面的手机模拟查看）
http://m.jiutw.com/appweb/zepto/test/module/index.html

支持单页应用和多页应用(widget文件夹下控件仅针对移动端)，涉及知识点请自行百度。配置方面大部分都有注释，可自行根据需求进行修改，本demo是在通过vue init webpack xxx生成的项目上进行扩充，可能自动生成的demo不一样有所差别
# src/components/widget目录下包含常用控件44个
ActionSheet、AlertDialog、AppBar、AppBarForText、AreaPicker、badge、CellBox、CellSwipe、CheckBox、CircularProgress、ConfirmDialog、DatePicker、DateTimePicker、Divider、DrawCircle、FloatButton、IconToast、LinearProgress、Notification、NumberKeyboard、PopupPicker、ProgressBar、ProgressLine、PromptDialog、Pull2Refresh、QuickIndex、Radio、RangeSlider、SearchBar、SlideMenu、sharewx、Slider、SnackBar、Star、Switch、Tablayout、TimePicker、Toast、VerticalTimeline、vInput、VLoading、vMap、VMenu等，具体使用请参考src/module/index/App.vue,App.vue中包含了基本的控件使用方法，若有疑问可添加QQ:137224350咨询，请备注v-ui
