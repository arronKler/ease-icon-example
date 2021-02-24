/* Auto-generated code by ease-icon */
var Share = {
  props: {
    size: {
      type: String,
      "default": "42"
    },
    colors: {
      type: Array,
      "default": function _default() {
        return ["#333333", "rgba(0,0,0,0)"];
      }
    },
    darkColors: {
      type: Array,
      "default": function _default() {
        return ["#333333", "rgba(0,0,0,0)"];
      }
    },
    darkMode: Boolean
  },
  name: "Share",
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
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [h("path", {
      attrs: {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M10.4142 4.42843V13.0626C10.4142 13.6148 9.9665 14.0626 9.41421 14.0626C8.86193 14.0626 8.41421 13.6148 8.41421 13.0626V4.32843L7.20711 5.53553C6.81658 5.92606 6.18342 5.92606 5.79289 5.53553C5.40237 5.14501 5.40237 4.51184 5.79289 4.12132L8.62132 1.29289C8.82569 1.08853 9.0965 0.991109 9.36421 1.00064C9.63193 0.991109 9.90274 1.08853 10.1071 1.29289L12.9355 4.12132C13.3261 4.51184 13.3261 5.14501 12.9355 5.53553C12.545 5.92606 11.9118 5.92606 11.5213 5.53553L10.4142 4.42843Z",
        fill: colors[0]
      }
    }), h("path", {
      attrs: {
        d: "M4.73333 7H3.5C3.22386 7 3 7.22386 3 7.5V17.5C3 17.7761 3.22386 18 3.5 18H15.5C15.7761 18 16 17.7761 16 17.5V7.5C16 7.22386 15.7761 7 15.5 7H14.2667",
        stroke: colors[0],
        fill: colors[1],
        "stroke-width": "2",
        "stroke-linecap": "round"
      }
    })]);
  }
};

export default Share;
