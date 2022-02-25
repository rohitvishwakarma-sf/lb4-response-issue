import {Entity, model, property} from '@loopback/repository';
import {Permissions} from 'loopback4-authorization';

@model()
export class User extends Entity implements Permissions<string> {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  permissions: string[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
