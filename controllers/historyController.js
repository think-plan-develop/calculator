import HistoryServices from "../services/historyServices.js";

class HistoryController {
  static async getAllHistory(req, res) {
    try {
      const data = await HistoryServices.getAllHistory();
      return res.status(200).send({
        message: "get all successfully",
        data: data,
      });
    } catch (error) {
      res.send(error);
    }
  }

  static async getSingleHistory(req, res) {
    try {
      const data = await HistoryServices.getSingleHistory(req.params.id);
      return res.status(200).send({
        message: "get history by id successfully",
        data: data,
      });
    } catch (error) {
      res.send(error);
    }
  }

  static async clearSingleHistory(req, res) {
    try {
      const data =await  HistoryServices.clearSingleHistory(req.params.id);
      return res.status(200).send({
        message: "clear history by id successfully"
      });
    } catch (error) {
      res.send(error);
    }
  }

  static async  clearAllHistory(req, res) {
    try {
      const data = await HistoryServices.clearAllHistory();
      return res.status(200).send({
        message: "clear all history successfully"
      });
    } catch (error) {
      res.send(error);
    }
  }
}

export default HistoryController;
