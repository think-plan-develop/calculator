import Calculator from "../models/Calculator.js";
class HistoryService {
  static async getAllHistory() {
    const result=await Calculator.find({is_deleted:false},{_id:1,input:1,output:1});
    return result;
  }

  static async getSingleHistory(id) {
    const result=await Calculator.findById({_id:id,is_deleted:false},{_id:1,input:1,output:1});
    return result;
}

  static async clearSingleHistory(id) {
        const result=await Calculator.findByIdAndUpdate({_id:id},{is_deleted:true});
        return result;
  }

  static async clearAllHistory() {
    const result=await Calculator.updateMany({is_deleted:false});
    return result;
  }
}

export default HistoryService;
