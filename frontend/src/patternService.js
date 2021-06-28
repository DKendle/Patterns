
class PatternService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    //Fetch to the endpoint for patterns
    getPatterns(){
        fetch(`${this.endpoint}/patterns`)
        .then(response => response.json())
        .then(patterns => {
            debugger
    })
    }
}