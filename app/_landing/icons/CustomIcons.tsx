import { ComponentPropsWithoutRef } from "react"

type SvgpProps = ComponentPropsWithoutRef<"svg">;


const  Icons = {
    video: (props: SvgpProps) => (

<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" {...props}></svg>
    ),
    youtube: (props: SvgpProps) => (
      
<svg height="180" preserveAspectRatio="xMidYMid" viewBox="0 0 256 180" width="256" xmlns="http://www.w3.org/2000/svg" {...props}>
    
    <linearGradient id="a" x1="49.980476%" x2="49.980476%" y1=".000001%" y2="100.030167%"><stop offset="0" stop-color="#e52d27"/><stop offset="1" stop-color="#bf171d"/></linearGradient><path d="m101.6 123.2 69.2-35.8-69.2-36.1z" fill="#fff"/>

<path d="m101.6 51.3 60.7 40.5 8.5-4.4z" fill="#420000" opacity=".12"/><path d="m253.301054 38.8s-2.499024-17.6-10.196017-25.4c-9.696212-10.2-20.591956-10.2-25.689965-10.8-35.68606-2.6-89.365092-2.6-89.365092-2.6h-.09996s-53.6790321 0-89.5650141 2.6c-4.9980477.6-15.8937915.6-25.6899649 10.8-7.59703241 7.8-10.09605623 25.4-10.09605623 25.4s-2.59898477 20.8-2.59898477 41.5v19.4c0 20.7 2.59898477 41.4 2.59898477 41.4s2.49902382 17.6 10.19601723 25.4c9.6962124 10.2 22.4912143 9.9 28.1889886 10.9 20.4919953 2 86.9660294 2.6 86.9660294 2.6s53.778992-.1 89.565013-2.7c4.998048-.6 15.893792-.6 25.689965-10.8 7.696993-7.8 10.196017-25.4 10.196017-25.4s2.598985-20.7 2.598985-41.4v-19.4c-.099961-20.7-2.698946-41.5-2.698946-41.5zm-151.740726 84.4v-71.9l69.172979 36.1z" fill="url(#a)"/></svg>
    ),
    twitter:(props: SvgpProps) => ( 
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m0 0h24v24h-24" fill="#fff" opacity="0"/><path d="m8.08 20a11.07 11.07 0 0 0 11.44-11 8.09 8.09 0 0 0 1.48-2.84.44.44 0 0 0 -.62-.51 1.88 1.88 0 0 1 -2.16-.38 3.89 3.89 0 0 0 -5.58-.17 4.13 4.13 0 0 0 -1.15 3.9c-3.35.2-5.65-1.39-7.49-3.57a.43.43 0 0 0 -.75.24 9.68 9.68 0 0 0 4.6 10.05 6.73 6.73 0 0 1 -4.47 2.28.45.45 0 0 0 -.14.84 11 11 0 0 0 4.84 1.16" fill="#231f20"/></svg>
    ),
    tailwind:(props: SvgpProps) => ( 
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 934.000000 921.000000" {...props} >
       
       <g transform="translate(0.000000,921.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
       <path d="M0 4605 l0 -4605 4670 0 4670 0 0 4605 0 4605 -4670 0 -4670 0 0
       -4605z m5173 2221 c168 -29 393 -99 522 -163 88 -44 218 -125 299 -186 98 -75
       160 -131 406 -374 322 -317 437 -395 680 -460 100 -27 367 -24 475 6 96 26
       280 115 357 174 86 64 246 223 291 287 27 38 28 19 3 -60 -164 -523 -423 -863
       -805 -1055 -224 -114 -425 -165 -722 -185 -386 -25 -741 39 -1041 190 -101 51
       -274 161 -318 202 -14 13 -38 33 -54 46 -50 39 -136 119 -346 326 -225 221
       -281 268 -415 345 -140 80 -288 115 -485 113 -238 -2 -449 -83 -650 -251 -68
       -57 -84 -72 -193 -191 -37 -41 -66 -68 -63 -60 78 248 81 256 156 415 46 100
       146 267 191 320 199 237 371 362 639 466 136 53 339 99 500 113 98 9 488 -4
       573 -18z m-1933 -2036 c354 -22 643 -111 915 -283 131 -83 276 -208 515 -443
       244 -240 270 -263 345 -316 207 -144 403 -196 666 -177 242 17 471 133 678
       343 49 50 104 108 120 130 36 45 36 43 16 -33 -41 -159 -153 -409 -251 -562
       -107 -168 -246 -312 -404 -418 -125 -84 -226 -133 -382 -185 -183 -61 -339
       -86 -573 -93 -462 -13 -822 83 -1166 310 -114 76 -243 189 -484 426 -262 258
       -345 325 -495 401 -191 97 -510 117 -717 45 -213 -73 -327 -153 -541 -379 -95
       -100 -94 -104 -27 95 114 341 315 638 552 816 255 192 554 296 923 322 63 5
       122 9 130 10 8 0 89 -4 180 -9z"/>
       </g>
       </svg> ),
    reactjs:(props: SvgpProps) => ( 
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 800.000000 600.000000"
 {...props} >

<g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 3000 l0 -3000 4000 0 4000 0 0 3000 0 3000 -4000 0 -4000 0 0
-3000z m5225 2490 c250 -35 417 -255 471 -621 31 -216 7 -591 -55 -852 -10
-42 -16 -79 -12 -81 3 -2 67 -24 141 -49 500 -167 855 -410 979 -671 114 -237
34 -483 -229 -712 -174 -150 -485 -314 -780 -409 -47 -15 -89 -31 -93 -35 -5
-4 3 -63 17 -132 107 -517 63 -969 -118 -1222 -78 -110 -189 -176 -329 -198
-288 -44 -741 168 -1130 533 -89 82 -66 84 -181 -19 -236 -214 -564 -412 -789
-476 -312 -90 -549 -29 -688 176 -106 156 -152 351 -152 643 0 191 15 327 59
543 14 68 24 128 22 133 -2 6 -55 27 -118 48 -282 93 -524 217 -716 367 -267
208 -383 459 -316 681 91 296 459 570 1010 753 78 26 144 49 146 51 3 2 -4 42
-15 89 -72 310 -92 674 -49 908 53 295 201 487 411 537 171 40 369 3 614 -115
189 -91 353 -204 577 -398 l97 -83 103 92 c324 291 661 478 934 518 82 12 109
12 189 1z"/>
<path d="M5014 5246 c-175 -40 -411 -169 -627 -343 -113 -92 -217 -185 -217
-196 0 -5 25 -37 56 -70 80 -87 215 -253 322 -398 l93 -126 117 -12 c131 -14
443 -64 540 -86 105 -25 96 -33 126 123 39 208 48 301 48 487 0 201 -23 338
-76 450 -63 134 -120 176 -246 181 -41 2 -102 -3 -136 -10z"/>
<path d="M2725 5231 c-95 -44 -160 -160 -197 -351 -18 -94 -15 -410 5 -545 20
-130 56 -307 66 -324 6 -9 45 -5 162 18 155 30 383 64 516 77 l72 6 114 152
c63 83 171 216 240 296 l126 145 -72 68 c-219 207 -513 389 -731 451 -111 33
-240 35 -301 7z"/>
<path d="M3954 4488 c-53 -57 -136 -153 -219 -258 l-67 -85 322 -3 c178 -1
325 0 328 2 8 9 -301 386 -317 386 -4 0 -25 -19 -47 -42z"/>
<path d="M3701 3899 c-118 -5 -218 -12 -222 -16 -4 -4 -49 -73 -100 -153 -117
-183 -250 -415 -340 -593 l-70 -138 94 -182 c100 -195 213 -389 339 -584 l79
-121 77 -8 c100 -11 807 -8 892 3 l65 8 92 145 c115 180 271 455 354 621 l62
126 -88 164 c-113 212 -222 399 -334 574 l-89 140 -84 6 c-164 12 -517 16
-727 8z m441 -419 c211 -65 348 -253 349 -477 0 -95 -11 -145 -53 -227 -94
-186 -309 -298 -514 -266 -152 24 -298 126 -367 258 -46 88 -58 136 -58 235 0
222 137 410 349 478 80 25 211 25 294 -1z"/>
<path d="M2933 3820 c-211 -36 -263 -49 -263 -65 0 -18 62 -196 122 -349 l51
-129 31 57 c71 132 207 367 250 434 25 40 46 74 46 77 0 11 -82 2 -237 -25z"/>
<path d="M4820 3846 c0 -2 33 -57 74 -123 40 -65 114 -192 164 -282 83 -150
92 -162 101 -140 5 13 27 69 49 125 45 111 124 336 120 339 -5 5 -213 45 -338
65 -122 20 -170 24 -170 16z"/>
<path d="M2280 3661 c-476 -159 -803 -395 -849 -612 -32 -149 115 -344 384
-509 166 -102 592 -278 614 -254 5 5 25 61 46 124 43 132 128 350 191 493 l43
97 -36 78 c-52 114 -145 350 -193 492 -24 69 -46 128 -49 132 -4 4 -72 -14
-151 -41z"/>
<path d="M5557 3693 c-2 -5 -15 -39 -27 -78 -38 -115 -117 -319 -180 -466 -33
-76 -60 -142 -60 -146 0 -5 32 -80 71 -168 73 -166 199 -494 199 -519 0 -28
18 -26 136 15 421 144 744 359 837 557 59 127 32 224 -100 363 -152 158 -388
292 -717 405 -131 45 -152 50 -159 37z"/>
<path d="M5071 2582 c-41 -75 -114 -204 -163 -285 -50 -82 -88 -151 -85 -153
9 -10 481 70 505 85 10 6 4 32 -23 107 -49 138 -149 384 -155 384 -3 0 -38
-62 -79 -138z"/>
<path d="M2831 2688 c-5 -13 -23 -59 -41 -103 -68 -167 -129 -360 -117 -366
28 -14 419 -79 479 -79 26 0 25 3 -66 153 -51 83 -125 212 -165 285 -40 72
-75 132 -77 132 -3 0 -8 -10 -13 -22z"/>
<path d="M5325 1984 c-109 -24 -408 -72 -525 -84 -63 -6 -125 -13 -137 -16
-13 -2 -51 -45 -99 -111 -101 -140 -207 -274 -310 -394 l-83 -96 42 -40 c129
-124 350 -288 497 -370 194 -107 390 -153 515 -122 179 45 286 372 255 777
-16 210 -63 473 -84 471 -6 -1 -38 -7 -71 -15z"/>
<path d="M2597 1983 c-8 -13 -54 -239 -68 -338 -8 -51 -14 -173 -14 -280 0
-209 14 -302 63 -424 35 -88 117 -172 184 -189 228 -57 639 131 997 456 l81
73 -98 112 c-102 116 -252 303 -336 419 -49 66 -50 67 -105 73 -272 29 -610
78 -683 101 -9 3 -19 1 -21 -3z"/>
<path d="M3670 1856 c0 -19 315 -389 334 -393 15 -3 326 372 326 393 0 2 -148
4 -330 4 -181 0 -330 -2 -330 -4z"/>
</g>
</svg>
  ),
    php:(props: SvgpProps) => ( 
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 2560.000000 1383.000000"
       {...props} >
       
       <g transform="translate(0.000000,1383.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
       <path d="M16373 13168 c6 -24 80 -390 90 -445 5 -23 3 -31 -6 -28 -30 11 -690
       99 -1042 139 -1359 155 -2882 186 -4285 86 -2254 -160 -4388 -651 -6115 -1405
       -1649 -720 -2881 -1651 -3559 -2687 -512 -784 -701 -1603 -560 -2438 51 -306
       162 -652 299 -933 29 -60 49 -105 45 -100 -263 301 -509 620 -721 939 -62 93
       -115 173 -119 177 -8 9 11 -124 35 -243 278 -1392 1404 -2702 3215 -3737 2010
       -1149 4733 -1884 7660 -2067 582 -37 727 -41 1500 -41 772 0 928 5 1505 41
       3217 201 6182 1074 8219 2418 1491 985 2401 2156 2645 3406 49 251 56 330 56
       665 0 349 -9 455 -65 723 -66 321 -165 602 -330 937 -113 230 -225 420 -362
       615 -559 793 -1415 1531 -2503 2155 -1390 797 -3129 1400 -5061 1754 -195 36
       -522 91 -540 91 -3 0 -4 -10 -1 -22z m-3203 -1354 c53 -25 112 -82 136 -133
       40 -80 34 -125 -114 -881 l-138 -705 680 -6 c699 -6 806 -12 1061 -55 388 -65
       695 -181 915 -344 147 -109 309 -306 378 -461 62 -138 121 -357 123 -456 0
       -31 2 -34 9 -18 5 11 57 268 115 570 58 303 113 570 122 594 20 55 74 115 127
       144 l41 22 1590 0 c1474 0 1600 -1 1730 -18 506 -65 897 -205 1216 -433 106
       -76 294 -256 375 -359 345 -442 474 -1021 384 -1719 -107 -835 -449 -1501
       -1045 -2039 -451 -407 -916 -627 -1538 -727 -305 -49 -382 -53 -1164 -57 -409
       -3 -743 -6 -743 -9 0 -36 -305 -1557 -318 -1587 -11 -23 -39 -61 -65 -84 -82
       -75 -55 -73 -897 -73 -859 0 -819 -4 -906 84 -54 53 -84 123 -84 190 0 17 65
       362 144 766 79 404 142 736 141 738 -1 1 -18 -5 -38 -13 -31 -13 -144 -15
       -825 -15 l-788 0 -52 26 c-90 45 -152 143 -152 240 0 18 131 704 290 1526 160
       821 296 1541 302 1600 13 116 2 234 -24 265 -18 22 -83 50 -164 69 -59 15
       -151 18 -660 21 l-592 4 -5 -23 c-3 -13 -159 -813 -346 -1778 -204 -1050 -348
       -1771 -360 -1795 -28 -61 -66 -101 -123 -129 l-52 -26 -781 0 -781 0 -52 26
       c-81 40 -138 122 -149 212 -4 35 24 195 111 646 64 329 115 600 113 603 -3 2
       -19 -20 -38 -49 -53 -85 -166 -236 -245 -328 -301 -351 -616 -602 -979 -780
       -319 -157 -603 -238 -1015 -289 -286 -36 -428 -41 -1102 -41 -617 0 -657 -1
       -662 -17 -3 -10 -71 -358 -151 -773 -85 -434 -155 -775 -167 -803 -12 -27 -40
       -65 -66 -88 -82 -72 -55 -70 -918 -67 l-769 3 -54 30 c-87 48 -139 134 -140
       231 -1 56 1269 6614 1294 6679 20 54 79 113 142 142 l51 24 1584 -4 c1444 -2
       1595 -4 1718 -20 373 -49 657 -131 930 -267 512 -257 862 -692 996 -1239 16
       -62 29 -110 31 -105 1 5 140 718 308 1584 168 866 310 1590 315 1609 22 80
       100 153 188 177 37 10 214 13 802 11 746 -2 756 -2 800 -23z"/>
       <path d="M11637 11538 c-11 -44 -1267 -6516 -1267 -6527 0 -8 186 -10 707 -9
       l707 3 57 290 c31 160 195 1004 365 1878 l308 1587 619 0 c659 0 801 -7 953
       -45 219 -56 318 -142 359 -317 19 -83 19 -277 0 -398 -9 -52 -142 -743 -295
       -1534 -154 -792 -280 -1446 -280 -1453 0 -11 134 -13 718 -13 l717 0 303 1563
       c167 859 311 1607 319 1662 11 67 16 170 17 310 0 233 -15 333 -74 498 -140
       386 -502 624 -1105 726 -285 49 -384 53 -1238 58 l-809 5 6 21 c2 12 77 396
       166 852 88 457 163 838 166 848 5 16 -33 17 -704 17 l-710 0 -5 -22z"/>
       <path d="M5556 9803 c-3 -10 -280 -1433 -616 -3163 -336 -1730 -621 -3198
       -634 -3263 l-23 -117 715 2 715 3 168 865 c93 476 169 866 169 868 0 1 314 2
       698 2 882 0 1119 12 1472 76 527 96 934 297 1327 656 516 471 820 1043 932
       1753 86 546 34 1002 -155 1370 -262 509 -762 823 -1469 924 -258 37 -431 41
       -1882 41 -1336 0 -1412 -1 -1417 -17z m2643 -1046 c574 -91 792 -296 827 -777
       11 -168 -23 -451 -86 -701 -86 -341 -217 -600 -399 -791 -104 -110 -189 -174
       -311 -237 -210 -107 -426 -165 -734 -196 -120 -13 -262 -15 -697 -13 l-546 3
       266 1368 266 1368 655 -4 c544 -3 673 -7 759 -20z"/>
       <path d="M7010 8504 c0 -4 -94 -494 -210 -1089 -115 -595 -210 -1087 -210
       -1093 0 -15 608 -17 796 -2 691 55 1020 271 1218 803 84 223 135 488 143 727
       12 377 -77 510 -397 594 -189 50 -286 58 -832 63 -280 3 -508 2 -508 -3z"/>
       <path d="M16706 9793 c-8 -36 -1252 -6446 -1261 -6495 l-7 -38 714 0 714 0
       169 870 169 870 695 0 c700 0 952 8 1201 36 673 77 1139 278 1590 686 623 563
       957 1308 977 2178 4 179 2 254 -12 360 -49 390 -192 701 -439 958 -314 325
       -730 507 -1327 579 -129 15 -303 17 -1661 20 l-1516 4 -6 -28z m2639 -1036
       c328 -53 499 -121 630 -252 153 -153 216 -363 202 -679 -15 -335 -110 -722
       -242 -988 -228 -457 -553 -674 -1152 -769 -129 -21 -179 -23 -755 -26 -460 -3
       -618 -2 -618 7 0 14 519 2688 526 2713 6 18 34 18 657 14 536 -3 670 -7 752
       -20z"/>
       <path d="M18165 8498 c-2 -7 -97 -490 -210 -1073 -113 -583 -208 -1073 -211
       -1089 l-6 -28 418 5 c484 6 603 18 841 82 339 92 548 266 699 582 122 254 207
       629 206 918 0 333 -78 450 -357 538 -192 60 -401 77 -968 77 -317 0 -409 -3
       -412 -12z"/>
       </g>
       </svg>
           ),
    linkedin:(props: SvgpProps) => ( 
        <svg  viewBox="0 0 256 256"  xmlns="http://www.w3.org/2000/svg" {...props}>
        <g>
            <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" fill="#0A66C2"></path>
        </g>
    </svg>
    
    ),
    lycee:(props: SvgpProps) => ( 
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="200.000000pt" height="200.000000pt" viewBox="0 0 200.000000 200.000000"
        preserveAspectRatio="xMidYMid meet">
       
       <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
       <path d="M0 1974 c0 -23 2 -25 15 -14 25 21 52 -11 47 -55 -3 -29 -1 -35 14
       -35 13 0 27 18 44 53 22 45 29 52 52 49 15 -1 29 2 33 8 4 7 12 7 25 0 14 -7
       25 -7 39 2 17 10 24 9 44 -10 27 -26 47 -28 47 -7 0 9 10 20 23 25 14 6 -49 9
       -180 9 l-203 1 0 -26z"/>
       <path d="M417 1994 c-11 -11 3 -24 26 -24 22 -1 22 -1 3 -15 -11 -8 -30 -15
       -42 -15 -13 0 -26 -4 -29 -10 -10 -16 -40 -11 -69 11 -21 17 -29 19 -41 9 -8
       -7 -15 -21 -15 -31 0 -26 -17 -32 -23 -9 -7 27 -25 25 -39 -5 -12 -27 -28 -24
       -28 6 0 29 -27 23 -39 -8 -15 -40 -35 -62 -59 -66 -12 -2 -30 -11 -42 -22 -19
       -17 -20 -29 -20 -250 0 -206 2 -238 19 -275 17 -38 20 -40 35 -25 9 9 16 30
       16 46 0 19 5 29 15 29 9 0 15 -9 15 -25 0 -18 5 -25 20 -25 22 0 40 28 40 64
       0 35 15 40 43 14 36 -33 42 -61 16 -84 l-21 -19 6 32 c10 44 -8 50 -35 11 -33
       -48 -49 -60 -66 -46 -11 9 -20 5 -42 -16 -19 -18 -33 -24 -46 -20 -16 6 -17 3
       -11 -22 3 -16 9 -89 13 -161 3 -73 9 -133 13 -133 4 0 11 19 16 42 5 23 15 43
       23 46 11 4 13 -5 7 -47 -6 -43 -4 -51 10 -51 23 0 53 41 54 73 0 35 23 32 28
       -4 2 -13 9 -30 14 -37 15 -18 2 -27 -17 -12 -12 10 -20 7 -45 -20 -27 -29 -34
       -32 -55 -22 -31 14 -41 1 -47 -65 -6 -62 5 -67 47 -23 30 32 56 38 72 18 17
       -21 22 -58 13 -86 -5 -15 -11 -47 -15 -72 l-6 -45 44 43 c61 60 81 55 85 -22
       l3 -58 64 61 c35 34 68 61 73 61 25 0 34 -31 27 -99 -8 -81 3 -111 41 -111 42
       0 131 67 180 136 52 72 107 124 132 124 10 0 27 -7 38 -15 10 -8 27 -15 37
       -15 28 0 30 -25 8 -85 -26 -68 -26 -77 -3 -105 16 -20 21 -21 40 -9 40 25 75
       85 69 117 -9 45 2 68 39 86 44 21 103 21 133 0 25 -18 25 -32 0 -126 -7 -27
       -9 -51 -5 -55 11 -11 93 76 121 129 24 46 56 74 69 61 11 -11 6 -58 -9 -77
       -32 -42 -5 -96 46 -96 51 0 64 10 83 63 50 144 162 207 182 102 7 -40 -11 -75
       -57 -113 -36 -29 -37 -50 -4 -58 45 -11 107 6 215 59 58 28 108 53 113 55 4 2
       7 -5 7 -15 0 -25 -161 -118 -239 -139 -74 -19 -151 -18 -180 2 -19 14 -29 15
       -61 5 -63 -19 -144 -14 -165 9 -24 26 -27 26 -81 -15 -46 -36 -87 -45 -100
       -23 -11 17 -6 70 11 119 9 26 12 46 6 52 -20 20 -46 -1 -80 -67 -26 -50 -49
       -78 -82 -101 -69 -49 -82 -51 -119 -13 l-32 32 -39 -22 c-47 -27 -90 -28 -114
       -2 -10 11 -21 20 -26 20 -4 0 -31 -18 -60 -40 -64 -48 -90 -56 -127 -41 -38
       16 -55 65 -47 139 l6 57 -38 -45 c-59 -69 -103 -110 -119 -110 -20 0 -33 40
       -23 68 12 32 11 75 -1 67 -14 -9 -87 -120 -95 -144 -7 -25 -41 -45 -56 -35
       -16 10 -3 89 31 195 35 106 37 129 12 129 -28 0 -60 -40 -71 -90 -6 -26 -11
       -175 -11 -347 l0 -303 1000 0 1000 0 0 56 0 56 -62 -6 c-164 -17 -203 -18
       -256 -5 -48 11 -60 11 -104 -5 -28 -10 -74 -20 -102 -23 -48 -5 -55 -3 -88 26
       -20 17 -41 31 -47 31 -6 0 -42 -17 -81 -37 -60 -32 -72 -35 -94 -25 -22 10
       -26 18 -26 52 0 23 9 58 20 80 11 21 16 41 11 44 -4 3 -28 0 -51 -7 -37 -11
       -45 -18 -57 -52 -21 -63 -123 -145 -179 -145 -24 0 -40 9 -63 36 l-32 35 -35
       -30 c-19 -17 -46 -34 -59 -37 -29 -7 -75 18 -75 41 0 24 -21 28 -43 7 -12 -10
       -43 -31 -68 -46 -108 -62 -200 -11 -199 111 1 57 20 96 78 157 35 37 51 46 78
       46 23 0 37 -6 44 -19 25 -48 -3 -97 -35 -61 -26 29 -39 25 -79 -22 -50 -58
       -50 -104 -1 -147 45 -39 65 -39 140 2 50 27 64 42 85 85 33 65 69 104 94 100
       31 -5 29 -19 -9 -78 -57 -87 -37 -132 41 -95 26 12 42 31 60 70 23 49 56 77
       71 61 3 -3 -1 -27 -9 -53 -17 -54 -14 -79 14 -94 39 -21 91 9 122 68 9 18 16
       35 16 38 -1 21 3 26 23 39 12 8 57 24 101 36 60 16 81 18 92 9 19 -16 17 -36
       -7 -70 -11 -16 -23 -45 -26 -64 -5 -33 -4 -35 21 -35 27 0 117 54 125 74 10
       24 61 66 81 66 24 0 24 -5 -2 -68 -12 -31 -11 -35 11 -53 51 -41 181 -15 181
       37 0 34 79 117 126 132 44 13 82 -1 90 -35 7 -27 -11 -58 -58 -102 l-33 -31
       25 -1 c65 -4 197 4 213 12 16 9 17 35 17 320 0 188 -4 318 -10 329 -7 13 -7
       21 0 25 5 3 10 42 10 87 0 72 -2 79 -17 73 -41 -17 -63 -16 -92 4 -42 30 -58
       68 -56 132 2 66 8 88 46 164 27 55 29 64 20 111 -5 28 -11 55 -12 60 -6 21 12
       128 27 156 13 26 18 28 29 17 13 -13 19 -38 16 -68 -1 -11 -4 -11 -17 0 -23
       19 -35 -5 -32 -69 4 -64 21 -73 29 -15 3 24 8 45 12 49 13 13 19 -48 7 -74
       -31 -67 -15 -172 25 -172 13 0 15 37 15 261 l0 260 -22 -7 c-13 -4 -32 -7 -43
       -6 -11 1 -29 -7 -40 -17 -25 -23 -61 -35 -98 -33 -15 1 -45 -7 -67 -18 -47
       -24 -63 -25 -80 -5 -17 20 -5 73 24 110 29 36 47 26 23 -14 -19 -32 -23 -71
       -7 -71 26 0 70 32 70 51 0 48 63 118 96 105 20 -8 17 -33 -7 -73 -25 -40 -22
       -47 11 -30 14 7 27 24 30 42 18 87 89 118 76 33 -6 -35 -4 -39 10 -34 8 3 18
       6 20 6 2 0 4 34 4 75 l0 75 -60 0 c-52 0 -64 -4 -93 -30 -19 -16 -40 -30 -46
       -30 -19 0 -12 28 11 44 20 15 -42 16 -683 16 -388 0 -709 -3 -712 -6z m778
       -44 c8 0 17 5 20 10 3 6 13 10 22 10 29 0 -6 -29 -44 -36 -40 -8 -70 13 -59
       42 6 16 8 15 27 -4 11 -12 26 -22 34 -22z m-455 -19 c0 -50 15 -59 47 -30 l25
       24 24 -28 c28 -33 30 -64 6 -93 -37 -46 -83 -37 -100 18 -14 44 -21 148 -10
       148 4 0 8 -18 8 -39z m327 22 c2 -6 -17 -14 -44 -18 -26 -4 -56 -11 -65 -16
       -10 -5 -18 -6 -18 -1 0 17 25 32 56 32 18 0 36 5 39 11 8 12 27 7 32 -8z m391
       5 c29 -29 -1 -139 -63 -230 -20 -28 -33 -53 -30 -56 13 -13 62 39 90 94 35 67
       65 84 65 36 0 -16 -7 -35 -15 -42 -21 -17 -19 -30 4 -30 21 0 62 44 87 91 16
       31 44 39 44 13 0 -20 -41 -94 -51 -94 -10 0 -93 -174 -103 -213 -6 -26 -5 -28
       14 -22 13 4 20 2 20 -6 0 -19 -31 -49 -52 -49 -28 0 -23 53 12 135 36 86 37
       91 3 98 -21 4 -36 -3 -67 -29 -23 -20 -50 -34 -66 -34 -15 0 -36 -11 -50 -25
       -40 -43 -57 -25 -20 22 11 14 20 40 20 57 0 75 44 194 96 264 27 34 43 39 62
       20z m-408 -92 c-19 -7 -39 -10 -45 -7 -11 6 29 19 60 19 11 1 5 -5 -15 -12z
       m-467 -56 c7 0 17 4 23 9 16 15 66 23 62 10 -4 -13 -8 -15 -61 -40 -24 -11
       -27 -17 -22 -41 8 -34 -7 -37 -29 -4 -11 18 -21 23 -38 19 l-23 -6 23 25 c12
       13 22 36 22 49 0 39 14 44 23 10 4 -17 13 -31 20 -31z m392 30 c-3 -5 -13 -10
       -21 -10 -8 0 -14 5 -14 10 0 6 9 10 21 10 11 0 17 -4 14 -10z m-709 -78 c12
       -9 24 -25 27 -34 7 -21 56 -25 75 -6 6 6 15 8 19 4 16 -16 -39 -46 -82 -46
       -35 0 -46 -5 -59 -25 -18 -27 -45 -32 -64 -13 -20 20 -15 89 10 115 26 27 45
       29 74 5z m733 -87 c0 -36 6 -75 12 -87 13 -24 13 -24 53 36 16 25 36 13 36
       -21 0 -17 -4 -23 -14 -20 -11 5 -11 0 1 -25 16 -30 25 -32 78 -13 l20 7 -20
       -17 c-15 -13 -33 -15 -72 -12 -67 7 -92 21 -100 58 -6 34 -26 34 -31 0 -5 -29
       -54 -113 -70 -119 -8 -2 -12 7 -12 27 0 22 4 29 14 25 17 -6 51 40 41 56 -10
       17 -21 12 -35 -17 -7 -16 -14 -23 -17 -17 -5 15 36 84 49 84 20 0 37 35 38 78
       0 29 4 42 14 42 11 0 14 -16 15 -65z m-469 -75 c0 -5 -13 -16 -30 -25 -27 -14
       -30 -14 -30 0 0 9 10 20 23 25 30 12 37 12 37 0z m-215 -121 c26 -4 31 -7 14
       -8 -47 -2 -62 -22 -57 -77 3 -27 8 -57 12 -66 6 -13 4 -18 -8 -18 -13 0 -16
       12 -16 70 0 56 -3 70 -15 70 -8 0 -15 4 -15 9 0 5 7 14 15 21 8 7 15 22 16 34
       1 18 2 18 8 -4 5 -20 15 -26 46 -31z m371 26 c1 -11 2 -26 3 -33 1 -10 6 -10
       21 -2 13 7 20 7 20 0 0 -8 -62 -40 -79 -40 -3 0 -11 12 -18 26 -10 21 -9 30 4
       50 18 29 47 28 49 -1z m1134 10 c-1 -6 -27 -18 -58 -27 -107 -31 -121 -40
       -128 -74 -3 -18 -3 -42 1 -54 7 -22 22 -23 70 -5 19 7 19 7 3 -10 -9 -10 -32
       -18 -55 -19 -32 -1 -38 2 -41 22 -5 31 -17 27 -41 -13 -24 -42 -46 -53 -73
       -36 -17 11 -24 9 -47 -13 -20 -19 -36 -25 -63 -24 -35 1 -37 3 -31 30 5 24 2
       30 -16 35 -25 6 -27 16 -5 34 10 8 18 9 22 2 4 -5 14 -12 22 -15 8 -2 15 -15
       15 -29 0 -17 6 -25 22 -27 17 -3 28 6 44 32 23 40 39 46 39 17 0 -17 36 -40
       44 -29 8 10 46 99 46 107 0 5 -6 11 -12 14 -7 2 2 11 20 21 19 10 32 24 32 36
       0 23 15 27 24 5 7 -20 18 -19 69 4 66 30 100 35 97 16z m-1270 -54 c0 -37 22
       -55 57 -47 l28 7 -25 -21 c-33 -26 -45 -25 -68 6 l-19 27 -28 -37 c-33 -43
       -42 -45 -55 -10 -13 32 -31 27 -44 -14 -17 -49 -39 -67 -64 -51 -27 17 -27 71
       0 95 16 15 22 16 39 6 18 -11 23 -10 40 13 19 23 47 27 33 4 -6 -11 13 -39 27
       -39 5 0 18 20 30 45 24 52 49 60 49 16z m638 -18 c2 -24 -1 -32 -17 -36 -13
       -3 -21 -13 -21 -27 0 -17 4 -20 19 -15 18 5 19 3 9 -32 -5 -21 -15 -46 -20
       -56 -15 -28 -1 -67 23 -67 11 0 17 -4 14 -10 -10 -17 -54 -11 -64 8 -6 10 -8
       32 -7 48 2 16 7 58 11 94 12 112 45 171 53 93z m90 -4 c7 -12 11 -23 8 -26 -8
       -9 -36 17 -36 33 0 20 13 17 28 -7z m-298 -38 c-8 -4 -58 -23 -110 -40 -221
       -75 -251 -97 -252 -182 0 -86 -31 -161 -58 -144 -14 9 -30 48 -41 100 -4 22
       -11 53 -15 69 -5 20 -4 27 4 22 11 -6 31 -64 39 -111 6 -35 12 -45 28 -45 16
       0 21 43 16 129 -1 30 3 49 16 63 19 21 91 56 183 89 30 11 63 24 72 30 10 5
       27 9 37 9 11 0 23 5 26 10 3 6 21 10 38 10 22 -1 28 -3 17 -9z m332 -116 c-3
       -29 -1 -35 14 -35 17 0 17 -1 2 -17 -34 -33 -63 23 -36 67 19 29 25 25 20 -15z
       m-562 -66 c0 -10 -12 -44 -26 -74 -38 -79 -23 -86 60 -30 37 25 77 45 89 45
       20 0 20 0 1 -15 -10 -8 -23 -15 -28 -15 -5 0 -32 -16 -60 -34 -100 -68 -137
       -56 -91 30 23 43 24 50 10 60 -19 14 -19 28 0 48 19 19 45 10 45 -15z m-394
       -185 c-3 -7 5 -20 17 -29 16 -11 19 -17 9 -27 -9 -9 -17 -7 -35 10 -13 12 -26
       22 -29 22 -4 0 -16 -16 -28 -35 -17 -27 -28 -35 -51 -35 -27 0 -30 3 -23 23 4
       12 8 32 8 45 1 30 20 29 24 -3 2 -14 8 -25 14 -25 15 0 48 30 48 43 0 13 33
       36 43 30 5 -3 6 -11 3 -19z m94 -10 c-8 -8 -23 -20 -34 -26 -19 -10 -18 -8 3
       16 26 27 53 37 31 10z m1018 -132 c3 -16 -7 -26 -38 -42 -49 -25 -70 -21 -70
       14 0 28 9 36 54 47 41 9 50 6 54 -19z m52 -501 c0 -37 -22 -57 -40 -36 -10 12
       -10 21 -2 40 16 35 42 32 42 -4z"/>
       <path d="M781 1866 c-20 -24 -9 -51 19 -51 21 0 25 5 25 30 0 34 -24 45 -44
       21z"/>
       <path d="M1394 1878 c-24 -47 -64 -161 -59 -167 10 -10 64 65 71 97 3 18 10
       35 15 38 12 7 11 64 -1 64 -5 0 -17 -14 -26 -32z"/>
       <path d="M196 1728 c-9 -12 -16 -28 -16 -34 0 -17 25 -35 41 -29 15 6 39 50
       39 72 0 22 -48 15 -64 -9z"/>
       <path d="M335 1379 c-9 -28 9 -46 30 -29 8 7 15 21 15 31 0 26 -37 25 -45 -2z"/>
       <path d="M7 1923 c-4 -3 -7 -20 -7 -36 0 -25 2 -28 15 -17 8 7 15 23 15 36 0
       23 -10 31 -23 17z"/>
       <path d="M1904 1298 c-37 -59 -46 -88 -47 -154 -1 -67 0 -73 28 -97 32 -28 83
       -35 103 -15 18 18 15 33 -18 68 -30 33 -32 39 -34 144 -1 58 -15 81 -32 54z"/>
       <path d="M1950 1187 c0 -18 28 -42 37 -33 9 8 -9 38 -25 44 -7 2 -12 -3 -12
       -11z"/>
       </g>
       </svg>
       
    
    ),
    me:(props: SvgpProps) => ( 
        <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 326.000000 326.000000"
       {...props}>
       
       <g transform="translate(0.000000,326.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
       <path d="M1450 3250 c-190 -24 -352 -71 -518 -150 -473 -226 -799 -649 -904
       -1172 -32 -162 -32 -434 0 -596 92 -460 356 -845 744 -1086 38 -23 56 -31 45
       -18 -36 40 25 42 73 1 23 -19 23 -22 7 -34 -15 -11 -7 -17 64 -49 211 -97 411
       -140 649 -140 163 0 220 6 220 24 0 16 -84 33 -154 30 -21 0 -49 6 -62 15 -35
       22 -32 106 4 155 49 65 67 76 122 78 27 0 50 -3 50 -7 0 -5 18 -5 40 -1 30 6
       40 4 40 -6 0 -11 6 -11 27 -3 21 8 30 7 38 -4 10 -14 84 -30 145 -31 19 0 39
       -5 43 -11 6 -7 10 -6 13 2 3 7 12 9 20 6 8 -3 14 0 14 7 0 6 5 8 10 5 6 -3 10
       1 10 9 0 11 -10 16 -30 17 -16 1 -34 3 -40 4 -5 1 -22 3 -37 5 -16 1 51 15
       147 30 96 16 208 34 249 41 l73 12 -5 40 c-3 22 -12 44 -20 48 -12 7 -14 38
       -11 176 4 167 3 167 -10 98 -8 -38 -18 -114 -22 -168 -4 -53 -12 -105 -19
       -114 -9 -12 -35 -17 -113 -21 l-100 -5 -65 37 c-95 53 -115 50 -192 -30 -35
       -36 -68 -63 -74 -59 -8 4 -7 12 1 27 34 54 38 66 38 105 0 30 9 57 30 90 17
       26 30 60 30 76 0 50 -39 102 -69 91 -8 -2 -17 0 -21 5 -3 6 -43 -26 -88 -70
       -54 -53 -101 -88 -136 -104 l-54 -24 -51 27 c-47 25 -51 30 -51 64 0 20 5 49
       12 65 6 15 10 36 9 45 -1 12 8 19 33 24 26 4 36 11 36 25 0 46 44 106 82 112
       13 2 39 19 59 38 31 30 35 38 31 77 -2 23 -7 42 -11 41 -15 -1 -45 -18 -33
       -18 6 -1 12 -10 12 -20 0 -11 5 -21 12 -23 6 -2 8 -10 4 -17 -5 -7 -15 -10
       -23 -7 -10 4 -13 2 -10 -8 3 -8 0 -13 -8 -12 -18 3 -32 16 -17 16 6 0 9 7 6
       15 -4 8 -10 12 -16 9 -5 -3 -20 -3 -34 0 -21 6 -24 12 -24 51 0 40 -2 44 -17
       36 -10 -6 -35 -18 -55 -27 -40 -17 -49 -45 -28 -84 7 -13 6 -21 -5 -30 -30
       -25 -59 -85 -61 -128 -2 -25 -10 -52 -19 -61 -15 -15 -17 -14 -27 3 -5 10 -19
       25 -30 35 -79 64 -139 153 -254 374 l-57 108 -24 -16 c-20 -13 -27 -14 -39 -4
       -13 10 -17 10 -24 -1 -7 -11 -14 -12 -35 -2 -35 16 -40 15 -24 -5 13 -15 12
       -15 -8 -5 -29 16 -40 15 -40 -4 0 -9 11 -21 25 -27 24 -11 24 -12 -19 -22
       l-44 -11 40 -27 c44 -30 41 -36 -6 -12 -36 19 -45 14 -54 -26 -5 -23 -11 -29
       -23 -24 -69 28 -73 28 -90 4 -9 -12 -28 -46 -42 -73 -50 -98 -82 -146 -97
       -146 -22 0 -137 30 -145 38 -8 8 131 243 163 278 10 11 19 23 19 27 0 3 23 36
       50 72 28 36 50 72 50 78 0 15 33 81 50 102 7 8 17 31 24 52 27 89 100 206 182
       293 70 73 96 93 176 132 89 44 97 46 181 47 77 1 92 4 116 23 l27 23 -22 70
       c-12 39 -25 93 -29 120 -4 28 -13 53 -18 57 -10 6 -29 126 -27 168 0 8 1 46 3
       83 1 37 7 71 13 75 7 4 13 46 16 99 4 88 5 93 42 137 42 52 55 55 96 24 25
       -18 48 -22 147 -28 125 -6 165 -19 193 -61 8 -12 26 -35 39 -51 17 -21 20 -32
       12 -41 -7 -9 -7 -17 0 -24 7 -7 5 -14 -6 -23 -18 -15 -20 -39 -2 -46 15 -5 11
       -60 -5 -70 -5 -4 -27 -6 -48 -6 -28 1 -49 -7 -75 -28 -20 -16 -40 -30 -45 -32
       -5 -2 -11 -25 -15 -53 -3 -27 -12 -60 -21 -73 -11 -16 -13 -35 -9 -66 5 -28 3
       -46 -4 -50 -17 -11 -13 -29 5 -22 10 4 18 -3 25 -24 6 -16 18 -31 27 -33 31
       -8 -162 -14 -203 -6 -11 2 -21 -2 -22 -11 -3 -12 5 -15 37 -12 24 3 54 -2 74
       -12 19 -9 46 -16 60 -16 14 0 26 -4 26 -9 0 -5 18 -12 40 -16 36 -6 44 -4 66
       20 14 15 31 25 38 22 7 -3 19 -1 27 3 11 7 10 12 -5 28 -9 11 -27 23 -39 26
       -33 8 -49 40 -36 69 8 18 8 30 -2 48 -7 13 -13 44 -14 69 -1 25 -5 53 -10 64
       -7 15 -5 17 13 12 17 -6 21 -4 16 7 -9 24 17 32 33 11 7 -10 12 -23 10 -29 -4
       -12 77 -45 110 -45 33 0 45 -31 33 -82 -6 -24 -13 -54 -16 -68 -3 -13 -10 -30
       -16 -38 -6 -7 -13 -30 -15 -50 -2 -20 -8 -41 -14 -47 -5 -5 -9 -18 -9 -28 0
       -20 -19 -20 -64 -2 -15 6 -17 5 -11 -5 5 -8 1 -18 -11 -27 -15 -11 -16 -15 -5
       -22 9 -6 10 -10 2 -16 -7 -4 -18 -1 -26 5 -19 16 -51 4 -74 -28 -20 -29 -38
       -31 -163 -18 -44 5 -46 -1 -17 -38 33 -42 110 -76 170 -76 85 0 180 20 246 52
       87 43 97 36 91 -54 l-6 -72 20 49 c24 64 48 175 48 226 0 21 3 39 6 39 17 0
       48 -26 74 -62 l30 -41 0 -151 c-1 -103 -7 -183 -20 -251 -10 -55 -16 -102 -14
       -104 2 -2 11 12 19 32 21 51 30 145 30 335 l0 162 45 2 c68 2 76 0 113 -25 20
       -13 66 -37 104 -52 37 -16 122 -66 188 -111 214 -147 260 -215 299 -444 9 -52
       21 -117 27 -145 5 -27 12 -77 14 -110 2 -33 7 -85 12 -115 l8 -55 33 82 c39
       101 66 200 88 323 23 129 23 391 0 520 -124 700 -640 1220 -1333 1345 -108 19
       -351 27 -453 15z m561 -579 c-7 -5 -11 -13 -7 -19 3 -6 2 -13 -4 -17 -5 -3
       -10 2 -10 13 0 21 8 32 24 32 6 0 5 -4 -3 -9z m-971 -2013 c0 -19 -2 -20 -10
       -8 -13 19 -13 30 0 30 6 0 10 -10 10 -22z m-84 -11 l52 -12 -17 -35 c-18 -38
       -28 -40 -118 -25 -39 7 -43 6 -43 -13 0 -27 8 -31 67 -38 95 -11 94 -10 78
       -47 -13 -31 -15 -32 -65 -29 -30 3 -69 14 -95 29 -42 23 -45 27 -45 66 0 34 7
       49 35 80 38 41 61 45 151 24z m459 -166 c-9 -8 -23 13 -33 51 -15 55 -1 56 20
       1 9 -26 15 -49 13 -52z m-509 -97 c35 -4 41 -8 37 -24 -8 -30 -33 -47 -43 -29
       -7 11 -12 11 -22 1 -28 -28 -88 0 -88 43 0 22 6 23 116 9z"/>
       <path d="M1573 2546 c25 -19 21 -26 -13 -26 -20 0 -30 -5 -30 -15 0 -13 7 -15
       35 -9 26 5 35 3 35 -8 0 -16 35 -48 53 -48 8 0 23 11 35 25 l22 25 -35 21
       c-19 12 -33 25 -30 29 6 9 -30 20 -65 20 -23 -1 -24 -2 -7 -14z m92 -75 c-3
       -6 -11 -11 -17 -11 -6 0 -6 6 2 15 14 17 26 13 15 -4z"/>
       <path d="M1700 2200 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5
       0 -9 -4 -9 -10z"/>
       <path d="M1715 2100 c11 -5 14 -9 6 -9 -11 -1 -11 -4 -1 -16 16 -20 44 -19 61
       2 12 15 12 16 -4 10 -11 -4 -20 -1 -23 8 -4 8 -18 15 -33 14 -23 0 -24 -1 -6
       -9z"/>
       <path d="M1554 1693 c5 -43 13 -55 78 -118 40 -39 89 -92 108 -117 19 -26 38
       -48 43 -48 22 -1 -2 33 -83 115 -83 85 -130 158 -130 201 0 8 -5 14 -11 14 -8
       0 -10 -15 -5 -47z"/>
       <path d="M2002 1578 c-14 -14 -16 -28 -3 -28 5 0 11 9 14 20 6 23 5 24 -11 8z"/>
       <path d="M1980 1445 c-20 -24 -5 -28 21 -6 19 16 20 20 8 21 -9 0 -22 -7 -29
       -15z"/>
       <path d="M2074 1092 c-22 -15 -22 -50 -1 -73 12 -13 22 -28 22 -34 0 -18 20
       -15 20 3 0 9 6 27 13 39 17 31 15 51 -7 63 -23 12 -32 12 -47 2z m33 -44 c-3
       -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z"/>
       <path d="M2065 958 c0 -38 2 -42 28 -45 22 -3 27 0 27 17 0 14 -6 20 -17 18
       -13 -2 -19 5 -21 25 -5 42 -17 32 -17 -15z"/>
       <path d="M1718 840 c-4 -47 -10 -94 -13 -105 -5 -15 0 -12 19 10 20 23 26 41
       26 76 0 25 -4 49 -9 55 -5 5 -11 18 -13 29 -2 11 -7 -18 -10 -65z"/>
       <path d="M1838 893 c-10 -2 -18 -9 -18 -14 0 -14 16 -11 30 6 7 8 11 14 9 14
       -2 -1 -12 -3 -21 -6z"/>
       <path d="M1848 23 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
       </g>
       </svg>
       
    
    ),
    github:(props: SvgpProps) => ( 
        <svg viewBox="0 0 256 250"  xmlns="http://www.w3.org/2000/svg" {...props}>
        <g>
            <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" fill="#161614"></path>
        </g>
    </svg>
    ),
}

type IconName = keyof typeof Icons;

export type CustomIconsProps = {
    name:IconName;
    size?: number 
} & SvgpProps;

export const CustomIcons = ({name,size, ...props}:CustomIconsProps) => {
    const Icon = Icons[name];
    return <Icon height={size} width={size}{...props}/>;
}