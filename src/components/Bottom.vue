<template>
  <div>
    <div id="boo">
      <div class="navent s">
        <div class="boo-top">
          <!-- 二维吗 -->
          <div class="code">
            <p class="p">随时逛 及时抢</p>
          </div>
          <!-- 中间容器 -->
          <div class="content">
            <div class="li-box">
              <dl>
                <dt>获取更新</dt>
                <dd>
                  <li class="li"></li>
                  <a href="">iPhone/Android</a>
                </dd>
                <dd>
                  <li class="li"></li>
                  <a href="">卷皮QQ空间</a>
                </dd>
                <dd>
                  <li class="li"></li>
                  <a href="">卷皮新浪微博</a>
                </dd>
                <dd>
                  <li class="li"></li>
                  <a href="">开放API</a>
                </dd>
              </dl>
            </div>
            <div class="li-box">
              <dl>
                <dt>获取更新</dt>
                <dd>
                  <li class="li"></li>
                  <a href="">iPhone/Android</a>
                </dd>
                <dd>
                  <li class="li"></li>
                  <a href="">卷皮QQ空间</a>
                </dd>
                <dd>
                  <li class="li"></li>
                  <a href="">卷皮新浪微博</a>
                </dd>
                <dd>
                  <li class="li"></li>
                  <a href="">开放API</a>
                </dd>
              </dl>
            </div>
            <div class="li-box">
              <dl>
                <dt>获取更新</dt>
                <dd>
                  <li class="li"></li>
                  <a href="">iPhone/Android</a>
                </dd>
                <dd>
                  <li class="li"></li>
                  <a href="">卷皮QQ空间</a>
                </dd>
                <dd>
                  <li class="li"></li>
                  <a href="">卷皮新浪微博</a>
                </dd>
                <dd>
                  <li class="li"></li>
                  <a href="">开放API</a>
                </dd>
              </dl>
            </div>
            <div class="li-box">
              <dl>
                <dt>获取更新</dt>
                <dd>
                  <li class="li"></li>
                  <a href="">iPhone/Android</a>
                </dd>
                <dd>
                  <li class="li"></li>
                  <a href="">卷皮QQ空间</a>
                </dd>
                <dd>
                  <li class="li"></li>
                  <a href="">卷皮新浪微博</a>
                </dd>
                <dd>
                  <li class="li"></li>
                  <a href="">开放API</a>
                </dd>
              </dl>
            </div>
          </div>
          <!-- 右边 -->
          <div class="phone">
            <a href="#"
               class="a"></a>
            <p class="p1">周一至周日</p>
            <p class="p2">9:00-18:00 </p>
            <p class="p3">客服热线：400-0090-869</p>
          </div>

        </div>
        <div class="c">
          武汉奇米网络科技有限公司
          <a href="#"> | ICP许可证号：鄂B2-20150109 | </a>
          <a href="#">鄂公网安备42018502000390号</a>
          <a href="#"> | 食品流通许可证 SP4201991510041888　　</a>

        </div>
        <div class="d">
          <img src="https://jp.juancdn.com/juanpi/img/icon/r_315new.gif"
               alt="">
          <img src="https://jp.juancdn.com/juanpi/img/icon/r_cnnic.gif"
               alt="">
          <img src="https://jp.juancdn.com/juanpi/img/icon/r_gongshang.gif"
               alt="">
          <img src="https://static.anquan.org/static/outer/image/sm_124x47.png?id=www.juanpi.com?t=8"
               alt="">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.d {
  height: 61px;
  width: 1100px;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
}
#boo {
  border-top: 5px solid rgb(236, 6, 6);
  margin-top: 30px;
}
.d img {
  margin-left: 20px;
}
.s {
  height: 351px;
}
.c {
  width: 1100px;
  height: 38px;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
}

.code {
  background-image: url("../assets/jp-app-90.png");
  width: 90px;
  height: 136px;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}
.code p {
  margin: 0;
}
.content a {
  font-size: 13px;
}
.navent {
  margin-top: 20px;
}
.boo-top {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.p {
  position: absolute;
  bottom: 5px;
  font-size: 14px;
  color: gray;
}
.phone {
  width: 161px;
  height: 78px;

  position: relative;
}
.phone p {
  font-size: 14px;
  display: inline-block;
  position: absolute;
  right: 0;
  color: gray;
  font-size: 13px;
}
.p1 {
  top: -15px;
}
.p2 {
  top: 5px;
}
.p3 {
  color: gray;
  font-size: 13px;
  bottom: 0;
}
.a {
  display: inline-block;
  background-image: url("../assets/service_add.gif");
  background-size: 90px;
  background-position: -90px 110px;
  width: 86px;
  height: 35px;
  vertical-align: top;
}
.li {
  list-style: disc;
}
.li-box {
  position: relative;
}

.content {
  width: 765px;
  height: 123px;

  display: flex;
  justify-content: space-between;
}
.li {
  position: absolute;
  color: gray;
}
dt {
  margin-bottom: 10px;
}
dl {
  margin: 0;
}
</style>