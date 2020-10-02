#include<stdio.h>
main()
{
	unsigned int c=3;
	unsigned int x=0x0003;
	switch(c&x)
	{
		case 3: printf("Hello!  \t");
		case 2 :printf("Welcome \t");
		case 1 :printf("to All  \t");
		default : printf("\n");
	}
}
