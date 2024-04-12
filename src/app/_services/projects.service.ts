import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] =[
    {
      id: 0,
      name:'My Portfolio Website',
      summary: 'Showcasing my skills, knowledge, etc..',
      description: 'This is my portfolio showcasing projects I\'ve worked on and contributions I\'ve made. Explore the code, check out the projects, and feel free to reach out for collaboration opportunities!',
      projectLink: '',
      tags: [Tag.ANGULAR,Tag.TYPESCRIPT],
      pictures: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPkxovTmxiUK4M28xNHS3YgyaBgDjOkOEtw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKt_IX_Nsf8Cl3kR0h4sVQ-Gipi7_rFmC_6oU4OQfMBm6GH_i_WqntTbgm1Z8KilzO-A&usqp=CAU"]
    },
    {
      id: 1,
      name:'Feature Selection and Classification Mode for Cancer',
      summary: 'This project conducted predictive analysis..',
      description: 'This project conducted predictive analysis to optimize algorithm selection and minimize error rates using confusion matrices and entropy. Demonstrated that effective system design, machine learning techniques, and classification can accurately detect early-stage cancer from clinical data.',
      projectLink: 'https://github.com/dineshkumarc9102/Dineshkumar_Feature_Selection_And_Classification_Model_For_Cancer',
      tags: [Tag.MACHINELEARING,Tag.PYHTON],
      pictures: []
    },
    {
      id: 2,
      name:'Agro Mobile Application',
      summary: 'The application bridge between farmers and customer..',
      description: 'The application is to allow farmers to fix a satisfactory rate for their product and to sell them as well. A user can login as a farmer, customer, retailers and even as hotel managers.',
      projectLink: 'https://github.com/dineshkumarc9102/Dineshkumar_Agro_Application',
      tags: [Tag.JAVA],
      pictures: []
    },
    {
      id: 3,
      name:'Detection and Prediction of Phishing Websites using Data Mining Techniques',
      summary: 'This projectidentify effective classifiers for classification performance.',
      description: 'This project evaluated Decision tree, Naïve Bayesian, and SVM classifiers on a phishing dataset to detect website types as legitimate or phishing. Its goal was to identify effective classifiers for classification performance.',
      projectLink: 'https://github.com/dineshkumarc9102/Dineshkumar_Detection_And_Prediction_Of_Phishing_Websites_Using_Data_Mining_Techniques',
      tags: [Tag.MACHINELEARING,Tag.PYHTON],
      pictures: []
    },
    {
    id: 4,
      name:'Library Management System',
      summary: 'Library Management System is a system which maintains..',
      description: 'Library Management System is a system which maintains the information about the books present in the library and Authors and book details.',
      projectLink: 'https://github.com/dineshkumarc9102/Dineshkumar_Library_Management_System',
      tags: [Tag.JAVA],
      pictures: []
    },
    {
      id: 5,
        name:'Bank Management System',
        summary: 'The Bank Management System is an application for maintaining a person\'s account in a bank.',
        description: 'The Bank Management System is an application for maintaining a person\'s account in a bank.',
        projectLink: 'https://github.com/dineshkumarc9102/Dineshkumar_Bank_Management_System',
        tags: [Tag.PYHTON],
        pictures: []
      },
];

  constructor() { }

  GetProjects(){
  return this.projects;
  }
  GetProjectByID(id:number):Project{
    let project =this.projects.find(project=> project.id === id);

    if (project === undefined){
      throw  new TypeError("There is no project that maches ID:"+id);
    }
    return project;
    }
    GetProjectsByFilter(filterTags:Tag[]){
      let filteredProjects: Project[]=[];

      this.projects.forEach(function (project){
        let foundAll= true;
        filterTags.forEach(function(filterTag){
          if(project.tags.includes(filterTag)==false){
            foundAll=false;
          }
        });
        if(foundAll){
          filteredProjects.push(project);
        }
      });
      return filteredProjects;
    }

}
