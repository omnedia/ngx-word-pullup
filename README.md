# ngx-word-pullup

`@omnedia/ngx-word-pullup` is an Angular library that provides a smooth pull-up animation effect for words within Angular applications. This component is designed to sequentially pull up and reveal words with a customizable delay.

## Features

- Pull-up animation for displaying words sequentially.
- Fully customizable animation speed and style.
- Lightweight and easy to integrate as a standalone component.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-word-pullup
```

## Usage

Import the `NgxWordPullupComponent` in your Angular module or component:

```typescript
import { NgxWordPullupComponent } from '@omnedia/ngx-word-pullup';

@Component({
  ...
  imports: [
    ...
    NgxWordPullupComponent,
  ],
  ...
})
```

Use the component in your template:

```html
<om-word-pullup [words]="['Welcome', 'to', 'our', 'website!']" [wordDelay]="300"></om-word-pullup>
```

## API

```html
<om-word-pullup
  [words]="words"
  [wordDelay]="wordDelay"
  styleClass="your-custom-class"
></om-word-pullup>
```

- `words`: An array of strings or a single string to be animated. If a single string is provided, it will be split into individual words.
- `wordDelay`: (optional) The delay between the appearance of each word in milliseconds. Minimum value is 100 ms. Default is 200 ms.
- `styleClass`: (optional) A custom CSS class to apply to the component's wrapper element.

## Example

```html
<om-word-pullup
  [words]="'This is an example sentence'"
  [wordDelay]="150"
  styleClass="example-class"
></om-word-pullup>
```

This will animate each word of the sentence with a 150ms delay between them.

## Styling

To customize the appearance of the words or the container, use the styleClass input to apply your own CSS classes.

```css
.example-class {
  font-size: 24px;
  color: #333;
}
```

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.