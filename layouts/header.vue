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
      <div class="flex justify-between items-center float-right relative top-3">
        <router-link to="my">
          <svg-icon class="w-6 h-6" icon-class="avatar" />
        </router-link>
        <div class="flex pl-4 items-center cursor-pointer" @click="showLogin">
          <div class="px-2 text-sm">登录</div>
          <div class="fd-w-2 h-3 bg-gray-600" />
          <div class="px-2 text-sm">注册</div>
        </div>
      </div>
    </div>
    <div v-if="loginActive===0" ref="login" class="login rounded-2xl px-11 pb-14">
      <!--      登录注册切换的Tab-->
      <div class="mt-8 flex justify-around">
        <div :class="{'login-active':loginActive===0}" class="text-2xl cursor-pointer" @click="changeLogin(0)">登录</div>
        <div :class="{'login-active':loginActive===1}" class="text-2xl cursor-pointer" @click="changeLogin(1)">注册</div>
      </div>
      <div class="mt-9">
        <input type="text" class="w-full py-3 px-9 rounded-3xl text-xl border-2 border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="手机号码">
      </div>
      <div class="mt-9">
        <input type="text" class="w-full py-3 px-9 rounded-3xl text-xl border-2 border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="密码">
      </div>
      <div class="flex justify-end mt-4">
        <router-link to="/forget" class="text-sm">忘记密码？</router-link>
      </div>
      <button class="bg-primary text-white rounded-full h-16 text-xl mt-12 w-full focus:outline-none">立即登录</button>
    </div>
    <div v-else ref="login" class="login rounded-2xl px-11 pb-14">
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
    <div id="mask" @click="closeLogin" />
  </header>
</template>

<script>
import { registerApi } from '~/api/user'

export default {
  data () {
    return {
      form: {
        nickname: 'Fendy',
        phone: '15625701754',
        password: '123456'
      },
      re_password: '123456',
      loginActive: 0 // 0-登录，1-注册
    }
  },
  // mounted () {
  //   document.getElementById('mask').addEventListener('click', function (params) {
  //     console.log(params)
  //   })
  // },

  methods: {
    register () {
      registerApi(this.form).then((val) => {
        this.$message.success(val.data.message)
        this.closeLogin()
      })
    },
    closeLogin () {
      const mask = document.getElementById('mask')
      mask.style.display = 'none'
      this.$refs.login.style.display = 'none'
      this.form = {}
      this.re_password = ''
    },
    showLogin () {
      const mask = document.getElementById('mask')
      mask.style.display = 'block'
      this.$refs.login.style.display = 'block'
    },
    changeLogin (type) {
      this.loginActive = type
    }
  }
}
</script>

<style lang="scss" scoped>
.fd-input {
  @apply w-full py-3 px-9 rounded-3xl text-xl border-2 border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500
}
.login {
  width: 590px;
  z-index: 201;
  background: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  display: none;
  transform: translate(-50%, -50%);
}
.login-active {
  @apply text-purple-500 border-b-2 pb-4 border-purple-500
}
#mask {
  z-index: 200;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  display: none;
  background: #000;
}
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
