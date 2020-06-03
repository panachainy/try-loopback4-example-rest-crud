"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BucketsBucketDetailsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BucketsBucketDetailsController = /** @class */ (() => {
    let BucketsBucketDetailsController = class BucketsBucketDetailsController {
        constructor(bucketsRepository) {
            this.bucketsRepository = bucketsRepository;
        }
        async find(id, filter) {
            return this.bucketsRepository.bucketDetails(id).find(filter);
        }
        async create(id, bucketDetails) {
            return this.bucketsRepository.bucketDetails(id).create(bucketDetails);
        }
        async patch(id, bucketDetails, where) {
            return this.bucketsRepository.bucketDetails(id).patch(bucketDetails, where);
        }
        async delete(id, where) {
            return this.bucketsRepository.bucketDetails(id).delete(where);
        }
    };
    tslib_1.__decorate([
        rest_1.get('/buckets/{id}/bucket-details', {
            responses: {
                '200': {
                    description: 'Array of Buckets has many BucketDetails',
                    content: {
                        'application/json': {
                            schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.BucketDetails) },
                        },
                    },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.param.query.object('filter')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BucketsBucketDetailsController.prototype, "find", null);
    tslib_1.__decorate([
        rest_1.post('/buckets/{id}/bucket-details', {
            responses: {
                '200': {
                    description: 'Buckets model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.BucketDetails) } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.BucketDetails, {
                        title: 'NewBucketDetailsInBuckets',
                        exclude: ['id'],
                        optional: ['bucketsId']
                    }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BucketsBucketDetailsController.prototype, "create", null);
    tslib_1.__decorate([
        rest_1.patch('/buckets/{id}/bucket-details', {
            responses: {
                '200': {
                    description: 'Buckets.BucketDetails PATCH success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.BucketDetails, { partial: true }),
                },
            },
        })),
        tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.BucketDetails))),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BucketsBucketDetailsController.prototype, "patch", null);
    tslib_1.__decorate([
        rest_1.del('/buckets/{id}/bucket-details', {
            responses: {
                '200': {
                    description: 'Buckets.BucketDetails DELETE success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.number('id')),
        tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.BucketDetails))),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BucketsBucketDetailsController.prototype, "delete", null);
    BucketsBucketDetailsController = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(repositories_1.BucketsRepository)),
        tslib_1.__metadata("design:paramtypes", [repositories_1.BucketsRepository])
    ], BucketsBucketDetailsController);
    return BucketsBucketDetailsController;
})();
exports.BucketsBucketDetailsController = BucketsBucketDetailsController;
//# sourceMappingURL=buckets-bucket-details.controller.js.map