const resume = 
{
    NAME    :     "VIJAY",
    AGE     :      "19",
    GENDER  :      "MALE",
    DEGREE  :      "BCA",
    LANGUAGE :     "ENGLISH,TAMIL",
    DOMAIN   :     "FULLSTACK DEVELOPER",
    EXPERIENCE :     "1 YEAR",
    SKILL      :     "PROBLEM SOLVER, TIME MANAGEMENT"
}
console.log(resume)
var resumekeys = Object.keys(resume)
console.log(resumekeys)
var resumevlaues = Object.values(resume)
console.log(resume)
for(i= 0 ; i<resume.length; i++){
    console.log(resumekeys[i],resume[resumekeys[i]])
}