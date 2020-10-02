#include<stdio.h>
main()
{
	char a[10]="\\0\0\2bc";
	int i=0;
	while(i<3)
	{
		switch(a[i++])
		{
			case '\\' : printf("\nThis question is good");
						break;
			case 0    : printf("\nThis question is too good");
						break;
			default : printf("\nPredict the output");
		}
	}
}