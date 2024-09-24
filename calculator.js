<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Calculator</title>
</head>
<body>
    <h1>Calculator</h1>
    <input type="text" id="num1" placeholder="First number">
    <input type="text" id="num2" placeholder="Second number">
    <br>
    <button onclick="calculate('+')">+</button>
    <button onclick="calculate('-')">-</button>
    <button onclick="calculate('*')">*</button>
    <button onclick="calculate('/')">/</button>
    <br>
    <h2>Result: <span id="result"></span></h2>

    <script>
        function calculate(operator) {
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var result;

            if (operator === '+') result = num1 + num2;
            else if (operator === '-') result = num1 - num2;
            else if (operator === '*') result = num1 * num2;
            else if (operator === '/') result = num2 !== 0 ? num1 / num2 : 'Error';

            document.getElementById('result').innerText = result;
        }
    </script>
</body>
</html>
