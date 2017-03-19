export class Course {
  constructor(
    id,
    title,
    description,
    duration,
    creatingDate) {
    this.id = id || "";
    this.title = title || "";
    this.description = description || "";
    this.duration = duration || 0;
    this.creatingDate = creatingDate || new Date();
  }

  getDateStr() {
    return this.creatingDate.toISOString().substr(0, 10);
  }
}

