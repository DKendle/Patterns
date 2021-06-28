class Pattern {
    static all = []
    static patCont = document.getElementById("pattern-container")
    static patForm = document.getElementById("form-container")

    constructor({name, difficulty, description}){
        this.name = name
        this.difficulty = difficulty
        this.description = description

        this.element = document.createElement("li")
        this.element.dataset.id = this.id
        this.element.id = `contact-${this.id}`
        Pattern.all.push(this)
    }

    patternHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.name}</h3>
                <p>${this.difficulty}</p>
                <p>${this.description}</p>
            </div>
        ` 
        return this.element
    }


    appendToDOM(){
        Pattern.patCont.append(this.patternHTML())
    }

    static createPattern(){
        Pattern.patForm.innerHTML += `
        <form id="new-pattern-form">
            Name: <input type="type" id="name">
            Difficulty: <input type="type" id="difficulty">
            Description: <input type="type" id="description">
            Submit: <input type="submit" id="create">
        </form>
        
        `
    }
}