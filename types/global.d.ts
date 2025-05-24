/* eslint-disable prettier/prettier */
import type { SetupWorkerApi } from 'msw'

declare global {
  interface Window {
    msw: { worker: SetupWorkerApi }
  }
}
