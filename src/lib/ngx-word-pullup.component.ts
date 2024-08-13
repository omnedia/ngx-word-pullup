import { animate, style, transition, trigger } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { concat, concatMap, delay, from, Observable, of } from "rxjs";

@Component({
  selector: "om-word-pullup",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-word-pullup.component.html",
  styleUrl: "./ngx-word-pullup.component.scss",
  animations: [
    trigger("wordPullUp", [
      transition(":enter", [
        style({ transform: "translateY(100%)", opacity: 0 }),
        animate(
          "0.2s ease-in",
          style({ transform: "translateY(0)", opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class NgxWordPullupComponent implements OnInit {
  @Input("words")
  set words(words: string[] | string) {
    if (typeof words === "string") {
      words = words.split(" ");
    }

    this.pullupWords = words;
  }

  @Input("styleClass")
  styleClass?: string;

  @Input("wordDelay")
  set wordDelay(wordDelay: number) {
    if (wordDelay < 100) {
      this.wordDelaySpeed = 100;
      return;
    }

    this.wordDelaySpeed = wordDelay;
  }

  private wordDelaySpeed: number = 200;

  pullupWords: string[] = [];
  templateWords: string[] = [];

  ngOnInit(): void {
    if (this.pullupWords.length <= 0) {
      throw new Error(
        '"om-word-pullup: No words were passed to the component!"'
      );
    }

    this.startAnimation();
  }

  private startAnimation(): void {
    from(this.pullupWords)
      .pipe(concatMap((word) => this.pushWord(word)))
      .subscribe();
  }

  private pushWord(word: string): Observable<number | string> {
    return concat(
      of(this.templateWords.push(word)),
      of("").pipe(delay(this.wordDelaySpeed))
    );
  }
}
