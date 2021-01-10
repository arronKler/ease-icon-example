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
  name: "MailOpen",
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
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <rect
            width="48"
            height="48"
            fill="white"
            fill-opacity="0.01"
            stroke-linejoin="round"
            stroke-width="4"
            stroke="none"
            fill-rule="evenodd"
          />
          <g transform="translate(4.000000, 4.000000)">
            <path
              d="M40,14 L40,35.8181818 C40,37.0231667 39.1045695,38 38,38 L2,38 C0.8954305,38 0,37.0231667 0,35.8181818 L0,14 L20,27 L40,14 Z"
              fill="none"
              fill-rule="nonzero"
              stroke-linejoin="round"
              stroke-width="4"
              stroke="#333"
            />
            <polyline
              stroke-linecap="round"
              points="-3.55271368e-15 13.7839098 20 -2.48689958e-14 40 13.7839098"
              stroke-linejoin="round"
              stroke-width="4"
              stroke="#333"
              fill="none"
              fill-rule="evenodd"
            />
          </g>
        </g>
      </svg>
    )
  },
}
