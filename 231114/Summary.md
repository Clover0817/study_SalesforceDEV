apex list sort reverse... <br/>
<br/>
1. for문 거꾸로 돌려서 reverse<br/>
List<Object> someList = new List<Object>{1,2,3,4,5};<br/>
List<Object> reversed = new List<Object>();<br/>
<br/>
for(Integer i = someList.size() - 1; i >= 0; i--){<br/>
    reversed.add(somelist[i]);<br/>
}<br/>
<br/>
2. comparable 인터페이스 구현한 wrapper 클래스 구현<br/>
public class IntWrapper implements Comparable{<br/>
    public Integer int;<br/>
    public static String order = 'ASC';<br/>
    <br/>
    public IntWrapper(Integer val){<br/>
        int = val;<br/>
    }<br/>
<br/>
    public Integer compareTo(Object input){<br/>
        Integer result;<br/>
        if(IntWrapper.order == 'ASC'){<br/>
            result = compareASC(input);<br/>
        } else {<br/>
            result = compareDESC(input);<br/>
        }<br/>
        return result;<br/>
    }<br/>
<br/>
    private Integer compareASC(Object input){<br/>
        Integer intIn = (Integer)input;<br/>
        if(int < intIn){<br/>
            return -1;<br/>
        } else if(int > intIn){<br/>
            return 1;<br/>
        } else {<br/>
            return 0;<br/>
        }<br/>
    }<br/>
<br/>
    private Integer compareDESC(Object input){<br/>
        Integer intIn = (Integer)input;<br/>
        if(int < intIn){<br/>
            return 1;<br/>
        } else if(int > intIn){<br/>
            return -1;<br/>
        } else {<br/>
            return 0;<br/>
        }<br/>
    }<br/>
}<br/>
<br/>
List<IntWrapper> someList = new List<IntWrapper>{new IntWrapper(1), new IntWrapper(2), new IntWrapper(3), new IntWrapper(4), new IntWrapper(5)};<br/>
<br/>
// First sort ensures we're in ASC order<br/>
someList.sort();<br/>
<br/>
// Set the static flag, sort again, et voila, list is reversed<br/>
IntWrapper.order = 'DESC';<br/>
someList.sort();<br/>
<br/>
<br/>
<br/>
--------<br/>
Sorting on map is not possible. But if you want to sort map with there key then we can do something like this :<br/>
<br/>
 <br/>
<br/>
map<String , Integer> accMap = new Map<String,Integer>() ;<br/>
accMap.put('Id2' , 2);<br/>
accMap.put('Id1' , 1);﻿<br/>
accMap.put('Id4' , 4);﻿<br/>
accMap.put('Id3' , 3);﻿<br/>
accMap.put('Id5' , 5);﻿<br/><br/>

List<String> aList = new List<String>();<br/>
aList.addAll(accMap.keySet());<br/>
aList.sort();<br/>
//so here you will get sorted total base on key<br/>
for(String a: aList)<br/>
{<br/>
   System.debug( '::::::::::::: ' + accMap.get(a)) ;<br/>
}<br/>

<br/>
<br/>
빙고 로직<br/>
<br/>
빙고판 Owner가 Lookup(User, Group)으로 설정<br/>
회사 org user 기준/BingoMember 기준?<br/>
<br/>
<br/>
문제점<br/>
-> 호명 시 같은 이름 재출력?
<br/>



