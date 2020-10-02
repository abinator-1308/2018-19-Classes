#include<stdio.h>
void fun(int [], int *);
main()
{
	int b[20],*c,a;
	c=&a;
	printf("\nb=%u,c=%u",sizeof(b),sizeof(c));
	fun(b,c);
}
void fun(int b[], int *c)
{
 	printf("\nb=%d,c=%d",sizeof(b),sizeof(c));
}