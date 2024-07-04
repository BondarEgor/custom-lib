import { ExistingProvider, ProviderToken } from '@angular/core';
import { eyCreateToken, eyProvide } from '../../../cdk/utils';
export interface EyAppearanceOptions {
  readonly appearance: string;
}

export const EY_APPEARANCE_DEFAULT_OPTION: EyAppearanceOptions = {
  appearance: '',
};

export const EY_APPEARANCE_OPTIONS = eyCreateToken(
  EY_APPEARANCE_DEFAULT_OPTION
);

export function eyAppearanceOptionsProvider(
  token: ProviderToken<EyAppearanceOptions>
): ExistingProvider {
  return eyProvide(EY_APPEARANCE_OPTIONS, token);
}
