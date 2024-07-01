import { FactoryProvider } from '@angular/core';
import { eyCreateToken, eyProvideOptions } from 'ey-ui/cdk/utils';
import { EyAppearanceOptions } from 'ey-ui/core/directives/appearance/appearance.options';
import { EySizeXL, EySizeXS } from 'ey-ui/core/types';

export interface EyButtonOptions extends EyAppearanceOptions {
  readonly size: EySizeXS | EySizeXL;
}

export const EY_BUTTON_DEFAULT_OPTIONS: EyButtonOptions = {
  appearance: 'primary',
  size: 'l',
};

export const EY_BUTTON_OPTIONS = eyCreateToken(EY_BUTTON_DEFAULT_OPTIONS);

export function eyButtonOptionsProvider(
  options: Partial<EyButtonOptions>,
): FactoryProvider {
  return eyProvideOptions(
    EY_BUTTON_OPTIONS,
    options,
    EY_BUTTON_DEFAULT_OPTIONS,
  );
}
