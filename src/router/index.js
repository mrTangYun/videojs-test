import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";

// import { Toast } from "vant";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },

  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  }
];

const router = new VueRouter({
  routes
});

// router.beforeEach(async (to, from, next) => {
//   if (to.name === "Login") {
//     next();
//   } else {
//     if (store.state.me) {
//       next();
//     } else {
//       const userString = window.localStorage.getItem("currentUser");
//       if (!userString) {
//         next({
//           name: "Login"
//         });
//       } else {
//         try {
//           Toast.loading({
//             duration: 0, // 持续展示 toast
//             forbidClick: true
//           });
//           const user = JSON.parse(userString);
//           const { token } = user;
//           const rolesResult = await Api.q_currentRoles(token);
//           if (rolesResult.success) {
//             const _roles = rolesResult.data.roles;
//             store.commit("set_me", {
//               ...user,
//               roles: _roles
//             });

//             Toast.clear();
//             next();
//             // this.showRouter = true;
//           } else {
//             Toast.clear();
//             next({
//               name: "Login"
//             });
//           }
//         } catch (error) {
//           Toast.clear();
//           next({
//             name: "Login"
//           });
//         }
//       }
//     }
//   }
// });

// router.afterEach((to, from) => {
//   // 在当前路由改变，但是该组件被复用时调用
//   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
//   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
//   // 可以访问组件实例 `this`

//   // console.log(to, from);
// });

export default router;
