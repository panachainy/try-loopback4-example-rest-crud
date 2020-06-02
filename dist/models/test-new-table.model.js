"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestNewTable = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let TestNewTable = /** @class */ (() => {
    let TestNewTable = class TestNewTable extends repository_1.Entity {
        constructor(data) {
            super(data);
        }
    };
    tslib_1.__decorate([
        repository_1.property({
            type: 'number',
            id: true,
            generated: true,
        }),
        tslib_1.__metadata("design:type", Number)
    ], TestNewTable.prototype, "id", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
        }),
        tslib_1.__metadata("design:type", String)
    ], TestNewTable.prototype, "name", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            default: 'defaultSurname',
        }),
        tslib_1.__metadata("design:type", String)
    ], TestNewTable.prototype, "surname", void 0);
    TestNewTable = tslib_1.__decorate([
        repository_1.model({ settings: { strict: false } }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], TestNewTable);
    return TestNewTable;
})();
exports.TestNewTable = TestNewTable;
//# sourceMappingURL=test-new-table.model.js.map