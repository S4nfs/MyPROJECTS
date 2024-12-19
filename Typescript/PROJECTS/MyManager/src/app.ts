//Drag & Drop Interface
interface Draggable {
  dragStartHandler(event: DragEvent): void
  dragEndHandler(event: DragEvent): void
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void
  dropHandler(event: DragEvent): void
  dragLeaveHandler(event: DragEvent): void
}
//project type enum
enum ProjectStatus {
  Active,
  Finished,
}
class Project {
  constructor(public id: string, public title: string, public description: string, public people: number, public status: ProjectStatus) {}
}
//projects state management
type listener<T> = (items: T[]) => void

class State<T> {
  protected listeners: listener<T>[] = []
  addListener(listenerFn: listener<T>) {
    this.listeners.push(listenerFn)
  }
}
class ProjectState extends State<Project> {
  private projects: any[] = []
  private static instance: ProjectState
  constructor() {
    super()
  }

  static getInstance() {
    if (this.instance) {
      return this.instance
    }
    this.instance = new ProjectState()
    return this.instance
  }

  addproject(title: string, description: string, noOfPeople: number) {
    const newProject = new Project(Math.random().toString(), title, description, noOfPeople, ProjectStatus.Active)

    this.projects.push(newProject)
    this.updateListeners()
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    //update status after drag/drop
    const project = this.projects.find((prj) => prj.id === projectId)
    if (project && project.status !== newStatus) {
      project.status = newStatus
      this.updateListeners()
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice())
    }
  }
}

const projectState = ProjectState.getInstance()

//autobind decorator
function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    },
  }
  return adjDescriptor
}

//validation
interface Validatable {
  value: string | number
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
}
function validate(validatableInput: Validatable) {
  let isValid = true
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0
  }
  if (validatableInput.minLength != null && typeof validatableInput.value === "string") {
    isValid = isValid && validatableInput.value.length >= validatableInput.minLength
  }
  if (validatableInput.maxLength != null && typeof validatableInput.value === "string") {
    isValid = isValid && validatableInput.value.length <= validatableInput.maxLength
  }
  if (validatableInput.min != null && typeof validatableInput.value === "number") {
    isValid = isValid && validatableInput.value >= validatableInput.min
  }
  if (validatableInput.max != null && typeof validatableInput.value === "number") {
    isValid = isValid && validatableInput.value <= validatableInput.max
  }
  return isValid
}

//Component Base class
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement
  hostElement: T
  element: U

  constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string) {
    this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement
    this.hostElement = document.getElementById(hostElementId)! as T

    const importedNode = document.importNode(this.templateElement.content, true)

    this.element = importedNode.firstElementChild as U //project section
    if (newElementId) {
      this.element.id = newElementId
    }
    this.attach(insertAtStart)
  }
  private attach(insertAtStart: boolean) {
    this.hostElement.insertAdjacentElement(insertAtStart ? "afterbegin" : "beforeend", this.element)
  }

  abstract configure(): void

  abstract renderContent(): void
}
//Main Project Input class🍀🍀🍀🍀🍀🍀
class ProjectInput extends Component<HTMLDivElement, HTMLElement> {
  titleInputElement: HTMLInputElement
  descriptionInputElement: HTMLInputElement
  peopleInputElement: HTMLInputElement

  constructor() {
    super("project-input", "app", true, "user-input")
    this.titleInputElement = this.element.querySelector("#title") as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector("#description") as HTMLInputElement
    this.peopleInputElement = this.element.querySelector("#people") as HTMLInputElement
    this.configure()
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value
    const enteredDesc = this.descriptionInputElement.value
    const enteredPeople = this.peopleInputElement.value

    const titleValidatable: Validatable = { value: enteredTitle, required: true }
    const descValidatable: Validatable = { value: enteredDesc, required: true, minLength: 5 }
    const peopleValidatable: Validatable = { value: +enteredPeople, required: true, min: 1, max: 10 }

    if (!validate(titleValidatable) || !validate(descValidatable) || !validate(peopleValidatable)) {
      alert("Invalid or Empty field, Please try again.")
      return
    } else {
      return [enteredTitle, enteredDesc, +enteredPeople]
    }
  }

  private clearInputs() {
    this.titleInputElement.value = ""
    this.descriptionInputElement.value = ""
    this.peopleInputElement.value = ""
  }

  @AutoBind
  private submitHandler(e: Event) {
    e.preventDefault()
    const userInput = this.gatherUserInput()
    if (Array.isArray(userInput)) {
      //checking is Touple? bc touple is just an array
      const [title, desc, people] = userInput
      console.log(title, desc, people)
      projectState.addproject(title, desc, people)
      this.clearInputs()
    }
  }
  configure() {
    // this.element.addEventListener("submit", this.submitHandler.bind(this)); //binding to current class
    this.element.addEventListener("submit", this.submitHandler)
  }
  renderContent(): void {}
}

const star = new ProjectInput()

//project item class
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
  private project: Project

  get personsGet() {
    if (this.project.people === 1) {
      return "1 person"
    } else {
      return `${this.project.people} persons`
    }
  }
  constructor(hostid: string, project: Project) {
    super("single-project", hostid, false, project.id)
    this.project = project
    this.configure()
    this.renderContent()
  }

  @AutoBind
  dragStartHandler(event: DragEvent): void {
    console.log(event)
    event.dataTransfer!.setData("text/plain", this.project.id) //dataTrasfer property help you to trasfer data
    event.dataTransfer!.effectAllowed = "move" //indicates cursor copy/move
  }
  dragEndHandler(_: DragEvent): void {
    console.log("DragEnd")
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler)
    this.element.addEventListener("dragend", this.dragEndHandler)
  }
  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title
    this.element.querySelector("h3")!.textContent = this.personsGet + " assigned" //utilizing getter
    this.element.querySelector("p")!.textContent = this.project.description
  }
}
//render project list class
class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
  assignedProjects: any[]
  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`) //call the constructor of base class
    this.assignedProjects = []
    this.element.id = `${this.type}-projects`
    this.configure()
    this.renderContent()
  }

  @AutoBind
  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      //match the exact content to drop
      event.preventDefault()
      const listEl = this.element.querySelector("ul")!
      listEl.classList.add("droppable")
    }
  }

  @AutoBind
  dropHandler(event: DragEvent): void {
    console.log(event.dataTransfer!.getData("text/plain")) //our data
    const prjId = event.dataTransfer!.getData("text/plain")
    projectState.moveProject(prjId, this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished)
  }

  @AutoBind
  dragLeaveHandler(_: DragEvent): void {
    const listEl = this.element.querySelector("ul")!
    listEl.classList.remove("droppable")
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler)
    this.element.addEventListener("dragleave", this.dragLeaveHandler)
    this.element.addEventListener("drop", this.dropHandler)

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((ele) => {
        if (this.type === "active") {
          return ele.status === ProjectStatus.Active
        }
        return ele.status === ProjectStatus.Finished
      })
      this.assignedProjects = relevantProjects
      this.renderProjects()
    })
  }
  renderContent() {
    const listid = `${this.type}-projects-lists`
    this.element.querySelector("ul")!.id = listid
    this.element.querySelector("h2")!.textContent = this.type.toUpperCase() + " PROJECTS (Drag & Drop)"
  }

  private renderProjects() {
    const listElem = document.getElementById(`${this.type}-projects-lists`)! as HTMLUListElement
    listElem.innerHTML = ""
    for (const pj of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, pj)
    }
  }
}

const activeProjList = new ProjectList("active")
const finishedProjList = new ProjectList("finished")
