export class Project {
  progress: number =0;
  contributors: number =0;
  constructor(public category: string, public title: string, public description: string, public goal: number){};
}
