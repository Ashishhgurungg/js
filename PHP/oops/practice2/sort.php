<?php

//sort the 0 in one side and 1 in another side 

$arr = [1,0,1,0,1,1,0,0,1];
$a = 0;
$b = 0;
while ($a < count($arr)-1) {
    if ($arr[$a] == 0) {
        $temp = $arr[$a];
        $arr[$a] = $arr[$b];
        $arr[$b] = $temp;
        $b++;
    }
    $a++;
}

print_r($arr);