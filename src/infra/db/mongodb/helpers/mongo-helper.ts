import { MongoClient, Collection } from 'mongodb';
import { AccountModel } from '../../../../domain/models/account';

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri;
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client?.isConnected()) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map (collection: any): AccountModel {
    const { _id, ...collectionWithId } = collection
    return Object.assign({}, collectionWithId, { id: _id })
  }


}