#include<stdio.h>
#include<string.h>
main()
{
	char *a="kammo DJ";
	const char *b="roomies!!";
	char *c;
	a=(char *)malloc(strlen(a) + strlen(b));
	c=(char *)malloc(strlen(a) + strlen(b));
	c=strcat(a,b);
	printf("\n%s",a);
}
