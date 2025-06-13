/**
 * @fileoverview Browser-related utils
 */

import { toast } from 'vue-sonner'

export const copy = (id: string) => {
  navigator.clipboard.writeText(id).then(() => {
    toast.success('Coppied!')
  })
}
