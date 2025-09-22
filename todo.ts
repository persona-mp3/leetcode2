enum Priority {
  D = "DEFAULT",
  I = "IMPORTANT",
  M = "MILD",
}
class Task {
  // a task can be defined with a default status
  private _taskId: number | null = null;
  public title: string = "New Task"
  private _priority: Priority = Priority.D
  public description: string
  public content: string
  public dueDate: string


  constructor(title: string, description: string, content: string, dueDate: string, priority?: Priority) {
    this.title = title;
    this.description = description;
    this.content = content;
    this.dueDate = dueDate; // transform to a date-object instead
    this._priority = priority ? priority : this._priority // STACK-OVERFLOW, i can juse feel it
  }


  set priority(p: Priority) {
    this._priority = p
    console.log("Priority updated to", this._priority)
  }

  get priority() {
    return this._priority
  }

  set taskId(val: number) {
    if (!val) {
      console.log("you dimwit", val)
      return;
    }
    this._taskId = val
  }

}

class TaskCollection {
  // might just use a set/hashMap for more efficiency but since we need order we might let tasks have Id
  private tasks: Task[] = []
  private nextId: number = 0;

  addTask(t: Task) {
    // so get the id, we could just get the latest element in tasks and just assign them
    // t.taskId = this.tasks.length
    t.taskId = this.nextId++;
    this.tasks.push(t)
    console.log("new task %s assigned id of ->", t, this.nextId)
  }

  removeTask(id: number) {
    console.log("deleting /etc/passwd...")
    this.nextId--;
    this.tasks.shift()
  }

  show() {
    console.log(this.tasks)
  }
}


// can you define optional parameters like in python?? I think only python
const collection = new TaskCollection()
const sleepTask = new Task("Fix Sleep Schedule", "Mane, I need to start sleeping before 4am", "", "2014-09-12",)
// Code ran on first compile, should have inserted the Gigachad meme
collection.addTask(sleepTask)

collection.show()
