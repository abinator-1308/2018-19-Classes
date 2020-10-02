#include<stdio.H>
main()
{

	char *name="ITCENTRE";
	clrscr();
	name++;
	printf("\n\n%s",++name);
	++name;
	if(name[-2]=='h')
	printf("YES");
	else
		printf("NO");

}