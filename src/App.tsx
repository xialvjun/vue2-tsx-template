import { defineComponent } from "@vue/composition-api";
import "./App.less";
import HelloWorld from './coms/HelloWorld';

export default defineComponent({
  // name: "App",
  setup() {
    return () => (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
        </div>
        {/* 全局注册的组件, 用 小写语法, 则 tsx 不报错 */}
        <router-view />
        <HelloWorld
          msg="Welcome to Your Vue.js + TypeScript App"
          eventClick={(e: any) => console.log('click', e.target)}
        />
      </div>
    );
  },
});
