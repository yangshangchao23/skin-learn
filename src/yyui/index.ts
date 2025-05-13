import YYButtton from './YYButtton.vue'
import YYHeader from './YYHeader.vue'

const YYui = {
  'yy-button': YYButtton,
  'yy-header': YYHeader
}

export default {
  install(app: any) {
    for (const component in YYui) {
      app.component(component, YYui[component])
    }
  }
}
