// const heading = document.createElement('h1');
// heading.textContent = 'Как интересно!'
// const root = document.querySelector('#root');
// root.append(heading)

// import './styles/main.scss'


import { ALL_COIN1 } from "./JS/api";
import { burgerFun } from "./JS/burger";
import { funModal } from "./JS/modal";
// import { cenacoinD } from "./JS/chartdata";
// import { cenacoinT } from "./JS/chartdata";
import { Chart, registerables } from 'chart.js'
// import { chart1 } from "./JS/chart1";
import * as _ from 'lodash'
import zoomPlugin from 'chartjs-plugin-zoom'
// import Chart from 'chart.js/auto';


import "./Style/modal.css"
import "./Style/style1.css"

ALL_COIN1();
funModal()
Chart.register(...registerables, zoomPlugin)

// cenacoinD()
// cenacoinT()
burgerFun()


// Chart



