#include<stdio.h>
main()
{
	FILE *fp;
	char str[20];
	fp=fopen("temp","w");
	fprintf(fp,"%s","hello world");
	fclose(fp);
	fp=fopen("temp","r");
	fscanf(fp,"%s %s",str,str);
	printf("\n%s",str);
}
