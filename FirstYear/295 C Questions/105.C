#include<stdio.h>
main()
{
	int k,x,y,z;
    z=x=y=z=0;
	k= ++x && y || ++z && !++z;
	printf("%d",x+z+k);
}