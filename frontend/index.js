//Global variables to be accessable for all classes

//any initializations of the applications, fetch or reading data upon initialization
const base_url = "http://localhost:3000"
const commentService = new CommentService(base_url)
const patternService = new PatternService(base_url)

patternService.getPatterns()