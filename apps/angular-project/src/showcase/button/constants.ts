export const ATTRIBUTES_LIST = [
  {
    title: 'usage',
    attrName: '[eyButton]',
    buttons: [
      { insideText: 'Button', appearance: 'primary', size: 'l' },
      { insideText: 'Disabled', appearance: 'primary', size: 'l', disabled: true },
    ],
    typescript: `&lt;div class='btn-group'&gt;
    &lt;button *ngFor=&quot;let button of buttons&quot; eyButton [disabled]='button.disabled'&gt;
      {{ '{{' }} button.insideText {{ '}}' }}
    &lt;/button&gt;
  &lt;/div&gt;`,
    html: `&lt;div class='btn-group'&gt;
    &lt;button *ngFor=&quot;let button of buttons&quot; eyButton [disabled]='button.disabled'&gt;
      {{ '{{' }} button.insideText {{ '}}' }}
    &lt;/button&gt;
  &lt;/div&gt;`,
    less: `&lt;div class='btn-group'&gt;
    &lt;button *ngFor=&quot;let button of buttons&quot; eyButton [disabled]='button.disabled'&gt;
      {{ '{{' }} button.insideText {{ '}}' }}
    &lt;/button&gt;
  &lt;/div&gt;`
  },
  {
    title: 'appearance',
    attrName: '[appearance]',
    buttons: [
      { insideText: 'primary', appearance: 'primary', size: 'l' },
      { insideText: 'orange', appearance: 'orange', size: 'l' },
      { insideText: 'violet', appearance: 'violet', size: 'l' },
      { insideText: 'blue', appearance: 'blue', size: 'l' },
      { insideText: 'flat', appearance: 'flat', size: 'l' },
      { insideText: 'outlined', appearance: 'outlined', size: 'l' }
    ],
    typescript: `&lt;div class='btn-group'&gt;
    &lt;button *ngFor=&quot;let button of buttons&quot; eyButton [disabled]='button.disabled'&gt;
      {{ '{{' }} button.insideText {{ '}}' }}
    &lt;/button&gt;
  &lt;/div&gt;`,
    html: `&lt;div class='btn-group'&gt;
    &lt;button *ngFor=&quot;let button of buttons&quot; eyButton [disabled]='button.disabled'&gt;
      {{ '{{' }} button.insideText {{ '}}' }}
    &lt;/button&gt;
  &lt;/div&gt;`,
    less: `&lt;div class='btn-group'&gt;
    &lt;button *ngFor=&quot;let button of buttons&quot; eyButton [disabled]='button.disabled'&gt;
      {{ '{{' }} button.insideText {{ '}}' }}
    &lt;/button&gt;
  &lt;/div&gt;`
  },
  {
    title: 'size',
    attrName: '[size]',
    buttons: [
      { insideText: 'SIZE_XS', appearance: 'primary', size: 'xs' },
      { insideText: 'SIZE_S', appearance: 'primary', size: 's' },
      { insideText: 'SIZE_M', appearance: 'primary', size: 'm' },
      { insideText: 'SIZE_L', appearance: 'primary', size: 'l' },
      { insideText: 'SIZE_XL', appearance: 'primary', size: 'xl' },
    ],
    typescript: `&lt;div class='btn-group'&gt;
    &lt;button *ngFor=&quot;let button of buttons&quot; eyButton [disabled]='button.disabled'&gt;
      {{ '{{' }} button.insideText {{ '}}' }}
    &lt;/button&gt;
  &lt;/div&gt;`,
    html: `&lt;div class='btn-group'&gt;
    &lt;button *ngFor=&quot;let button of buttons&quot; eyButton [disabled]='button.disabled'&gt;
      {{ '{{' }} button.insideText {{ '}}' }}
    &lt;/button&gt;
  &lt;/div&gt;`,
    less: `&lt;div class='btn-group'&gt;
    &lt;button *ngFor=&quot;let button of buttons&quot; eyButton [disabled]='button.disabled'&gt;
      {{ '{{' }} button.insideText {{ '}}' }}
    &lt;/button&gt;
  &lt;/div&gt;`
  },
]
