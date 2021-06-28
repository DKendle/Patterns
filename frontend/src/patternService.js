
class PatternService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    //Fetch to the endpoint for patterns
    getPatterns(){
        fetch(`${this.endpoint}/patterns`)
        .then(response => response.json())
        .then(patterns => {
            for (const pattern of patterns) {
                let p = new Pattern(pattern)
                p.appendToDOM()
            }
        })
    }
}