#include<stdio.h>
main()
{
	int i=10;
	for(;i-->5;i=(i<5?i:i-1))
		printf("\n%d",i);
    getch();

}
