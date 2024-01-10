import Calculator from "../models/Calculator.js";
class CalculatorServices {
    static getCalculationResult(expression) {
        const operators = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          '*': (a, b) => a * b,
          '/': (a, b) => b!==0 ? a/b: "Invalid expression",
          '%': (a, b) => a * (b / 100)
        };

        const getPrecedence = (operator) => {
          const precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
            '%': 3
          };
          return precedence[operator] || 0;
        };
      
        const isOperator = (char) => Object.keys(operators).includes(char);
      
        const tokens = expression.match(/\d+\.?\d*|[()+\-*/%^]/g);
      
        if (!tokens) return "Invalid expression";
      
        const output = [];
        const stack = [];
      
        for (let token of tokens) {
          if (!isNaN(token)) {
            output.push(parseFloat(token));
          } else if (isOperator(token)) {
            while (stack.length && getPrecedence(stack[stack.length - 1]) >= getPrecedence(token)) {
              output.push(stack.pop());
            }
            stack.push(token);
          }
        }
      
        while (stack.length) {
          output.push(stack.pop());
        }
      
        const evaluate = [];
      
        for (let token of output) {
          if (!isOperator(token)) {
            evaluate.push(token);
          } else {
            const b = evaluate.pop();
            const a = evaluate.pop();
            evaluate.push(operators[token](a, b));
          }
        }
      
        return evaluate.length === 1 && !isNaN(evaluate[0]) ? evaluate[0] : "Invalid expression";
      } 


    static async storeCalculation(data){
        let res=await Calculator.create(data);
        return res;
    }
  }
  
  export default CalculatorServices;
  