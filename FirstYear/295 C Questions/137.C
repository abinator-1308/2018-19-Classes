#include<stdio.h>
#define FUNC1(i) (i*(i-1))
#define FUNC2(i) (i==0?1:i*FUNC1(i-1))
main()
{
	int i=8;
	printf("\n%d",FUNC2(i));
}
