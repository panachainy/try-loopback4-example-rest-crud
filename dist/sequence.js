"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-rest-crud
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySequence = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const SequenceActions = rest_1.RestBindings.SequenceActions;
let MySequence = /** @class */ (() => {
    let MySequence = class MySequence {
        constructor(ctx, findRoute, parseParams, invoke, send, reject) {
            this.ctx = ctx;
            this.findRoute = findRoute;
            this.parseParams = parseParams;
            this.invoke = invoke;
            this.send = send;
            this.reject = reject;
        }
        async handle(context) {
            try {
                const { request, response } = context;
                const route = this.findRoute(request);
                const args = await this.parseParams(request, route);
                const result = await this.invoke(route, args);
                this.send(response, result);
            }
            catch (error) {
                this.reject(context, error);
            }
        }
    };
    MySequence = tslib_1.__decorate([
        tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.CONTEXT)),
        tslib_1.__param(1, context_1.inject(SequenceActions.FIND_ROUTE)),
        tslib_1.__param(2, context_1.inject(SequenceActions.PARSE_PARAMS)),
        tslib_1.__param(3, context_1.inject(SequenceActions.INVOKE_METHOD)),
        tslib_1.__param(4, context_1.inject(SequenceActions.SEND)),
        tslib_1.__param(5, context_1.inject(SequenceActions.REJECT)),
        tslib_1.__metadata("design:paramtypes", [context_1.Context, Function, Function, Function, Function, Function])
    ], MySequence);
    return MySequence;
})();
exports.MySequence = MySequence;
//# sourceMappingURL=sequence.js.map