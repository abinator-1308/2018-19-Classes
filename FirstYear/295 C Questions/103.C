#include<stdio.h>
#define REC "this is the string"
int i=5;
main()
{
	char *p=REC;
	abc();
	printf("%s %d",p,i);
}
abc()
{
	printf("%d ",i);
}