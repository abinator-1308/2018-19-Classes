main()
{
	char a= 'A';
	if( (a=='Z')||( (a='L')&&( a=='A')))
		a='M';
	printf("%c",a);
	printf(" Nothing ");
}