# ngx-word-pullup

<a href="https://ngxui.com" target="_blank" style="display: flex;gap: .5rem;align-items: center;cursor: pointer; padding: 0 0 0 0; height: fit-content;">
  <img src="https://ngxui.com/assets/img/ngxui-logo.png" style="width: 64px;height: 64px;">
</a>

This Library is part of the NGXUI ecosystem. <br>
View all available components at https://ngxui.com

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
import {NgxWordPullupComponent} from '@omnedia/ngx-word-pullup';

@Component({
  ...
    imports:
[
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
  [animateOnView]="animateOnView"
  [direction]="direction"
  [pullupSpeed]="pullupSpeed"
  styleClass="your-custom-class"
></om-word-pullup>
```

- `words`: An array of strings or a single string to be animated. If a single string is provided, it will be split into individual words.
- `wordDelay`: (optional) The delay between the appearance of each word in milliseconds. Minimum value is 0 ms. Default is 100 ms.
- `animateOnView`: (optional) If the animation should play everytime the element gets into the view. Default is false.
- `direction`: (optional) The direction in wich the animation moves. Default is up.
- `pullupSpeed`: (optional) The speed of the pullup animation. Default is 0.5s.
- `styleClass`: (optional) A custom CSS class to apply to the component's wrapper element.

## Example

```html

<om-word-pullup
  [words]="'This is an example sentence'"
  [wordDelay]="150"
  [animateOnView]="true"
  [pullupSpeed]="'0.8s'"
  direction="down"
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
