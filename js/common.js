/**
 * Created by 0418 on 17/2/15.
 */
require.config({
    baseUrl: "js/app",
    paths:{
        "jquery":'../../lib/jquery.min',
        "bootstrap":'../../lib/bootstrap',
        "chart":'../../lib/chart.min',
        "chart-data":'../../lib/chart-data',
        "easypiechart":'../../lib/easypiechart',
        "easypiechart-data":'../../lib/easypiechart-data',
        "bootstrap-datepicker":'../../lib/bootstrap-datepicker'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'easypiechart-data': {
            deps: ['jquery']
        },
        'bootstrap-datepicker': {
            deps: ['jquery']
        }
    }
});


