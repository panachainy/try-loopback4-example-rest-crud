"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let S = /** @class */ (() => {
    let S = class S extends repository_1.Model {
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
    ], S.prototype, "id", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            default: 'defaultName',
        }),
        tslib_1.__metadata("design:type", String)
    ], S.prototype, "name", void 0);
    S = tslib_1.__decorate([
        repository_1.model({ settings: { strict: false } }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], S);
    return S;
})();
exports.S = S;
//# sourceMappingURL=s.model.js.map