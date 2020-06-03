"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buckets = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const bucket_details_model_1 = require("./bucket-details.model");
let Buckets = /** @class */ (() => {
    let Buckets = class Buckets extends repository_1.Entity {
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
    ], Buckets.prototype, "id", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'date',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Buckets.prototype, "createDate", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'boolean',
            required: true,
        }),
        tslib_1.__metadata("design:type", Boolean)
    ], Buckets.prototype, "isComplete", void 0);
    tslib_1.__decorate([
        repository_1.hasMany(() => bucket_details_model_1.BucketDetails),
        tslib_1.__metadata("design:type", Array)
    ], Buckets.prototype, "bucketDetails", void 0);
    Buckets = tslib_1.__decorate([
        repository_1.model({ settings: { strict: false } }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], Buckets);
    return Buckets;
})();
exports.Buckets = Buckets;
//# sourceMappingURL=buckets.model.js.map