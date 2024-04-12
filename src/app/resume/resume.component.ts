import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isEducationOpen:boolean=false;
  isCertificationsOpen:boolean=false;
  isSkillsOpen:boolean=false;

  constructor(private titleService:Title, private renderer:Renderer2)
  {
    this.titleService.setTitle('Dinesh Kumar - Resume');
  }
  DownloadFile(){
    const link =this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/Dinesh Kumar_Resume.pdf');
    link.setAttribute('download','Dinesh Kumar_Resume.pdf');
    link.click();
    link.remove();

  }
}
