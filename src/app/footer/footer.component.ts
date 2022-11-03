import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() back: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  handleClickSave() {
    this.save.emit();
  }
  handleClickBack() {
    this.back.emit();
  }

}
