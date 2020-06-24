"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BucketsRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let BucketsRepository = /** @class */ (() => {
    let BucketsRepository = class BucketsRepository extends repository_1.DefaultCrudRepository {
        constructor(dataSource, bucketDetailsRepositoryGetter) {
            super(models_1.Buckets, dataSource);
            this.bucketDetailsRepositoryGetter = bucketDetailsRepositoryGetter;
            this.bucketDetails = this.createHasManyRepositoryFactoryFor('bucketDetails', bucketDetailsRepositoryGetter);
            this.registerInclusionResolver('bucketDetails', this.bucketDetails.inclusionResolver);
        }
    };
    BucketsRepository = tslib_1.__decorate([
        tslib_1.__param(0, core_1.inject('datasources.db')),
        tslib_1.__param(1, repository_1.repository.getter('BucketDetailsRepository')),
        tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
    ], BucketsRepository);
    return BucketsRepository;
})();
exports.BucketsRepository = BucketsRepository;
//# sourceMappingURL=buckets.repository.js.map