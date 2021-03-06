/* Auto-generated code by ease-icon */
var Close = {
  props: {
    size: {
      type: String,
      "default": "42"
    },
    colors: {
      type: Array,
      "default": function _default() {
        return ["#333333"];
      }
    },
    darkColors: {
      type: Array,
      "default": function _default() {
        return ["#333333"];
      }
    },
    darkMode: Boolean
  },
  name: "Close",
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
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [h("path", {
      attrs: {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0.927526 0.926824C0.478423 1.37593 0.478423 2.10407 0.927526 2.55317L6.37225 7.99789L0.927525 13.4426C0.478423 13.8917 0.478423 14.6199 0.927525 15.069C1.37663 15.5181 2.10477 15.5181 2.55387 15.069L7.99859 9.62424L13.4433 15.069C13.8924 15.5181 14.6206 15.5181 15.0697 15.069C15.5188 14.6199 15.5188 13.8917 15.0697 13.4426L9.62494 7.99789L15.0697 2.55317C15.5188 2.10407 15.5188 1.37593 15.0697 0.926823C14.6206 0.477721 13.8924 0.477721 13.4433 0.926824L7.99859 6.37155L2.55387 0.926823C2.10477 0.477721 1.37663 0.477721 0.927526 0.926824Z",
        fill: colors[0]
      }
    })]);
  }
};

export default Close;
