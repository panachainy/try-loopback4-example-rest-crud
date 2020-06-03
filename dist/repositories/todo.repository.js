"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let TodoRepository = /** @class */ (() => {
    var _a;
    let TodoRepository = class TodoRepository extends repository_1.DefaultCrudRepository {
        constructor(dataSource) {
            super(models_1.Todo, dataSource);
        }
    };
    TodoRepository = tslib_1.__decorate([
        tslib_1.__param(0, core_1.inject('datasources.db')),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof datasources_1.DbDataSource !== "undefined" && datasources_1.DbDataSource) === "function" ? _a : Object])
    ], TodoRepository);
    return TodoRepository;
})();
exports.TodoRepository = TodoRepository;
//# sourceMappingURL=todo.repository.js.map