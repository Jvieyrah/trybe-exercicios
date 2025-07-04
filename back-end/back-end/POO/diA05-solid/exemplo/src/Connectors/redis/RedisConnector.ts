// ./src/Connectors/redis/RedisConnector.ts

import redis, { RedisClient } from 'redis';
import Connector from '../Connector';
import ReadOnlyRedisConnector from './ReadOnlyRedisConnector';

export default class RedisConnector extends ReadOnlyRedisConnector implements Connector {

  public incrementCount(token: string): void {
    this.client.incr(token);
  }

  public clearCount(token: string): void {
    this.client.set(token, '0');
  }

  public firstCount = this.clearCount;
}