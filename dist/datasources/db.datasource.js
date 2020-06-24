"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-rest-crud
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDataSource = void 0;
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
    database: 'lbdb',
};
let DbDataSource = /** @class */ (() => {
    let DbDataSource = class DbDataSource extends repository_1.juggler.DataSource {
        constructor(dsConfig = config) {
            super(dsConfig);
        }
    };
    DbDataSource.dataSourceName = 'lbdb';
    DbDataSource.defaultConfig = config;
    DbDataSource = tslib_1.__decorate([
        core_1.lifeCycleObserver('datasource'),
        tslib_1.__param(0, core_1.inject('datasources.config.lbdb', { optional: true })),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DbDataSource);
    return DbDataSource;
})();
exports.DbDataSource = DbDataSource;
//# sourceMappingURL=db.datasource.js.map