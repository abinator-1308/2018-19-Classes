#include<stdio.h>
void main()
{
	int y,z;
	int x=y=z=10;
	int f=x;
	float ans=0.0;
	f=x*y;
	ans=x/3.0+y/3;
	printf("%d,%.2f",f,ans);
}