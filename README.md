# LotteryNumberGenerator

1. Forgot to incorporate ".value" in js when linking variables to IDs
e.g. var min = document.getElementById("min").value;
2. If variables are declared outside the "random generator" function, the function will only consider their default/given value, they will not take into consideration the user input.

If the variables are declared inside the function, user input value is taken into consideration and if no input, then default value is used

3. still generating '0' among numbers. 

4. if asking to generate numbers between 40-49, it will generate only number between 0-9, basically the amount left after max-min