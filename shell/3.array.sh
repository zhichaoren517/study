#!/bin/bash

myArray=( a b c "d" )
myArray[4]="e"
myArray[5]=f
echo "myArray:${myArray[*]}"
echo "myArray.length:${#myArray[@]}"

for i in "${myArray[*]}"; do 
    echo $i
done

for i in "${myArray[@]}"; do 
    echo $i
done