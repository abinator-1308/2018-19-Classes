#include<stdio.h>
main()
{
	char *name="name";
	change(name);
	printf("%s",name);
}
change(char **name)
{
	char *nm="newname";
	name=nm;
}