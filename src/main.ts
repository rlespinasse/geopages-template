import 'leaflet/dist/leaflet.css'
import 'leaflet-atlas/css'
import './css/app.css'

import { MapApp } from 'leaflet-atlas'
import { config } from './config'

// Initialize the atlas
const app = new MapApp(config)

// Export for debugging in browser console
;(window as any).app = app
