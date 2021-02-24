/* Auto-generated code by ease-icon */
var MailOpen = {
  props: {
    size: {
      type: String,
      "default": "42"
    },
    colors: {
      type: Array,
      "default": function _default() {
        return ["none", "white", "#333"];
      }
    },
    darkColors: {
      type: Array,
      "default": function _default() {
        return ["none", "white", "#333"];
      }
    },
    darkMode: Boolean
  },
  name: "MailOpen",
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
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [h("g", [h("rect", {
      attrs: {
        width: "48",
        height: "48",
        fill: colors[1],
        "fill-opacity": "0.01",
        "stroke-linejoin": "round",
        "stroke-width": "4",
        stroke: colors[0],
        "fill-rule": "evenodd"
      }
    }), h("g", {
      attrs: {
        transform: "translate(4.000000, 4.000000)"
      }
    }, [h("path", {
      attrs: {
        d: "M40,14 L40,35.8181818 C40,37.0231667 39.1045695,38 38,38 L2,38 C0.8954305,38 0,37.0231667 0,35.8181818 L0,14 L20,27 L40,14 Z",
        fill: colors[0],
        "fill-rule": "nonzero",
        "stroke-linejoin": "round",
        "stroke-width": "4",
        stroke: colors[2]
      }
    }), h("polyline", {
      attrs: {
        "stroke-linecap": "round",
        points: "-3.55271368e-15 13.7839098 20 -2.48689958e-14 40 13.7839098",
        "stroke-linejoin": "round",
        "stroke-width": "4",
        stroke: colors[2],
        fill: colors[0],
        "fill-rule": "evenodd"
      }
    })])])]);
  }
};

export default MailOpen;
