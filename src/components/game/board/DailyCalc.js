export const createImpediments = ( success ) => {
  const impediment = Math.floor(Math.random() * 100);
  return ((impediment - success) > 0)  
}

export const dailyCalc = (backlog, allColleagues) => {
  //console.log(backlog, allColleagues)
  const mapBacklogToColleagues = backlog.reduce((map, story) => {
    map.set(story.id, allColleagues.filter(col => col.story === story.id))
    return map;
  }, new Map());
  return mapBacklogToColleagues;  
}