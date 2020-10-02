#include<stdio.h>
main()
{
	int a=19,b=29,c=0,k;
	k=a<b? b<c?b:c : b>c?b:c ;
	printf("%d",k);
}