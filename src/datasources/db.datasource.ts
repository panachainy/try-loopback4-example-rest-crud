// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-rest-crud
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

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

@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'lbdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.lbdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
