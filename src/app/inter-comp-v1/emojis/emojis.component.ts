import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { InfoEmoji } from './info-emoji';

@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.css']
})
export class EmojisComponent implements OnInit,OnChanges  {

  @Input()
  emoji: number

  emojiInfo: InfoEmoji

  infoEmojis = new Array<InfoEmoji>()
  constructor() {
    this.infoEmojis.push(
      new InfoEmoji('../../../assets/sad.svg', 'The good times of today, are the sad thoughts of tomorrow.'),
      new InfoEmoji('../../assets/confused.svg', 'Good, better, best. Never let it rest. Til your good is better and your better is best.'),
      new InfoEmoji('../../assets/happy.svg', 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.'),
      new InfoEmoji('../../assets/smiling.svg', 'The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.'),
    )
    this.emojiInfo = this.infoEmojis[0]
    console.log(this.emojiInfo.emoji) }

  ngOnInit() {
  }

  ngOnChanges( ch : SimpleChanges) {
    console.log(ch)
    if(this.emoji == 0) {
      this.emojiInfo = this.infoEmojis[0]
    }else if(this.emoji == 25) {
      this.emojiInfo = this.infoEmojis[1]
    }else if(this.emoji == 75){
      this.emojiInfo = this.infoEmojis[2]
    }else {
      this.emojiInfo = this.infoEmojis[3]
    }
  }
}
