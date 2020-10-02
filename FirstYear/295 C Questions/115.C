#include<stdio.h>
void main(void);
int newvval(int);
void main()
{
	int ia[]={12,24,45,0};
	int i,sum=0;
	for(i=0;ia[i];i++)
		sum+=newval(ia[i]);
	printf("%d",sum);
}
int newval(int x)
{
	static int div=1;
	return(x/div++);
}