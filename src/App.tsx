import { defineComponent } from "@vue/composition-api";
import "./App.less";
import HelloWorld from "./coms/HelloWorld/index";

export default defineComponent({
  // name: "App",
  // ! 必须改成 箭头函数, 防止 @vue/babel-preset-jsx 添加 const h = this.$createElement;
  setup: () => {
    return () => (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
        </div>
        {/* 全局注册的组件, 用 小写语法, 则 tsx 不报错 */}
        {/* <router-view /> */}
        <HelloWorld
          msg="Welcome to Your Vue.js + TypeScript App"
          eventClick={(e: any) => console.log('click', e.target)}
        />
      </div>
    );
  },
});

// ! 支持
// export default {
//   render() {
//     return (
//       <div id="app">
//         <div id="nav">
//           <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
//         </div>
//         {/* 全局注册的组件, 用 小写语法, 则 tsx 不报错 */}
//         {/* <router-view /> */}
//         <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" eventClick={(e: any) => console.log("click", e.target)} />
//       </div>
//     );
//   },
// };

// ! 不支持
// export default defineComponent(() => {
//   return () => {
//     return (
//       <div id="app">
//         <div id="nav">
//           <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
//         </div>
//         {/* 全局注册的组件, 用 小写语法, 则 tsx 不报错 */}
//         {/* <router-view /> */}
//         <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" eventClick={(e: any) => console.log("click", e.target)} />
//       </div>
//     );
//   }
// });
