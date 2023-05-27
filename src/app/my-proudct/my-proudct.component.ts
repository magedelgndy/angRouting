import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-proudct',
  templateUrl: './my-proudct.component.html',
  styleUrls: ['./my-proudct.component.css'],
})
export class MyProudctComponent {
  @Input() myProudct: any;
  @Input() myArr: any;
  @Input() proIndex: number = 0;
  delete(index: number) {
    this.myArr = this.myArr.filter((item: {}, i: number) => i != index);
    this.newArr.emit(this.myArr);
  }
  sendData() {
    this.viewMyOpject.emit(this.myProudct);
  }
  @Output() viewMyOpject = new EventEmitter();
  @Output() newArr = new EventEmitter();
}
