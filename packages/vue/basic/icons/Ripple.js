/* Auto-generated code by ease-icon */
var Ripple = {
  props: {
    size: {
      type: String,
      "default": "42"
    },
    colors: {
      type: Array,
      "default": function _default() {
        return ["#e90c59", "none", "#46dff0"];
      }
    },
    darkColors: {
      type: Array,
      "default": function _default() {
        return ["#e90c59", "none", "#46dff0"];
      }
    },
    darkMode: Boolean
  },
  name: "Ripple",
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
        xmlns: "http://www.w3.org/2000/svg",
        width: this.size,
        height: this.size,
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid"
      },
      style: "margin: auto; display: block; shape-rendering: auto;"
    }, [h("circle", {
      attrs: {
        cx: "50",
        cy: "50",
        r: "0",
        fill: colors[1],
        stroke: colors[0],
        "stroke-width": "2"
      }
    }, [h("animate", {
      attrs: {
        attributeName: "r",
        repeatCount: "indefinite",
        dur: "1s",
        values: "0;40",
        keyTimes: "0;1",
        keySplines: "0 0.2 0.8 1",
        calcMode: "spline",
        begin: "-0.5s"
      }
    }), h("animate", {
      attrs: {
        attributeName: "opacity",
        repeatCount: "indefinite",
        dur: "1s",
        values: "1;0",
        keyTimes: "0;1",
        keySplines: "0.2 0 0.8 1",
        calcMode: "spline",
        begin: "-0.5s"
      }
    })]), h("circle", {
      attrs: {
        cx: "50",
        cy: "50",
        r: "0",
        fill: colors[1],
        stroke: colors[2],
        "stroke-width": "2"
      }
    }, [h("animate", {
      attrs: {
        attributeName: "r",
        repeatCount: "indefinite",
        dur: "1s",
        values: "0;40",
        keyTimes: "0;1",
        keySplines: "0 0.2 0.8 1",
        calcMode: "spline"
      }
    }), h("animate", {
      attrs: {
        attributeName: "opacity",
        repeatCount: "indefinite",
        dur: "1s",
        values: "1;0",
        keyTimes: "0;1",
        keySplines: "0.2 0 0.8 1",
        calcMode: "spline"
      }
    })])]);
  }
};

export default Ripple;
