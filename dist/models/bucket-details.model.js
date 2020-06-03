"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BucketDetails = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let BucketDetails = /** @class */ (() => {
    let BucketDetails = class BucketDetails extends repository_1.Entity {
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
    ], BucketDetails.prototype, "id", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'number',
            required: true,
        }),
        tslib_1.__metadata("design:type", Number)
    ], BucketDetails.prototype, "price", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'number',
        }),
        tslib_1.__metadata("design:type", Number)
    ], BucketDetails.prototype, "bucketsId", void 0);
    BucketDetails = tslib_1.__decorate([
        repository_1.model({ settings: { strict: false } }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], BucketDetails);
    return BucketDetails;
})();
exports.BucketDetails = BucketDetails;
//# sourceMappingURL=bucket-details.model.js.map