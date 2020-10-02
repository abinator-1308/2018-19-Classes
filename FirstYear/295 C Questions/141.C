#include<stdio.h>
main()
{
	int i=65;
	char c;
	c=i++;
	i=c;
	putchar(i);
}