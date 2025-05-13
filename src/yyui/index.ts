import YYButtton from './YYButtton.vue'
import YYHeader from './YYHeader.vue'
import YYConfigProvider from './YYConfigProvider.vue'

const YYui = {
  'yy-button': YYButtton,
  'yy-header': YYHeader,
  'yy-config-provider': YYConfigProvider
}

export default {
  install(app: any) {
    for (const component in YYui) {
      app.component(component, YYui[component])
    }
  }
}
