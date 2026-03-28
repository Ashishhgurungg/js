<?php
// reverse a array without using a extra space

$arr = [1,2,3,4,5];
$j = count($arr)-1;

for($i = 0; $i < count($arr); $i++){
    if ($i > $j) {
        break;
    }
    else{
        $temp = $arr[$i];
        $arr[$i] = $arr[$j];
        $arr[$j] = $temp;
    }
    $j--;

}

// $arr = [1,2,3,4,5];
// $j = count($arr) - 1;

for ($i = 0; $i < $j; $i++) {
    $temp = $arr[$i];
    $arr[$i] = $arr[$j];
    $arr[$j] = $temp;
    $j--;
}

echo "it is $j";
print_r($arr);