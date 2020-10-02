#include<stdio.h>
int func(int i)
{
	if(i==0)
		return 1;
	else
		return (i/func(i-1));
}
main()
{
      int i=4;
      printf("\n%d",func(i));
}