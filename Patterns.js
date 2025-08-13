Approaches and easy solutions for pattern problems

const n = 5;

//outer loop

for (let i = 0; i < n; i++) {
  let pattern = " ";
  //space
  for (let j = 0; j < n - i + 1; j++) {
    pattern += " ";
  }
  //star
  for (let j = 0; j < 2 * i + 1; j++) {
    pattern += "*";
  }
  //space
  for (let j = 0; j < n - i + 1; j++) {
    pattern += " ";
  }
  console.log(pattern);
}

O/P:
       *      
      ***
     *****
    *******
   *********
-------------------------------------- { } --------------------------------------------------

const n = 5;

//outer loop

for (let i = 0; i < n; i++) {
  let pattern = " ";
  //space
  for (let j = 0; j < i; j++) {
    pattern += " ";
  }
  //star
  for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
    pattern += "*";
  }
  //space
  for (let j = 0; j < i; j++) {
    pattern += " ";
  }
  console.log(pattern);
}

O/P:

 *********
  *******
   *****
    ***
     *

----------------------------------------- { } -------------------------------------

   for (let i = 0; i <= 5; i++) {
  let pattern = "";

  for (let j = 0; j < n - i + 1; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

O/P:

* * * * * * 
* * * * *
* * * *
* * *
* *
*

-------------------------------------------{ } -----------------------------------------

  for (let i = 0; i <= 2 * n - 1; i++) {
  let pattern = " ";

  let stars = i;
  if (i > n) stars = 2 * n - stars;
  for (let j = 0; j < stars; j++) {
    pattern += "* ";
  }

  console.log(pattern);
}

O/P

 *
 * *
 * * *
 * * * *
 * * * * *
 * * * *
 * * *
 * *
 *

------------------------------------------- { } -----------------------------------------------

  let start;
for (let i = 0; i < +n; i++) {
  if (i % 2 !== 0) start = 1;
  else start = 0;

  let newRow = "";
  for (let j = 0; j <= i; j++) {
    newRow += start + " ";
    start = 1 - start;
  }
  console.log(newRow);
}

O/P:
0 
1 0
0 1 0
1 0 1 0
0 1 0 1 0
----------------------------------------------{ } ---------------------------------------------------

  
