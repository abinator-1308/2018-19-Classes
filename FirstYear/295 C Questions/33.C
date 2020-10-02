#include<stdio.H>
#include<conio.H>
main()
{
	#ifdef A
			int a=10;
	#else
			int a=20;
	#endif
	int b=20;
	printf("\n%d",a+b);
	getch();
}
