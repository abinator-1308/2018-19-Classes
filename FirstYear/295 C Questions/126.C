#include<stdio.h>
main()
{
	int array[10];
	printf("%p %u %x %X",array,array,&array,&(&array));
}