/* Auto-generated code by ease-icon */

import Layer from "./icons/Layer"
import Service from "./icons/Service"
import Close from "./icons/Close"
import Share from "./icons/Share"
import Pinaple from "./icons/Pinaple"
import Ripple from "./icons/Ripple"
import Cart from "./icons/Cart"
import Phone from "./icons/Phone"
export { Layer, Service, Close, Share, Pinaple, Ripple, Cart, Phone }

export default {
  install(Vue, options = {}) {
    const prefix = options.prefix || "I"

    Vue.component(prefix + Layer.name, Layer)
    Vue.component(prefix + Service.name, Service)
    Vue.component(prefix + Close.name, Close)
    Vue.component(prefix + Share.name, Share)
    Vue.component(prefix + Pinaple.name, Pinaple)
    Vue.component(prefix + Ripple.name, Ripple)
    Vue.component(prefix + Cart.name, Cart)
    Vue.component(prefix + Phone.name, Phone)
  },
}
