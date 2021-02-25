import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked = true;
  clicks = [];
  clickCounter = 1;
  onClickFive = false;
  clickStyled = [];
  log = [];

  buttonClicked(){
    if(this.clicked){
      this.clicked = false;
    }else{
      this.clicked = true;
    }
  }
  createClick(){
      this.clicks.push(this.clickCounter);
      this.clickCounter = this.clickCounter + 1;    
  }
  onToggleDetails(){
    this.clicked = !this.clicked
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
