/* Auto-generated code by ease-icon */

export default {
  props: {
    size: {
      type: String,
      default: "42",
    },
    colors: {
      type: Array,
      default: () => ["#333", "#333"],
    },
    mode: {
      type: String,
      defualt: "single",
    },
  },
  name: "Cart",
  data() {
    return {
      defaultColors: [
        "$MainStrokeColor$",
        "$MainFillColor$",
        "$SecondStrokeColor$",
        "$SecondFillColor$",
      ],
    }
  },
  render() {
    return (
      <svg
        width={this.size}
        height={this.size}
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 1C0 0.447715 0.447715 0 1 0H3C3.0933 0 3.18361 0.012776 3.26928 0.0366739C3.64141 0.100126 3.96144 0.372638 4.06682 0.760735L6.57561 10H15.4386L17.0463 4H8C7.44772 4 7 3.55228 7 3C7 2.44772 7.44772 2 8 2H18.3C18.8523 2 19.3 2.44772 19.3 3C19.3 3.04178 19.2974 3.08297 19.2925 3.12341C19.3012 3.23394 19.2916 3.34783 19.2612 3.46104L17.1907 11.1884C17.0878 11.5722 16.7752 11.8437 16.4092 11.9127C16.2843 11.9688 16.1458 12 16 12H6C5.85027 12 5.70822 11.9671 5.5807 11.9081C5.22747 11.8314 4.92824 11.5653 4.82702 11.1925L2.33092 2H1C0.447715 2 0 1.55228 0 1ZM8.5 15.5C8.5 16.3284 7.82843 17 7 17C6.17157 17 5.5 16.3284 5.5 15.5C5.5 14.6716 6.17157 14 7 14C7.82843 14 8.5 14.6716 8.5 15.5ZM15.5 17C16.3284 17 17 16.3284 17 15.5C17 14.6716 16.3284 14 15.5 14C14.6716 14 14 14.6716 14 15.5C14 16.3284 14.6716 17 15.5 17Z"
          fill={this.colors[1]}
        />
      </svg>
    )
  },
}
