import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';
import { SkillCategory } from '../models/skill';
import { Experience } from '../models/experience';
import { Project } from '../models/project';
import { Achievement } from '../models/achievement';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private http = inject(HttpClient);

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('data/profile.json');
  }

  getSkills(): Observable<SkillCategory[]> {
    return this.http.get<SkillCategory[]>('data/skills.json');
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>('data/experience.json');
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('data/projects.json');
  }

  getAchievements(): Observable<Achievement[]> {
    return this.http.get<Achievement[]>('data/achievements.json');
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>('data/education.json');
  }
}
