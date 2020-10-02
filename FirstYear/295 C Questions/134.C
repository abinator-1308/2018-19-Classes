#include<stdio.h>
main()
{
	char c=65;
	switch(c)
	{
		case 65 : switch(c++)
					{
						case 65 : putchar('A');
									break;
						case 66 : putchar('B');
									break;
					}
		case 'B' : putchar('A');
				   break;
	}
}