import CalculatorServices from "../services/calculatorServices.js";

class CalculatorController {
  static async getCalculationResult(req, res) {
    try {
      const expression = req.body.expression;
      const result = CalculatorServices.getCalculationResult(expression);

      if (result == "Invalid expression") {
        await CalculatorServices.storeCalculation({
          input: expression,
          output: null,
        });
        return res.status(401).send({
          message: "Invalid expression",
          data: { input: expression, output: null },
        });
      }

      await CalculatorServices.storeCalculation({
        input: expression,
        output: result,
      });
      return res.status(200).send({
        message: "get result successfully",
        data: { input: expression, output: result },
      });
    } catch (error) {
      res.send(error);
    }
  }
}

export default CalculatorController;
