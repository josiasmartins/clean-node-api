import { MongoClient, Collection } from 'mongodb';
import { AccountModel } from '../../../../domain/models/account';

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (collection: any): AccountModel {
    const { _id, ...collectionWithId } = collection
    return Object.assign({}, collectionWithId, { id: _id })
  }


}