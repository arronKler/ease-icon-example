<template>
  <div id="app" :class="{'app-dark': darkMode}">
    <aside class="left-panel">
      <ul class="nav">
        <a :href="'#' + titleInfo.name" class="nav-item" v-for="(titleInfo, idx) of titles" :key="idx">{{titleInfo.title}} <span class="nav-item__name">({{titleInfo.name}})</span></a>
      </ul>
    </aside>
    <main class="main-area">
      <template v-for="category of Object.keys(icons)">
        <h1 class="title" :id="category" :key="'title_' + category">{{icons[category].title}}</h1>
        <section :key="category" class="section">
          <IconItem
            :prefix="category"
            v-for="comp of icons[category].lib"
            :key="comp.name"
            :name="comp.name"
            :size="size"
            :colors="colors"
          ></IconItem>
        </section>
      </template>

    </main>
    <aside class="operation">
      <OperatePanel @darkMode="(val) => darkMode = val" @size="onSizeChange" @colors="onColors"></OperatePanel>
    </aside>
  </div>
</template>

<script>
import OperatePanel from './components/OperatePanel';
import IconItem from './components/IconItem';

export default {
  name: 'App',
  components: {
    IconItem,
    OperatePanel,
  },
  data() {
    return {
      size: '40',
      colors: ['#333', '#333', '', ''],
      darkMode: false
    };
  },
  computed: {
    titles() {
      const icons = this.icons || {}

      let titleInfos = []
      Object.keys(icons).forEach((iconName) => {
        titleInfos.push({
          name: iconName,
          title: icons[iconName].title
        })
      })

      return titleInfos
    }

  },
  methods: {
    onSizeChange(size) {
      this.size = size;
    },

    onColors(colors) {
      this.colors = colors;
    },
  },
};
</script>

<style lang="less">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100vw;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;

  transition: all .3s;
}

#app.app-dark {
  background-color: #333;
  color: #fff;

  .nav-item {
    color: #fff;
  }

  /deep/.el-form-item__label {
    color: #fff;
  }
}

.left-panel {
  width: 200px;
  flex-basis: 200px;
  border-right: 1px solid #aaa;
  height: 100%;
  flex-shrink: 0;

  .nav {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    &-item {
      width: 100%;
      margin-bottom: 10px;
      color: #2c3e50;
      text-decoration: none;
      border-bottom: 2px solid rgba(0,0,0,0);
      transition: all .3s;

      &:hover {
        border-bottom: 2px solid #2c3e50;
      }

      &__name {
        color: #aaa;
      }
    }
  }
}

.main-area {
  flex: 1;
  overflow-y: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  .title {
    padding: 0 10px;
  }

  .section {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    margin-bottom: 30px;
  }
}

.operation {
  width: 300px;
  flex-basis: 300px;
  border-left: 1px solid #aaa;
  padding: 20px;
  flex-shrink: 0;
}
</style>
