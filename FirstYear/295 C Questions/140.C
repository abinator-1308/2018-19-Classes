#include<stdio.h>
#define PRINT(int)  printf("%d\n",int)
main()
{
	auto int i=1;
	PRINT(i);
	{
		int i=2;
		PRINT(i);
		{
			PRINT(i);
			int i=10;
			i+=1;
			PRINT(i);
		}
		PRINT(i);
	}
	PRINT(i);
}
