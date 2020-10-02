
#include<stdio.h>
#define PRINT(int) printf("int = %d\n",int)
main()
    {
     int x=1 ,y=1 ,z=1;
     x+= y+= z;
     PRINT( x < y ? y : x);
     PRINT( x < y ? x++ : y++);
     x=3 , y = z = 4;
     PRINT( z >= y && y >=x);
    }

