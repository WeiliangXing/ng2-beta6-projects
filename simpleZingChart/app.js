System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var Chart, ZingChart, App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Chart = (function () {
                function Chart(config) {
                    this.id = config['id'];
                    this.data = config['data'];
                    this.height = config['height'] || 300;
                    this.width = config['width'] || 600;
                }
                return Chart;
            })();
            ZingChart = (function () {
                function ZingChart(zone) {
                    this.zone = zone;
                }
                ZingChart.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.zone.runOutsideAngular(function () {
                        zingchart.render({
                            id: _this.chart['id'],
                            data: _this.chart['data'],
                            width: _this.chart['width'],
                            height: _this.chart['height']
                        });
                    });
                };
                ZingChart.prototype.ngOnDestroy = function () {
                    zingchart.exec(this.chart['id'], 'destroy');
                };
                ZingChart = __decorate([
                    core_1.Component({
                        selector: 'zingchart',
                        inputs: ['chart'],
                        template: "\n   <div id='{{chart.id}}'></div>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], ZingChart);
                return ZingChart;
            })();
            //Root Component
            App = (function () {
                function App() {
                    this.name = 'Angular2';
                    this.charts = [{
                            id: 'chart-1',
                            data: {
                                type: 'line',
                                series: [{
                                        values: [2, 3, 4, 5, 3, 3, 2]
                                    }],
                            },
                            height: 400,
                            width: 600
                        }];
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [ZingChart],
                        template: "\n    <zingchart *ngFor=\"#chartObj of charts\" [chart]='chartObj'></zingchart>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
            browser_1.bootstrap(App, [])
                .catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=app.js.map