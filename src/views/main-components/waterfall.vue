<style>
.vue-waterfall {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.vue-waterfall .slot-box {
  position: absolute;
  top: 100%;
  left: 100%;
}
.vue-waterfall .vue-waterfall-column {
  float: left;
}
</style>
<template>
  <div class="vue-waterfall" :ref="id">
    <div class="slot-box" ref="slotBox">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "waterfall"
    },
    col: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      root: null,
      columns: []
    };
  },
  methods: {
    init() {
      this.root = this.$refs[this.id];
      var col = parseInt(this.col);
      for (var i = 0; i < col; i++) {
        let odiv = document.createElement("div");
        odiv.className = "vue-waterfall-column";
        odiv.style.width = 100 / parseInt(col) + "%";
        this.root.appendChild(odiv);
        this.columns.push(odiv);
      }
      this.resize();
      this.$refs.slotBox.innerHTML = "";
    },
    append(dom) {
      if (this.columns.length > 0) {
        let minCol = this.columns[0];
        for (var i = 0; i < this.columns.length; i++) {
          if (this.getHeight(minCol) > this.getHeight(this.columns[i])) {
            minCol = this.columns[i];
          }
        }
        minCol.appendChild(dom);
      }
    },
    resize() {
      let eles = this.$slots.default;
      eles.forEach((item, idx) => {
        this.append(item.elm);
      });
    },
    getHeight(dom) {
      return dom.offsetHeight;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  }
};
</script>
