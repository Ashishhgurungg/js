<?php
// right angle triangle
for ($i=0; $i < 5 ; $i++) { 
    for ($j=0; $j <= $i ; $j++) { 
        echo "*";
    }
    echo"\n";
}
// inverted right angle triangle
for ($i=0; $i < 5 ; $i++) { 
    for ($j=5; $j > $i ; $j--) { 
        echo "*";
    }
    echo"\n";
}
  
// inverted  right angle triangle another way
for ($i = 0; $i < 5; $i++){
        for($j = 0; $j < 5-$i; $j++){
            echo "*";
    }
    echo "\n";
}


//mirror right angle triangle
$n = 5;
for ($i = 0; $i < $n; $i++){
        for($j = 0; $j <= $n; $j++){
            if ($j >= $n-$i) {
                echo "*";
            }
            else{
                echo " ";
            }
    }
    echo "\n";
}


// x pattern , for x pattern the first slash of x is $i = $j, and $i + $j =6
for ($i=1; $i <=5 ; $i++) { 
    for ($j=1; $j <= 5 ; $j++) { 
        if ($j == $i || $i + $j == 6) {
            echo "* ";
        }
        else {
            echo "  ";
        }
    }
    echo "\n";

}

//y pattern
for ($i=1; $i <=5 ; $i++) { 
    for ($j=1; $j <= 10 ; $j++) { 
        if ($j == $i || $i + $j == 10) {
            echo "* ";
        }
        else {
            echo "  ";
        }
    }
    echo "\n";

}