#include<stdio.H>
main()
{
	int a=10,b=20;
	a=a^b;
	b=b^a;
	a=a^b;
	printf("a= %d b=%d ",a,b);
}