// 9. Pattern: Print triangle using *

for (let i = 0; i<5; i++) {
    let stars = "*"
    for (let j = 0; j < i; j++) {
        stars = stars + "*";        
    }
    console.log(stars);
    
}

// first the loop starts then the stars is one star and goes inside the another loop j 
// and the j loop checks if j is less than i at first j and i is same value so the loop ends 
// without doing anything and one star is printed
// then now value of i is 1 so now inside loop gets executed once so one star is added 
// and two star is added
// and then again initial value of star is set to one star abd it goes inside the j loop
// and inside j loop the loop happens two times because value of i is 2 now
// and 2 stars are appended and then the   three stars is printed and this works so on