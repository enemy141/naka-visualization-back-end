import Data from '../models/Data';

const GetTransactionCount = async ()=>{
  try {
    let data = await Data.find({});
    return data.length;
  } catch (error) {
    throw error;
  }
}

const GetUsernameCount = async ()=>{
  try {
    let data = await Data.find({});
    let username = []
    for (let obj in data){
      username.push(data[obj].username)
  }
    const frequency = {};
    username.forEach(function (username) {
      frequency[username] = frequency[username] ? frequency[username] + 1 : 1;
    });

    const usernameArray = Object.entries(frequency);

    return usernameArray.length;
  } catch (error) {
    throw error;
  }
}

const GetAllGameplayDate = async () =>{
  try {
    let data = await Data.find({});
    let GameplayPerDate = []

    for (let obj in data){
      let dateOnly = data[obj].game_start
      GameplayPerDate.push([dateOnly.toLocaleDateString(),data[obj].game])
    }

    let Group = GameplayPerDate.reduce((acc, curr) => {
      let date = curr[0];
      let store = curr[1];
    
      if (!acc[date]) {
        acc[date] = {};
      }
    
      if (!acc[date][store]) {
        acc[date][store] = 0;
      }
    
      acc[date][store]++;
    
      return acc;

    }, {});
    
    let groupedArray = Object.entries(Group)

    return groupedArray;
  } catch (error) {
    throw error;
  }
}

const GetAllGameTimePlay = async () =>{
  try {
    let data = await Data.find({});
    let timePlay = []

    for (let obj in data){
      timePlay.push([data[obj].game,data[obj].time_play])
    }
    
    return timePlay;
  } catch (error) {
    throw error;
  }
}

const GetAllNation = async () => {
  try {
    let data = await Data.find({});
    let nation = []

    for (let obj in data){
        nation.push(data[obj].country)
    }
    
    return nation;
  } catch (error) {
    throw error;
  }
};

const GetAllGame = async () =>{
  try {
    let data = await Data.find({});
    let game = []

    for (let obj in data){
      game.push(data[obj].game)
    }
    
    return game;
  } catch (error) {
    throw error;
  }
}

const GetAllPlayToEarn = async () =>{
  try {
    let data = await Data.find({});
    let playToEarn = []

    for (let obj in data){
      playToEarn.push(data[obj].play_to_earn)
    }
    
    return playToEarn;
  } catch (error) {
    throw error;
  }
}

export {GetAllNation,GetAllGame,GetAllGameTimePlay,GetAllPlayToEarn,GetTransactionCount,GetUsernameCount,GetAllGameplayDate}
