export const calcSuccess = (skillsStory, skillsAssigned) => {
  const skillsNeeded = skillsStory.length;
  let skillFound;
  let arrayValidSkills = [];
  let storySkills = [...skillsStory];
  let orderBySkillsNr = [];
  let orderedColleagues = [];
 
  const arrayRemove = ((arr, value) => {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
  });

  //organize colleagues by numer of valid skills
  const organizeColeagues = (arr) => {
    arr.sort(function (a, b) {
      var keyA = a.cont;
      var keyB = b.cont;
      // Compare the 2 
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    arr.forEach(e => { orderBySkillsNr.push(e.colleague) })
  }

  const sortArr = (arr, order) => {
    order.forEach(function (key) {
      var found = false;
      arr = arr.filter(function (item) {
        if (!found && item['id'] === key) {          
          orderedColleagues.push(item);
          found = true;
          return false;
        } else
          return true;
      })
    })
  }

  skillsAssigned.forEach(colleague => {
    let contValidSkill = 0;
    colleague.skills.forEach(skill => {
      if (storySkills.find(x => x === skill) !== undefined) {
        contValidSkill++
        if (contValidSkill === 1) {
          arrayValidSkills.push({
            colleague: colleague.id,
            cont: contValidSkill,
          })
        } else if (contValidSkill > 1) {
          const pos = arrayValidSkills.map(function (e) { return e.colleague; }).indexOf(colleague.id);
          if (pos >= 0) {
            //console.log(pos)
            arrayValidSkills[pos]['cont'] = contValidSkill;
          }
        }
      }

    });
  });
  organizeColeagues(arrayValidSkills)
  sortArr(skillsAssigned, orderBySkillsNr)  

  orderedColleagues.forEach(colleague => {
    colleague.skills.every(skill => {
      if (storySkills.find(x => x === skill) !== undefined) {
        skillFound = storySkills.find(x => x === skill);
        arrayRemove(storySkills, skillFound)
        //console.log(storySkills)
        return false;
      } else {
        return true;
      }
    })
  })
  const success = ((1 - (storySkills.length / skillsNeeded)) * 100)
  return success
}