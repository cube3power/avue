<template>
  <div class="pull-auto top-menu">
    <el-menu :default-active="activeIndex" mode="horizontal">
      <template v-for="item in items">
        <el-menu-item :index="item.parentId+''" @click.native="openMenu(item)">{{item.label}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { resolveUrlPath } from "@/util/util";
import { mapState, mapGetters } from "vuex";
export default {
  name: "top-menu",
  data() {
    return {
      activeIndex: "0",
      items: [
        {
          label: "首页",
          href: "/wel/index",
          parentId: 0
        },
        {
          label: "设置",
          parentId: 1
        }
      ]
    };
  },
  created() {},
  computed: {
    ...mapGetters(["tagCurrent", "menu"])
  },
  methods: {
    openMenu(item) {
      this.$store.dispatch("GetMenu", item.parentId).then(data => {
        let itemActive,
          childItemActive = 0;
        this.$store.commit("DEL_ALL_TAG");
        if (item.href) {
          itemActive = item;
        } else {
          if (this.menu[childItemActive].length == 0) {
            itemActive = this.menu[childItemActive];
          } else {
            itemActive = this.menu[childItemActive].children[childItemActive];
          }
        }

        this.$router.push({
          path: resolveUrlPath(itemActive.href)
        });
      });
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
.top-menu {
  padding: 0 50px;
  margin-top: -4px;
  box-sizing: border-box;
}
</style>