/**
 * @license
 * Copyright (C) 2010 The Libphonenumber Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generated metadata for file
 * ../resources/PhoneNumberMetadataForTesting.xml
 * @author Nikolaos Trogkanis
 */

goog.provide('i18n.phonenumbers.metadata');

/**
 * A mapping from a country calling code to the region codes which denote the
 * region represented by that country calling code. In the case of multiple
 * countries sharing a calling code, such as the NANPA regions, the one
 * indicated with "isMainCountryForCode" in the metadata should be first.
 * @type {!Object.<number, Array.<string>>}
 */
i18n.phonenumbers.metadata.countryCodeToRegionCodeMap = {
1:["US","BB","BS","CA"]
,7:["RU"]
,33:["FR"]
,36:["HU"]
,39:["IT"]
,44:["GB","GG"]
,46:["SE"]
,48:["PL"]
,49:["DE"]
,52:["MX"]
,54:["AR"]
,55:["BR"]
,61:["AU","CC","CX"]
,64:["NZ"]
,65:["SG"]
,81:["JP"]
,82:["KR"]
,86:["CN"]
,244:["AO"]
,262:["RE","YT"]
,290:["TA"]
,374:["AM"]
,375:["BY"]
,376:["AD"]
,800:["001"]
,882:["001"]
,971:["AE"]
,979:["001"]
,998:["UZ"]
};

/**
 * A mapping from a region code to the PhoneMetadata for that region.
 * @type {!Object.<string, Array>}
 */
i18n.phonenumbers.metadata.countryToMetadata = {
"AD":[,[,,"\\d{6}",,,,,,,[6]
]
,[,,"\\d{6}",,,,"123456"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"AD",376,"00",,,,,,,,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"AE":[,[,,"[1-9]\\d{8}",,,,,,,[9]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"AE",971,"00",,,,,,,1,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,"600\\d{6}",,,,"600123456"]
,,,[,,,,,,,,,[-1]
]
]
,"AM":[,[,,"[1-9]\\d{7}",,,,,,,[8]
,[5,6]
]
,[,,"[1-9]\\d{7}",,,,"10123456",,,,[5,6]
]
,[,,"[1-9]\\d{7}",,,,"10123456",,,,[5,6]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"AM",374,"00","0",,,"0",,,1,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"AO":[,[,,"[29]\\d{8}",,,,,,,[9]
]
,[,,"2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}",,,,"222123456"]
,[,,"9[1-3]\\d{7}",,,,"923123456"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"AO",244,"00","0~0",,,"0~0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"AR":[,[,,"[1-3689]\\d{9,10}",,,,,,,[6,7,8,9,10,11]
]
,[,,"[1-3]\\d{5,9}",,,,"1234567890",,,[6,7,8,9,10]
]
,[,,"9\\d{10}|[1-3]\\d{9}",,,,"9234567890",,,[10,11]
]
,[,,"80\\d{8}",,,,"8034567890",,,[10]
]
,[,,"6(0\\d|10)\\d{7}",,,,"6234567890",,,[10]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"AR",54,"00","0",,,"0(?:(11|343|3715)15)?","9$1",,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["11"]
,"0$1"]
,[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["1[02-9]|[23]"]
,"0$1"]
,[,"(9)(11)(\\d{4})(\\d{4})","$2 15 $3-$4",["911"]
,"0$1"]
,[,"(9)(\\d{4})(\\d{2})(\\d{4})","$2 $3-$4",["9(?:1[02-9]|[23])"]
,"0$1","0$1 $CC"]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"]
,"0$1"]
]
,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["11"]
,"0$1"]
,[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["1[02-9]|[23]"]
,"0$1"]
,[,"(9)(11)(\\d{4})(\\d{4})","$1 $2 $3 $4",["911"]
]
,[,"(9)(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3 $4",["9(?:1[02-9]|[23])"]
]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"]
,"0$1"]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"AU":[,[,,"[1-578]\\d{4,14}",,,,,,,[9,10]
]
,[,,"[2378]\\d{8}",,,,"212345678",,,[9]
]
,[,,"4\\d{8}",,,,"412345678",,,[9]
]
,[,,"1800\\d{6}",,,,"1800123456",,,[10]
]
,[,,"190[0126]\\d{6}",,,,"1900123456",,,[10]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"AU",61,"001[12]","0",,,"0",,"0011",,[[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]
,"$1"]
,[,"(\\d{1})(\\d{4})(\\d{4})","$1 $2 $3",["[2-478]"]
,"0$1"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"BB":[,[,,"246\\d{7}",,,,,,,[10]
,[7]
]
,[,,,,,,"2464567890",,,,[7]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"BB",1,"011",,,,,,,1,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"BR":[,[,,"\\d{8,10}",,,,,,,[10]
,[8]
]
,[,,"\\d{8,10}",,,,"12345678",,,,[8]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"BR",55,"00",,,,,,,,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"BS":[,[,,"(242|8(00|66|77|88)|900)\\d{7}",,,,,,,[10]
,[7]
]
,[,,"242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[3-57]|9[2-5])|4(?:2[237]|51|64|77)|502|636|702)\\d{4}",,,,"2425027890",,,,[7]
]
,[,,"242(357|359|457|557)\\d{4}",,,,"2423577890"]
,[,,"8(00|66|77|88)\\d{7}",,,,"8001234567"]
,[,,"900\\d{7}",,,,"9001234567"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"BS",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"BY":[,[,,"[1-9]\\d{5}",,,,,,,[6]
]
,[,,"[1-9]\\d{5}",,,,"112345"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"BY",375,"810","8",,,"80?|99999",,,,[[,"(\\d{4})","$1",["[1-8]"]
,"8 $1"]
,[,"(\\d{2})(\\d{3})","$1 $2",["[1-8]"]
,"8$1"]
,[,"(\\d{3})(\\d{3})","$1 $2",["[1-8]"]
,"8 $1"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"CA":[,[,,"226\\d{7}",,,,,,,[10]
,[7]
]
,[,,"226\\d{7}",,,,"2261234567",,,,[7]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"CA",1,"011",,,,,,,,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"CC":[,[,,"\\d{6,10}",,,,,,,[10]
,[6]
]
,[,,"\\d{6,10}",,,,"2261234567",,,,[6]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"CC",61,"00",,,,,,,,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"CN":[,[,,"[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}",,,,,,,[11]
]
,[,,"[2-9]\\d{10}",,,,"91234567"]
,[,,"1(?:[38]\\d|4[57]|5[0-35-9]|7[0136-8])\\d{8}",,,,"13123456789"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"CN",86,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d{2}[19]","[3-9]\\d{2}(?:10|95)"]
,"0$1","$CC $1"]
,[,"(\\d{3})(\\d{8})","$1 $2",["1"]
,"$1"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"CX":[,[,,"\\d{8,10}",,,,,,,[10]
,[8]
]
,[,,"\\d{8,10}",,,,"2261234567",,,,[8]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"CX",61,"00",,,,,,,,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"DE":[,[,,"\\d{4,14}",,,,,,,[4,5,6,7,8,9,10,11]
,[2,3]
]
,[,,"(?:[24-6]\\d{2}|3[03-9]\\d|[789](?:0[2-9]|[1-9]\\d))\\d{1,8}",,,,"30123456",,,,[2,3]
]
,[,,"1(5\\d{9}|7\\d{8}|6[02]\\d{8}|63\\d{7})",,,,"15123456789",,,[10,11]
]
,[,,"800\\d{7}",,,,"8001234567",,,[10]
]
,[,,"900([135]\\d{6}|9\\d{7})",,,,"9001234567",,,[10,11]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"DE",49,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,8})","$1 $2",["2|3[3-9]|906|[4-9][1-9]1"]
,"0$1"]
,[,"(\\d{2})(\\d{4,11})","$1/$2",["[34]0|[68]9"]
,"0$1"]
,[,"([4-9]\\d)(\\d{2})","$1 $2",["[4-9]","[4-6]|[7-9](?:\\d[1-9]|[1-9]\\d)"]
,"0$1"]
,[,"([4-9]\\d{3})(\\d{2,7})","$1 $2",["[4-9]","[4-6]|[7-9](?:\\d[1-9]|[1-9]\\d)"]
,"0$1"]
,[,"(\\d{3})(\\d{1})(\\d{6})","$1 $2 $3",["800"]
,"0$1"]
,[,"(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["900"]
,"0$1"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"FR":[,[,,"3\\d{6}",,,,,,,[7]
]
,[,,"3\\d{6}",,,,"3123456"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"FR",33,"00","0",,,"0",,,,[[,"(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]
,"0$1"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"GB":[,[,,"\\d{10}",,,,,,,[9,10]
,[6,7,8]
]
,[,,"[1-6]\\d{9}",,,,"3123456789",,,,[6,7,8]
]
,[,,"7[1-57-9]\\d{8}",,,,"7123456789",,,[10]
]
,[,,"80\\d{8}",,,,"8023456789",,,[10]
]
,[,,"9[018]\\d{8}",,,,"9023456789",,,[10]
]
,[,,"8(?:4[3-5]|7[0-2])\\d{7}",,,,"8433456789",,,[10]
]
,[,,"70\\d{8}",,,,"7033456789",,,[10]
]
,[,,"56\\d{8}",,,,"5633456789",,,[10]
]
,"GB",44,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-59]|[78]0"]
,"(0$1)"]
,[,"(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["6"]
,"(0$1)"]
,[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["7[1-57-9]"]
,"(0$1)"]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8[47]"]
,"(0$1)"]
]
,,[,,"76\\d{8}",,,,"7623456789",,,[10]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"GG":[,[,,"\\d{6,10}",,,,,,,[10]
,[6]
]
,[,,"\\d{6,10}",,,,"7033456789",,,,[6]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"GG",44,"00",,,,,,,,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"HU":[,[,,"30\\d{7}",,,,,,,[9]
]
,[,,,,,,,,,[-1]
]
,[,,"30\\d{7}",,,,"301234567"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"HU",36,"00","06",,,"06",,,,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"IT":[,[,,"[0389]\\d{5,10}",,,,,,,[6,9,10,11]
]
,[,,"0\\d{9,10}",,,,"0123456789",,,[10,11]
]
,[,,"3\\d{8,9}",,,,"3123456789",,,[9,10]
]
,[,,"80(?:0\\d{6}|3\\d{3})",,,,"800123456",,,[6,9]
]
,[,,"89(?:2\\d{3}|9\\d{6})",,,,"892123",,,[6,9]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"IT",39,"00",,,,,,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["0[26]"]
]
,[,"(\\d{3})(\\d{4})(\\d{3,4})","$1 $2 $3",["0[13-57-9]"]
]
,[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["3"]
]
,[,"(\\d{3})(\\d{3,6})","$1 $2",["8"]
]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"JP":[,[,,"07\\d{5}|[1-357-9]\\d{3,10}",,,,,,,[4,5,6,7,8,9,10,11]
]
,[,,"07\\d{5}|[1-357-9]\\d{3,10}",,,,"0712345"]
,[,,,,,,,,,[-1]
]
,[,,"0777[01]\\d{2}",,,,"0777012",,,[7]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"JP",81,"010","0",,,"0",,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[57-9]0"]
,"0$1"]
,[,"(\\d{2})(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[57-9]0"]
,"0$1"]
,[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["111|222|333","(?:111|222|333)1","(?:111|222|333)11"]
,"0$1"]
,[,"(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["222|333","2221|3332","22212|3332","222120|3332"]
,"0$1"]
,[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[23]"]
,"0$1"]
,[,"(\\d{3})(\\d{4})","$1-$2",["077"]
,"0$1"]
,[,"(\\d{4})","*$1",["[23]"]
,"$1"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,"[23]\\d{3}",,,,"2123",,,[4]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"KR":[,[,,"[1-7]\\d{3,9}|8\\d{8}",,,,,,,[4,5,6,7,8,9,10]
]
,[,,"(?:2|[34][1-3]|5[1-5]|6[1-4])(?:1\\d{2,3}|[2-9]\\d{6,7})",,,,"22123456"]
,[,,"1[0-25-9]\\d{7,8}",,,,"1023456789",,,[9,10]
]
,[,,"80\\d{7}",,,,"801234567",,,[9]
]
,[,,"60[2-9]\\d{6}",,,,"602345678",,,[9]
]
,[,,,,,,,,,[-1]
]
,[,,"50\\d{8}",,,,"5012345678",,,[10]
]
,[,,"70\\d{8}",,,,"7012345678",,,[10]
]
,"KR",82,"00(?:[124-68]|[37]\\d{2})","0",,,"0(8[1-46-8]|85\\d{2})?",,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["1(?:0|1[19]|[69]9|5[458])|[57]0","1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"]
,"0$1"]
,[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:[169][2-8]|[78]|5[1-4])|[68]0|[3-6][1-9][2-9]","1(?:[169][2-8]|[78]|5(?:[1-3]|4[56]))|[68]0|[3-6][1-9][2-9]"]
,"0$1"]
,[,"(\\d{3})(\\d)(\\d{4})","$1-$2-$3",["131","1312"]
,"0$1"]
,[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["131","131[13-9]"]
,"0$1"]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["13[2-9]"]
,"0$1"]
,[,"(\\d{2})(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3-$4",["30"]
,"0$1"]
,[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["2(?:[26]|3[0-467])","2(?:[26]|3(?:01|1[45]|2[17-9]|39|4|6[67]|7[078]))"]
,"0$1"]
,[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["2(?:3[0-35-9]|[457-9])","2(?:3(?:0[02-9]|1[0-36-9]|2[02-6]|3[0-8]|6[0-589]|7[1-69]|[589])|[457-9])"]
,"0$1"]
,[,"(\\d)(\\d{3})","$1-$2",["21[0-46-9]","21(?:[0-247-9]|3[124]|6[1269])"]
,"0$1"]
,[,"(\\d)(\\d{4})","$1-$2",["21[36]","21(?:3[035-9]|6[03-578])"]
,"0$1"]
,[,"(\\d{2})(\\d{3})","$1-$2",["[3-6][1-9]1","[3-6][1-9]1(?:[0-46-9])","[3-6][1-9]1(?:[0-247-9]|3[124]|6[1269])"]
,"0$1"]
,[,"(\\d{2})(\\d{4})","$1-$2",["[3-6][1-9]1","[3-6][1-9]1[36]","[3-6][1-9]1(?:3[035-9]|6[03-578])"]
,"0$1"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"MX":[,[,,"[1-9]\\d{9,10}",,,,,,,[10,11]
,[7]
]
,[,,"[2-9]\\d{9}",,,,"2123456789",,,[10]
,[7]
]
,[,,"1\\d{10}",,,,"11234567890",,,[11]
]
,[,,"800\\d{7}",,,,"8001234567",,,[10]
]
,[,,"900\\d{7}",,,,"9001234567",,,[10]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"MX",52,"00","01",,,"01|04[45](\\d{10})","1$1",,,[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]00"]
,"01 $1",,1]
,[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"]
,"01 $1",,1]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[0-24-9]|5[0-46-9]|8[2-9]|9[1-9]"]
,"01 $1",,1]
,[,"(1)(\\d{2})(\\d{4})(\\d{4})","045 $2 $3 $4",["1(?:33|55|81)"]
,"$1",,1]
,[,"(1)(\\d{3})(\\d{3})(\\d{4})","045 $2 $3 $4",["1(?:[124579]|3[0-24-9]|5[0-46-9]|8[02-9])"]
,"$1",,1]
]
,[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]00"]
,"01 $1",,1]
,[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"]
,"01 $1",,1]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[0-24-9]|5[0-46-9]|8[2-9]|9[1-9]"]
,"01 $1",,1]
,[,"(1)(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3 $4",["1(?:33|55|81)"]
]
,[,"(1)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1(?:[124579]|3[0-24-9]|5[0-46-9]|8[02-9])"]
]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"NZ":[,[,,"[289]\\d{7,9}|[3-7]\\d{7}",,,,,,,[7,8,9,10]
]
,[,,"24099\\d{3}|(?:3[2-79]|[479][2-689]|6[235-9])\\d{6}",,,,"24099123",,,[7,8]
]
,[,,"2(?:[027]\\d{7}|9\\d{6,7}|1(?:0\\d{5,7}|[12]\\d{5,6}|[3-9]\\d{5})|4[1-9]\\d{6}|8\\d{7,8})",,,,"201234567",,,[8,9,10]
]
,[,,"800\\d{6,7}",,,,"8001234567",,,[9,10]
]
,[,,"900\\d{6,7}",,,,"9001234567",,,[9,10]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"NZ",64,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["24|[34679]"]
,"0$1"]
,[,"(\\d)(\\d{3})(\\d{3,5})","$1-$2 $3",["2[179]"]
,"0$1"]
,[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"]
,"0$1"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"PL":[,[,,"[1-9]\\d{8}",,,,,,,[9]
]
,[,,,,,,,,,[-1]
]
,[,,"(?:5[01]|6[069]|7[289]|88)\\d{7}",,,,"501234567"]
,[,,"800\\d{6}",,,,"800123456"]
,[,,"70\\d{7}",,,,"701234567"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"PL",48,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"RE":[,[,,"[268]\\d{8}",,,,,,,[9]
]
,[,,"262\\d{6}",,,,"262161234"]
,[,,"6(?:9[23]|47)\\d{6}",,,,"692123456"]
,[,,"80\\d{7}",,,,"801234567"]
,[,,"8(?:1[01]|2[0156]|84|9[0-37-9])\\d{6}",,,,"810123456"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"RE",262,"00","0",,,"0",,,,[[,"([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1"]
]
,,[,,,,,,,,,[-1]
]
,,"262|6(?:9[23]|47)|8",[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"RU":[,[,,"[347-9]\\d{9}",,,,,,,[10]
]
,[,,"[348]\\d{9}",,,,"3011234567"]
,[,,"9\\d{9}",,,,"9123456789"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"RU",7,"810","8",,,"8",,,,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"SE":[,[,,"\\d{9}",,,,,,,[9]
]
,[,,,,,,"123456789"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"SE",46,"00",,,,,,,1,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"SG":[,[,,"[13689]\\d{7,10}",,,,,,,[8,10,11]
]
,[,,"[36]\\d{7}",,,,"31234567",,,[8]
]
,[,,"[89]\\d{7}",,,,"81234567",,,[8]
]
,[,,"1?800\\d{7}",,,,"8001234567",,,[10,11]
]
,[,,"1900\\d{7}",,,,"19001234567",,,[11]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"SG",65,"0[0-3][0-9]",,,,"777777",,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[369]|8[1-9]"]
]
,[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1[89]"]
]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["800"]
]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"TA":[,[,,"8\\d{3,7}",,,,,,,[4,6,8]
]
,[,,"8\\d{5}",,,,"812345",,,[6]
]
,[,,"8\\d{3}",,,,"8123",,,[4]
]
,[,,"8\\d{7}",,,,"81234567",,,[8]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"TA",290,"00",,,,,,,,,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"US":[,[,,"[13-689]\\d{9}|2[0-35-9]\\d{8}",,,,,,,[10]
,[7]
]
,[,,"[13-689]\\d{9}|2[0-35-9]\\d{8}",,,,"1234567890",,,,[7]
]
,[,,"[13-689]\\d{9}|2[0-35-9]\\d{8}",,,,"1234567890",,,,[7]
]
,[,,"8(?:00|66|77|88)\\d{7}",,,,"8004567890"]
,[,,"900\\d{7}",,,,"9004567890"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"US",1,"011","1"," extn. ",,"1",,,1,[[,"(\\d{3})(\\d{4})","$1 $2"]
,[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",,,,1]
]
,[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",,,,1]
]
,[,,,,,,,,,[-1]
]
,1,,[,,"800\\d{7}",,,,"8004567890"]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"UZ":[,[,,"[69]\\d{8}",,,,,,,[9]
,[7]
]
,[,,"6122\\d{5}",,,,"662345678",,,,[7]
]
,[,,"9[0-57-9]\\d{7}",,,,"912345678"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"UZ",998,"810","8",,,"8",,"8~10",,[[,"([679]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[679]"]
,"8 $1"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"YT":[,[,,"[268]\\d{8}",,,,,,,[9]
]
,[,,"2696[0-4]\\d{4}",,,,"269601234"]
,[,,"639\\d{6}",,,,"639123456"]
,[,,"80\\d{7}",,,,"801234567"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"YT",262,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]
]
,,"269|639",[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"800":[,[,,"\\d{8}",,,,,,,[8]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,"\\d{8}",,,,"12345678"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"001",800,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"882":[,[,,"\\d{9}",,,,,,,[9]
]
,[,,,,,,,,,[-1]
]
,[,,"\\d{9}",,,,"123456789"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"001",882,,,,,,,,,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
,"979":[,[,,"\\d{9}",,,,,,,[9]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,"\\d{9}",,,,"123456789"]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,"001",979,,,,,,,,1,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3"]
]
,,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
,[,,,,,,,,,[-1]
]
,,,[,,,,,,,,,[-1]
]
]
};
