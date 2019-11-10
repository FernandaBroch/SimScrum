export const calcSuccess = (skillsStory, skillsAssigned) => {
  //console.log(skillsStory);
  //console.log(skillsAssigned);

  const skillsNeeded = skillsStory.length;
  let skillFound;
  let result = [...skillsStory];

  const arrayRemove = ((arr, value) => {
    var index = arr.indexOf(value);       
    if (index > -1) {
      arr.splice(index, 1);
    }
  });

  skillsAssigned.forEach(colleague => {
    colleague.skills.every(skill => {
      if ( result.find(x => x === skill) !== undefined){
        skillFound = result.find(x => x === skill);
        arrayRemove(result, skillFound)
        return false;
      }else{
        return true;
      }
    });
  });

  const success = ((1 - (result.length / skillsNeeded)) * 100)

  return success
}
  
  