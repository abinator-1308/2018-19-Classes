// Falk AdSolution - Copyright (c) 2003 by Falk eSolutions AG - All rights reserved
function eG(Ye,Zg)
{return (Ye==0)?'':' '+Zg+'="'+Ye+'"';}function fG(v,V,i,J,h,U,m,n,F)
{J=fB(J);if(V)
jG(v,F);v.document.write('<a href="'+hB(h,i) +'" target="'+U+'" onmouseover="self.status=\'AdSolution\';return true;" onmouseout="self.status=\'\';return true;">');v.document.write('<img src="'+J+'"'+eG(m,'width')+eG(n,'height')+' border="0" id="Ads_img'+Ads_iid+'" name="Ads_img'+Ads_iid+'" alt="'+F+'"></a>');tB(v,i);if(V)
kG(v);vA='';wA=0;}function gG(v,V,i,D,h,U,m,n,F,H,I,Aa,O)
{if(V)
jG(v,F);h=hB(h,i);I=hB(I,i);D=mA[Ads_sec]+'/dat/bgf/'+D;H=mA[Ads_sec]+'/dat/bgf/'+H;aB=h;bB=hB('',i);var Ah=D+'?clickTag='+escape(h)+'&url='+escape(h);xB(1,'Flash-Url',Ah);var Db;if(O<=aC())
{v.document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=3,0,0,0" id=banner'+eG(m,'width')+eG(n,'height')+'">');v.document.write('<PARAM NAME=movie VALUE="'+Ah+'"><PARAM NAME=play VALUE=true><PARAM NAME=autoplay VALUE=true><PARAM NAME=wmode VALUE=opaque><PARAM NAME=quality VALUE=autohigh><PARAM name=scale value=exactfit>');v.document.write('<EMBED src="'+Ah+'" quality=autohigh autoplay=true play=true wmode=opaque scale=exactfit swLiveConnect=TRUE'+eG(m,'width')+eG(n,'height')+' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED></OBJECT>');}else
{v.document.write('<a href="'+I+'" target="'+U+'" onmouseover="self.status=\'AdSolution\';return true;" onmouseout="self.status=\'\';return true;"><img src="'+H+'"'+eG(m,'width')+eG(n,'height')+' border="0" alt="'+F+'"></a>');}tB(v,i);if(V)
kG(v);vA='';wA=0;}function hG(v,V,i,j,k,A,Ba,m,n,R,S,y,Ga,Bh)
{var D=jA[Ads_sec]+Ga+yB((Bh>0)?Bh:((R==0)?k:R));var Ch,Je;iid=Ads_iid;bid=k;rdm=pB(j,k,A);if(V||(Ba&&tA))
{var Dh='*';for(Je=1;Je<Ads_MultiUrl.length;Je++)
{h=Ads_MultiUrl[Je];Dh+=h.substring(Ads_CountUrl.length,h.length)+'*';}Ch=Ads_wid+'#'+Ads_iid+'#'+j+'#'+k+'#'+Ads_xwid+'#'+Ads_xiid+'#'+Ads_wrd+'#'+Ads_prf+'#'+Ads_par+'#'+Ads_Timestamp+'#'+rdm+'#'+gB()+'#'+Ads_LinkUrl+'#'+Dh+'#'+rB();}if(V&&(S!=''))
{xB(1,'Sidebar',D+'.html?'+escape(Ch));window.open(D+'.html?'+escape(Ch),S);}else if(V)
{xB(1,'Pop',D+'.html?'+escape(Ch));v.location.href=D+'.html?'+escape(Ch);}else if((Ba||y)&&tA)
{xB(1,'Ifr',D+'.html?'+escape(Ch));document.write('<iframe src="'+D+'.html?'+escape(Ch)+'" width="'+m+'" height="'+n+'" noresize scrolling="no" hspace="0" vspace="0" frameborder="0" marginheight="0" marginwidth="0"></iframe>');}else
{xB(1,'Jsc',D+'.js');if(Bh>0)
{tB(v,i);nB(jA[Ads_sec]+'/dat/dlv/afxplay.js');}nB(D+'.js');}vA='';wA=0;}function iG(v,V,i,K,L,Ba,m,n,y)
{L=fB(unescape(L));K=fB(unescape(K));xB(1,'Redirect',L+'/'+K);if(V)
v.location.href=K;else
{if((Ba||y)&&tA)
document.write('<iframe src="'+K+'" width="'+m+'" height="'+n+'" noresize scrolling="no" hspace="0" vspace="0" frameborder="0" marginheight="0" marginwidth="0"></iframe>');else
nB(L);}tB(window,i);vA='';wA=0;}function jG(v,F)
{v.document.open();v.document.write('<html><head><title>'+F+'</title></head><body topmargin="0" leftmargin="0" rightmargin="0" marginwidth="0" marginheight="0"><table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td valign="middle"><center>');}function kG(v)
{v.document.write('</center></td></tr></table></body></html>');v.document.close();}function lG(m,n,M,N,T,X,W,P,Y,Z)
{var w='locationbar=no,directories=no,statusbar=no,toolbar=no,location=no,menubar=no,personalbar=no';var Eh='Ads_Popup'+Ads_iid;var Fh,Gh;var Hh=0;var Ih=0;if(X)
{if (rA)
{Hh=10;Ih=30;}else if (sA)
{Hh=20;Ih=35;}w+=',scrollbars=no,resizable=no,width='+(screen.availWidth-Hh)+',height='+(screen.availHeight-Ih)+',screenX=0,screenY=0';if(qA)
w='fullscreen=yes';}else
{if(Y)
w+=',resizable=yes,width=90,height=70,innerWidth=90,innerHeight=70';else
w+=',resizable=no,width='+m+',height='+n;if(Z)
w+=',scrollbars=yes';else
w+=',scrollbars=no';if(T==16)
{M=(screen.width-m-25)*M/100;N=(screen.height-n-50)*N/100;}else if(T==24)
{M=(screen.width-m-25)*Math.random();N=(screen.height-n-50)*Math.random();}if (!tA)
w+=",screenX="+M+",screenY="+N;else
w+=",left="+M+",top="+N;}if((Ads_opt&32)>0)
Eh+=Math.round(Math.random()*100000);if((Ads_opt&64)>0)
w='locationbar=yes,scrollbars=yes,directories=yes,statusbar=yes,toolbar=yes,location=yes,menubar=yes,personalbar=yes,resizable=yes';xB(1,'PopUp open START','');v=open('',Eh,w);xB(1,'PopUp open END','');if(X&&(!qA))
v.moveTo(0,0);if(W&&(P==0))
v.blur();else if(W)
v.setTimeout('window.blur();',P*1000);if(Y)
bG(v,m,n);return v;}// Falk AdSolution - Copyright (c) 2003 by Falk eSolutions AG - All rights reserved
var bD=[];function cD(Re,Se)
{while(Re.length>800)
Re=Re.substr(0,Re.lastIndexOf('#',Re.length-2)+1);bD[Se]=Re;}function dD(Se,Ab)
{var Te='111';var Ue='@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`';var r=0;var Ve='#'+Ab+':';var Re=bD[Se];var We='';var T=Re.indexOf(Ve);var Xe=new Date();var Ye,Ze,Af,Bf,Sc;var Cf,Df,Ef,Ff;if(Re=='')
Re='#';if(T>-1)
{Ze=Re.substr(T+Ve.length,3+Se);if(T>0)
We=Re.substr(0,T);Ye=Re.length-T-Ve.length-3-Se;if(Ye>0)
We+=Re.substr(T+Ve.length+3+Se,Ye);Re=We;Af=new Date(Ue.indexOf(Ze.charAt(0))+2000,Ue.indexOf(Ze.charAt(1))-1,Ue.indexOf(Ze.charAt(2)));Xe.setHours(0);Xe.setMinutes(0);Xe.setSeconds(0);Bf=(Xe.getTime()-Af.getTime())/1000/60/60/24;intAltWTag=(Af.getDay()==0?7:Af.getDay());intNeuWTag=(Xe.getDay()==0?7:Xe.getDay());intAltMTag=Af.getDate();intNeuMTag=Xe.getDate();Te=((Bf>0.1)?'1':'0')+(((Bf>6)||(intAltWTag>intNeuWTag))?'1':'0')+(((Bf>29)||(intAltMTag>intNeuMTag))?'1':'0');if(Se==1)
r=Ue.indexOf(Ze.charAt(3));}Ze='#'+Ab+':';Sc=Xe.getYear();if(Sc<1900)
Sc+=1900;Ze+=Ue.charAt(Sc-2000);Ze+=Ue.charAt(Xe.getMonth()+1);Ze+=Ue.charAt(Xe.getDate());if(Se==1)
{r++;if(r>21)
r=21;Ze+=Ue.charAt(r);Te+=Ue.charAt(r);}Re=Ze+Re;cD(Re,Se);return Te;}function eD(Ve,Se,Gf)
{var Ia,Ja,Ye,Hf,If;var Re=bD[Se];var We='';var Jf='';var Kf=-1;if(Re=='')
Re='#';Ve='#'+Ve+'-';Ia=Re.indexOf(Ve);if(Ia!=-1)
Ja=Re.indexOf('#',Ia+1);if((Ia!=-1)&&(Ja!=1))
{Hf=Re.substring(Ia+Ve.length,Ja);if(Ia>0)
We=Re.substr(0,Ia);Ye=Re.length-Ja;if(Ye>0)
We+=Re.substr(Ja,Ye);Re=We;if(Se==6)
{If=Hf.split('-');Jf=If[0];Hf=If[1];}Kf=Gf-parseInt(Hf,10);if(Kf>1200)
Kf=-1;}bD[Se]=Re;return [Kf,Jf];}function fD(j)
{var Lf=new Date();var Kf=Lf.getHours()*60*60+Lf.getMinutes()*60+Lf.getSeconds();var Mf,Nf;Mf=eD(Ads_wid,6,Kf);Nf=eD(j,5,Kf);var Of=(Mf[0]==-1);var Pf=(Nf[0]==-1);var Qf=(Of?'1':'0')+(Pf?'1':'0');if(!Of)
Qf+=vB(Mf[0],4)+Mf[1];cD('#'+Ads_wid+'-'+Ads_iid+'-'+Kf+bD[6],6);cD('#'+j+'-'+Kf+bD[5],5);return Qf;}function gD()
{xB(2,'Read Cookies');var s,Eb,Rf,Sf,Se;var Fa=document.cookie;var Tf=Fa.split(';');var r=Tf.length;bD=['','','','','','','','','',''];for(s=0;s<r;s++)
{Se=-1;Sf=Tf[s].split('=');Eb=Sf[0];Rf=Sf[1];if(Eb.charAt(0)==' ')
Eb=Eb.substr(1,Eb.length-1);if(Eb=='KIDYMD')
bD[1]=Rf;else if(Eb=='WIDYMD')
bD[0]=Rf;else if(Eb=='BSUID')
bD[3]=Rf;else if(Eb=='BNDWDT')
bD[4]=Rf;else if(Eb=='VISKAM')
bD[5]=Rf;else if(Eb=='VISWEB')
bD[6]=Rf;else if(Eb.substr(0,3)=='KID')
Se=2;else if(Eb.substr(0,3)=='WID')
Se=7;else if(Eb.substr(0,3)=='NID')
Se=8;else if(Eb.substr(0,3)=='BID')
Se=9;if(Se>-1)
{Eb=Eb.substr(3,Eb.length-3);bD[Se]+='#'+Eb+':'+Rf+'#'+Eb+':';}}bD[2]='X'+bD[2]+'X';bD[7]='X'+bD[7]+'X';bD[8]='X'+bD[8]+'X';bD[9]='X'+bD[9]+'X';xB(1,'KIDYMD',bD[1]);xB(1,'WIDYMD',bD[0]);xB(1,'KID' ,bD[2]);xB(1,'BID' ,bD[9]);xB(1,'WID' ,bD[7]);xB(1,'NID' ,bD[8]);xB(1,'BSUID' ,bD[3]);xB(1,'BNDWDT',bD[4]);xB(1,'VISKAM',bD[5]);xB(1,'VISWEB',bD[6]);}function hD(j,Ac)
{var Uf='';if(KAS[Ac][4][4]>0)
Uf=oB(KAS[Ac][4][5]);else if((KAS[Ac][5]&1)>0)
Uf=oB(20);if(Uf!='')
document.cookie='KID'+j+'='+parseInt(jD(j,2)+1,10)+Uf;}function iD(j,Ac,k,u,Vf)
{var A;hD(j,Ac);if(BAS[u][2][4]>0)
document.cookie='BID'+k+'='+parseInt(jD(k,9)+1,10)+oB(BAS[u][2][5]);if(((KAS[Ac][4][22]&1)>0)&&(IAS[4]>0))
document.cookie='WID'+Ads_wid+'='+parseInt(jD(Ads_wid,7)+1,10)+oB(IAS[5]);if(((KAS[Ac][4][22]&2)>0)&&(IAS[6]>0))
document.cookie='NID'+Ads_nid+'='+parseInt(jD(Ads_nid,8)+1,10)+oB(IAS[7]);A=dD(1,j);A='&bls3='+A.substr(0,3)+dD(0,Ads_wid)+A.substr(3,1);document.cookie='WIDYMD='+bD[0]+oB(60*24*30);document.cookie='KIDYMD='+bD[1]+oB(60*24*30);A+='&bls4='+fD(j);document.cookie='VISKAM='+bD[5]+oB(20);document.cookie='VISWEB='+bD[6]+oB(20);if(bD[3]=='')
bD[3]=uB();else
A+='&uid=1';document.cookie='BSUID='+bD[3]+oB(60*24*30);return A;}function jD(Ab,Ad)
{var Mc=bD[Ad].split('#'+Ab+':');if(Mc.length==3)
return parseInt(Mc[1],10);else
return 0;}// Falk AdSolution - Copyright (c) 2003 by Falk eSolutions AG - All rights reserved
function fC(Lb,Mb)
{xB(1,'Select-Value',Mb);var s=0;var r=Lb.length;if(r==0)
return -1;while((s<r-1)&&(Mb>Lb[s][1]))
{Mb-=Lb[s][1];s++;}return Lb[s][0];}function gC(Nb,Ob,Pb)
{var s,Qb,Rb,Sb;xB(1,'---- CLOSE OLD PRIORITY','');xB(1,'share-sum of all successfully campaigns',Nb);xB(1,'free shares before this priority',Pb);if(Nb>Pb)
{Qb=Pb/Nb;for(s=Ob;s<oA.length;s++)
oA[s][1]*=Qb;Nb=Pb;}Pb-=Nb;xB(1,'free shares after this priority',Pb);return Pb;}function hC()
{xB(0,'campaign-filtering');var Tb,Ub,Vb,Wb,Xb;var Yb=-2;var Zb=KAS.length;var Pb=100;var Ac,j,Sb,Bc,Cc,Dc,Ec,Fc,Gc;var Nb;var Ob;oA=[];for (Ac=0;Ac<Zb;Ac++)
{Xb=((KAS[Ac][5]&2)>0);if(KAS[Ac][2]!=Yb)
{if(Yb!=-2)
Pb=gC(Nb,Ob,Pb);Yb=KAS[Ac][2];xB(1,'---- START NEW PRIORITY',Yb);Nb=0;Ob=oA.length;}xB(1,'<b>campaign '+KAS[Ac][0]+'</b>',KAS[Ac]);Bc=KAS[Ac][8];Cc=KAS[Ac][10];Dc=IAS[10];if((Dc-Cc)>0)
Bc=Bc*Dc/(Dc-Cc);Sb=KAS[Ac][1];if(Bc<=0)
Bc=Sb;Ec=Sb/Bc;if((Ec>10)||(Ec<0.1))
Ec=1;Fc=KAS[Ac][3];Sb=Sb*Ec*100/((Fc==0)?100:Fc);if(isNaN(Sb))
Sb=0;Wb=KAS[Ac][4];Tb=yC(Wb,0,KAS[Ac][0]);Vb=false;if(Wb.length>0)
{Vb=((Wb[0]==0)&&!((Wb[2]==0)&&(Wb[3]==1439)));Ub=(!Vb||wC(Wb[2],Wb[3]));if(Vb)
Sb=Sb*100/KAS[Ac][9];if(Tb&&!Ub&&!Xb)
bA+='9'+KAS[Ac][0]+'-';Tb=(Tb&&Ub);}xB(1,'timetargeting,successful',(Vb)+','+(Ub));if(Xb&&Tb)
{xB(2,'<font color=#ff8000>testcase successful</font>');j=KAS[Ac][0];cA+=j+'-';hD(j,Ac);}else if(Tb)
{xB(2,'<font color=#008000>successful</font>');oA[oA.length]=[Ac,Sb,Vb,Sb];Nb+=Sb;}else
{xB(2,'<font color=#ff0000>failed</font>');}}Pb=gC(Nb,Ob,Pb);}function iC()
{hC();var Hc,Ac,s,Sb;var Zb=oA.length;var Ic=0;xB(0,'campaign-selection');for (Ac=0;Ac<Zb;Ac++)
{s=oA[Ac][0];Sb=oA[Ac][1];Hc=Math.round(Sb/oA[Ac][3]*10)-1;if(Hc>9)
Hc=9;if((Hc>0)&&(KAS[s][0]>0))
bA+=Hc+''+KAS[s][0]+'-';Ic+=Sb;xB(1,'Campaign,Chance,ShareActual,Share,ShareNew',KAS[s][0]+' ,'+KAS[s][3]+' ,'+KAS[s][8]+' ,'+KAS[s][1]+' ,'+Sb);}xB(1,'Chances',bA);return fC(oA,Ic*Math.random());}function jC(Ac,j)
{var Jc=[];var Kc=BAS.length;var Lc=((KAS[Ac][5]&1)>0);var Ic=0;var u,Sb,Mc,Nc,Oc,Pc;var Qc=true;for (u=0;u<Kc;u++)
{xB(1,'<b>Banner '+BAS[u][0]+'</b>',BAS[u]);strInhalt=BAS[u][21];Pc=((strInhalt.length<3)||(strInhalt.indexOf('#'+Ads_iid+'#')>-1));if(((Ads_xl>1)||(Ads_yl>1))&&((BAS[u][13]>1)||(BAS[u][14]>1)))
{Qc=((Ads_xl==BAS[u][13])&&(Ads_yl==BAS[u][14]));xB(1,'Bannersize',Qc);}if(Qc&&Pc&&yC(BAS[u][2],1,BAS[u][0]))
{Sb=BAS[u][1];xB(2,'<font color=#008000>successful</font></b>,Anteil:'+Sb+'<b>');Jc[Jc.length]=[u,Sb];Ic+=Sb;}else
{xB(2,'<font color=#ff0000>failed</font>');}}Kc=Jc.length;if(Lc)
{Nc=jD(j,2);if(Kc>0)
u=Jc[Nc%Kc][0];else
u=-1;}else
u=fC(Jc,Ic*Math.random());return u;}// Falk AdSolution - Copyright (c) 2003 by Falk eSolutions AG - All rights reserved
var kC=false;var lC;var mC;var nC=0;function oC(Rc)
{return vB(Rc.getHours(),2)+':'+vB(Rc.getMinutes(),2)+':'+vB(Rc.getSeconds(),2);}function pC(Rc)
{var Sc=Rc.getYear();if(Sc<1900)
Sc+=1900;return vB(Sc,4)+'-'+vB(Rc.getMonth()+1,2)+'-'+vB(Rc.getDate(),2);}function qC()
{if(kC)
return;var Tc,Uc,Vc,s,Wc;var Xc=new Date();var Yc=new Date();Yc.setTime(Xc-0+parseInt(Ads_T[9],10));Tc=bD[1].split('#');Uc=Tc.length-1;Vc=',';for(s=1;s<Uc;s++)
{Wc=Tc[s].split(':');Vc+=Wc[0]+',';}kC=true;lC=';keyword='+escape(Ads_wrd) +';user-domain='+Ads_T[5] +';user-ip='+Ads_T[6] +';url='+escape(window.location.href) +';referrer='+escape(document.referrer) +';accept-language='+escape(Ads_T[7]) +';accept-charset='+escape(Ads_T[8]) +';user-agent='+escape(navigator.userAgent) +';browser-name='+escape(navigator.appName) +';browser-version='+escape(navigator.appVersion) +';flash-version='+aC() +';user-day='+(Xc.getDay()==0?7:Xc.getDay()) +';user-time='+oC(Xc) +';user-date='+pC(Xc) +';server-day='+(Yc.getDay()==0?7:Yc.getDay()) +';server-time='+oC(Yc) +';server-date='+pC(Yc) +';campaigns='+Vc +';';if(navigator.appVersion.substring(0,1)>'3')
lC+='java='+(navigator.javaEnabled()?'1':'0') +';screen-width='+screen.width +';screen-height='+screen.height +';window-width='+(window.innerWidth?window.innerWidth:document.body.clientWidth) +';window-height='+(window.innerWidth?window.innerHeight:document.body.clientHeight) +';color-depth='+screen.colorDepth +';';xB(1,'Environment values',lC);}function rC(Zc,r,Ab,Ad,Bd,Cd)
{var Dd;if((r>0)&&(Zc>0))
{Dd=(jD(Ab,Ad)<r);if((Dd?1:0)==Bd)
return Bd;mC[Cd]=Dd;}return 2;}function sC(Ed,Fd,Gd,Bd,Cd)
{var Dd;if(Ed.length>1)
{Dd=(Ed.indexOf('#'+Ads_T[Fd]+'#')!=-1);Dd=Gd>0?!Dd:Dd;if((Dd?1:0)==Bd)
return Bd;mC[Cd]=Dd;}return 2;}function tC(Ed,Gd,Bd,Hd,Cd)
{if(Ed=='')
return 2;var s,Va,Id,Jd,Kd,Ld,Md,Nd,Od;var Dd=false;Ed=Ed.substr(1,Ed.length-2);var Wb=Ed.split('#');var r=Wb.length;if(r>0)
{if(Hd)
{strTrenner='!"%&\'()*+,-./:;<=>?@[\\]^_{|}~� ';Va='';Ld=Ads_wrd.length;for(s=0;s<Ld;s++)
{Kd=Ads_wrd.charAt(s);if(strTrenner.indexOf(Kd)!=-1)
Kd='#';Va+=Kd;}Va='#'+Va.toLowerCase()+'#';Id=Va;}else
{Va='#'+Ads_T[5]+'#';Id='#'+Ads_T[6]+'#';}for(s=0;(s<r)&&(Dd==false);s++)
{Nd=Wb[s].toLowerCase();Md=false;if(Nd.substring(0,1)=='$')
{Nd=Nd.substring(1,Nd.length-1);Md=true;}Jd=false;Od=Va;if(Nd.substring(0,1)=='!')
{Nd=Nd.substring(1,Nd.length-1);Od=Id;Jd=true;}if(Hd)
Nd='#'+Nd;if(!Jd)
Nd+='#';Dd=(Od.indexOf(Nd)!=-1);if(Md&&Dd)
{Dd=false;s=r;}}Dd=Gd>0?!Dd:Dd;if((Dd?1:0)==Bd)
return Bd;mC[Cd]=Dd;}return 2;}function uC(Pd,Qd)
{var Rd=[];var Sd=0;var s,Td;var r=Pd.length;for(s=0;s<r;s++)
{Td=Pd[s];if(Td>=0)
{Rd[Sd]=Qd[Td];Sd++;}else if(Td==-2)
{Sd--;Rd[Sd-1]=(Rd[Sd-1]&&Rd[Sd]);}else if(Td==-4)
{Sd--;Rd[Sd-1]=(Rd[Sd-1]||Rd[Sd]);}else if(Td==-3)
Rd[Sd-1]=(!Rd[Sd-1]);}return Rd[Sd-1];}function vC(Wb,Ud,Gd,Vd,Wd,Bd,Cd)
{var Dd,Eb,Xd,Yd,Zd,Ae,E,Be;var Ce,De;var s=0;var r=Wb.length;var Qd=[];for(s=0;s<r;s++)
{Eb=Wb[s][0];Xd=Wb[s][1];E=Wb[s][2];Be=Wb[s][3];xB(1,'Profile/Environment -> Name,WishedValue,Type,Operator',Eb+','+Xd+','+E+','+Be);Ce=Ud.indexOf(';'+Eb+'=');if(Ce>-1)
{De=Ud.indexOf(';',Ce+1);if(De>Ce)
Ae=unescape(Ud.substring(Ce+2+Eb.length,De));else
Ae='';if(E==5)
E=1;if(E==1)
Yd=0;else
Yd='';if((Be==9)||(Be==10))
{Zd=Xd.split(';');if(Zd.length==2)
{Xd=Zd[0];Yd=Zd[1];}else
Be=0;}if(E==1)
{Ae=parseFloat(Ae);Xd=parseFloat(Xd);Yd=parseFloat(Yd);}if((Be>5)&&(Be<9))
{Ae=Ae.toLowerCase();Xd=Xd.toLowerCase();}if(Be==0)
Dd=(Ae==Xd)
else if(Be==1)
Dd=(Ae!=Xd)
else if(Be==2)
Dd=(Ae<Xd)
else if(Be==3)
Dd=(Ae<=Xd)
else if(Be==4)
Dd=(Ae>Xd)
else if(Be==5)
Dd=(Ae>=Xd)
else if(Be==6)
Dd=(Ae.indexOf(Xd)>-1);else if(Be==7)
Dd=(Ae.indexOf(Xd)<0);else if(Be==8)
Dd=Ae.substr(0,Xd.length-1)==Xd;else if(Be==9)
Dd=((Ae>=Xd)&&(Ae<=Yd))
else if(Be==10)
Dd=((Ae<Xd)||(Ae>Yd))
}else
{Dd=false;}xB(1,'Profile/Environment -> result',Dd);if(Vd==2)
Qd[s]=Dd;else
{if((Dd&&(Vd==1))||(!Dd&&(Vd==0)))
s=r;}}if(Vd==2)
Dd=uC(Wd,Qd);Dd=Gd>0?!Dd:Dd;if((Dd?1:0)==Bd)
return Bd;mC[Cd]=Dd;return 2;}function wC(Ee,Fe)
{var Xc=new Date();var Yc=new Date();Yc.setTime(Xc-0+parseInt(Ads_T[9],10));var Ge=Yc.getHours()*60+Yc.getMinutes();if(Ee<Fe)
Dd=((Ge>=Ee)&&(Ge<=Fe));else
Dd=((Ge>=Ee)||(Ge<=Fe));return Dd;}function xC(He,Ie)
{var r=He.length;var Je;if(typeof(He.Ads_klist)=='string')
Ie+=He.Ads_klist+'#';for(Je=0;Je<r;Je++)
Ie=xC(He.frames[Je],Ie);return Ie;}function yC(Wb,E,Ab)
{var Bd=Wb[0];var Gd=Wb[1];var Dd,Ke,Le,Vc,Tc,Uc,s,Me,Ne,Oe,Pe;mC=[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];if(Wb.length==0)
return true;xB(1,'Targeting',Wb);if((Bd>0)||(E==1))
{Dd=wC(Wb[2],Wb[3]);xB(1,'Time',Dd);if((Dd?1:0)==Bd)
return Dd;mC[0]=Dd;}Ke=rC(1,Wb[4],Ab,(E==0)?2:9,Bd,1);xB(1,'Frequency (Max:'+Wb[4]+',actual:'+jD(Ab,(E==0)?2:9)+')',Ke!=0);if(Ke<2)
return Ke==1;if(E==0)
{Ke=rC(Wb[22]&1,IAS[4],Ads_wid,7,Bd,12);xB(1,'Frequency (WebSite)',Ke!=0);if(Ke<2)
return Ke==1;Ke=rC(Wb[22]&2,IAS[6],Ads_nid,8,Bd,13);xB(1,'Frequency (Network)',Ke!=0);if(Ke<2)
return Ke==1;}Ke=sC(Wb[6],0,Gd&1,Bd,2);xB(1,'OS',Ke!=0);if(Ke<2)
return Ke==1;Ke=sC(Wb[7],1,Gd&2,Bd,3);xB(1,'Browser',Ke!=0);if(Ke<2)
return Ke==1;Ke=sC(Wb[8],2,Gd&4,Bd,4);xB(1,'Country',Ke!=0);if(Ke<2)
return Ke==1;Ke=sC(Wb[9],3,Gd&8,Bd,5);xB(1,'Provider',Ke!=0);if(Ke<2)
return Ke==1;Ke=sC(Wb[26],12,Gd&1024,Bd,16);xB(1,'DMA',Ke!=0);if(Ke<2)
return Ke==1;if(Wb[10].length>1)
{Dd=((Wb[10].indexOf('#'+Ads_T[4]+'#')!=-1)||(Wb[10].indexOf('#%'+Ads_T[10]+'#')!=-1)||(Wb[10].indexOf('#$'+Ads_T[11]+'#')!=-1));if((Ads_nid==7)&&(Ads_T[4]<1)&&(Wb[10].indexOf('#$14658#')!=-1)) Dd=true;Dd=(Gd&16)>0?!Dd:Dd;xB(1,'Region',Dd);if((Dd?1:0)==Bd)
return Bd;mC[6]=Dd;}Ke=tC(Wb[11],Gd&32,Bd,false,7);xB(1,'Domain',Ke!=0);if(Ke<2)
return Ke==1;Ke=tC(Wb[12],Gd&64,Bd,true,8);xB(1,'Keyword',Ke!=0);if(Ke<2)
return Ke==1;if(Wb[13].length>0)
{Ke=vC(Wb[13],';'+Ads_prf+';',Gd&128,Wb[15],Wb[17],Bd,9);xB(1,'Profile',Ke!=0);if(Ke<2)
return Ke==1;}if(Wb[14].length>0)
{qC();Ke=vC(Wb[14],lC,Gd&256,Wb[16],Wb[18],Bd,10);xB(1,'Environment',Ke!=0);if(Ke<2)
return Ke==1;}if(Wb[21]>0)
{if(bD[4]=='')
{Le=0;if(nC==0)
nC=1;}else
Le=parseInt(bD[4],10);Dd=((Le>=Wb[20])&&(Le<=Wb[21]));Dd=(Gd&512)>0?!Dd:Dd;xB(1,'Bandwidth',Dd);if((Dd?1:0)==Bd)
return Dd;mC[11]=Dd;}Pe=Wb[23];if((E==0)&&(Pe>0))
{Vc=Wb[24];if(Vc.length>2)
Vc=Vc.substring(1,Vc.length-1);Tc=Vc.split('#');Uc=Tc.length;Me=-1;strKList='#'+xC(top,'');for(s=0;(s<Uc)&&(Me<0);s++)
{Ne=(strKList.indexOf('#'+Tc[s]+'#')>-1);if((Ne?1:4)==Pe)
Me=0;if((Ne?3:2)==Pe)
Me=1;}if(Me<0)
Me=((Pe==1)||(Pe==4))?1:0;xB(1,'showed Camppaigns,In/Exclude',strKList+','+(Me==1));if(Me==Bd)
return (Me==1);mC[14]=(Me==1);}s=Wb[25];if(s>0)
{Ne=IAS[8].indexOf('#'+s+':');if(Ne!=-1)
{Ne=IAS[8].indexOf(':',Ne);Oe=IAS[8].indexOf('#',Ne);Ne=IAS[8].substring(Ne+1,Oe);Oe=Ads_fcount[s];if(typeOf(Oe)=='undefined')
Oe=0;Dd=Ne>Oe;xB(1,'Family',Dd);if((Dd?1:0)==Bd)
return Dd;mC[15]=Dd;}}if(Bd!=2)
return true;else
return uC(Wb[19],mC);}function zC()
{if(nC!=1)
return;xB(1,'Start BW-Test','');document.write('<applet codebase="'+nA[Ads_sec]+'" code="bandwidth.class" id="bandwidth" name="bandwidth" width="0" height="0" mayscript="MAYSCRIPT"><param name="cbfunc" value="aD"></applet>');nC=2;}function aD(Qe)
{document.cookie='BNDWDT='+(Qe*8)+oB(60*24*7);}