import type { Type } from '@angular/core';
import {
  createComponent,
  DestroyRef,
  EnvironmentInjector,
  inject,
} from '@angular/core';

import { eyCreateTokenFromFactory } from './create-token';

const MAP = eyCreateTokenFromFactory(() => {
  const map = new Map();

  inject(DestroyRef).onDestroy(() =>
    map.forEach((component) => component.destroy()),
  );

  return map;
});

export function eyWithStyles(component: Type<unknown>): undefined {
  const map = inject(MAP);
  const environmentInjector = inject(EnvironmentInjector);

  if (!map.has(component)) {
    map.set(component, createComponent(component, { environmentInjector }));
  }

  return undefined;
}
