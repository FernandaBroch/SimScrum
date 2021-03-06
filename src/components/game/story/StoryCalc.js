export const calcSuccess = (skillsStory, skillsAssigned) => {
  let storySkills = Array.isArray(skillsStory) ? [...skillsStory] : [skillsStory]
  const skillsNeeded = storySkills.length;
  let skillFound;
  let arrayValidSkills = [];  
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

  const experienceChance = (experience) => {
    switch (experience) {
      case 'junior': return 0.50
      case 'pleno': return 0.70
      case 'senior': return 1
      default: return 1
    }
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
  
  let success = ((1 - (storySkills.length / skillsNeeded)) * 100)

  const weight = success / skillsNeeded
  success = 0;
  orderedColleagues.forEach(colleague => {
    success = success + (experienceChance(colleague.experience)*weight)
  })  

  if(success > 100) return success = 100
  
  return success
}