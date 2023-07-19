import { ExperimentUser, ExperimentUserProvider } from './user';
import { Variant, Variants } from './variant';

/**
 * Interface for the main client.
 * @category Core Usage
 */
export interface Client {
  fetch(user?: ExperimentUser, options?: FetchOptions): Promise<Client>;
  variant(key: string, fallback?: string | Variant): Variant;
  all(): Variants;
  clear(): void;
  exposure(key: string): void;
  getUser(): ExperimentUser;
  setUser(user: ExperimentUser): void;

  /**
   * @deprecated use ExperimentConfig.userProvider instead
   */
  getUserProvider(): ExperimentUserProvider;
  /**
   * @deprecated use ExperimentConfig.userProvider instead
   */
  setUserProvider(userProvider: ExperimentUserProvider): Client;
}

/**
 * Options to modify the behavior of a remote evaluation fetch request.
 */
export type FetchOptions = {
  /**
   * Specific flag keys to evaluate and set variants for.
   */
  flagKeys?: string[];
};
