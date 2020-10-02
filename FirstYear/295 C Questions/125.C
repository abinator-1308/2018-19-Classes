#include<string.h>
int instr(char *str,char o)
{
	int i=0;
	while(i<strlen(str))
	{
		if(str[i] == o)
			break;
		else
	}
	if(i<strlen(str))
		return i+1;
	else
		return -1;
}
main()
{
	char *a="hello world";
	printf("\n%d",instr(a,'l'));
}
