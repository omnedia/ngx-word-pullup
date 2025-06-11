import {CommonModule, isPlatformBrowser} from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  signal,
  ViewChild,
  ViewChildren
} from "@angular/core";

@Component({
  selector: "om-word-pullup",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-word-pullup.component.html",
  styleUrl: "./ngx-word-pullup.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxWordPullupComponent implements AfterViewInit, OnDestroy {
  @ViewChild("OmWordPullupWrapper") wordPullupRef!: ElementRef<HTMLElement>;
  @ViewChildren('wordElements') wordElements!: QueryList<ElementRef<HTMLElement>>;

  @Input("words")
  set words(words: string[] | string) {
    if (typeof words === "string") {
      words = words.split(" ");
    }

    this.pullupWords.set(words);
  }

  @Input("styleClass")
  styleClass?: string;

  @Input("animateOnView")
  animateOnView = false;

  @Input("direction")
  direction: 'up' | 'down' = 'up';

  @Input("pullupSpeed")
  set pullupSpeed(pullupSpeed: string) {
    this.style.update(prev => ({...prev, '--om-pullup-speed': pullupSpeed}));
  }

  @Input("wordDelay")
  set wordDelay(wordDelay: number) {
    if (wordDelay < 0) {
      wordDelay = 0;
    }

    this.wordDelaySpeed.set(wordDelay);
  }

  wordDelaySpeed = signal(100);

  pullupWords = signal<string[]>([]);

  isInView = signal(false);
  private intersectionObserver?: IntersectionObserver;
  private animatedOnce = false;

  style = signal({})

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) {
  }

  ngAfterViewInit(): void {
    if (this.pullupWords().length <= 0) {
      throw new Error(
        '"om-word-pullup: No words were passed to the component!"'
      );
    }

    if (isPlatformBrowser(this.platformId)) {
      this.intersectionObserver = new IntersectionObserver(([entry]) => {
        const wasInView = this.isInView();
        this.isInView.set(entry.isIntersecting);

        if (!wasInView && this.isInView() && this.animateOnView || !this.animatedOnce && this.isInView()) {
          this.startAnimation();
        }

        if (this.animateOnView && !this.isInView()) {
          this.resetAnimation();
        }
      });
      this.intersectionObserver.observe(this.wordPullupRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private startAnimation(): void {
    this.animatedOnce = true;

    this.wordElements.forEach((el, i) => {
      const nativeEl = el.nativeElement;
      nativeEl.classList.remove('animate');

      void nativeEl.offsetWidth;
      nativeEl.style.animationDelay = `${i * this.wordDelaySpeed()}ms`;
      nativeEl.classList.add('animate');
    });
  }

  private resetAnimation(): void {
    this.wordElements.forEach((el) => {
      const nativeEl = el.nativeElement;
      nativeEl.classList.remove('animate');
    });
  }
}
