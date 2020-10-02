#include<stdio.h>
main()
{
	int u,v,t;
	u=35;
	v=28;
	while(v!=0)
	{
		t=u%v;
		u=v;
		v=t;
	}
	printf("%d\n",u);
}