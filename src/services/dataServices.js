import Data from '../models/Data';

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

const GetAllDayOfWeek = async () => {
  try {
    let data = await Data.find({});
    let dayOfWeek = []

    for (let obj in data){
      dayOfWeek.push(data[obj].day_of_week)
    }
    
    return dayOfWeek;
  } catch (error) {
    throw error;
  }
}

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

const GetAllGameType = async () =>{
  try {
    let data = await Data.find({});
    let gameType = []

    for (let obj in data){
      gameType.push(data[obj].game_type)
    }
    
    return gameType;
  } catch (error) {
    throw error;
  }
}

const GetAllItem = async () => {
  try {
    let data = await Data.find({});
    let item = []

    for (let obj in data){
      item.push(data[obj].item_name)
    }
    
    return item;
  } catch (error) {
    throw error;
  }
}

const GetAllItemPrice = async ()=>{
  try {
    let data = await Data.find({});
    let itemPrice = []

    for (let obj in data){
      itemPrice.push(data[obj].item_price_usd)
    }
    
    return itemPrice;
  } catch (error) {
    throw error;
  }
}

const GetAllItemQty = async ()=>{
  try {
    let data = await Data.find({});
    let itemQty = []

    for (let obj in data){
      itemQty.push(data[obj].item_qty)
    }
    
    return itemQty;
  } catch (error) {
    throw error;
  }
}

const GetAllTimePlay = async () =>{
  try {
    let data = await Data.find({});
    let timePlay = []

    for (let obj in data){
      timePlay.push(data[obj].time_play)
    }
    
    return timePlay;
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

const GetAllScore = async ()=> {
  try {
    let data = await Data.find({});
    let score = []

    for (let obj in data){
      score.push(data[obj].score)
    }
    
    return score;
  } catch (error) {
    throw error;
  }
}

export {GetAllNation,GetAllDayOfWeek,GetAllGame,GetAllGameType,GetAllItem,GetAllTimePlay,GetAllPlayToEarn,GetAllItemPrice,GetAllItemQty,GetAllScore}
