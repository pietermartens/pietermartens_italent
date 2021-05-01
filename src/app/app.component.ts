import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ItalentWebsite';
  imgSrc = 'assets/images/XP_start.png';
  isDisplay = true;
  openResume = true;
  openResumeInWord = true;
  openSelection = true;
  openCyber = true;
  openBerlinInWord = false;
  openGluoInWord = true;
  openEindReflectie = true;
  // tslint:disable-next-line:typedef
  onMouseOver() {
    this.imgSrc = 'assets/images/XP_start_hover.png';
  }
  // tslint:disable-next-line:typedef
  onMouseOut() {
    this.imgSrc = 'assets/images/XP_start.png';
  }
  // tslint:disable-next-line:typedef
  toggleStart(){
    this.isDisplay = !this.isDisplay;
  }
  // tslint:disable-next-line:typedef
  changeColorBin(){
    document.getElementById('recycleText').style.background = '#004e98';
  }
  // tslint:disable-next-line:typedef
  changeColorIE(){
    document.getElementById('textIE').style.background = '#004e98';
  }
  // tslint:disable-next-line:typedef
  changeColorMap1(){
    document.getElementById('mapResume').style.background = '#004e98';
  }
  // tslint:disable-next-line:typedef
  changeColorMap2(){
    document.getElementById('mapSelection').style.background = '#004e98';
  }
  // tslint:disable-next-line:typedef
  changeColorMap3(){
    document.getElementById('mapReflectie').style.background = '#004e98';
  }
  // tslint:disable-next-line:typedef
  changeColorWord(){
    document.getElementById('resumeText').style.background = '#004e98';
  }
  // tslint:disable-next-line:typedef
  changeColorNote(){
    document.getElementById('cyberText').style.background = '#004e98';
  }
  // tslint:disable-next-line:typedef
  changeColorBerlin(){
    document.getElementById('berlijnText').style.background = '#004e98';
  }
  // tslint:disable-next-line:typedef
  changeColorGluo(){
    document.getElementById('gluoText').style.background = '#004e98';
  }
  // tslint:disable-next-line:typedef
  openBin(){
    document.getElementById('recycleText').style.background = 'none';
  }
  // tslint:disable-next-line:typedef
  openIE(){
    document.getElementById('textIE').style.background = 'none';
  }
  // tslint:disable-next-line:typedef
  openMap1(){
    document.getElementById('mapResume').style.background = 'none';
    this.openResume = false;
  }
  // tslint:disable-next-line:typedef
  openMap2(){
    document.getElementById('mapSelection').style.background = 'none';
    this.openSelection = false;
  }
  // tslint:disable-next-line:typedef
  openMap3(){
    document.getElementById('mapReflectie').style.background = 'none';
    this.openEindReflectie = false;
  }
  // tslint:disable-next-line:typedef
  openResumeWord(){
    document.getElementById('resumeText').style.background = 'none';
    this.openResumeInWord = false;
  }
  // tslint:disable-next-line:typedef
  openBerlin(){
    document.getElementById('berlijnText').style.background = 'none';
    this.openBerlinInWord = false;
  }
  // tslint:disable-next-line:typedef
  openNote(){
    document.getElementById('cyberText').style.background = 'none';
    this.openCyber = false;
  }
  // tslint:disable-next-line:typedef
  openGluo(){
    document.getElementById('gluoText').style.background = 'none';
    this.openGluoInWord = false;
  }
  // tslint:disable-next-line:typedef
  closeResume(){
    this.openResume = true;
  }
  // tslint:disable-next-line:typedef
  closeResumeWord() {
    this.openResumeInWord = true;
  }
  // tslint:disable-next-line:typedef
  closeSelection(){
    this.openSelection = true;
  }
  // tslint:disable-next-line:typedef
  closeCyber(){
    this.openCyber = true;
  }
  // tslint:disable-next-line:typedef
  closeBerlin(){
    this.openBerlinInWord = true;
  }
  // tslint:disable-next-line:typedef
  closeGluo(){
    this.openGluoInWord = true;
  }
  closeReflection() {
    this.openEindReflectie = true;
  }
}
