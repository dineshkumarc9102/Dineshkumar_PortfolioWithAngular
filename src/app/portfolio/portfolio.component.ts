import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project'
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent  implements OnInit{

  projects ={} as Project[];

  isCollapsed: boolean=true;
  typescript: boolean=false;
  angular: boolean=false;
  java: boolean=false;
  python: boolean=false;
  machinelearning: boolean=false;
  filtering:boolean=false;


  constructor(private titleService:Title, private projectService: ProjectsService)
  {
    this.titleService.setTitle('Dinesh Kumar - Portfolio');
  }
    ngOnInit():void{
      this.projects=this.projectService.GetProjects();
    }
    Filter(){

    let filterTags: Tag[]=[];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }

    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }

    if(this.java){
      filterTags.push(Tag.JAVA);
    }

    if(this.python){
      filterTags.push(Tag.PYHTON);
    }

    if(this.machinelearning){
      filterTags.push(Tag.MACHINELEARING);
    }

    if(this.python || this.java || this.machinelearning || this.angular || this.typescript  ){
      this.filtering=true;
    }
    else{
      this.filtering=false;
    }

    this.projects=this.projectService.GetProjectsByFilter(filterTags);
    }
    ResetFilters(){
      this.python=false;
      this.java=false;
      this.machinelearning=false;
      this.angular=false;
      this.typescript=false;
      this.filtering=false;


      this.projects=this.projectService.GetProjects();

    }
}

