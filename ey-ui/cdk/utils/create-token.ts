import { InjectionToken } from '@angular/core';

export function eyCreateToken<T>(defaults: T): InjectionToken<T> {
  return eyCreateTokenFromFactory(() => defaults);
}

export function eyCreateTokenFromFactory<T>(factory: () => T): InjectionToken<T> {
  return new InjectionToken<T>('', { factory });
}
