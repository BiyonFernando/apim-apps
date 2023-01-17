import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @class CustomIcon
 * @extends {React.Component}
 */
export default function CustomIcon(props) {
    const {
        className, icon, height, width, strokeColor,
    } = props;
    if (icon === 'overview') {
        return (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width={width}
                height={height}
                viewBox='0 0 8.5272856 8.5114363'
                aria-hidden='true'
                className={className}
                style={{ padding: 0 }}
            >
                <g transform='translate(79.857 -62.367)'>
                    <g
                        transform='matrix(.9999 0 0 1.00321 -86.091 38.578)'
                        fill='none'
                        stroke={strokeColor}
                        strokeLinejoin='round'
                    >
                        <path
                            transform='scale(.26458)'
                            d={
                                'm 29.705078,90.623047 c -2.846282,0 -5.138672,2.290437 -5.138672,5.136719 V'
                                + ' 111.5293 c 0,2.84628 2.29239,5.13867 5.138672,5.13867 h 17.177734 l -4.591796,'
                                + '-4.74219 a 8.7230968,9.0089885 0 0 1 -10.539063,-1.41406 8.7230968,9.0089885 0 0 1'
                                + ' 0,-12.740236 8.7230968,9.0089885 0 0 1 6.296875,-2.638672 8.7230968,9.0089885 0 0'
                                + ' 1 6.041016,2.638672 8.7230968,9.0089885 0 0 1 0,12.740236 8.7230968,9.0089885 0 0 '
                                + '1 -0.609375,0.5664 6.2078361,6.4112926 0 0 0 1.089843,-0.88671 6.2078361,6.4112926 0'
                                + ' 0 0 1.50586,-2.53125 l 7.242187,7.47851 c 0.914205,-0.92665 1.480469,-2.19879'
                                + ' 1.480469,-3.60937 V 95.759766 c 0,-2.846282 -2.29239,'
                                + '-5.136719 -5.138672,-5.136719 z'
                            }
                            strokeWidth='2'
                        />
                        <g transform='scale(.88683 .9159) rotate(-45 -45.67 5.272)' strokeWidth='0.539'>
                            <circle cx='-22.921' cy='63.11' r='2.603' />
                            <path
                                d={
                                    'm -89.15625,247.73828 v 13.91602 h 6.3125 V 247.74609 A 7,7 0 0 1 -86,248.5 a'
                                    + ' 7,7 0 0 1 -3.15625,-0.76172 z'
                                }
                                transform='scale(.26458)'
                                strokeWidth='2.039'
                            />
                        </g>
                    </g>
                </g>
            </svg>
        );
    } else if (icon === 'test') {
        return (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width={width}
                height={height}
                viewBox='0 0 11 11'
                aria-hidden='true'
                className={className}
                style={{ padding: 0 }}
            >
                <g
                    // eslint-disable-next-line react/no-unknown-property
                    sid='layer2'
                    transform='translate(79.833 -138.905)'
                >
                    <g
                        transform='matrix(1.19734 0 0 1.0548 -89.665 113.54)'
                        fill='none'
                        stroke={strokeColor}
                        strokeWidth='0.529'
                    >
                        <path
                            d='m 8.6244111,24.214646 3.2203959,3.9527 -3.439584,3.704167'
                        />
                        <path
                            d='M 10.944689,31.765172 H 15.2945'
                        />
                    </g>
                </g>
            </svg>
        );
    } else if (icon === 'apis') {
        return (
            <svg
                className={className}
                width={width}
                height={height}
                viewBox='0 0 18 20'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
            >
                <g id='Home' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' opacity='1'>
                    <g id='new-dashboard-+' transform='translate(-26.000000, -313.000000)' fill={strokeColor}>
                        <g id='Icon/main/APIs' transform='translate(26.000000, 314.000000)'>
                            <path
                                d={'M4.06117597,10.1929778 C4.25952031,10.5669391 4.11795164,11.0293767 3.74497349,11'
                                + '.2258612 L1.68773914,12.3169944 C1.64250846,12.3408219 1.60557241,12.3777579 1.5817'
                                + '4494'
                            + ',12.4229886 C1.52560653,12.5295538 1.55282105,12.6582015 1.64024147,12.7344181 L1.68886'
                            + '167,12.7678122 L8.41364151,16.3345506 C8.74539524,16.5105086 9.13468074,16.530937 9.4'
                            + '7853'
                            + '019,16.3955795 L9.60514281,16.3375174 L16.3122435,12.8042245 C16.3574742,12.780397 16.39'
                            + '44103,12.743461 16.4182377,12.6982303 C16.4837326,12.5739043 16.4357748,12.4195215 16.31'
                            + '41904,12.3550258 L14.2484654,11.2673551 C13.8745042,11.0690108 13.7306308,10.6058624 13.'
                            + '9271153,10.2328843 C14.1235997,9.85990611 14.5860373,9.71833744 14.9599986,9.91668178 L1'
                            + '7.0226542,11.0027333 C17.8952305,11.4655368 18.230935,12.5462164 17.7724713,13.4164987 C'
                            + '17.6334777,13.6803443 17.4307619,13.9038688 17.1838248,14.0675712 L17.0305119,14.158458 '
                            + 'L10.3234112,17.691751 C9.55907478,18.0944025 8.65331468,18.1191175 7.86836675,17.7665489'
                            + ' L7.70210835,17.6852239 L0.977328512,14.1184856 C0.104752218,13.6556821 -0.230952342,12.'
                            + '5750025 0.227511392,11.7047202 C0.394303663,11.3881055 0.652856023,11.1295531 0.9666360'
                            + '04,10.9642618 L3.0267051,9.87162761 C3.39968325,9.67514316 3.86283163,9.81901654 4.06117'
                            + '597,10.1929778 Z M7.6765888,0.308249209 C8.49552067,-0.123163161 9.47680117,-0.120719768'
                            + ' 10.2978916,0.314776264 L10.2978916,0.314776264 L17.0226715,3.88151466 C17.8952478,4.344'
                            + '31812 18.2309523,5.42499767 17.7724886,6.29528001 C17.6056963,6.61189473 17.347144,6.870'
                            + '44709 17.0305293,7.03723936 L17.0305293,7.03723936 L10.3234285,10.5705323 C9.50449665,11'
                            + '.0019447 8.52321615,10.9995013 7.70212567,10.5640053 L7.70212567,10.5640053 L0.977345834'
                            + ',6.99726687 C0.10476954,6.53446341 -0.23093502,5.45378385 0.227528714,4.58350152 C0.3943'
                            + '20985,4.2668868 0.652873345,4.00833444 0.969488067,3.84154216 L0.969488067,3.84154216 Z '
                            + 'M9.58635849,1.6654496 C9.21313554,1.46749686 8.76709895,1.46638623 8.39485719,1.66248276'
                            + ' L8.39485719,1.66248276 L1.68775646,5.19577572 C1.64252578,5.21960318 1.60558973,5.25653'
                            + '923 1.58176226,5.30176991 C1.51626745,5.42609596 1.56422524,5.58047875 1.688879,5.646593'
                            + '53 L1.688879,5.64659353 L8.41365884,9.21333192 C8.78688178,9.41128466 9.23291837,9.41239'
                            + '53 9.60516013,9.21629877 L9.60516013,9.21629877 L16.3122609,5.68300581 C16.3574915,5.659'
                            + '17834 16.3944276,5.62224229 16.4182551,5.57701162 C16.4837499,5.45268557 16.4357921,5.29'
                            + '830278 16.3111383,5.232188 L16.3111383,5.232188 Z'}
                                id='Combined-Shape'
                            />
                        </g>
                    </g>
                </g>
            </svg>
        );
    } else if (icon === 'service-catalog') {
        return (
            <svg
                width={width}
                height={height}
                viewBox='0 0 18 18'
                version='1.1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g id='Home' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' opacity='1'>
                    <g id='new-dashboard-+' transform='translate(-26.000000, -266.000000)' fill={strokeColor}>
                        <g id='Icon/main/Services' transform='translate(26.000000, 266.000000)'>
                            <path
                                d={'M10.5935681,5.36152673 L10.6265216,5.4580575 L10.9653418,6.72232841 C11.7228159,6.'
                                + '64289911 12.4692025,6.74925052 13.1508513,7.01040774 L13.8054725,5.87657432 C14.0125'
                                + '792,5.51785485 14.471272,5.39494849 14.8299915,5.60205527 C15.1561001,5.79033416 15'
                                + '.2873219,6.18653539 15.1528829,6.52652719 L15.1045106,6.62657432 L14.4503178,7.76075'
                                + '434 C15.0171068,8.22044333 15.4822405,8.81351979 15.7921123,9.50903392 L17.0564322,9'
                                + '.1703681 C17.4565318,9.06316175 17.8677845,9.30059861 17.9749908,9.70069819 C18.0732'
                                + '633,10.0674561 17.8819398,10.4435858 17.5411915,10.5863034 L17.4446608,10.6192568 L1'
                                + '6.1803375,10.9575776 C16.2598659,11.7152231 16.1535251,12.4617879 15.8923105,13.1435'
                                + '866 L17.0261439,13.7982077 C17.3848634,14.0053145 17.5077698,14.4640073 17.300663,1'
                                + '4.8227267 C17.1123841,15.1488354 16.7161829,15.2800571 16.3761911,15.1456181 L16.27'
                                + '61439,15.0972458 L15.1419639,14.443053 C14.6823843,15.0097072 14.0894806,15.4747545'
                                + ' 13.3941806,15.7846264 L13.7323502,17.0491674 C13.8395565,17.449267 13.6021196,17.8'
                                + '605197 13.2020201,17.9677261 C12.8352621,18.0659986 12.4591324,17.874675 12.3164149,'
                                + '17.5339268 L12.2834614,17.437396 L11.9446413,16.1731251 C11.1871671,16.2525544 10.44'
                                + '07806,16.146203 9.7591317,15.8850457 L9.10451057,17.0188792 C8.89740379,17.3775986 '
                                + '8.43871098,17.500505 8.07999152,17.2933982 C7.75388291,17.1051193 7.62266116,16.7089'
                                + '181 7.75710017,16.3689263 L7.80547246,16.2688792 L8.45966528,15.1346991 C7.89301105'
                                + ',14.6751195 7.42796377,14.0822158 7.11809182,13.3869158 L5.85355084,13.7250854 C5.45'
                                + '345127,13.8322917 5.04219855,13.5948549 4.93499219,13.1947553 C4.83671969,12.827997'
                                + '4 5.02804324,12.4518677 5.3687915,12.3091501 L5.46532228,12.2761966 L6.72959318,11.9'
                                + '373765 C6.65016388,11.1799024 6.7565153,10.4335158 7.01767251,9.75186693 L5.88383909'
                                + ',9.0972458 C5.52511963,8.89013902 5.40221326,8.43144621 5.60932004,8.07272674 C5.797'
                                + '59893,7.74661814 6.19380016,7.61539639 6.53379197,7.74983539 L6.63383909,7.79820769'
                                + ' L7.7672147,8.45339261 C8.22690684,7.88628907 8.82009672,7.42087982 9.51580245,7.110'
                                + '82705 L9.17763288,5.84628607 C9.07042652,5.44618649 9.30786339,5.03493378 9.70796296'
                                + ',4.92772742 C10.0747209,4.82945492 10.4508506,5.02077847 10.5935681,5.36152673 Z M12'
                                // eslint-disable-next-line max-len
                                + '.2513189,1.04805054e-13 C13.770102,1.04805054e-13 15.0013189,1.23121694 15.0013189,2.75 C15.0013189,3.16421356 14.6655325,3.5 14.2513189,3.5 C13.8716232,3.5 13.557828,3.21784612 13.5081655,2.85177056 L13.5013189,2.75 C13.5013189,2.10279131 13.0094443,1.5704661 12.3791242,1.50645361 L12.2513189,1.5 L2.75,1.5 C2.10279131,1.5 1.5704661,1.99187466 1.50645361,2.62219476 L1.5,2.75 L1.5,14.2565317 C1.5,14.9037404 1.99187466,15.4360656 2.62219476,15.5000781 L2.75,15.5065317 L4.76332092,15.5065317 C5.17753449,15.5065317 5.51332092,15.8423182 5.51332092,16.2565317 C5.51332092,16.6362275 5.23116704,16.9500227 4.86509148,16.9996851 L4.76332092,17.0065317 L2.75,17.0065317 C1.28746816,17.0065317 0.0915957212,15.8648271 0.00501879394,14.424054 L4.51194637e-13,14.2565317 L4.51194637e-13,2.75 C4.51194637e-13,1.28746816 1.1417046,0.0915957212 2.58247767,0.00501879394 L2.75,1.04805054e-13 L12.2513189,1.04805054e-13 Z M14.5942505,10.6065648 C14.1296896,8.87280001 12.3475945,7.84390692 10.6138296,8.30846781 C8.88006478,8.7730287 7.85117169,10.5551238 8.31573258,12.2888886 C8.78029347,14.0226535 10.5623886,15.0515466 12.2961534,14.5869857 C14.0299182,14.1224248 15.0588113,12.3403297 14.5942505,10.6065648 Z M12.4209173,11.1889077 C12.5638592,11.7223738 12.2472767,12.2707108 11.7138106,12.4136526 C11.1803445,12.5565944 10.6320075,12.2400119 10.4890657,11.7065458 C10.3461239,11.1730797 10.6627064,10.6247427 11.1961725,10.4818009 C11.7296386,10.3388591 12.2779755,10.6554416 12.4209173,11.1889077 Z'}
                                id='Combined-Shape'
                            />
                        </g>
                    </g>
                </g>
            </svg>
        );
    } else if (icon === 'api-product') {
        return (
            <svg
                width={width}
                height={height}
                className={className}
                stroke={strokeColor}
                viewBox='0 0 8.467 8.467'
                aria-hidden='true'
                {...props}
            >
                <g transform='translate(82.262 -41.963)' stroke={strokeColor}>
                    <g stroke={strokeColor}>
                        <g
                            transform='matrix(.76623 0 0 .76623 171.718 7.386)'
                            display='inline'
                            fill='#8b8e95'
                            fillOpacity={1}
                        >
                            <path
                                d={
                                    'M-326.924 45.126a.142.142 0 00-.142.143v1.111a3.903 3.903 0 '
                                    + '00-1.527.636l-.788-.789a.142.142 0 00-.202 0l-.78.781a.142.142 '
                                    + '0 000 .202l.785.786a3.903 3.903 0 00-.63 1.529h-1.114a.142.142 0'
                                    + ' 00-.143.142v1.104c0 .08.064.143.143.143h1.111a3.903 3.903 0 00.636'
                                    + ' 1.526l-.789.789a.142.142 0 000 .201l.781.781a.142.142 0 00.202'
                                    + ' 0l.786-.786a3.903 3.903 0 001.529.631v1.114c0 '
                                    + '.079.063.142.142.142h1.104a.142.142 0 00.143-.142v-1.112a3.903'
                                    + ' 3.903 0 001.526-.635l.789.788a.142.142 0 00.201 0l.781-.78a.142.142'
                                    + ' 0 000-.202l-.786-.786a3.903 3.903 0 00.631-1.53h1.114a.142.142 0'
                                    + ' 00.142-.142v-1.104a.142.142 0 00-.142-.142h-1.112a3.903 3.903 0'
                                    + ' 00-.635-1.527l.788-.788a.142.142 0 000-.202l-.78-.78a.142.142 0'
                                    + ' 00-.202 0l-.786.785a3.903 3.903 0 00-1.53-.63v-1.114a.142.142 0'
                                    + ' 00-.142-.143zm.552 2.082a3.012 3.012 0 013.012 3.011 3.012 3.012'
                                    + ' 0 01-3.012 3.012 3.012 3.012 0 01-3.012-3.012 3.012 3.012 0 013.012-3.011z'
                                }
                                stroke='none'
                                strokeWidth={0.937}
                                strokeLinejoin='round'
                                strokeMiterlimit={4}
                                strokeDasharray='none'
                                strokeOpacity={1}
                            />
                            <g transform='matrix(.01024 0 0 .01024 -328.341 48.178)'>
                                <path
                                    stroke={strokeColor}
                                    d={
                                        'M364.427 259.214c-14.051-14.052-32.733-21.79-52.605-21.79-10.619'
                                        + ' 0-20.888 2.23-30.302 6.431a27.521 27.521 0 00-3.799-4.756l-54.188-54.188'
                                        + ' 95.825-95.825c2.645 2.529 5.363 3.085 7.197 3.085 4.06 0 6.8-2.535'
                                        + ' 7.308-3.042l22.197-22.197c3.771-3.771 5.563-7.434'
                                        + ' 5.477-11.197-.135-5.897-4.599-9.968-9.767-14.683-1.53-1.395-3.111-2.838'
                                        + '-4.7-4.426-1.588-1.588-3.03-3.169-4.426-4.699-4.782-5.243-8.912-9.771-14.'
                                        + '939-9.771-3.676 0-7.255 1.793-10.941 5.48l-22.281 22.281c-2.746 2.746-5.103'
                                        + ' 9.066.122 14.426l-95.821 95.821-56.131-56.131c4.012-9.232 6.137-19.269'
                                        + ' 6.137-29.638 0-19.872-7.739-38.555-21.791-52.607C112.95 7.737 94.27'
                                        + ' 0 74.4 0a74.64 74.64 0 00-19.615 2.62c-2.513.684-4.569 2.752-5.238'
                                        + ' 5.268-.683 2.565.096 5.206 2.121 7.232.266.267 26.668 26.873 35.46'
                                        + ' 35.665 1.31 1.31 1.193 4.015 1.058 4.81l-.069.489c-1.005 10.964-3.034'
                                        + ' 24.215-4.565 27.493-3.303 1.581-16.767 3.637-27.911 4.633l-.149-.013-.'
                                        + '302.072c-.082.009-.26.024-.508.024-1.253 0-3.096-.349-4.758-2.011-9.151'
                                        + '-9.152-34.537-34.35-34.779-34.59-2.06-2.06-4.147-2.492-5.536-2.492-3.225'
                                        + ' 0-6.112 2.349-7.022 5.713C-4.357 80.592 3 108.214 21.786 127c14.051 14.051'
                                        + ' 32.733 21.79 52.606 21.79 10.369 0 20.407-2.126 29.639-6.137l56.131'
                                        + ' 56.131-22.013 22.013a24.953 24.953 0 00-11.618-2.839c-6.693 0-12.972'
                                        + ' 2.592-17.678 7.298l-12.282 12.283a25.561 25.561 0 00-3.578-.254c-6.692'
                                        + ' 0-12.971 2.592-17.677 7.298l-64.351 64.35c-4.707 4.706-7.299'
                                        + ' 10.984-7.299 17.678 0 6.693 2.592 12.971 7.299 17.678l28.44'
                                        + ' 28.44c4.706 4.706 10.984 7.298 17.678 7.298 6.692 0 12.971-2.592'
                                        + ' 17.677-7.298l64.35-64.35c4.707-4.706 7.299-10.984 7.299-17.678'
                                        + ' 0-1.209-.087-2.404-.254-3.579l12.282-12.282c4.707-4.707 7.299-10.984'
                                        + ' 7.299-17.678 0-4.121-.986-8.082-2.839-11.618l22.013-22.013 54.188'
                                        + ' 54.188a27.547 27.547 0 004.755 3.798c-4.201 9.414-6.431 19.684-6.431'
                                        + ' 30.302 0 19.873 7.739 38.555 21.791 52.607 14.048 14.048 32.729 21.785'
                                        + ' 52.6 21.786h.003c6.63 0 13.23-.882 19.614-2.62 2.513-.684 4.568-2.752'
                                        + ' 5.236-5.268.682-2.565-.097-5.206-2.122-7.23-.266-.267-26.667-26.874-35'
                                        + '.459-35.666-1.31-1.31-1.193-4.015-1.058-4.811l.069-.489c1.005-10.964'
                                        + ' 3.034-24.214 4.565-27.493 3.303-1.581 16.767-3.637 27.911-4.633l.149'
                                        + '.013.301-.072c.083-.009.261-.024.508-.024 1.253 0 3.097.349 4.76 2.012'
                                        + ' 9.15 9.151 34.536 34.349 34.778 34.589 2.06 2.06 4.147 2.493 5.536 2.493'
                                        + ' 3.225 0 6.112-2.349 7.023-5.713 '
                                        + ' 6.945-25.677-.413-53.299-19.2-72.086zM86.206'
                                        + ' 329.713l-7.226 7.226c-7.778 7.778-20.506 7.778-28.284 0l-3.94-3.941c-7.'
                                        + '778-7.778-7.778-20.506 0-28.284l7.226-7.226c7.778-7.778 20.506-7.778 28.284'
                                        + ' 0l3.941 3.941c7.777 7.778 7.777 20.506-.001 28.284zm159.465-84.042a7.482'
                                        + ' 7.482 0 01-5.304 2.197 7.476 7.476 0 01-5.304-2.197l-88.414-88.414a7.5'
                                        + ' 7.5 0 0110.607-10.607l27.519 27.519 24.749 24.749 36.146 36.147a7.498'
                                        + ' 7.498 0 01.001 10.606z'
                                    }
                                />
                            </g>
                        </g>
                        <path
                            d={
                                'M-77.015 45.818a.343.343 0 00-.341.345v1.255h-4.282a.343.343 0 00-.34.345v2.072c0'
                                + ' .191.151.345.34.345h7.26c.189 0 .341-.154.341-.345v-3.672a.343.343 0 00-.341-.345z'
                            }
                            opacity={1}
                            fill='#fff'
                            fillOpacity={0.535}
                            fillRule='nonzero'
                            strokeWidth={0.499}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeMiterlimit={4}
                            strokeDasharray='none'
                            strokeDashoffset={0}
                            strokeOpacity={0.933}
                            paintOrder='stroke markers fill'
                        />
                    </g>
                </g>

            </svg>
        );
    } else if (icon === 'analytics') {
        return (
            <svg
                width={width}
                height={height}
                className={className}
                stroke={strokeColor}
                aria-hidden='true'
                viewBox='0 0 18 18'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g id='API' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' opacity='1'>
                    <g
                        id='API-UI-kit'
                        transform='translate(-74.000000, -2031.000000)'
                        fill={strokeColor}
                        fillRule='nonzero'
                    >
                        <g id='Icon/Feedback' transform='translate(74.000000, 2031.000000)'>
                            <path
                                d={'M8.66176471,2.55 L8.66176471,9.38823529 L15.5,9.38823529 L15.5,10.0481286'
                                + ' L15.499,10.05 L15.5,10.05 C15.5,14.1921356 12.1421356,17.55 8,17.55'
                                + ' C3.85786438,17.55 0.5,14.1921356 0.5,10.05 C0.5,5.98908272'
                                + ' 3.72747441,2.68198248 7.75726895,2.55385357 L8,2.55 L8,2.554 L8.00903915,2.55'
                                + ' L8.66176471,2.55 Z M7.33796089,3.90859481 C4.23810015,4.23892283'
                                + ' 1.82352941,6.86248481 1.82352941,10.05 C1.82352941,13.4611705 4.58882949,16.2264706'
                                + ' 8,16.2264706 C11.1875152,16.2264706 13.8110772,13.8118998 14.1414052,10.7120391'
                                + ' L7.33823529,10.7117647 L7.33796089,3.90859481 Z M10.0010048,0.558320951'
                                + ' C13.895699,1.01522273 16.9853252,4.10513282 17.4417922,7.99996001 L10,8'
                                + ' L10.0002117,1 L10.001,0.999320951 L10.0010048,0.558320951 Z M11.356084,2.40639903'
                                + ' L11.3542172,6.64487537 L15.5937793,6.64441498 C14.8896237,4.67352548'
                                + ' 13.3269046,3.11069949 11.356084,2.40639903 Z'}
                                id='Combined-Shape'
                            />
                        </g>
                    </g>
                </g>
            </svg>
        );
    } else if (icon === 'scopes') {
        return (
            <svg
                width={width}
                height={height}
                viewBox='0 0 18 18'
                version='1.1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
            >
                <title>Global Scopes</title>
                <g id='Customer-Portal' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                    <g
                        id='apim-scopes-icon'
                        transform='translate(-665.000000, -1898.000000)'
                        fill={strokeColor}
                        fillRule='nonzero'
                    >
                        <g id='Icon/Control/Burger' transform='translate(665.000000, 1898.000000)'>
                            {/* eslint-disable-next-line max-len */}
                            <path d='M9,1.25 C11.6233526,1.25 13.75,3.37664744 13.75,6 C13.75,8.27986883 12.1437916,10.1845876 10.0012468,10.6442842 L10,12.9992412 L14.25,13 C14.6642136,13 15,13.3357864 15,13.75 C15,14.1642136 14.6642136,14.5 14.25,14.5 L10,14.4992412 L10,15.9992412 L11.75,16 C12.1642136,16 12.5,16.3357864 12.5,16.75 C12.5,17.1642136 12.1642136,17.5 11.75,17.5 L9.25,17.5 C9.21125553,17.5 9.17319725,17.4970621 9.13603576,17.491397 C9.09212295,17.4968356 9.04643102,17.5 9,17.5 C8.44771525,17.5 8,17.0522847 8,16.5 L7.99975057,10.6444981 C5.85670689,10.1851786 4.25,8.28022257 4.25,6 C4.25,3.37664744 6.37664744,1.25 9,1.25 Z M9,2.75 C7.20507456,2.75 5.75,4.20507456 5.75,6 C5.75,7.79492544 7.20507456,9.25 9,9.25 C10.7949254,9.25 12.25,7.79492544 12.25,6 C12.25,4.20507456 10.7949254,2.75 9,2.75 Z' id='Combined-Shape' />
                        </g>
                    </g>
                </g>
            </svg>
        );
    } else if (icon === 'policies') {
        return (
            <svg
                width={width}
                height={height}
                viewBox='0 0 18 18'
                version='1.1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
            >
                <title>1359ABD8-ABF3-4FE9-8AF4-014881DB78CF</title>
                <g id='Customer-Portal' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                    <g
                        id='apim-policies-icon'
                        transform='translate(-665.000000, -1898.000000)'
                        fill={strokeColor}
                        fillRule='nonzero'
                    >
                        <g id='Icon/Control/Burger' fill={strokeColor} transform='translate(665.000000, 1898.000000)'>
                            <path
                                d={'M7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725'
                                + ' 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1'
                                + ' 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1'
                                + ' 1 0 0 0-.8-.4H9v-.586a1 1 0 0 0-2 0zM13.5 3l.75 1-.75 1H2V3h11.5zm.5'
                                + ' 5v2H2.5l-.75-1 .75-1H14z'}
                                id='Combined-Shape'
                            />
                            {/* <path
                                fillRule='evenodd'
                                d={'M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29'
                                + '.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9'
                                + '.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531'
                                + ' 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1'
                                + '.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787'
                                + ' 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0'
                                + ' 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158'
                                + ' 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545'
                                + ' 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z'}
                                id='Combined-Shape'
                            /> */}
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
    return null;
}

CustomIcon.defaultProps = {
    strokeColor: '#ffffff',
    width: 32,
    height: 32,
    icon: 'apis',
    className: '',
};

CustomIcon.propTypes = {
    strokeColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    icon: PropTypes.oneOf(['overview', 'api', 'analytics', 'scopes', 'api-product']),
    className: '',
};
