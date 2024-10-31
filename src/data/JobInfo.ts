export default class JobInfo {
  title: string;
  company: string;
  responsibilities: string[];
  techStack: string[];
  startDate: string;
  endDate: string;

  constructor(data: {
    title: string;
    company: string;
    responsibilities: string[];
    techStack: string[];
    startDate: string;
    endDate: string;
  }) {
    console.warn(data);

    this.title = data.title;
    this.company = data.company;
    this.responsibilities = data.responsibilities;
    this.techStack = data.techStack;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
  }
}
