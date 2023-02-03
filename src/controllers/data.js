import Data from '../models/Data';
import {GetAllNation,GetAllDayOfWeek,GetAllGame,GetAllGameType,GetAllItem,GetAllTimePlay,GetAllPlayToEarn,GetAllItemPrice,GetAllScore,GetAllItemQty} from '../services/dataServices';

export const createdData = async (req, res) => {
  Data.insertMany(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(400).send(error);
    });
};

export const allNation = async (req, res) => {
    GetAllNation()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
};

export const allDayOfWeek = async (req,res) => {
  GetAllDayOfWeek()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
}

export const allGame = async (req,res) => {
  GetAllGame()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
}

export const allGameType = async (req,res) => {
  GetAllGameType()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
}

export const allItem  = async (req,res) => {
  GetAllItem()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
}

export const allItemPrice  = async (req,res) => {
  GetAllItemPrice()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
}

export const allItemQty  = async (req,res) => {
  GetAllItemQty()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
}

export const allTimePlay  = async (req,res) => {
  GetAllTimePlay()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
}

export const allPlayToEarn  = async (req,res) => {
  GetAllPlayToEarn()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
}

export const allScore  = async (req,res) => {
  GetAllScore()
    .then(data => {
      const result = data;
      res.status(200).json({ status: true, result });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
}