<template>
  <div class="photo-list-container">
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a @click="getImages(item.id)" :class="{'mui-control-item': true, 'mui-active': item.id == 0}" v-for="(item) in categories" :key="item.id">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>

    <img class="preview-img" :key="item.src" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">

    <ul>
      <li class="img-container" v-for="item in images" :key="item.id">
        <img v-lazy="item">
      </li>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      categories: [],
      images: [
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3457557120,2476737648&fm=11&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543661547&di=932ac470667368123db2ca3e9c07deaa&imgtype=jpg&er=1&src=http%3A%2F%2Fd.ifengimg.com%2Fq100%2Fimg1.ugc.ifeng.com%2Fnewugc%2F20180809%2F17%2Fwemedia%2F758b798d73984bd69edae2e70be6c2b9b903669f_size106_w690_h497.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543066938090&di=7047f5d14dc86145284b0bdbaba06516&imgtype=0&src=http%3A%2F%2Fwx2.sinaimg.cn%2Flarge%2F0071Tog1gy1fu3ev52oflj30hs0a07et.jpg"
      ],
      list: [{
          src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3457557120,2476737648&fm=11&gp=0.jpg",
          w: 1200,
          title: 'Image Caption 1',
          h: 900
        }, {
          src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543661547&di=932ac470667368123db2ca3e9c07deaa&imgtype=jpg&er=1&src=http%3A%2F%2Fd.ifengimg.com%2Fq100%2Fimg1.ugc.ifeng.com%2Fnewugc%2F20180809%2F17%2Fwemedia%2F758b798d73984bd69edae2e70be6c2b9b903669f_size106_w690_h497.jpg",
          w: 1200,
          title: 'Image Caption 1',
          h: 900
        }, {
          src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543066938090&di=7047f5d14dc86145284b0bdbaba06516&imgtype=0&src=http%3A%2F%2Fwx2.sinaimg.cn%2Flarge%2F0071Tog1gy1fu3ev52oflj30hs0a07et.jpg",
          w: 1200,
          title: 'Image Caption 1',
          h: 900
        }]
    };
  },
  methods: {
    getCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          this.categories = result.body.message;
          this.categories.unshift({
            id: 0,
            title: "全部"
          });
        }
      });
    },
    getImages(id) {
      // console.log(id)
      // 点击条目时根据ID获取图片数据
      this.$http.get("api/getimages/" + id).then(result => {
        if (result.body.status === 0) {
          this.images = result.body.message;
        }
      });
    }
  },
  created() {
    this.getCategory();
    // this.getImages(0);
  },
  mounted() {
    // 初始化区域滚动一定要放在mounted钩子函数中
    // 因为初始化操作必须要等DOM元素加载完成后才可以进行
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="less">
.img-container {
  width: 100%;
  min-height: 300px;
  margin: 10px 0;
  background-color: #ccc;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
  background-color: pink;
}

img[lazy="error"] {
  width: 100%;
  // height: 300px;
  // background-color: red;
}
</style>