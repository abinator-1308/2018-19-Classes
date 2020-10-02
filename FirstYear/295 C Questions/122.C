#include<stdio.h>
main()
{
	char a[2];
	char b=65;
	a[0]=b;
	a[1]=b++;
	a[2]='\0';
	puts(a);
}