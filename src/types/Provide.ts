import type { Ref } from 'vue'

export interface LocationProvider {
  location?: Ref<string>
  updateLocation?: () => void
}
