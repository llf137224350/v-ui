<template>
    <div id="app">
        <div ref="appScroll">
            <div>
                <h1>appbar</h1>
                <divider></divider>
                <br/>
                <appbar :vtitle="'标题'" @appbarLeftClick="handleLeft" :haveMenu="false"></appbar>
                <br/>
                <appbar :vtitle="'标题'" @appbarLeftClick="handleLeft" @appbarRightClick="handleRight"></appbar>
                <divider :dividerType="'slide'"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>appbarfortext</h1>
                <divider></divider>
                <br/>
                <appbarfortext :vtitle="'标题'" @appbarLeftClick="handleLeft"
                               :haveMenu="false"
                               :rightText="'提交'"
                               :color="color"
                ></appbarfortext>
                <br/>
                <appbarfortext :vtitle="'标题'" @appbarLeftClick="handleLeft" @appbarRightClick="handleRight1"
                               :rightText="'提交'"
                               :color="color"
                ></appbarfortext>
                <divider :dividerType="'slide'"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>SearchBar {{searchBarValue}}</h1>
                <SearchBar v-model="searchBarValue"></SearchBar>
                <divider :dividerType="'slide'" style="margin-top: 10px"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>选项卡</h1>
                <!--背景颜色可包裹一个div 设置div背景色-->
                <div class="tab-wrapper">
                    <tablayout :datas="tabDatas" :color="color" :normalColor="normalColor"
                               :currentIndex="0"
                    ></tablayout>
                </div>
                <router-view :seller="seller" keep-alive></router-view>
                <divider :dividerType="'slide'"></divider>
            </div>
            <div style="height: 30px;background: rgba(0,0,0,.2);"></div>
            <div style="margin-top: 20px">
                <h1>吐司</h1>
                <button @click="showToast">点击我弹出输出内容吐司样式1</button>
                <toast ref="toast"></toast>

                <button @click="showIcontoastSucceed">点击我弹出输出内容吐司样式2成功</button>
                <icontoast ref="icontoastSucceed"></icontoast>
                <button @click="showIcontoastFailed">点击我弹出输出内容吐司样式2失败</button>
                <button @click="showNotification">点击我弹出消息通知</button>
                <icontoast ref="icontoastFailed"></icontoast>
                <Notification ref="notification"></Notification>
                <divider :dividerType="'slide'"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>消息提示</h1>
                位置：
                <input type="checkbox" v-model="check"/>{{check?"顶部":"底部"}}<br/>
                <button @click="showSnackBar">snackbar-top</button>
                <button @click="showSnackBarLeft">snackbar-left</button>
                <button @click="showSnackBarRight">snackbar-right（回调）</button>
                <button @click="showSnackBarDown">snackbar-down</button>
                <snackbar ref="snackbar" :direction="direction" :position="check===true?1:0"></snackbar>
                <divider :dividerType="'slide'"></divider>
            </div>
            <div style="margin-top: 20px">
                <h1>模态提示窗口</h1>
                <button @click="showAlert">Alert</button>
                <alertdialog ref="alert" :okText="okText"></alertdialog>
                <divider :dividerType="'slide'"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>模态询问窗口</h1>
                <button @click="showConfirm">Confirm</button>
                <confirmdialog ref="confirm" :okText="okText" :cancelText="cancelText"></confirmdialog>
                <divider :dividerType="'slide'"></divider>
            </div>


            <div style="margin-top: 20px">
                <h1>进度提示</h1>
                <button @click="showPregressBar">PregressBar</button>
                <progressbar ref="pregressbar"></progressbar>
                <divider :dividerType="'slide'"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>模态输入窗口</h1>
                <button @click="showPrompt">Prompt</button>
                <promptdialog ref="prompt"></promptdialog>
                <divider :dividerType="'slide'"></divider>
            </div>
            <div style="margin-top: 20px">
                <h1>ActionSheet</h1>
                <button @click="showActionSheet">ActionSheet样式一</button>
                <button @click="showActionSheet2">ActionSheet样式二</button>
                <ActionSheet ref="ActionSheet"></ActionSheet>
                <divider :dividerType="'slide'"></divider>
            </div>
            <div style="margin-top: 20px">
                <h1>时间选择器</h1>
                <button @click="showTimePicker">TimePicker</button>
                <timepicker ref="timepicker" @timerpickerOkCallBack="timerpickerOkCallBack"></timepicker>
                <divider :dividerType="'slide'"></divider>
            </div>
            <div style="margin-top: 20px">
                <h1>日期选择器</h1>
                <button @click="showDatePicker">DatePicker</button>
                <datepicker ref="datepicker" @datepickerOkCallBack="datepickerOkCallBack"></datepicker>
                <divider :dividerType="'slide'"></divider>
            </div>
            <div style="margin-top: 20px">
                <h1>带时间的日期选择器</h1>
                <button @click="showDateTimePicker">DateTimePicker</button>
                <datetimepicker ref="datetimepicker"
                                @datetimepickerOkCallBack="datetimepickerOkCallBack"></datetimepicker>
                <divider :dividerType="'slide'"></divider>
            </div>
            <div style="margin-top: 20px">
                <h1>地区选择器</h1>
                <button @click="showAreaPicker">AreaPicker</button>
                <areapicker ref="areapicker" @areapickerOkCallBack="areapickerOkCallBack"></areapicker>
                <divider :dividerType="'slide'"></divider>
            </div>
            <div style="margin-top: 20px">
                <h1>popuppicker</h1>
                <button @click="showpopuppicker">popuppicker</button>
                <popuppicker ref="popuppicker" @popuppickerOkCallBack="popuppickerOkCallBack"
                             :items="['小米','三星','华为','魅族','OPPO','VIVO','金立','锤子']"></popuppicker>
                <divider :dividerType="'slide'"></divider>
            </div>
            <div style="margin-top: 20px">
                <h1>进度指示器(同一时刻只能一个执行，否则会卡顿，暂时未解决)</h1>
                <button @click="startAnim">开始动画</button>
                <button @click="stopAnim">停止动画</button>
                <linearProgress ref="linearProgress" :height="'2px'"></linearProgress>
                <div style="padding: 10px 0">指定颜色，高等</div>
                <button @click="startAnim1">开始动画</button>
                <button @click="stopAnim1">停止动画</button>
                <linearProgress ref="linearProgress1" :foregroundColor="'#7E57C2'" :height="'6px'"></linearProgress>
                <divider :dividerType="'slide'"></divider>
            </div>
            <div style="margin-top: 20px">
                <h1>进度条{{currentValue}}</h1>
                <button @click="setCurrentValue">currentValue = 80</button>
                <button @click="reset">currentValue=0</button>
                <progressline ref="progressline" :minValue="0" :maxValue="100" v-model="currentValue"></progressline>
                <divider :dividerType="'slide'"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>Slider:{{slideValue}}</h1>
                <button @click="setSlideValue">currentValue = 80</button>
                <button @click="resetSlideValue">currentValue=0</button>
                <Slider :minValue="0" :maxValue="100" v-model="slideValue"></Slider>
                <divider :dividerType="'slide'"></divider>
            </div>
            <div style="margin-top: 20px;">
                <h1>CircularProgress 范围依次为：[0,100],[20,80],[0,120],[0,200]，拖动Slider更改值 {{slideValue}}</h1>
                <button @click="setStateSucceed">设置成功(currentValue === maxValue)</button>
                <button @click="setStateFailed">设置失败</button>
                <div style="display: flex">
                    <div style="width: 80px;height: 80px;position: relative;flex: 0 0 80px">
                        <CircularProgress :minValue="0" :maxValue="100" v-model="slideValue"
                                          :state="state"></CircularProgress>
                    </div>
                    <div style="flex: 1"></div>
                    <div style="width: 70px;height: 70px;position: relative;flex: 0 0 70px;margin-top: 10px">
                        <CircularProgress :minValue="20" :maxValue="80" v-model="slideValue"
                                          :state="state"></CircularProgress>
                    </div>
                    <div style="flex: 1"></div>
                    <div style="width: 60px;height: 60px;position: relative;flex: 0 0 60px;margin-top: 20px">
                        <CircularProgress :minValue="0" :maxValue="120" v-model="slideValue"
                                          :state="state" :foregroundColor="'#7E57C2'"></CircularProgress>
                    </div>
                    <div style="flex: 1"></div>
                    <div style="width: 50px;height: 50px;position: relative;flex: 0 0 50px;margin-top: 30px">
                        <CircularProgress :minValue="0" :maxValue="200" v-model="slideValue"
                                          :state="state" :foregroundColor="'#7E57C2'"></CircularProgress>
                    </div>
                </div>
                <divider :dividerType="'slide'" style="margin-top: 10px"></divider>
            </div> 
            <div style="margin-top: 20px;">
                <h1>Loading</h1>
                <VLoading></VLoading>
                <VLoading :Type="'white'" style="background-color: #01cc77;"></VLoading>
                <divider :dividerType="'slide'" style="margin-top: 10px"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>rangeslider {{currentIndex}}</h1>
                <button @click="showRangeSlider">显示rangeslider</button>
                <rangeslider ref="rangeslider" v-model="currentIndex"></rangeslider>
                <divider :dividerType="'slide'"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>Switch: {{style1}} {{style2}} {{style3}} {{style4}}</h1>
                <mySwitch v-model="style1"></mySwitch>&nbsp;&nbsp;&nbsp;&nbsp;
                <mySwitch :styleIndex="1" v-model="style2"></mySwitch>&nbsp;&nbsp;&nbsp;&nbsp;
                <mySwitch :styleIndex="2" v-model="style3"></mySwitch>&nbsp;&nbsp;&nbsp;&nbsp;
                <mySwitch :styleIndex="3" v-model="style4"></mySwitch>
                <divider :dividerType="'slide'" style="margin-top: 10px"></divider>
            </div>
            <div style="margin-top: 30px">
                <h1>复选框</h1>
                <h2>爱好</h2>
                <CheckBox :name="'hobby'" :label="'读书'" :value="'读书'" v-model="checkValue"></CheckBox>
                <CheckBox :name="'hobby'" :label="'撸代码'" :value="'撸代码'" v-model="checkValue"></CheckBox>
                <CheckBox :name="'hobby'" :label="'打球'" :value="'打球'" v-model="checkValue"></CheckBox>
                <CheckBox :name="'hobby'" :label="'睡觉'" :value="'睡觉'" v-model="checkValue"></CheckBox>
                <CheckBox :name="'hobby'" :label="'玩游戏'" :value="'玩游戏'" v-model="checkValue"></CheckBox>
                <br/>
                <br/>
                选择了：{{checkValue.split(',')}}
                <br/>
                <h2 style="margin-top: 10px">喜欢的游戏</h2>
                <CheckBox :name="'hobby'" :label="'荒野行动'" :value="'荒野行动'" v-model="checkboxGamesValue"></CheckBox>
                <CheckBox :name="'hobby'" :label="'绝地求生'" :value="'绝地求生'" v-model="checkboxGamesValue"></CheckBox>
                <CheckBox :name="'hobby'" :label="'王者荣耀'" :value="'王者荣耀'" v-model="checkboxGamesValue"></CheckBox>
                <br/>
                <br/>
                选择了：{{checkboxGamesValue.split(',')}}
                <divider :dividerType="'slide'" style="margin-top: 10px"></divider>
            </div>
            <div style="margin-top: 30px">
                <h1>单选框</h1>
                <h2>品牌</h2>
                <radio :name="'name'" :value="'Apple'" :label="'Apple'" v-model="radioCheckedValue"></radio>
                <radio :name="'name'" :value="'IBM'" :label="'IBM'" v-model="radioCheckedValue"></radio>
                <radio :name="'name'" :value="'Microsoft'" :label="'Microsoft'" v-model="radioCheckedValue"></radio>
                <radio :name="'name'" :value="'Google'" :label="'Google'" v-model="radioCheckedValue"></radio>
                <br/>
                <br/>
                选择了：{{radioCheckedValue}}
                <h2 style="margin-top: 10px">游戏</h2>
                <radio :name="'game'" :value="'魔兽'" :label="'魔兽'" v-model="gameCheckedValue"></radio>
                <radio :name="'game'" :value="'英雄联盟'" :label="'英雄联盟'" v-model="gameCheckedValue"></radio>
                <radio :name="'game'" :value="'王者荣耀'" :label="'王者荣耀'" v-model="gameCheckedValue"></radio>
                <radio :name="'game'" :value="'消灭星星'" :label="'消灭星星'"
                       v-model="gameCheckedValue"></radio>
                <br/>
                <br/>
                选择了：{{gameCheckedValue}}
                <divider :dividerType="'slide'" style="margin-top: 10px"></divider>
            </div>
            <div style="margin-top: 30px">
                <h1>数字键盘 {{number}} / {{number2}} / 长度限制6位:{{number3}}</h1>
                <button @click="showKeyboard">弹出键盘样式一</button>
                <button @click="showKeyboard2">弹出键盘样式2</button>
                <button @click="showKeyboard3">弹出长度限制键盘样式</button>
                <numberkeyboard ref="keyboard" :decimal="true" v-model="number"></numberkeyboard>
                <numberkeyboard ref="keyboard2" :decimal="false" v-model="number2"></numberkeyboard>
                <numberkeyboard ref="keyboard3" :decimal="false" v-model="number3" :length="6"></numberkeyboard>
                <divider :dividerType="'slide'"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>分享到微信</h1>
                <button @click="sharewx">分享到微信</button>
                <sharewx ref="sharewx"></sharewx>
                <divider :dividerType="'slide'"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>评分</h1>
                <p>
                    <star :size="48" :score="score1" :readonly="false" v-model="score1"
                          style="float: left"></star>
                    <span style="display: inline-block;line-height: 22px;margin-left: 10px">{{score1}} 分</span>
                </p>

                <p style="clear: both;margin-top: 16px">
                    <star :size="36" :score="score2" :readonly="false" v-model="score2"
                          style="float: left"></star>
                    <span style="display: inline-block;line-height: 22px;margin-left: 10px">{{score2}} 分</span>
                </p>

                <p style="clear: both;margin-top: 16px">
                    <star :size="24" :score="score3" :readonly="false" v-model="score3"
                          style="float: left"></star>
                    <span style="display: inline-block;line-height: 22px;margin-left: 10px">{{score3}} 分</span>
                </p>
                <divider :dividerType="'slide'"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>分割线</h1>
                <divider></divider>
                <br/>
                <divider :dividerType="'slide'"></divider>
                <br/>
                <divider :dividerType="'dotted'"></divider>
                <br/>
                <divider :dividerType="'dashed'"></divider>
            </div>

            <div style="margin-top: 20px">
                <h1>CellSwipe</h1>
                <cellswipe :text="'我是特别的'" :items="items" @read="read" @deleted="deleted"></cellswipe>
                <cellswipe :text="'我是文本信息'"></cellswipe>
                <cellswipe :text="'我是文本信息'"></cellswipe>
                <cellswipe :text="'我是文本信息'"></cellswipe>
                <divider :dividerType="'slide'" style="margin-top: 10px"></divider>
            </div>
            <div style="margin-top: 20px">
                <h1>CellBox</h1>
                <cellbox :title="'新消息'" :des="'一条未读消息'"></cellbox>
                <cellbox :title="'新消息'"></cellbox>
                <divider :dividerType="'slide'" style="margin-top: 10px"></divider>
            </div>

            <div style="margin-top: 20px;">
                <h1>badge</h1>
                <badge></badge>
                <badge :number="1"></badge>
                <badge :number="8888"></badge>
                <divider :dividerType="'slide'" style="margin-top: 10px"></divider>
            </div>

            <div style="margin-top: 20px;">
                <h1>vmap</h1>
                <button @click="showMap">显示地图</button>
                <showMap ref="showMap" :address="'遵义师范学院'"></showMap>
                <button @click="showSlideMenu">显示侧滑菜单demo</button>
                <showSlideMenu ref="showSlideMenu" ></showSlideMenu>
                <button @click="showQuickIndex">显示快速索引demo</button>
                <showQuickIndex ref="showQuickIndex" ></showQuickIndex>
            </div>

            <div style="margin-top: 20px;">
                <h1>vinput-text {{username}}</h1>
                <vinput :label="'账户'" v-model="username" :placeholder="'请输入账户'"></vinput>
                <vinput :label="'账户(动画)'" v-model="username" :placeholder="'请输入账户'" :anim="true"></vinput>
            </div>

            <div style="margin-top: 20px;">
                <h1>vinput-password {{password}}</h1>
                <vinput :label="'密码'" v-model="password" :placeholder="'请输入密码'" :type="'password'"></vinput>
                <vinput :label="'密码(动画)'" v-model="password" :placeholder="'请输入密码'" :type="'password'"
                        :anim="true"></vinput>
            </div>

            <div style="margin-top: 20px;">
                <h1>vinput-number {{phone}}</h1>
                <vinput :label="'电话'" v-model="phone" :placeholder="'请输入手机号码'" :type="'number'"></vinput>
                <vinput :label="'电话(动画)'" v-model="phone" :placeholder="'请输入手机号码'" :type="'number'"
                        :anim="true"></vinput>
            </div>

            <div style="margin-top: 20px;">
                <h1>vtextarea {{vtextareaValue}}</h1>
                <div class="my-vtextarea">
                    <vtextarea v-model="vtextareaValue"></vtextarea>
                </div>
            </div>

            <div style="margin-top: 20px">
                <h1>drawCircle (可配合其它控件做到类似于安卓水波纹的效果)</h1>
                <br/>
                <div
                    style="width: 48px;height: 48px; line-height:48px;text-align:center;position: relative;border-radius:50%;overflow:hidden;color: #41B883;float: left"
                    @click="test">
                    点我
                    <drawCircle></drawCircle>
                </div>
                <div
                    style="width: 48px;height: 48px; line-height:48px;text-align:center;position: relative;border-radius:50%;overflow:hidden;color: #41B883;"
                    @click="test">
                    点我
                    <drawCircle :center="true"></drawCircle>
                </div>
                <div style="height: 48px;line-height: 48px;position: relative">
                    点我有惊喜
                    <drawCircle :fill="'rgba(65,184,131,.2)'"></drawCircle>
                </div>
                <div style="height: 48px;line-height: 48px;position: relative">
                    慢吞吞的我
                    <drawCircle :fill="'rgba(65,184,131,.2)'" :duration="1"></drawCircle>
                </div>
                <divider></divider>
            </div>
            <div style="margin-top: 20px">
                <h1>Timeline</h1>
                <VerticalTimeline :timelineData="timelineData"></VerticalTimeline>
                <divider :dividerType="'slide'"></divider>
            </div>
            <div style="margin-top: 20px">
                <h1 style="display: block;height: 44px">
                    Pull2Refresh :canRefresh="false" 禁止刷新功能，默认为true :canLoadingMore="false" 禁止上拉刷新功能，默认为true。
                    可以在使用页面调用.startRefresh进行页面加载完成之后进行刷新（场景：先从缓存加载列表数据，让用户快速看到有内容列表，然后自动刷新一次新数据）
                </h1>
                <div style="margin-top: 30px"></div>
                <div class="my-pull-2-refresh">
                    <Pull2Refresh @onRefreshing="onRefreshing" ref="pull2refresh" @onLoadingMore="onLoadingMore"   >
                        <ul slot="content">
                            <cellswipe :text="item" v-for="item in pull2RefreshDatas"></cellswipe>
                            <!--<li v-for="item in pull2RefreshDatas" style="line-height: 40px">{{item}}</li>-->
                        </ul>

                    </Pull2Refresh>
                </div>
            </div>
            <div style="margin-top: 20px">
                <h1>floatButton</h1>
                <br/>
                <floatbutton></floatbutton>
                <divider></divider>
            </div>

        </div>
        <VMenu ref="vmenu"></VMenu>
    </div>

</template>

<script>
    import   "common/css/reset.css"
    import   "common/css/animate.css"
    import toast from "components/widget/Toast/Toast.vue"
    import icontoast from "components/widget/IconToast/IconToast.vue"
    import snackbar from "components/widget/SnackBar/SnackBar.vue"
    import alertdialog from "components/widget/AlertDialog/AlertDialog.vue"
    import confirmdialog from "components/widget/ConfirmDialog/ConfirmDialog.vue"
    import progressbar from "components/widget/ProgressBar/ProgressBar.vue"
    import promptdialog from "components/widget/PromptDialog/PromptDialog.vue"
    import ActionSheet from "components/widget/ActionSheet/ActionSheet.vue"
    import tablayout from "components/widget/Tablayout/Tablayout.vue"
    import timepicker from "components/widget/TimePicker/TimePicker.vue"
    import datepicker from "components/widget/DatePicker/DatePicker.vue"
    import popuppicker from "components/widget/PopupPicker/PopupPicker.vue"
    import datetimepicker from "components/widget/DatetimePicker/DatetimePicker.vue"
    import areapicker from "components/widget/AreaPicker/AreaPicker.vue"
    import progressline from "components/widget/ProgressLine/ProgressLine.vue"
    import linearProgress from "components/widget/LinearProgress/LinearProgress.vue"
    import CircularProgress from "components/widget/CircularProgress/CircularProgress.vue"
    import VLoading from "components/widget/VLoading/VLoading.vue"
    import mySwitch from "components/widget/Switch/Switch.vue"
    import sharewx from "components/widget/sharewx/sharewx.vue"
    import divider from "components/widget/Divider/Divider.vue"
    import Slider from "components/widget/Slider/Slider.vue"
    import radio from "components/widget/Radio/Radio.vue"
    import star from "components/widget/Star/Star.vue"
    import numberkeyboard from "components/widget/NumberKeyboard/NumberKeyboard.vue"
    import appbar from "components/widget/AppBar/AppBar.vue"
    import appbarfortext from "components/widget/AppBarForText/AppBarForText.vue"
    import floatbutton from "components/widget/FloatButton/FloatButton.vue"
    import cellswipe from "components/widget/CellSwipe/CellSwipe.vue"
    import rangeslider from "components/widget/RangeSlider/RangeSlider.vue"
    import cellbox from "components/widget/CellBox/CellBox.vue"
    import badge from "components/widget/Badge/Badge.vue"
    import CheckBox from "components/widget/CheckBox/CheckBox.vue"
    import vinput from "components/widget/vInput/vInput.vue"
    import vtextarea from "components/widget/vtextarea/vtextarea.vue"
    import drawCircle from "components/widget/DrawCircle/DrawCircle.vue"
    import showMap from "components/demo/showMap.vue"
    import VMenu from "components/widget/VMenu/VMenu.vue"
    import VerticalTimeline from "components/widget/VerticalTimeline/VerticalTimeline.vue"
    import SearchBar from "components/widget/SearchBar/SearchBar.vue"
    import Notification from "components/widget/Notification/Notification.vue"
    import Pull2Refresh from "components/widget/Pull2Refresh/Pull2Refresh.vue"
    import showSlideMenu from "components/demo/showSlideMenu.vue"
    import showQuickIndex from "components/demo/showQuickIndex.vue"
    const ERR_OK = 0;
    const topDirection = 0; // 从上进入
    const downDirection = 1; // 从下边进入
    const leftDirection = 2; // 从左边进入
    const rightDirection = 3; // 从右边进入
    export default {
        created(){
            for (let i = 0; i < 10; i++) {
                this.pull2RefreshDatas.push("我是从缓存加载的数据" + i+"，可以右滑哟！")
            }
        },
        mounted(){
              // this.$refs.pull2refresh.startRefresh();
        },
        data(){
            return {
                name: "操作成功",
                direction: topDirection,
                check: false,
                okText: "知道了",
                cancelText: "取消",
                color: "#41b883",
                normalColor: "#000",
                seller: {},
                needTips: false,
                slideValue: 20,
                state: "progress",
                checkValue: "撸代码,玩游戏,睡觉",
                checkboxGamesValue: "绝地求生,荒野行动",
                radioCheckedValue: "IBM",
                gameCheckedValue: "王者荣耀",
                score1: 3.5,
                score2: 3.5,
                score3: 3.5,
                number: "",
                number2: "",
                number3: "",
                tabDatas: [
                    {
                        text: "item1",
                        to: "/item/1"
                    }
                    ,
                    {
                        text: "item2",
                        to: "/item/2"
                    },
                    {
                        text: "item3",
                        to: "/item/3"
                    },
                    {
                        text: "item4",
                        to: "/item/4"
                    },
                    {
                        text: "item5",
                        to: "/item/5"
                    },
                    {
                        text: "item6",
                        to: "/item/6"
                    },
                    {
                        text: "item7",
                        to: "/item/7"
                    }
                ],
                items: [
                    {
                        text: "标记已读1",
                        callback: "read"
                    },
                    {
                        text: "删除1",
                        callback: "deleted"
                    }
                ],
                currentValue: 10,
                currentIndex: 0,
                style1: true,
                style2: false,
                style3: true,
                style4: true,
                username: "",
                password: "",
                phone: "",
                timelineData: [
                    {
                        date: "2018-01-23",
                        content: "我说都是假的你信吗？"
                    },
                    {
                        date: "2017-12-23",
                        content: "第三个版本发布，新增了大量类似原生体验效果的组件，并对代码进行了深入的优化。"
                    },
                    {
                        date: "2017-11-23",
                        content: "第二个版本发布"
                    },
                    {
                        date: "2017-10-23",
                        content: "第一个版本发布"
                    }
                ],
                searchBarValue: "",
                pull2RefreshDatas: [],
                vtextareaValue:""
            }
        },
        components: {
            toast,
            icontoast,
            snackbar,
            alertdialog,
            confirmdialog,
            progressbar,
            promptdialog,
            ActionSheet,
            tablayout,
            timepicker,
            datepicker,
            datetimepicker,
            areapicker,
            popuppicker,
            progressline,
            linearProgress,
            CircularProgress,
            VLoading,
            mySwitch,
            sharewx,
            divider,
            Slider,
            radio,
            star,
            numberkeyboard,
            appbar,
            appbarfortext,
            floatbutton,
            cellswipe,
            rangeslider,
            cellbox,
            badge,
            CheckBox,
            showMap,
            vinput,
            vtextarea,
            drawCircle,
            VMenu,
            VerticalTimeline,
            SearchBar,
            Notification,
            Pull2Refresh,
            showSlideMenu,
            showQuickIndex
        },
        methods: {
            read(){
                alert("已读")
            },
            deleted(){
                alert("删除")
            },
            showToast(){
                this.$refs.toast.show(this.name);
            },
            showIcontoastSucceed(){
                this.$refs.icontoastSucceed.show(this.name, "succeed");
            },
            showIcontoastFailed(){
                this.$refs.icontoastFailed.show(this.name, "failed");
            },
            showSnackBar(){
                this.direction = topDirection;
                this.$refs.snackbar.show(this.name);
            },
            showSnackBarLeft(){
                this.direction = leftDirection;
                this.$refs.snackbar.show(this.name);
            },
            showSnackBarRight(){
                this.direction = rightDirection;
                //第二个为点击确定后的回调，不传入不回调
                this.$refs.snackbar.show(this.name, function () {
                    alert("回调了")
                });
            },
            showSnackBarDown(){
                this.direction = downDirection;
                this.$refs.snackbar.show(this.name);
            },
            showAlert(){
                this.$refs.alert.show(this.name);
            },
            showConfirm(){
                this.$refs.confirm.show(this.name, function () {
                    alert("回调")
                });
            },
            showPrompt(){
                this.$refs.prompt.show({
                    type: "password",
                    tips: "请输入支付密码",
                    title: "身份验证",
                    callBack: function (value) {
                        alert(value)
                    }
                });
            },
            showActionSheet(){
                this.$refs.ActionSheet.show([
                    {
                        "text": "菜单一",//可以传html
                        "callBack": function () {
                            alert("我是菜单一")
                        }
                    },
                    {
                        "text": "菜单二",
                        "callBack": function () {
                            alert("我是菜单二")
                        }
                    },
                    {
                        "text": "菜单三",
                        "callBack": function () {
                            alert("我是菜单三")
                        }
                    }
                ], "请选择标题")
            },
            showActionSheet2(){
                this.$refs.ActionSheet.show([
                    {
                        "text": "菜单一",//可以传html
                        "callBack": function () {
                            alert("我是菜单一")
                        }
                    },
                    {
                        "text": "菜单二",
                        "callBack": function () {
                            alert("我是菜单二")
                        }
                    },
                    {
                        "text": "菜单三",
                        "callBack": function () {
                            alert("我是菜单三")
                        }
                    }
                ])
            },
            showPregressBar(){
                this.$refs.pregressbar.show("提交中...");
                let that = this;
                setTimeout(function () {
                    that.$refs.pregressbar.hide();
                }, 8000)
            },
            showTimePicker(){
                this.$refs.timepicker.show();
                this.$refs.appScroll.style.overflow = "hidden"
            },
            timerpickerOkCallBack(time){
                alert(time)
                this.$refs.appScroll.style.overflow = "auto"

            },
            showpopuppicker(){
                this.$refs.popuppicker.show();
                this.$refs.appScroll.style.overflow = "hidden"
            },
            popuppickerOkCallBack(time){
                alert(time)
                this.$refs.appScroll.style.overflow = "auto"

            },
            showDatePicker(){
                this.$refs.datepicker.show();
                this.$refs.appScroll.style.overflow = "hidden"
            },
            datepickerOkCallBack(date){
                alert(date)
                this.$refs.appScroll.style.overflow = "auto"
            },
            showDateTimePicker(){
                this.$refs.datetimepicker.show();
                this.$refs.appScroll.style.overflow = "hidden"
            },
            datetimepickerOkCallBack(datetime){
                alert(datetime)
                this.$refs.appScroll.style.overflow = "auto"
            },
            showAreaPicker(){
                this.$refs.areapicker.show();
                this.$refs.appScroll.style.overflow = "hidden"
            },
            areapickerOkCallBack(area){
                alert(area)
                this.$refs.appScroll.style.overflow = "auto"
            },
            setCurrentValue(){
                this.currentValue = 80;

            },
            reset(){
                this.currentValue = 0;
            },
            sharewx(){
                this.$refs.sharewx.show();
            },
            showKeyboard(){
                this.$refs.keyboard.show();
            },
            showKeyboard2(){
                this.$refs.keyboard2.show();
            },
            showKeyboard3(){
                this.$refs.keyboard3.show();
            },
            handleLeft(){
                alert("返回")
            },
            handleRight1(){
                alert("提交")
            },
            handleRight(){
                this.$refs.vmenu.show({
                    top: "174px",
                    right: "16px",
                    menuItems: [
                        "菜单一", "菜单二", "菜单三", "菜单四", "菜单五"],// 可以传入html 也就是自定义样式
                    callBacks: [
                        () => {
                            alert("菜单一");
                        },
                        () => {
                            alert("菜单二");
                        },
                        () => {
                            alert("菜单三");
                        },
                        () => {
                            alert("菜单四");
                        },
                        () => {
                            alert("菜单五");
                        }
                    ]
                });
            },
            showRangeSlider(){
                this.$refs.rangeslider.show(0);
            },
            setSlideValue(){
                this.slideValue = 80;
            },
            resetSlideValue(){
                this.slideValue = 0;
            },
            showMap(){
                this.$refs.showMap.show();
            },
            showSlideMenu(){
                this.$refs.showSlideMenu.show();
            },
            showQuickIndex(){
                this.$refs.showQuickIndex.show();
            },
            startAnim(){
                this.$refs.linearProgress.start();
            },
            stopAnim(){
                this.$refs.linearProgress.stop();
            },
            startAnim1(){
                this.$refs.linearProgress1.start();
            },
            stopAnim1(){
                this.$refs.linearProgress1.stop();
            },
            test(){
                console.log("我被点击了");
            },
            setStateSucceed(){
                this.state = "succeed";
            },
            setStateFailed(){
                this.state = "failed";
            },
            showNotification(){
                this.$refs.notification.show({
                    icon: "http://ww3.sinaimg.cn/bmiddle/61e8a1fdgw1eeuqql9xagj206w056mxh.jpg",
                    title: "我是标题",
                    subtitle: "我是子标题",
                    content: "我是文本内容，哈哈哈哈哈我是文本内容，哈哈哈哈哈我是文本内容，哈哈哈哈哈我是文本内容，哈哈哈哈哈",
                    btnText: "查看",
                    callback: () => {
                        alert("回调了")
                    }
                })
            },
            onRefreshing(){
                setTimeout(() => {
                    this.pull2RefreshDatas = [];
                    for (let i = 0; i < 30; i++) {
                        this.pull2RefreshDatas.push("我是刷新出来的数据" + i+"，可以右滑哟！")
                    }
                    this.$refs.pull2refresh.stopRefresh();
                }, 5000)
            },
            onLoadingMore(){
                setTimeout(() => {
                    for (let i = 0; i < 20; i++) {
                        this.pull2RefreshDatas.push("我是加载更多出来的数据" + i+"，可以右滑哟！")
                    }
                    this.$refs.pull2refresh.stopLoadingMore();
                }, 5000)
            }
        },
        watch: {
            slideValue(){
                this.state = "progress";
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        padding: 10px;
        font-size: 14px;
    }

    .tab-wrapper {
        background: #fff;
    }

    h1 {
        margin-top: 10px;
        height: 30px;
    }

    button {
        margin: 5px 10px 10px 0;
    }

    .floatbutton-wrapper {
        position: fixed;
        bottom: 16px;
        right: 16px;
    }

    .floatbutton-wrapper1 {
        position: fixed;
        bottom: 80px;
        right: 16px;
    }

    .tab-wrapper {
        position: relative;
    }

    .tab-wrapper::before {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        content: "";
        width: 22px;
        height: 43px;
        z-index: 2147483645;
        background: -webkit-linear-gradient(left, white, rgba(255, 255, 255, 0));
    }

    .tab-wrapper::after {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        content: "";
        width: 22px;
        height: 43px;
        z-index: 2147483645;
        background: -webkit-linear-gradient(right, white, rgba(255, 255, 255, 0));
    }

    .my-pull-2-refresh {
        position: relative;
        height: 200px;
        background: #E8E8EA;
    }
    .my-vtextarea {
        position: relative;
        width: 99%;
        height: 100px;
        box-sizing: border-box;
    }
</style>
