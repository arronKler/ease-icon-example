/* Auto-generated code by ease-icon */

import Ripple from "./icons/Ripple"
import Cart from "./icons/Cart"
import Pinaple from "./icons/Pinaple"
import Phone from "./icons/Phone"
import Close from "./icons/Close"
import Service from "./icons/Service"
import Layer from "./icons/Layer"
import Share from "./icons/Share"
export { Ripple, Cart, Pinaple, Phone, Close, Service, Layer, Share }

export default {
  install(Vue, options = {}) {
    const prefix = options.prefix || "I"

    Vue.component(prefix + Ripple.name, Ripple)
    Vue.component(prefix + Cart.name, Cart)
    Vue.component(prefix + Pinaple.name, Pinaple)
    Vue.component(prefix + Phone.name, Phone)
    Vue.component(prefix + Close.name, Close)
    Vue.component(prefix + Service.name, Service)
    Vue.component(prefix + Layer.name, Layer)
    Vue.component(prefix + Share.name, Share)
  },
}
