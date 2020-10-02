#include<stdio.h>
struct A
{
	int a;
	char *b;
};
main()
{
	struct A *Aptr;
	clrscr();
	Aptr=(struct A*)malloc(sizeof(struct A));
	Aptr->b=(char *)malloc(10);
	Aptr->b='a';
	printf("\n\n\n\t\t%s",Aptr->b);
}