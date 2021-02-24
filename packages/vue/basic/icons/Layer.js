/* Auto-generated code by ease-icon */
var Layer = {
  props: {
    size: {
      type: String,
      "default": "42"
    },
    colors: {
      type: Array,
      "default": function _default() {
        return ["white"];
      }
    },
    darkColors: {
      type: Array,
      "default": function _default() {
        return ["white"];
      }
    },
    darkMode: Boolean
  },
  name: "Layer",
  data: function data() {
    return {};
  },
  computed: {
    innerColors: function innerColors() {
      return this.darkMode ? this.darkColors : this.colors;
    }
  },
  render: function render(h) {
    var colors = this.innerColors;
    return h("svg", {
      attrs: {
        width: this.size,
        height: this.size,
        viewBox: "0 0 15 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [h("path", {
      attrs: {
        d: "M6.57197 9.28726C6.88084 9.10944 7.26101 9.10944 7.56987 9.28726L12.6367 12.2044C13.3048 12.5891 13.3048 13.5531 12.6367 13.9377L7.56987 16.8549C7.26101 17.0327 6.88084 17.0327 6.57197 16.8549L1.50511 13.9377C0.837045 13.5531 0.837046 12.5891 1.50511 12.2044L6.57197 9.28726Z",
        fill: colors[0],
        "fill-opacity": "0.4"
      }
    }), h("path", {
      attrs: {
        d: "M6.57197 6.28726C6.88084 6.10944 7.26101 6.10944 7.56987 6.28726L12.6367 9.20444C13.3048 9.58907 13.3048 10.5531 12.6367 10.9377L7.56987 13.8549C7.26101 14.0327 6.88084 14.0327 6.57197 13.8549L1.50511 10.9377C0.837045 10.5531 0.837046 9.58907 1.50511 9.20444L6.57197 6.28726Z",
        fill: colors[0],
        "fill-opacity": "0.7"
      }
    }), h("path", {
      attrs: {
        d: "M6.57197 3.28726C6.88084 3.10944 7.26101 3.10944 7.56987 3.28726L12.6367 6.20444C13.3048 6.58907 13.3048 7.55307 12.6367 7.9377L7.56987 10.8549C7.26101 11.0327 6.88084 11.0327 6.57197 10.8549L1.50511 7.9377C0.837045 7.55307 0.837046 6.58907 1.50511 6.20444L6.57197 3.28726Z",
        fill: colors[0]
      }
    })]);
  }
};

export default Layer;
