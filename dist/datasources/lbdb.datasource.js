"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LbdbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'lbdb',
    connector: 'postgresql',
    url: 'postgres://admin:1234@localhost/lbdb',
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: '1234',
    database: 'lbdb'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let LbdbDataSource = /** @class */ (() => {
    let LbdbDataSource = class LbdbDataSource extends repository_1.juggler.DataSource {
        constructor(dsConfig = config) {
            super(dsConfig);
        }
    };
    LbdbDataSource.dataSourceName = 'lbdb';
    LbdbDataSource.defaultConfig = config;
    LbdbDataSource = tslib_1.__decorate([
        core_1.lifeCycleObserver('datasource'),
        tslib_1.__param(0, core_1.inject('datasources.config.lbdb', { optional: true })),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], LbdbDataSource);
    return LbdbDataSource;
})();
exports.LbdbDataSource = LbdbDataSource;
//# sourceMappingURL=lbdb.datasource.js.map