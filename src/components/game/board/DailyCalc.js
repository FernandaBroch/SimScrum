import { StatusEnum } from '../story/StatusEnum'
import { calcSuccess } from '../story/StoryCalc'
import { config } from '../../../config/config'

export const dailyCalc = (game, backlog, colleagues, handleUpdateStoryStatus, handleEndGame) => {
  backlogToColleagues(backlog, colleagues).forEach((storyColleagues, key) => {
    //find the story in the backlog list
    const story = backlog.find(b => b.id === key);
    //get story status
    const status = StatusEnum.get(story.status);
    //check if the story is failed or success
    const impedimentOccur = createImpediments(calcSuccess(story.skills, storyColleagues))
    //if success change the status of the history to the next status
    const newStatus = impedimentOccur ? status.name : status.next;
    //check if the story already have a SM, don't need to add it again
    const scrumMaster = storyAlreadyHasScrumMaster(story)
    //Add or Remove SM
    const addScrumMaster = checkScrumMaster(impedimentOccur, scrumMaster, story.status);
    //Update the story
    handleUpdateStoryStatus(key, newStatus, story.skills, storyColleagues, addScrumMaster)
  });     

  if(game.day > config.maxDays || allStoriesDone(backlog)) {
    handleEndGame(checkEndGame(game, backlog));
  }
}

const storyAlreadyHasScrumMaster = (story) => {
  const storySkills = Array.isArray(story) ? [...story] : [story]
  return storySkills.find(skill => skill === config.scrumMasterSkillId);
}

const createImpediments = (success) => {
  const impediment = Math.floor(Math.random() * 100);
  return ((impediment - success) > 0)
}

const checkScrumMaster = (impedimentOccur, scrumMaster, status) => {
  //check the story was successful, remove SM
  let addScrumMaster = scrumMaster && impedimentOccur === false ? 'remove' : impedimentOccur;
  //check if the story is a new one (disponivel), don't need a SM
  addScrumMaster = (scrumMaster && addScrumMaster !== 'remove') || status === 'disponivel' || status === 'pronto' ? false : addScrumMaster;
  return addScrumMaster;
}

const backlogToColleagues = (backlog, allColleagues) => {
  const mapBacklogToColleagues = backlog.reduce((map, story) => {
    map.set(story.id, allColleagues.filter(col => col.story === story.id))
    return map;
  }, new Map());
  return mapBacklogToColleagues;
}

export const checkEndGame = (game, backlog) => {
  return allStoriesDone(backlog) ? 'success' : 'fail'
}

export const allStoriesDone = (backlog) => backlog.length > 1 && backlog.every((story) => story.status === 'pronto');