export const myMixinTitle = {
  data: function () {
    return {
      mixinTitle: ""
    };
  },
  mounted: function () {
    this.mixinTitle = document.title;
  },
  destroyed: function () {
    document.title = this.mixinTitle;
  }
};
