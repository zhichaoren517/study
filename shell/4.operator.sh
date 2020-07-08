#!/bin/bash


    # 乘号(*)前边必须加反斜杠(\)才能实现乘法运算；
    # if...then...fi 是条件语句，后续将会讲解。
    # 在 MAC 中 shell 的 expr 语法是：$((表达式))，此处表达式中的 "*" 不需要转义符号 "\" 。


# 算数运算符
# a='18'
# b=180

# val=`expr $a + $b `
# echo "a+b:$val"

# val=`expr $a - $b `
# echo "a-b:$val"

# val=`expr $a \* $b `
# echo "a*b:$val"

# val=`expr $a / $b `
# echo "a/b:$val"

# val=`expr $b \% $a`
# echo "a%b:$val"

# if [ $a == $b ]
#     then
#     echo " a == b "
# fi
# if [ $a != $b ]
#     then 
#     echo " a != b "
# fi

#### 关系运算符
a=1
b=10
x=`expr $a / $b`
y=1


# 关系运算符

# -eq 检测两个数是否相等，相等返回 true。
if [ $x -eq $y ]
    then 
        echo 'x==y'
    else
        echo 'x!=y'
fi

# -ne 检测两个数是否不相等，不相等返回 true。
if [ $x -ne $y ]
    then    
        echo 'x!=y'
    else
        echo 'x==y'
fi

# -gt 检测左边的数是否大于右边的，如果是，则返回 true。
if [ $x -gt $y ]
    then
        echo 'x>y'
    else
        echo 'x<y'
fi

# -lt 检测左边的数是否小于右边的，如果是，则返回 true。
if [ $x -lt $y ]
    then 
        echo 'x<y'
    else
        echo 'x>y'
fi

# -ge 检测左边的数是否大于等于右边的，如果是，则返回 true。
if [ $x -ge $y ]
    then 
        echo 'x>=y'
    else
        echo 'x<y'
fi

# -le 检测左边的数是否小于等于右边的，如果是，则返回 true。
if [ $x -le $y ]
    then   
        echo 'x<=y'
    else
        echo 'x>y'
fi
#  布尔运算符

# 或运算，有一个表达式为 true 则返回 true。
if [ $x -ge 1 -o $y -ge 1 ]
    then    
        echo '有一个表达式为 true'
    else
        echo '两个都为false'
fi

# 与运算，两个表达式都为 true 才返回 true。
if [ $x -gt 0 -a $y -gt 0 ]
    then 
        echo 'x、y都大于0'
    else    
        echo $x
fi

### 逻辑运算符

# ||	逻辑的 OR
if [[ $x -ge 1 || $y -ge 1 ]]
    then    
        echo '有一个表达式为 true'
    else
        echo '两个都为false'
fi

# &&	逻辑的 AND
if [[ $x -gt 0 && $y -gt 0 ]]
    then 
        echo 'x、y都大于0'
    else    
        echo $x
fi

# 字符串运算符

str1='asd'
str2='qwe'

# =	检测两个字符串是否相等，相等返回 true。
if [ $str1 = $str2 ]
    then 
        echo 'str1 = str2'
    else    
        echo 'str1 != str2'
fi

# !=	检测两个字符串是否相等，不相等返回 true。
if [ $str1 != $str2 ]
    then 
        echo 'str1 != str2'
    else    
        echo 'str1 = str2'
fi

# -z	检测字符串长度是否为0，为0返回 true。
if [ -z $str1 ]
    then 
        echo '长度为0'
    else    
        echo '长度大于0'
fi

# -n	检测字符串长度是否不为 0，不为 0 返回 true。
if [ -n $str1 ]
    then 
        echo '长度大于0'
    else    
        echo '长度为0'
fi

# $	检测字符串是否为空，不为空返回 true
if [ $str1 ]
    then 
        echo '不为空'
    else    
        echo '为空'
fi

