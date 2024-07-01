import type { ExistingProvider, ProviderToken } from '@angular/core';

export function eyProvide<T>(
  provide: ProviderToken<T>,
  useExisting: ProviderToken<T>,
): ExistingProvider;

export function eyProvide<T>(
  provide: ProviderToken<T | T[]>,
  useExisting: ProviderToken<T>,
  multi: boolean,
): ExistingProvider;

export function eyProvide<T>(
  provide: ProviderToken<T>,
  useExisting: ProviderToken<T>,
  multi = false,
): ExistingProvider {
  return { provide, useExisting, multi };
}
