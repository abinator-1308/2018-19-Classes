#include<stdio.h>
#include<string.h>
#include<alloc.h>
main()
{
	char *a="hello world";
	char *b="today";
	int i;
	a=(char *)malloc(sizeof(b));
	i= sprintf(a,"%s",b);
	printf("\n%s %d ",a,i);
}