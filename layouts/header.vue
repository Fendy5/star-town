<template>
  <header class="h-14 fixed w-full shadow-md bg-white z-10">
    <div class="h-full fd-container relative">
      <!--    logo-->
      <router-link class="float-left" to="/">
        <svg-icon class="h-14 w-28 cursor-pointer" icon-class="logo" />
      </router-link>
      <!--    导航栏-->
      <div class="flex items-center ab-center">
        <router-link :class="{'header-active':this.$route.name==='fans'}" to="/fans" class="px-10 relative">粉丝社区</router-link>
        <router-link :class="{'header-active':this.$route.name==='lover-community'}" to="/lover-community" class="px-10 relative">情侣社区</router-link>
        <router-link :class="{'header-active':this.$route.name==='create'}" to="/create" class="px-10 relative">我要创作</router-link>
      </div>
      <!--    个人信息-->
      <div class="flex justify-between items-center float-right relative top-4">
        <!--          <img :src="$store.userinfo">-->
        <img v-if="user.avatar" class="w-6 h-6 rounded-full" :src="user.avatar " alt="">
        <svg-icon v-else class="w-6 h-6" icon-class="avatar" />
        <div v-if="!user.avatar" class="flex pl-4 items-center cursor-pointer" @click="showLogin">
          <div class="px-2 text-sm">登录</div>
          <div class="fd-w-2 h-3 bg-gray-600" />
          <div class="pl-2 text-sm">注册</div>
        </div>
        <div v-else class="flex pl-4 items-center">
          <router-link to="/user" class="px-2 text-sm">个人中心</router-link>
          <div class="fd-w-2 h-3 bg-gray-600" />
          <div class="px-2 text-sm cursor-pointer" @click="logout">退出</div>
        </div>
      </div>
    </div>
    <div v-if="loginActive===0" :style="{display:dialog}" class="login rounded-2xl px-11 pb-14">
      <!--      登录注册切换的Tab-->
      <div class="mt-8 flex justify-around">
        <div :class="{'login-active':loginActive===0}" class="text-2xl cursor-pointer" @click="changeLogin(0)">登录</div>
        <div :class="{'login-active':loginActive===1}" class="text-2xl cursor-pointer" @click="changeLogin(1)">注册</div>
      </div>
      <div class="mt-9">
        <input v-model="form.phone" type="text" class="fd-input" placeholder="手机号码">
      </div>
      <div class="mt-9">
        <input v-model="form.password" type="password" class="fd-input" placeholder="密码">
      </div>
      <div class="flex justify-end mt-4">
        <router-link to="/forget" class="text-sm">忘记密码？</router-link>
      </div>
      <button class="bg-primary text-white rounded-full h-16 text-xl mt-12 w-full focus:outline-none" @click="login">立即登录</button>
    </div>
    <div v-else :style="{display:dialog}" class="login rounded-2xl px-11 pb-14">
      <!--      登录注册切换的Tab-->
      <div class="mt-8 flex justify-around">
        <div :class="{'login-active':loginActive===0}" class="text-2xl cursor-pointer" @click="changeLogin(0)">登录</div>
        <div :class="{'login-active':loginActive===1}" class="text-2xl cursor-pointer" @click="changeLogin(1)">注册</div>
      </div>
      <div class="mt-9">
        <input v-model="form.nickname" type="text" class="fd-input" placeholder="昵称">
      </div>
      <div class="mt-9">
        <input v-model="form.phone" type="number" class="fd-input" placeholder="手机号码">
      </div>
      <div class="mt-9">
        <input v-model="form.password" type="password" class="fd-input" placeholder="密码">
      </div>
      <div class="mt-9">
        <input v-model="re_password" type="password" class="fd-input" placeholder="确认密码">
      </div>
      <div class="flex justify-end mt-4">
        <router-link to="/forget" class="text-sm">忘记密码？</router-link>
      </div>
      <button class="bg-primary text-white rounded-full h-16 text-xl mt-12 w-full focus:outline-none" @click="register">立即注册</button>
    </div>
    <div class="mask" :style="{display:dialog}" @click="closeLogin" />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import { loginApi, registerApi } from '~/api/user'
import { getToken } from '~/utils/cookie'

export default {
  data () {
    return {
      form: {
        nickname: '',
        phone: '',
        password: ''
      },
      re_password: '',
      loginActive: 0 // 0-登录，1-注册
    }
  },
  computed: mapState({
    dialog: state => state.dialog,
    user: state => state.userinfo
  }),
  created () {
    if (getToken()) {
      this.$store.dispatch('getInfo')
    }
  },
  methods: {
    // 退出登录
    logout () {
      this.$confirm('是否要退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('logout')
        this.$router.replace('/')
      })
    },
    // 登录
    login () {
      loginApi(this.form).then((val) => {
        if (val.code === 0) {
          this.$store.dispatch('loginSuccessSetToken', val.data.token).then(() => {
            this.$store.dispatch('getInfo').then(() => {
              this.closeLogin()
              this.$router.go(0)
            })
          })
        }
      })
    },
    // 注册
    register () {
      registerApi(this.form).then(() => {
        this.closeLogin()
      })
    },
    closeLogin () {
      // const mask = document.getElementById('mask')
      // mask.style.display = 'none'
      // this.$refs.login.style.display = 'none'
      this.$store.commit('SET_DIALOG', 'none')
      this.form = {}
      this.re_password = ''
    },
    showLogin () {
      // const mask = document.getElementById('mask')
      // mask.style.display = 'block'
      // this.$refs.login.style.display = 'block'
      if (!this.user.avatar) { this.$store.commit('SET_DIALOG', 'block') }
    },
    changeLogin (type) {
      this.loginActive = type
    }
  }
}
</script>

<style lang="scss" scoped>
.header-active {
  color: #6d00ff;
  &::before {
    position: absolute;
    content: "";
    bottom: -8px;
    width: 30px;
    background: #6d00ff;
    height: 2px;
    left: 52px;
  }
}
</style>
