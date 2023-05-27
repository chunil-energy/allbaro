//첫번째 탭 - 인계서진행상황 -
function init1()
{
    init_sheet1();
}

//시트초기화 함수
function init_sheet1()
{
    strHead="상태|삭제|대행여부|인계서번호|폐기물코드|폐기물종류|처리상태|진행상황"
        + "|배출자|배출자|배출자|배출자|배출자|배출자|배출자|배출자|배출자"
        + "|운반자|운반자|운반자|운반자|운반자|운반자|운반자|운반자"
        + "|처리자|처리자|처리자|처리자|처리자|처리자|처리자|처리자|처리자|처리자|처리자|운반자인계번호|처리자인계번호|잔량|대행작성업체번호|대행작성업체|작성자명|작성자ID";
    strHead2="상태|삭제|대행여부|인계서번호|폐기물코드|폐기물종류|처리상태|진행상황"
        + "|업체명|인계일자|예약등록일자|확정등록일자|위탁량|위탁량|배출차량|처리방법|입력구분"
        + "|업체명|인수일자|작업일자|인계일자|인수량|인수량|운반차량|입력구분"
        + "|업체명|인수일자|인수작업일자|인수량|인수량|처리장소|처리일자|처리작업일자|차량|입력구분|계량전표|운반자인계번호|처리자인계번호|잔량|대행작성업체번호|대행작성업체|작성자명|작성자ID";

    mySheet1.SetConfig( { SearchMode:2, MergeSheet:5, Page:20, FrozenCol:0, SizeMode:0 } );

    var info    = { Sort:1, ColMove:0, HeaderCheck:0, ColResize:1 };
    var headers = [ { Text:strHead, Align:"Center"},
                    { Text:strHead2, Align:"Center"} ];
    mySheet1.InitHeaders(headers, info);

    var cols = [
        {Type:"Status",    Hidden:1, MinWidth:0,    Align:"Center",  ColMerge:1,   SaveName:"sStatus" },
        {Type:"DelCheck",  Hidden:1, MinWidth:0,   Align:"Center",  ColMerge:1,   SaveName:"sDelete" },
		{Type:"Text",      Hidden:0,  MinWidth:50,   Align:"Center",  ColMerge:1,   SaveName:"agency_yn",      	    KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:10 },
		{Type:"Text",      Hidden:0,  MinWidth:80,   Align:"Center",  ColMerge:1,   SaveName:"manf_nums",            KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:10 },
		{Type:"Text",      Hidden:1, MinWidth:100,  Align:"Center",  ColMerge:1,   SaveName:"wste_code",            KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:10 },
        {Type:"Text",      Hidden:0,  MinWidth:100,  Align:"Left",    ColMerge:1,   SaveName:"wste_name",            KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:10 },
        {Type:"Text",      Hidden:0,  MinWidth:60,   Align:"Center",  ColMerge:1,   SaveName:"manf_process",         KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:10 },
        {Type:"Combo",     Hidden:0, MinWidth:60,   Align:"Center",  ColMerge:1,   SaveName:"cls_yn",               KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:10 },
        {Type:"Text",      Hidden:0,  MinWidth:100,  Align:"Left",    ColMerge:1,   SaveName:"emis_chrg_name",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:200 },
        {Type:"Date",      Hidden:0,  MinWidth:80,   Align:"Center",  ColMerge:0,   SaveName:"give_date",            KeyField:0,   CalcLogic:"",   Format:"Ymd",         PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:7 },
        {Type:"Text",      Hidden:0,  MinWidth:120,  Align:"Center",  ColMerge:0,   SaveName:"rese_work_date",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:60 },
        {Type:"Text",      Hidden:0,  MinWidth:120,  Align:"Center",  ColMerge:0,   SaveName:"work_date",            KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:7 },
        {Type:"Float",     Hidden:0,  MinWidth:80,   Align:"Right",   ColMerge:0,   SaveName:"give_qunt",            KeyField:0,   CalcLogic:"",   Format:"Float",       PointCount:3,   UpdateEdit:1,   InsertEdit:1,   EditLen:22 },
        {Type:"Combo",     Hidden:0, MinWidth:30,   Align:"Center",  ColMerge:0,   SaveName:"give_qunt_unit",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:22 },
        {Type:"Text",      Hidden:0,  MinWidth:100,  Align:"Center",  ColMerge:0,   SaveName:"emis_vehc_nums",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:20 },
        {Type:"Combo",     Hidden:0, MinWidth:100,  Align:"Center",  ColMerge:0,   SaveName:"trtm_ways",            KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:20 },
        {Type:"Combo",     Hidden:0, MinWidth:60,   Align:"Center",  ColMerge:0,   SaveName:"emis_rfid_yn",         KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:4 },
        {Type:"Text",      Hidden:0,  MinWidth:100,  Align:"Left",    ColMerge:0,   SaveName:"tran_firm_name",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:1 },
        {Type:"Date",      Hidden:0,  MinWidth:80,   Align:"Center",  ColMerge:0,   SaveName:"recv_date",            KeyField:0,   CalcLogic:"",   Format:"Ymd",         PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:7 },
        {Type:"Text",      Hidden:0,  MinWidth:120,  Align:"Center",  ColMerge:0,   SaveName:"tran_work_date",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:3 },
        {Type:"Date",      Hidden:0,  MinWidth:80,   Align:"Center",  ColMerge:0,   SaveName:"tran_give_date",       KeyField:0,   CalcLogic:"",   Format:"Ymd",         PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:1 },
        {Type:"Float",     Hidden:0,  MinWidth:80,   Align:"Right",   ColMerge:0,   SaveName:"tran_qunt",            KeyField:0,   CalcLogic:"",   Format:"NullFloat",   PointCount:3,   UpdateEdit:1,   InsertEdit:1,   EditLen:50 },
        {Type:"Combo",     Hidden:0, MinWidth:30,   Align:"Center",  ColMerge:0,   SaveName:"tran_recv_unit",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:20 },
        {Type:"Text",      Hidden:0,  MinWidth:100,  Align:"Center",  ColMerge:0,   SaveName:"tran_vehc_nums",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:50 },
        {Type:"Combo",     Hidden:0, MinWidth:60,   Align:"Center",  ColMerge:0,   SaveName:"tran_rfid_yn",         KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:20 },
        {Type:"Text",      Hidden:0,  MinWidth:100,  Align:"Left",    ColMerge:0,   SaveName:"trtm_firm_name",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:4 },
        {Type:"Text",      Hidden:0,  MinWidth:80,   Align:"Center",  ColMerge:0,   SaveName:"trtm_recv_date",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:1 },
        {Type:"Text",      Hidden:0,  MinWidth:120,  Align:"Center",  ColMerge:0,   SaveName:"trtm_recv_work_date",  KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:7 },
        {Type:"Float",     Hidden:0,  MinWidth:80,   Align:"Right",   ColMerge:0,   SaveName:"trtm_qunt",            KeyField:0,   CalcLogic:"",   Format:"NullFloat",   PointCount:3,   UpdateEdit:1,   InsertEdit:1,   EditLen:3 },
        {Type:"Combo",     Hidden:0, MinWidth:30,   Align:"Center",  ColMerge:0,   SaveName:"trtm_recv_unit",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:1 },
        {Type:"Text",      Hidden:0,  MinWidth:100,  Align:"Left",    ColMerge:0,   SaveName:"trtm_site",            KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:50 },
        {Type:"Text",      Hidden:0,  MinWidth:80,   Align:"Center",  ColMerge:0,   SaveName:"trtm_date",            KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:50 },
        {Type:"Text",      Hidden:0,  MinWidth:120,  Align:"Center",  ColMerge:0,   SaveName:"trtm_work_date",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:50 },
        {Type:"Text",      Hidden:0,  MinWidth:100,  Align:"Center",  ColMerge:0,   SaveName:"trtm_vehc_nums",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:50 },
        {Type:"Combo",     Hidden:0, MinWidth:60,   Align:"Center",  ColMerge:0,   SaveName:"trtm_rfid_yn",         KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:50 },
        {Type:"Image",     Hidden:0, MinWidth:60,   Align:"Center",  ColMerge:0,   SaveName:"weit_receipt",         KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:4 },
        {Type:"Text",      Hidden:1, MinWidth:100,  Align:"Center",  ColMerge:0,   SaveName:"tran_manf_nums",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:22 },
        {Type:"Text",      Hidden:1, MinWidth:100,  Align:"Center",  ColMerge:0,   SaveName:"trtm_manf_nums",       KeyField:0,   CalcLogic:"",   Format:"",            PointCount:0,   UpdateEdit:1,   InsertEdit:1,   EditLen:3 },
        {Type:"Float",     Hidden:0,  MinWidth:100,  Align:"Right",   ColMerge:1,   SaveName:"left_qunt",            KeyField:0,   CalcLogic:"",   Format:"NullFloat",  PointCount:3,   UpdateEdit:1,   InsertEdit:1,  EditLen:10 },	
		{Type:"Text",      Hidden:1,   MinWidth:100,  Align:"Center",  ColMerge:0,   SaveName:"agency_entn",      	KeyField:0,   CalcLogic:"",   Format:"",   			PointCount:3,   UpdateEdit:1,   InsertEdit:1,   EditLen:22},
		{Type:"Text",      Hidden:0,   MinWidth:100,  Align:"Center",  ColMerge:0,   SaveName:"agency_firm_name",   KeyField:0,   CalcLogic:"",   Format:"",   			PointCount:3,   UpdateEdit:1,   InsertEdit:1,   EditLen:22},
        {Type:"Text",      Hidden:0,   MinWidth:100,  Align:"Center",  ColMerge:0,   SaveName:"regi_usna",    		KeyField:0,   CalcLogic:"",   Format:"",   			PointCount:3,   UpdateEdit:1,   InsertEdit:1,   EditLen:22},
        {Type:"Text",      Hidden:0,   MinWidth:100,  Align:"Center",  ColMerge:0,   SaveName:"regi_usid",    		KeyField:0,   CalcLogic:"",   Format:"",   			PointCount:3,   UpdateEdit:1,   InsertEdit:1,   EditLen:22}	
    ];

    mySheet1.InitColumns(cols);

    mySheet1.SetEditable(0);
    mySheet1.SetColProperty('cls_yn', {ComboText:"완료|오류|정상", ComboCode:"Y|M|B"} );
    mySheet1.SetColProperty('emis_rfid_yn', {ComboText:"ARS|수집기|EDI|GPS|실명인증|Internet|모바일|RFID|지능형", ComboCode:"A|C|E|G|H|I|M|R|S"} );
    mySheet1.SetColProperty('tran_rfid_yn', {ComboText:"ARS|수집기|EDI|GPS|실명인증|Internet|모바일|RFID|지능형", ComboCode:"A|C|E|G|H|I|M|R|S"} );
    mySheet1.SetColProperty('trtm_rfid_yn', {ComboText:"ARS|수집기|EDI|GPS|실명인증|Internet|모바일|RFID|지능형", ComboCode:"A|C|E|G|H|I|M|R|S"} );
    mySheet1.SetColProperty('give_qunt_unit', {ComboText:"Ton|kg|g", ComboCode:"01|02|03"} );
    mySheet1.SetColProperty('tran_recv_unit', {ComboText:"Ton|kg|g", ComboCode:"01|02|03"} );
    mySheet1.SetColProperty('trtm_recv_unit', {ComboText:"Ton|kg|g", ComboCode:"01|02|03"} );
    mySheet1.SetColProperty('trtm_ways', {ComboText:"(1001)원형 재사용(재)(자가)|(1002)수리ㆍ수선 재사용(재)(자가)|(1003)원료 제조(재)(자가)|(1004)직접 제품제조(재)(자가)|(1005)농업생산활동에 사용(재)(자가)|(1006)토질개선에 사용(재)(자가)|(1007)성토재ㆍ복토재 등으로 사용(재)(자가)|(1008)직접 에너지회수(재)(자가)|(1009)연료ㆍ고형연료제품 제조(재)(자가)|(1010)중간가공폐기물 제조(재)(자가)|(1011)재활용환경성평가 승인을 받은 유형으로 재활용(자가)|(2015.7.29개정전1006)기타(재)(자가)|(1101)일반소각(자가)|(1102)고온소각(자가)|(1103)열분해(자가)|(1104)고온용융(자가)|(1105)압축(자가)|(1106)파쇄/분쇄(자가)|(1107)절단(자가)|(1108)용융(자가)|(1109)증발농축(자가)|(1110)유수분리(자가)|(1111)탈수/건조(자가)|(1112)멸균/분쇄(자가)|(1113)고형화(자가)|(1114)안정화(자가)|(1115)소멸화(자가)|(1116)중화(자가)|(1117)기타(자가)|(1201)관리형매립시설(자가)|(1202)차단형매립시설(자가)|(1203)기타매립시설(자가)|(1300)해역배출(자가)|(1500)해외수출(자가)|(2016.7.21개정전1001)정제(재)(자가)|(2016.7.21개정전1002)사료화(재)(자가)|(2016.7.21개정전1003)퇴비화(재)(자가)|(2016.7.21개정전1004)고형연료화(재)(자가)|(2016.7.21개정전1005)파쇄/분쇄(재)(자가)|(2016.7.21개정전1006)원료가공(재)(자가)|(2016.7.21개정전1007)제품제조(재)(자가)|(2016.7.21개정전1008)연료사용(재)(자가)|(2016.7.21개정전1009)바이오가스 생산(재)(자가)|(2016.7.21개정전1010)기타(재)(자가)|(2001)원형 재사용(재)(위탁)|(2002)수리ㆍ수선 재사용(재)(위탁)|(2003)원료 제조(재)(위탁)|(2004)직접 제품제조(재)(위탁)|(2005)농업생산활동에 사용(재)(위탁)|(2006)토질개선에 사용(재)(위탁)|(2007)성토재ㆍ복토재 등으로 사용(재)(위탁)|(2008)직접 에너지회수(재)(위탁)|(2009)연료ㆍ고형연료제품 제조(재)(위탁)|(2010)중간가공폐기물 제조(재)(위탁)|(2011)재활용환경성평가 승인을 받은 유형으로 재활용(위탁)|(2015.7.29개정전2006)기타(재)(위탁)|(2101)일반소각(위탁)|(2102)고온소각(위탁)|(2103)열분해(위탁)|(2104)고온용융(위탁)|(2105)압축(위탁)|(2106)파쇄/분쇄(위탁)|(2107)절단(위탁)|(2108)용융(위탁)|(2109)증발농축(위탁)|(2110)유수분리(위탁)|(2111)탈수/건조(위탁)|(2112)멸균/분쇄(위탁)|(2113)고형화(위탁)|(2114)안정화(위탁)|(2115)소멸화(위탁)|(2116)중화(위탁)|(2117)지방자치단체소각(위탁)|(2118)국가소각(위탁)|(2119)기타(위탁)|(2201)민간관리형매립시설(위탁)|(2202)민간차단형매립시설(위탁)|(2204)기타매립시설(위탁)|(2205)지방자치단체매립시설(위탁)|(2206)국가매립시설(위탁)|(2300)해역배출(위탁)|(2500)해외수출(위탁)|(2016.7.21개정전2001)정제(재)(위탁)|(2016.7.21개정전2002)사료화(재)(위탁)|(2016.7.21개정전2003)퇴비화(재)(위탁)|(2016.7.21개정전2004)고형연료화(재)(위탁)|(2016.7.21개정전2005)파쇄/분쇄(재)(위탁)|(2016.7.21개정전2006)원료가공(재)(위탁)|(2016.7.21개정전2007)제품제조(재)(위탁)|(2016.7.21개정전2008)연료사용(재)(위탁)|(2016.7.21개정전2009)바이오가스 생산(재)(위탁)|(2016.7.21개정전2010)기타(재)(위탁)|(9000)재위탁", ComboCode:"1001|1002|1003|1004|1005|1006|1007|1008|1009|1010|1011|1090|1101|1102|1103|1104|1105|1106|1107|1108|1109|1110|1111|1112|1113|1114|1115|1116|1117|1201|1202|1203|1300|1500|1901|1902|1903|1904|1905|1906|1907|1908|1909|1910|2001|2002|2003|2004|2005|2006|2007|2008|2009|2010|2011|2090|2101|2102|2103|2104|2105|2106|2107|2108|2109|2110|2111|2112|2113|2114|2115|2116|2117|2118|2119|2201|2202|2204|2205|2206|2300|2500|2901|2902|2903|2904|2905|2906|2907|2908|2909|2910|9000"} );

    mySheet1.SetVisible(1);
    mySheet1.SetImageList(0,"/images/common/ico_search.gif");
}


//액션함수
function doAction1(str)
{
    document.frm.S_METHOD.value=str; // str 이 메소드 명이 된다.
    switch(str)
    {
        case "Insert" :
            mySheet1.DataInsert();
        break;

        case "Copy":
            mySheet1.DataCopy();
        break;

        case "Down2Excel":
            mySheet1.Down2Excel({ HiddenColumn:true, Merge:1, OnlyHeaderMerge:1});
        break;

        case "LoadExcel":
            mySheet1.LoadExcel({ Mode:"HeaderSkip",WorkSheetNo:"1"});
        break;

        case "search":
            if(!validChk())
            {
                return;
            }
            var param = {
                url:"man100.XML.searchManfProcessByEntn.do?exec", 
                subparam:FormQueryString(document.frm),
                onePageRows:500,
                sheet:"mySheet1"
            };

            DataSearch(param);
        break;

        case "save":
            var param=FormQueryString(document.frm);
            mySheet1.DoSave("man100.XML.save.do",{Param:param});
        break;
    }
}
