import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {Buckets, BucketDetails} from '../models';
import {BucketsRepository} from '../repositories';

export class BucketsBucketDetailsController {
  constructor(
    @repository(BucketsRepository)
    protected bucketsRepository: BucketsRepository,
  ) {}

  @get('/buckets/{id}/bucket-details', {
    responses: {
      '200': {
        description: 'Array of Buckets has many BucketDetails',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(BucketDetails)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<BucketDetails>,
  ): Promise<BucketDetails[]> {
    return this.bucketsRepository.bucketDetails(id).find(filter);
  }

  @post('/buckets/{id}/bucket-details', {
    responses: {
      '200': {
        description: 'Buckets model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(BucketDetails)},
        },
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Buckets.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BucketDetails, {
            title: 'NewBucketDetailsInBuckets',
            exclude: ['id'],
            optional: ['bucketsId'],
          }),
        },
      },
    })
    bucketDetails: Omit<BucketDetails, 'id'>,
  ): Promise<BucketDetails> {
    return this.bucketsRepository.bucketDetails(id).create(bucketDetails);
  }

  @patch('/buckets/{id}/bucket-details', {
    responses: {
      '200': {
        description: 'Buckets.BucketDetails PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BucketDetails, {partial: true}),
        },
      },
    })
    bucketDetails: Partial<BucketDetails>,
    @param.query.object('where', getWhereSchemaFor(BucketDetails))
    where?: Where<BucketDetails>,
  ): Promise<Count> {
    return this.bucketsRepository.bucketDetails(id).patch(bucketDetails, where);
  }

  @del('/buckets/{id}/bucket-details', {
    responses: {
      '200': {
        description: 'Buckets.BucketDetails DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(BucketDetails))
    where?: Where<BucketDetails>,
  ): Promise<Count> {
    return this.bucketsRepository.bucketDetails(id).delete(where);
  }
}
