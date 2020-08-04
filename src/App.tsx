import { defineComponent, ref } from "@vue/composition-api";
import styles from "./App.module.less";

export default defineComponent({
  // name: "App",
  // ! 必须改成 箭头函数, 防止 @vue/babel-preset-jsx 添加 const h = this.$createElement;
  setup: () => {
    const num = ref(0);
    const on_btn_click = () => num.value++;
    return () => (
      <div class={styles.app}>
        <div>
          <div class={styles.nav}>
            <router-link to="/">Home</router-link>
            &nbsp;|&nbsp;
            <router-link to="/about">About</router-link>
          </div>
          {/* 全局注册的组件, 用 小写语法, 则 tsx 不报错 */}
          <router-view />
        </div>
        <div>
          {/* 支持 FnCom, ObjCom, VueSFC */}
          <button onClick={on_btn_click}>{num.value}</button>
          {num.value % 2 === 0 ? <FnCom></FnCom> : <ObjCom></ObjCom>}
        </div>
      </div>
    );
  },
});

const FnCom = (...args: any[]) => {
  console.log(args);
  return <span>FnCom</span>;
};

const ObjCom: any = {
  // ObjCom 的形式, 可以让 @vue/babel-preset-jsx 插入 h, 也可以不让其插入 h
  render() {
    return <span>ObjCom</span>;
  },
};
