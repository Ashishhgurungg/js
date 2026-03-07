<?php

class Cone {
    public const PIE = 3.14;
    public $radius;
    public $height;
    public $length;

    public function __construct($r, $h, $l){
        $this->radius = $r;
        $this->height = $h;
        $this->length = $l;
    }

    public function volume(){
        $volume = $this::PIE * $this->radius**2 * $this->height / 3;
        return $volume;
    }

    public function tsa(){
        $tsa = $this::PIE * $this->radius * ($this->radius + $this->length);
        return $tsa;
    }

}

$cone1 = new Cone(1,2,3);
echo("{$cone1->volume()}\n");
echo($cone1->tsa());