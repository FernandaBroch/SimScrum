export const createImpediments = (success) => {
  const impediment = Math.floor(Math.random() * 100);
  return ((impediment - success) > 0)
}

export const checkScrumMaster = (impedimentOccur, scrumMaster, status) => {
  //check the story was successful, remove SM
  let addScrumMaster = scrumMaster && impedimentOccur === false ? 'remove' : impedimentOccur
  //check if the story is a new one (disponivel), don't need a SM
  addScrumMaster = (scrumMaster && addScrumMaster !== 'remove') || status === 'disponivel' || status === 'pronto'? false : addScrumMaster
  return addScrumMaster

}

export const dailyCalc = (backlog, allColleagues) => {
  //console.log(backlog, allColleagues)
  const mapBacklogToColleagues = backlog.reduce((map, story) => {
    map.set(story.id, allColleagues.filter(col => col.story === story.id))
    return map;
  }, new Map());
  return mapBacklogToColleagues;
}