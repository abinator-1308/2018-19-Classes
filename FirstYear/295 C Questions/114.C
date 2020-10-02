#include<stdio.h>
int sumelement(int *,int);
main()
{
	int x[10];
	int i=10;
	for(;i;)
	{
		i--;
		*(x+i)=i;
	}
	printf("\n%d",sumelement(x,7));
}
int sumelement(int array[],int size)
{
	int i=0;
	float sum=0;
	for(;i<size;i++)
		sum+=array[i];
	return sum;
}