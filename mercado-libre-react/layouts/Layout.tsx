import {Advantages} from '@components/Advantages';
import {Banner} from '@components/Banner';
import { Discover } from '@components/Discover';
import { Benefits } from '@components/Benefits';
import {Offers} from '@components/Offers';
import { Header } from 'components/Header';
import React from 'react';

const Layout = () => {
    return (
        <div>
            <Header />
            <main className='bg-white-darker'>
                <div className="w-screen">
                    <Banner />
                    <div className="first-container">
                        <Advantages />
                        <Offers />
                        <section className="suscribe-section">
                            <div className="suscribe">
                                <div className="suscribe-title">
                                    <span>Suscríbete al nivel 6</span>
                                </div>
                                <div className="suscribe-price">
                                    <div className="suscribe-price-pseudo"></div>
                                    <div className="suscribe-price-description">
                                        <span className="suscribe-price-before">$ 50.690</span>
                                        <div>
                                            <span className="suscribe-price-now">$ 17.890 </span><span className="suscribe-price-month">/mes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="suscribe-benefits">
                                <span className="suscribe-benefits-title">Consigue los mejores beneficios en Mercado Libre</span>
                                <div className="suscribe-benefits-container">
                                    <div className="suscribe-benefits-content">
                                        <div>
                                            <svg width="74" height="75" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1_212)">
                                                    <mask id="mask0_1_212" /* style="mask-type:alpha" */ maskUnits="userSpaceOnUse" x="1" y="1" width="72" height="73">
                                                        <path d="M73 1.6875H1V73.6875H73V1.6875Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_1_212)">
                                                        <path d="M73 1.6875H1V73.6875H73V1.6875Z" fill="white" />
                                                        <path d="M1 37.6875C1 57.5694 17.1181 73.6875 37 73.6875C56.8819 73.6875 73 57.5694 73 37.6875C73 17.8056 56.8819 1.6875 37 1.6875C17.1181 1.6875 1 17.8056 1 37.6875Z" fill="white" />
                                                        <path d="M33.958 43.8291L34.0318 43.8381C34.5772 43.9128 35.1127 44.0118 35.5231 44.1945C35.9047 44.3628 36.1261 44.5761 36.3304 44.9541C36.6391 45.5283 36.6598 46.3338 36.3808 46.9431C36.1711 47.3949 35.7121 47.7756 35.2936 47.9781C34.8589 48.1887 34.4305 48.2886 33.9391 48.3444C33.0787 48.4389 32.1508 48.2607 31.3777 47.8863C30.9196 47.6631 30.3616 47.2779 30.0799 46.7829C29.975 46.6017 29.924 46.3943 29.9331 46.1851C29.9422 45.9758 30.0109 45.7736 30.1312 45.6021C30.5335 45.0522 31.3939 44.9307 32.0428 44.9541C32.5378 44.973 33.4279 45.1251 33.8968 45.2925C34.0273 45.3402 34.5061 45.5265 34.5898 45.612C34.6492 45.6714 34.687 45.7587 34.6618 45.8388C34.5538 46.1673 33.7564 46.3401 33.5269 46.3743C32.9104 46.4679 32.5909 46.2348 31.8898 45.9585C31.7029 45.8812 31.5069 45.8276 31.3066 45.7992C30.9889 45.7686 30.6046 45.8577 30.5434 46.2051C30.5137 46.3851 30.7234 46.5525 30.8836 46.6218C31.2589 46.7838 31.5649 46.8414 31.9348 46.8468C33.0274 46.8648 34.2559 46.6848 35.1496 46.0503C35.272 45.9639 35.3926 45.8352 35.3926 45.675C35.3971 45.3492 34.8274 45.1503 34.8274 45.1503C34.2244 44.8992 33.112 44.7768 32.5396 44.7291C31.9375 44.6778 30.9916 44.5986 30.7648 44.5653C30.5308 44.532 30.277 44.4843 30.0745 44.3943C29.8711 44.3016 29.6722 44.0973 29.6128 43.8687C29.5075 43.4583 29.6416 42.9552 29.8693 42.6276C30.4669 41.7699 31.8646 41.4432 32.9104 41.3136C33.922 41.1876 35.5564 41.1894 36.5509 41.7168C36.7039 41.7987 36.7822 41.8761 36.7489 42.039C36.685 42.3477 36.4537 42.5457 36.1729 42.633C35.8795 42.7257 35.2711 42.7635 35.0029 42.7797C33.805 42.8472 32.3569 42.8121 31.2166 43.1226C31.1275 43.1487 30.9736 43.1901 30.9232 43.2468C30.7432 43.4403 31.2544 43.4961 31.3642 43.5186C31.3957 43.5258 31.402 43.5276 31.4362 43.5303L33.958 43.8291ZM26.8327 38.4885C26.8327 38.4885 27.028 38.196 27.1909 37.9746C27.4879 37.5714 28.0252 37.0116 28.4311 36.6642C28.5553 36.5589 28.7011 36.4392 28.7011 36.4392C28.7011 36.4392 28.4725 36.4626 28.3429 36.4887C28.036 36.5481 27.5851 36.8487 27.3592 37.0413C26.9884 37.3599 26.5789 37.8765 26.7634 38.3355C26.7904 38.4003 26.8327 38.4885 26.8327 38.4885ZM28.8982 39.0402C29.4776 39.0001 30.0408 38.8317 30.547 38.547C31.0492 38.2653 31.7872 37.719 31.7107 37.0737C31.6997 36.9776 31.6631 36.8863 31.6046 36.8092C31.5462 36.7321 31.4682 36.6721 31.3786 36.6354C31.1536 36.5382 31.0384 36.5544 30.7522 36.6381C30.5452 36.7002 30.4507 36.7362 30.2545 36.8487C29.6785 37.1826 28.8622 37.899 28.4185 38.4696C28.3168 38.6046 28.2124 38.7549 28.1314 38.8593C28.0801 38.9223 28.0414 38.9817 28.0459 38.997C28.063 39.0627 28.6687 39.0564 28.8982 39.0402ZM27.4024 40.1382C27.3421 40.2012 27.2782 40.356 27.2116 40.4685C27.1733 40.532 27.1246 40.5886 27.0676 40.6359C26.9146 40.7484 26.785 40.7547 26.6374 40.6242C26.5352 40.5293 26.4529 40.4148 26.3954 40.2876C26.3379 40.1604 26.3064 40.0231 26.3026 39.8835C26.299 39.7629 26.3188 39.6306 26.2972 39.5289C26.2594 39.3579 26.0884 39.1824 25.9957 39.0186C25.8788 38.7861 25.8085 38.533 25.7887 38.2734C25.7527 37.5984 26.1082 36.9756 26.5708 36.4842C27.0624 35.9722 27.6543 35.5672 28.3096 35.2944C28.936 35.0307 29.8549 34.8507 30.5434 35.0883C30.7684 35.1648 31.0798 35.3565 31.2364 35.5554C31.2706 35.5968 31.2976 35.6427 31.3318 35.6634C31.3624 35.6832 31.4425 35.6904 31.5064 35.7021C31.7251 35.7408 32.0419 35.9064 32.1715 36.0171C32.4307 36.2403 32.5729 36.4554 32.6386 36.765C32.77 37.3905 32.4109 38.0754 31.9996 38.4921C31.2985 39.2094 30.6064 39.7161 29.7082 40.0662C29.314 40.2192 28.7002 40.3632 28.2529 40.3236C28.1143 40.3119 27.9712 40.275 27.8362 40.266C27.7179 40.2472 27.6016 40.2174 27.4888 40.1769C27.4546 40.1517 27.4105 40.1292 27.4024 40.1382ZM28.2043 41.5224C28.2313 41.5278 28.2745 41.5404 28.3105 41.553C28.6255 41.6736 28.7542 41.9643 28.8325 42.2838C29.0125 43.0263 29.0881 44.6697 29.1178 45.3123C29.1403 45.7947 29.152 46.2699 29.1718 46.7469C29.1898 47.1519 29.2213 47.6883 29.1376 48.0672C29.1038 48.2196 29.0138 48.3536 28.8856 48.4425C28.7362 48.5379 28.396 48.546 28.2097 48.5055C27.7498 48.411 27.5986 48.1149 27.5329 47.6595C27.3763 46.5723 27.4519 44.4375 27.5446 43.5375C27.5743 43.2405 27.6868 42.2883 27.8425 41.8887C27.8947 41.7564 28.0081 41.4837 28.2043 41.5224ZM14.1904 43.3314C14.1904 43.3314 13.5046 43.38 13.0321 43.4322C12.4318 43.497 11.3041 43.6923 10.6525 43.9245C10.4581 43.9947 10.0612 44.1603 10.0261 44.3619C9.99011 44.5689 10.1188 44.7327 10.2628 44.9019C10.3456 44.9991 10.8154 45.4509 10.9477 45.5616C11.5012 46.0224 12.6217 46.7343 13.447 47.0799C13.7305 47.1969 14.1994 47.3652 14.1994 47.3652C14.1994 47.3652 14.1652 46.0296 14.1706 44.7129C14.176 44.019 14.1904 43.3314 14.1904 43.3314ZM26.7616 43.8624C26.8012 44.2224 26.7094 44.9001 26.6932 44.9892C26.6635 45.1962 26.5078 45.6714 26.4826 45.729C26.3689 45.9894 26.2421 46.2438 26.1028 46.4913C25.8778 46.8963 25.3432 47.538 25.0264 47.8116C23.8465 48.8313 22.0186 49.4136 20.4517 49.6044C19.3154 49.7389 18.1655 49.7055 17.0389 49.5054C16.7161 49.4434 16.3945 49.3756 16.0741 49.302C16.0741 49.302 16.0768 49.5324 16.057 49.6953C16.048 49.7691 15.9922 49.9644 15.9616 50.0283C15.8797 50.1966 15.7456 50.2848 15.5485 50.3217C15.3136 50.3649 15.0625 50.3802 14.8438 50.2875C14.4865 50.1372 14.3578 49.8015 14.2948 49.4145C14.2444 49.1058 14.1922 48.5685 14.1922 48.5685C14.1922 48.5685 13.924 48.4407 13.7008 48.3291C13.0318 47.9957 12.3934 47.6042 11.7928 47.1591C11.4559 46.8926 11.1267 46.6165 10.8055 46.3311C10.3861 45.9333 10.0081 45.5364 9.72011 45.0261C9.49601 44.6301 9.43211 44.2755 9.60131 43.8552C9.83531 43.2675 10.6786 42.8256 11.2546 42.5727C11.6776 42.3864 12.9934 41.9562 13.5388 41.8779C13.7971 41.8401 14.1976 41.7681 14.2228 41.7537C14.2318 41.7473 14.24 41.7397 14.2471 41.7312C14.2597 41.7132 14.2804 41.1318 14.2759 40.9194C14.2714 40.7097 14.4307 39.3354 14.4829 39.0465C14.5099 38.889 14.6278 38.2851 14.7502 38.1249C14.8294 38.0178 14.9698 38.0259 15.085 38.097C15.7114 38.4858 15.9013 39.8376 15.9481 40.5261C15.976 40.9455 15.9895 41.5755 15.9895 41.5755C15.9895 41.5755 16.7086 41.5539 17.1505 41.5665C17.5807 41.5764 18.0541 41.6439 18.5005 41.7159C19.072 41.8068 20.1853 42.0507 20.8234 42.3738C21.349 42.6411 21.8413 43.0893 22.0006 43.5645C22.1491 44.0001 22.1266 44.3025 21.9007 44.6949C21.6469 45.1386 21.1663 45.4689 20.6803 45.4959C20.5363 45.5049 19.9909 45.4329 19.8226 45.3033C19.7569 45.2511 19.7596 45.1584 19.8073 45.0954C19.8253 45.0729 20.0809 44.9379 20.2303 44.8587C20.3059 44.8173 20.368 44.7741 20.4265 44.7201C20.5525 44.6103 20.6641 44.4888 20.6515 44.3475C20.6344 44.163 20.4391 44.0487 20.2537 43.9767C19.3825 43.6302 17.641 43.3422 16.8004 43.2927C16.471 43.2738 16.003 43.2567 16.003 43.2567L16.102 47.9016C16.102 47.9016 16.489 47.9754 16.795 48.0249C16.9687 48.0519 17.7112 48.1185 17.9083 48.1239C19.4086 48.1626 21.0853 48.0294 22.4614 47.3778C23.0662 47.0925 23.6206 46.7388 24.0409 46.26C24.5944 45.6255 24.8833 44.757 24.8077 43.8498C24.724 42.858 24.0265 41.6826 23.4694 40.9671C21.9988 39.0744 19.4761 37.5183 17.2576 36.6057C14.9914 35.6742 12.7531 35.1387 10.3501 35.0496C9.72911 35.0262 8.37911 35.0586 7.69601 35.2476C7.59881 35.2746 7.49981 35.3079 7.40891 35.3286C7.33279 35.3476 7.25997 35.3779 7.19291 35.4186C7.18126 35.4286 7.17015 35.4391 7.15961 35.4501C7.15961 35.4501 7.20191 35.4735 7.24061 35.4906C7.31351 35.5221 7.61861 35.541 7.77611 35.5707C7.91651 35.5968 8.06411 35.6715 8.12171 35.775C8.17751 35.8731 8.18471 35.9505 8.11721 36.0324C7.96331 36.2214 7.38101 36.189 7.12361 36.1494C6.85721 36.1062 6.52511 36.0243 6.46481 35.793C6.39371 35.5203 6.52331 35.2521 6.66371 35.0037C6.94631 34.5087 7.34951 34.2504 7.94081 34.0884C8.82106 33.8532 9.72364 33.7115 10.6336 33.6654C12.4291 33.5979 14.1274 33.912 15.8662 34.4403C16.8607 34.7409 18.1639 35.2458 19.1179 35.7057C19.9305 36.1082 20.7212 36.5534 21.4867 37.0395C21.6775 37.1655 22.7962 37.9863 22.9699 38.1312C23.3326 38.4282 23.806 38.853 24.1489 39.1932C24.8131 39.852 25.6384 40.86 26.0398 41.661C26.1361 41.8536 26.2108 42.0417 26.3368 42.264C26.3782 42.3396 26.5627 42.795 26.5933 42.9273C26.623 43.0578 26.668 43.2486 26.6743 43.2558C26.6833 43.3215 26.7679 43.7112 26.7616 43.8624ZM49.3237 42.8364C48.4831 43.0299 46.2727 43.137 46.2727 43.137L45.9937 44.01C45.9937 44.01 47.098 43.9155 47.9017 43.9992C47.9017 43.9992 48.1627 43.9695 48.1924 44.2944C48.2023 44.5986 48.1672 44.9244 48.1672 44.9244C48.1672 44.9244 48.1492 45.1224 47.8702 45.1719C47.5687 45.2223 45.4897 45.3024 45.4897 45.3024L45.1531 46.4409C45.1531 46.4409 45.028 46.7037 45.3079 46.629C45.5689 46.5588 47.7451 46.1511 48.0286 46.2096C48.3328 46.2852 48.6676 46.6893 48.5713 47.0592C48.4543 47.5182 46.2826 48.9024 44.9596 48.8061C44.9596 48.8061 44.2639 48.8511 43.6762 47.9133C43.1299 47.0178 43.8832 45.3258 43.8832 45.3258C43.8832 45.3258 43.5376 44.5356 43.7887 44.2674C43.7887 44.2674 43.9372 44.1324 44.3737 44.1018L44.9056 43.0002C44.9056 43.0002 44.299 43.0416 43.9381 42.5952C43.6024 42.1722 43.5745 41.9778 43.8319 41.8608C44.1082 41.724 46.6336 41.2632 48.3724 41.3208C48.3724 41.3208 48.9754 41.2632 49.5001 42.3108C49.501 42.3108 49.7548 42.7347 49.3237 42.8364ZM42.7861 47.0727C42.5638 47.5965 41.9752 48.1563 41.2435 47.8089C40.5217 47.4597 39.3715 45.1071 39.3715 45.1071C39.3715 45.1071 38.935 44.2305 38.8513 44.253C38.8513 44.253 38.7577 44.082 38.7001 45.0405C38.6398 45.9945 38.7109 47.8575 38.3311 48.1491C37.9702 48.4434 37.5328 48.3264 37.3069 47.9835C37.0999 47.6451 37.0153 46.8423 37.1269 45.4311C37.2601 44.0163 37.5877 42.5124 38.0071 42.0444C38.4265 41.5791 38.7631 41.9166 38.8936 42.039C38.8936 42.039 39.4543 42.5475 40.3786 44.0388L40.5415 44.3151C40.5415 44.3151 41.3812 45.7245 41.4694 45.7209C41.4694 45.7209 41.5387 45.7857 41.599 45.7389C41.6872 45.7137 41.6512 45.2619 41.6512 45.2619C41.6512 45.2619 41.4775 43.7265 40.7116 41.1264C40.7116 41.1264 40.5946 40.8024 40.6738 40.4991C40.7521 40.1913 41.0608 40.3362 41.0608 40.3362C41.0608 40.3362 42.2488 40.9338 42.8248 42.867C43.3963 44.7993 43.012 46.5453 42.7861 47.0727ZM55.5688 45.9144C55.0288 46.8576 53.5015 48.8331 51.4738 48.3669C50.8033 49.9914 50.2408 51.6348 49.9195 54.0936C49.9195 54.0936 49.8493 54.5715 49.4515 54.4059C49.0582 54.2673 48.4093 53.6139 48.2788 52.7085C48.1384 51.5205 48.6676 49.509 49.7494 47.205C49.4344 46.692 49.2184 45.9594 49.402 44.9154C49.402 44.9154 49.6747 42.9777 51.6205 41.2308C51.6205 41.2308 51.8545 41.0283 51.9886 41.0913C52.1371 41.1543 52.0678 41.7843 51.9499 42.0903C51.8275 42.3963 50.9599 43.8966 50.9599 43.8966C50.9599 43.8966 50.4199 44.9091 50.572 45.7092C51.5926 44.1405 53.9128 40.9752 55.351 41.9724C55.8352 42.318 56.0575 43.0704 56.0575 43.8804C56.0575 44.5914 55.8865 45.3474 55.5688 45.9144ZM55.1494 43.4295C55.1494 43.4295 55.0693 42.8058 54.4591 43.4925C53.9344 44.0721 52.9876 45.1593 52.2271 46.6353C53.0254 46.5453 53.7967 46.1115 54.0307 45.891C54.4087 45.5544 55.2907 44.6427 55.1494 43.4295ZM66.7423 43.2864H63.0253C62.9517 42.0236 62.7957 40.7669 62.5582 39.5244C62.5463 39.4611 62.5125 39.404 62.4629 39.3629C62.4133 39.3218 62.3508 39.2994 62.2864 39.2994H61.4305C61.3933 39.2997 61.3566 39.3082 61.323 39.3242C61.2894 39.3402 61.2597 39.3634 61.2361 39.3922C61.2125 39.421 61.1955 39.4546 61.1863 39.4907C61.1771 39.5267 61.176 39.5644 61.183 39.6009C61.426 40.8258 61.579 42.0336 61.6555 43.2882H58.0789C58.0393 43.2881 58.0001 43.2958 57.9635 43.3109C57.9268 43.3259 57.8935 43.348 57.8655 43.3759C57.8374 43.4038 57.8151 43.437 57.7998 43.4735C57.7845 43.5101 57.7766 43.5493 57.7765 43.5888V44.361C57.7765 44.5284 57.9115 44.6634 58.0789 44.6634H61.7059C61.7086 44.8551 61.7104 45.0261 61.7104 45.1854C61.7104 46.2996 61.6627 47.2158 61.5493 48.2526C61.5449 48.292 61.549 48.3318 61.5615 48.3694C61.5739 48.407 61.5943 48.4415 61.6213 48.4704C61.6474 48.4997 61.6792 48.5231 61.7149 48.5392C61.7505 48.5553 61.7892 48.5638 61.8283 48.564H62.623C62.7778 48.564 62.9056 48.447 62.9218 48.2931C63.0298 47.2491 63.0766 46.3203 63.0766 45.1854C63.0766 45.0252 63.0748 44.8533 63.073 44.6634H66.7396C66.9052 44.6634 67.042 44.5284 67.042 44.3619V43.5888C67.0426 43.5492 67.0353 43.5098 67.0205 43.473C67.0057 43.4363 66.9836 43.4028 66.9557 43.3746C66.9278 43.3465 66.8946 43.3242 66.8579 43.309C66.8213 43.2939 66.782 43.2862 66.7423 43.2864Z" fill="#01147B" />
                                                        <path d="M62.056 37.4823C60.1658 32.826 56.9444 28.8305 52.795 25.9956C48.5412 23.076 43.5004 21.5186 38.341 21.5298C34.1235 21.5252 29.9704 22.565 26.2525 24.5563C22.5347 26.5476 19.3677 29.4285 17.0344 32.9418C17.0085 32.98 16.9918 33.0238 16.9857 33.0695C16.9796 33.1153 16.9843 33.1619 16.9993 33.2055C17.0308 33.2955 17.0992 33.3639 17.1883 33.3945L17.8543 33.6186C17.9315 33.6447 18.0151 33.6447 18.0923 33.6187C18.1695 33.5927 18.2361 33.5421 18.2818 33.4746C20.4744 30.259 23.4021 27.6125 26.8219 25.7544C30.3612 23.8447 34.3194 22.8443 38.341 22.8429C43.1983 22.8429 47.8846 24.2739 51.895 26.9847C55.7951 29.6137 58.8474 33.3192 60.6808 37.6506C60.7348 37.7802 60.8617 37.8639 61.0021 37.8639H61.7977C61.8431 37.8638 61.8878 37.8524 61.9279 37.8309C61.9679 37.8094 62.002 37.7784 62.0272 37.7406C62.053 37.7033 62.0691 37.6602 62.0741 37.6151C62.0791 37.57 62.0729 37.5244 62.056 37.4823Z" fill="url(#paint0_radial_1_212)" />
                                                    </g>
                                                </g>
                                                <rect x="0.5" y="1.1875" width="73" height="73" rx="36.5" stroke="#EFEFEF" />
                                                <defs>
                                                    <radialGradient id="paint0_radial_1_212" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.2 37.6875) rotate(180) scale(45 45)">
                                                        <stop stop-color="#01147B" />
                                                        <stop offset="0.025" stop-color="#011098" />
                                                        <stop offset="0.064" stop-color="#010ABD" />
                                                        <stop offset="0.103" stop-color="#0006DA" />
                                                        <stop offset="0.142" stop-color="#0003EE" />
                                                        <stop offset="0.179" stop-color="#0001FB" />
                                                        <stop offset="0.216" stop-color="#0000FF" />
                                                        <stop offset="1" stop-color="#00FFFF" stop-opacity="0" />
                                                    </radialGradient>
                                                    <clipPath id="clip0_1_212">
                                                        <rect width="72" height="72" fill="white" transform="translate(1 1.6875)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span>Disney+ sin cargo</span>
                                    </div>
                                    <div className="suscribe-benefits-content">
                                        <div>
                                            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1_225)">
                                                    <mask id="mask0_1_225" /* style="mask-type:alpha" */ maskUnits="userSpaceOnUse" x="1" y="1" width="73" height="73">
                                                        <path d="M73.3281 1.6875H1.32812V73.6875H73.3281V1.6875Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_1_225)">
                                                        <path d="M73.3281 1.6875H1.32812V73.6875H73.3281V1.6875Z" fill="white" />
                                                        <path d="M32.2314 35.5509C32.2199 35.5856 32.1976 35.6158 32.1679 35.6371C32.1381 35.6585 32.1024 35.6699 32.0658 35.6697H25.2249L30.7671 39.6414C30.795 39.6619 30.8284 39.6734 30.8629 39.6746C30.8974 39.6757 30.9315 39.6663 30.9606 39.6477C32.4933 38.7072 33.8343 38.0547 36.6846 37.3185C36.6846 37.3185 32.3106 40.5504 29.4477 44.172C29.3843 44.2503 29.3361 44.3397 29.3055 44.4357L28.7097 46.2465L34.2447 42.2793C34.2742 42.2573 34.3101 42.2454 34.3469 42.2454C34.3837 42.2454 34.4195 42.2573 34.449 42.2793L39.984 46.2465L37.8699 39.8259C37.8584 39.7916 37.8583 39.7544 37.8696 39.72C37.881 39.6856 37.9032 39.6558 37.9329 39.6351L43.4679 35.6679H36.6279C36.5913 35.6681 36.5556 35.6567 36.5259 35.6353C36.4961 35.614 36.4739 35.5838 36.4623 35.5491L34.3482 29.1294L32.2314 35.5509Z" fill="url(#paint0_linear_1_225)" />
                                                        <path d="M67.9281 37.0206H63.6144V32.7645H61.3257V37.0206H57.0147V39.213H61.3257V43.4682H63.6144V39.213H67.9281V37.0206ZM49.2963 34.0056C50.415 34.0056 51.1296 34.5789 51.1296 35.5275C51.1296 36.5193 50.415 37.2258 49.2963 37.2258H47.5071V34.0065H49.2954L49.2963 34.0056ZM50.7039 39.4749C52.6254 39.2328 54.2139 37.6002 54.2139 35.5275C54.2139 32.8374 52.3581 31.3605 49.3629 31.3605H44.4669V44.9019H47.508V39.5415L51.1512 44.901H54.6828L50.7039 39.4749ZM26.3418 31.3578H17.2878V34.0929H20.2623V44.9001H23.37V34.0929H26.3436V31.3578H26.3418ZM11.5692 36.3222C10.698 35.9244 10.3623 35.5059 10.3623 34.9542C10.3623 34.3152 10.9212 33.7842 11.7483 33.8076C12.5079 33.8292 13.0668 34.2261 13.4916 35.1756L16.1061 34.0506C15.3915 32.2416 13.9371 31.1832 11.5908 31.1832C9.10953 31.1832 7.27623 32.7933 7.27623 34.9542C7.27623 36.432 7.99083 37.6452 9.82413 38.5488L11.6574 39.4533C12.6861 39.9609 13.1775 40.3362 13.1775 41.0859C13.1775 41.8806 12.5061 42.4539 11.6574 42.4539C10.7412 42.4539 9.91503 41.9463 9.53343 40.7997L6.76143 41.5935C7.38783 43.821 9.24363 45.1224 11.6574 45.1224C14.2728 45.1224 16.2852 43.4682 16.2852 41.0859C16.2852 39.2562 15.3015 38.0205 13.3107 37.116L11.5692 36.3213V36.3222Z" fill="#261E3C" />
                                                    </g>
                                                </g>
                                                <rect x="0.828125" y="1.1875" width="73" height="73" rx="36.5" stroke="#EFEFEF" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_1_225" x1="26.0556" y1="47.4174" x2="42.2673" y2="30.9861" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FA1660" />
                                                        <stop offset="0.28" stop-color="#FA1660" />
                                                        <stop offset="0.78" stop-color="#FF6E00" />
                                                        <stop offset="1" stop-color="#FF6E00" />
                                                    </linearGradient>
                                                    <clipPath id="clip0_1_225">
                                                        <rect width="72" height="72" fill="white" transform="translate(1.32812 1.6875)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span>Star+ sin cargo</span>
                                    </div>
                                    <div className="suscribe-benefits-content">
                                        <div>
                                            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <rect x="1.65625" y="1.6875" width="72" height="72" fill="url(#pattern0)" />
                                                <rect x="1.15625" y="1.1875" width="73" height="73" rx="36.5" stroke="#EFEFEF" />
                                                <defs>
                                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use xlinkHref="#image0_1_237" transform="scale(0.00694444)" />
                                                    </pattern>
                                                    <image id="image0_1_237" width="144" height="144" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAATlBMVEVMaXEwMDD/////5gAzMzNXV1czMzMwMDA0NDRKSkrv7++ysrLm5uaPj49mZmZ/f3+dnZ3S0tL/8GHl5eX/9pv5+fP/+sNzc3O/v7//7D5vu8qTAAAACnRSTlMAGP//QP2PYcP+KcR2uwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAA6hJREFUeJztmd16gjgQQGEkmB+SzKgIff8X3W8CtaiwUpPuejHnorQI8WTITEhaVYIgCIIgCIIgCIIgCIIgCILANMdMmqosxq1j8OGE2rqwtBCsE7rrZcEVwsaF/53Q6bDgJEKPSIS+kTH0ConQu5VaPdahzZJeleXYtjr6Z8yT0MpFUbdt6bmsqipN9pnnOrRyEenyNiK0A31+d+o4/9Ej6zaETn2S+uovnyF0AoLT4XDqR7hsCBn9SIms0+tCV0CFrIIqwvoL2jl0D5AbdP1HQhC99R7AR+sjbAgBjHdlkgBINX8iRNFba32cDspuCRlcEgNCp+q/EDIsYq2fD2pTCK4L+k6NkFsv9aqQs7aHPtnwwW0LfS3rw8UagFCXFyL2AVaZD7RP6NAPBHgsLwRJBKCfD/Ofr4WuiLn1Sa8JzSKbf28KnXj45w1rvRqhPawJHSBY8M0HCV3RAbUfJHShCFZ/kNAX5Ca+Lit06GNm4utMobttksvl0rvMxNd5Qs8LEeTT9f8lNK6tjSAr8XWW0AYuYxBpEfrTCJEJwbhPemS26+zDeXIuftQYwojDZwnRh2UZlhSyz0Nil9DyPvSlxpDFYIYYTKTfCZFXKg5Bxa7soEaDUy8pDt1+IesDpfusMzh/VOSRef/zsMZAe4W6mwX3SdlMobrWNK3L/aJdgE7Np/8FUunHnbqb7sPjm9N9o+KMiinqGKNP30BmiHuY4kMYI6ZQo5nOD++9Vze3sARuDhUSjXH6/S5iWxD3w/rgOppHULoZ4Jwp5HwqsfOg5pHAi+LXDBxONbeCbEc+S2jaTOBtVx6e318zDgAQR/uSs+LO3GLpeZo10xZtppBhg59ZO1j+ntdCI4dD3WpE2rUZKEcozHvg3BL3dtFVUv4lAwLQomDzs/ZD+uTNxWIz8yDE78Wkm5e0fF3KzzmyHQC26aO8PZk6Cf0URj/CrgXxEe+nNO5T3sr+Gx5DON4aNtzTHdW2ifOAm+jYLRQR0sTV+bvllL/DjoZrDglOic63cFqU2b1uOHXdnC9oLECn93YE4pT3Ns0+LmvrY9Fyl+bUOBKGgSO17w0iZQO/J9CIU6XOWbQ+twwj+mlO2ruX2iaLznnv0gPHQgGqqnaRveyzs6O1vlsElfOpqnaeFlO7+/9DUOufWdj6gj5VddTTu6t1of3NQGiNS13p0ORtCK8pmRCM/pUOB4nvU0q/+1b2ovVKEARBEARBEARBEARBEARBEKqC/ANMVGau5IxNmAAAAABJRU5ErkJggg==" />
                                                </defs>
                                            </svg>
                                        </div>
                                        <span>Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="suscribe-button-container">
                                <button type='button' className="suscribe-button">Suscríbete</button>
                            </div>
                        </section>
                        <Benefits/>
                        <section className="discover-section">
                            <div className="discover-title">
                                <span>Descubre</span>
                            </div>
                            <div className="discover-description-container">
                                <a href="#">
                                    <div className="discover-description-content">
                                        <div className="discover-description-content-text">
                                            <span className="discover-description-content-text-1">RENUEVA TUS ESPACIOS</span>
                                            <span>HOGAR Y MUEBLES</span>
                                            <span>HASTA 50% OFF</span>
                                            <div>
                                                <button type='button'>Ver más</button>
                                            </div>
                                        </div>
                                        <div className="discover-description-content-img">
                                            <img src="media/descubre 1.png" alt="Descubre 1" />
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="discover-description-content">
                                        <div className="discover-description-content-text">
                                            <span className="discover-description-content-text-1">SUSCRÍBETE AL NIVEL 6</span>
                                            <span>POR SOLO</span>
                                            <span>$17899 CADA MES</span>
                                            <div>
                                                <button type='button'>Suscribirme</button>
                                            </div>
                                        </div>
                                        <div className="discover-description-content-img">
                                            <img src="media/descubre 2.png" alt="Descubre 2" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </section>
                        <section className="stores-section">
                            <div>
                                <div className="stores-title">
                                    <span>Las mejores tiendas te esperan</span>
                                    <a href="#">Ver tiendas</a>
                                </div>
                                <div>
                                    <div className="stores-container">
                                        <div className="stores-description-1">
                                            <div className="stores-description-logo">
                                                <img src="media/mejores 1 - logo.png" alt="Tienda 1" />
                                            </div>
                                            <div className="stores-description-name">
                                                <span>Lego</span>
                                            </div>
                                            <div className="stores-description-items">
                                                <a href="#"><img src="media/mejores 1 - 1.png" /></a>
                                                <a href="#"><img src="media/mejores 1 - 2.png" /></a>
                                                <a href="#"><img src="media/mejores 1 - 3.png" /></a>
                                            </div>
                                            <span className="stores-description-more">Ver tienda</span>
                                        </div>
                                        <div className="stores-description-2">
                                            <div className="stores-description-logo">
                                                <img src="media/mejores 2 - logo.png" alt="Tienda 2" />
                                            </div>
                                            <div className="stores-description-name">
                                                <span>Xiaomi</span>
                                            </div>
                                            <div className="stores-description-items">
                                                <a href="#"><img src="media/mejores 2 - 1.png" /></a>
                                                <a href="#"><img src="media/mejores 2 - 2.png" /></a>
                                                <a href="#"><img src="media/mejores 2 - 3.png" /></a>
                                            </div>
                                            <span className="stores-description-more">Ver tienda</span>
                                        </div>
                                        <div className="stores-description-3">
                                            <div className="stores-description-logo">
                                                <img src="media/mejores 3 - logo.png" alt="Tienda 3" />
                                            </div>
                                            <div className="stores-description-name">
                                                <span>Oster</span>
                                            </div>
                                            <div className="stores-description-items">
                                                <a href="#"><img src="media/mejores 3 - 1.png" /></a>
                                                <a href="#"><img src="media/mejores 3 - 2.png" /></a>
                                                <a href="#"><img src="media/mejores 3 - 3.png" /></a>
                                            </div>
                                            <span className="stores-description-more">Ver tienda</span>
                                        </div>
                                        <div className="stores-description-4">
                                            <div className="stores-description-logo">
                                                <img src="media/mejores 4 - logo.png" alt="Tienda 4" />
                                            </div>
                                            <div className="stores-description-name">
                                                <span>Nikon</span>
                                            </div>
                                            <div className="stores-description-items">
                                                <a href="#"><img src="media/mejores 4 - 1.png" /></a>
                                                <a href="#"><img src="media/mejores 4 - 2.png" /></a>
                                                <a href="#"><img src="media/mejores 4 - 3.png" /></a>
                                            </div>
                                            <span className="stores-description-more">Ver tienda</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="second-container">
                        <section className="collections-section">
                            <div className="collections-title">
                                <span>Colecciones:</span>
                                <button type='button'>
                                    Supermercado
                                    <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_398)">
                                            <path d="M13.7149 8.75L7.44338 15.0065L1.17188 8.75" stroke="#3483FA" stroke-width="1.5" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_398">
                                                <rect width="14" height="24" fill="white" transform="translate(0.671875)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                            <div className="collections-content">
                                <div>
                                    <a href="#">
                                        <div className="collections-content-main">
                                            <div>
                                                <img src="media/colecciones 1.png" alt="Colección 1" />
                                            </div>
                                            <div className="collections-content-main-description">
                                                <span className="collections-content-main-text1">DESCUBRE</span>
                                                <span className="collections-content-main-text2">SUPERMERCADO</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="collections-content-grid">
                                    <a href="#"><img src="media/colecciones 2.png" alt="Colección 2" /></a>
                                    <a href="#"><img src="media/colecciones 3.png" alt="Colección 3" /></a>
                                    <a href="#"><img src="media/colecciones 4.png" alt="Colección 4" /></a>
                                    <a href="#"><img src="media/colecciones 5.png" alt="Colección 5" /></a>
                                    <a href="#"><img src="media/colecciones 6.png" alt="Colección 6" /></a>
                                    <a href="#"><img src="media/colecciones 7.png" alt="Colección 7" /></a>
                                    <a href="#"><img src="media/colecciones 8.png" alt="Colección 8" /></a>
                                    <a href="#"><img src="media/colecciones 9.png" alt="Colección 9" /></a>
                                </div>
                            </div>
                        </section>
                        <section className="categories-section">
                            <div className="categories-title">
                                <span>Categorías populares</span>
                            </div>
                            <div>
                                <div>
                                    <div className="categories-content">
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_436)">
                                                            <path d="M42.5 20.375L40.731 7.111C40.599 6.117 39.751 5.375 38.749 5.375H10.251C9.249 5.375 8.401 6.117 8.269 7.111L6.5 20.375" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M14.5 37.375V43.375H5.5V37.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M43.5 37.375V43.375H34.5V37.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M46.5 37.375H2.5V26.778C2.5 25.87 2.809 24.988 3.377 24.279L6.5 20.375H42.5L45.623 24.279C46.191 24.989 46.5 25.87 46.5 26.778V37.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M38.5 32.375C40.1569 32.375 41.5 31.0319 41.5 29.375C41.5 27.7181 40.1569 26.375 38.5 26.375C36.8431 26.375 35.5 27.7181 35.5 29.375C35.5 31.0319 36.8431 32.375 38.5 32.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M10.5 32.375C12.1569 32.375 13.5 31.0319 13.5 29.375C13.5 27.7181 12.1569 26.375 10.5 26.375C8.84315 26.375 7.5 27.7181 7.5 29.375C7.5 31.0319 8.84315 32.375 10.5 32.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M21.5 29.375H27.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_436">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Carros, Motos y Otros</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_451)">
                                                            <path d="M9.5 12.375H39.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M9.5 34.375H39.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M35.5 46.375H13.5C11.291 46.375 9.5 44.584 9.5 42.375V6.375C9.5 4.166 11.291 2.375 13.5 2.375H35.5C37.709 2.375 39.5 4.166 39.5 6.375V42.375C39.5 44.584 37.709 46.375 35.5 46.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M22.5 7.375H26.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_451">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Celulares y Teléfonos</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_464)">
                                                            <path d="M24.5 42.375V36.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M12.5 44.375C12.5 44.375 17.5 42.375 24.5 42.375C31.5 42.375 36.5 44.375 36.5 44.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M46.5 4.375H2.5V36.375H46.5V4.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M2.5 30.375H46.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_464">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Computación</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_476)">
                                                            <path d="M18.5 12.375C24.4 12.375 28.5 9.475 28.5 2.875" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M30.5 30.375V8.375C30.5 5.075 29.8 2.375 26.5 2.375C23.2 2.375 18.5 7.075 18.5 10.375V30.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M36.5 30.375H12.5V46.375H36.5V30.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_476">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Belleza y Cuidado Personal</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_488)">
                                                            <path d="M32.5 4.375C32.5 8.775 28.9 12.375 24.5 12.375C20.1 12.375 16.5 8.775 16.5 4.375H10.5L2.5 8.375V20.375H10.5V44.375H38.5V20.375H46.5V8.375L38.5 4.375H32.5Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_488">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Ropa y Accesorios</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_497)">
                                                            <path d="M16.5 3.875L24.5 9.875L32.5 3.875" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M2.5 25.6751L10.7 19.8751L7.5 10.4751" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M18.9 45.6749L16 36.075L6 36.275" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M43 36.275L33 36.075L30.1 45.6749" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M41.5 10.4751L38.3 19.8751L46.5 25.6751" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M28.5 30.375H20.5L16.5 22.375L24.5 16.375L32.5 22.375L28.5 30.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 46.375C36.6503 46.375 46.5 36.5253 46.5 24.375C46.5 12.2247 36.6503 2.375 24.5 2.375C12.3497 2.375 2.5 12.2247 2.5 24.375C2.5 36.5253 12.3497 46.375 24.5 46.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_497">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Deportes y Fitness</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_513)">
                                                            <path d="M8.5 46.375V42.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M40.5 46.375V42.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M40.5 23.475V6.375C40.5 4.175 38.7 2.375 36.5 2.375H12.5C10.3 2.375 8.5 4.175 8.5 6.375V23.475" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M46.5 42.375V28.375C46.5 25.575 44.3 23.375 41.5 23.375C38.7 23.375 36.5 25.575 36.5 28.375V32.375H12.5V28.375C12.5 25.575 10.3 23.375 7.5 23.375C4.7 23.375 2.5 25.575 2.5 28.375V42.375H46.5Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_513">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Hogar y Muebles</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_525)">
                                                            <path d="M24.5 32.375C18.977 32.375 14.5 27.898 14.5 22.375V12.375C14.5 6.852 18.977 2.375 24.5 2.375C30.023 2.375 34.5 6.852 34.5 12.375V22.375C34.5 27.898 30.023 32.375 24.5 32.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M14.5 46.375H34.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 38.375V46.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M40.5 22.375C40.5 31.212 33.337 38.375 24.5 38.375C15.663 38.375 8.5 31.212 8.5 22.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M14.5 14.375H19.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M14.5 21.375H19.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M29.5 14.375H34.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M29.5 21.375H34.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_525">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Electrónica, Audio y Video</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_542)">
                                                            <path d="M7.52023 23.5386C14.5098 26.7385 19.6637 33.2535 21.1032 41.0356" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M41.4798 23.5386C34.4902 26.7385 29.3363 33.2535 27.8968 41.0356" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M8.58936 18.375C8.58936 18.375 16.563 17.375 24.5003 17.375C32.4375 17.375 40.4108 18.375 40.4108 18.375" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M24.5 46.375C36.6503 46.375 46.5 36.5253 46.5 24.375C46.5 12.2247 36.6503 2.375 24.5 2.375C12.3497 2.375 2.5 12.2247 2.5 24.375C2.5 36.5253 12.3497 46.375 24.5 46.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 41.375C33.8888 41.375 41.5 33.7638 41.5 24.375C41.5 14.9862 33.8888 7.375 24.5 7.375C15.1112 7.375 7.5 14.9862 7.5 24.375C7.5 33.7638 15.1112 41.375 24.5 41.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 30.375C26.7091 30.375 28.5 28.5841 28.5 26.375C28.5 24.1659 26.7091 22.375 24.5 22.375C22.2909 22.375 20.5 24.1659 20.5 26.375C20.5 28.5841 22.2909 30.375 24.5 30.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_542">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Accesorios para Vehículos</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_556)">
                                                            <path d="M39 30.375C39.8284 30.375 40.5 29.7034 40.5 28.875C40.5 28.0466 39.8284 27.375 39 27.375C38.1716 27.375 37.5 28.0466 37.5 28.875C37.5 29.7034 38.1716 30.375 39 30.375Z" fill="#3483FA" />
                                                            <path d="M35 34.375C35.8284 34.375 36.5 33.7034 36.5 32.875C36.5 32.0466 35.8284 31.375 35 31.375C34.1716 31.375 33.5 32.0466 33.5 32.875C33.5 33.7034 34.1716 34.375 35 34.375Z" fill="#3483FA" />
                                                            <path d="M36.5 20.375H12.5C6.977 20.375 2.5 24.852 2.5 30.375C2.5 35.898 6.977 40.375 12.5 40.375C16.598 40.375 20.111 37.904 21.656 34.375H27.344C28.888 37.904 32.401 40.375 36.5 40.375C42.023 40.375 46.5 35.898 46.5 30.375C46.5 24.852 42.023 20.375 36.5 20.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M12.5 26.375V34.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M8.5 30.375H16.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 14.375V2.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_556">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Consolas y Videojuegos</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_571)">
                                                            <path d="M46.5 2.375H2.5V46.375H46.5V2.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M39.5 18.375H9.5V39.375H39.5V18.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M30.5 26.375V28.375H18.5V26.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 12.375C25.6046 12.375 26.5 11.4796 26.5 10.375C26.5 9.27043 25.6046 8.375 24.5 8.375C23.3954 8.375 22.5 9.27043 22.5 10.375C22.5 11.4796 23.3954 12.375 24.5 12.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M11.5 12.375C12.6046 12.375 13.5 11.4796 13.5 10.375C13.5 9.27043 12.6046 8.375 11.5 8.375C10.3954 8.375 9.5 9.27043 9.5 10.375C9.5 11.4796 10.3954 12.375 11.5 12.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M37.5 12.375C38.6046 12.375 39.5 11.4796 39.5 10.375C39.5 9.27043 38.6046 8.375 37.5 8.375C36.3954 8.375 35.5 9.27043 35.5 10.375C35.5 11.4796 36.3954 12.375 37.5 12.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_571">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Electrodomésticos</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_585)">
                                                            <path d="M24.5 46.375C35.5457 46.375 44.5 37.4207 44.5 26.375C44.5 15.3293 35.5457 6.375 24.5 6.375C13.4543 6.375 4.5 15.3293 4.5 26.375C4.5 37.4207 13.4543 46.375 24.5 46.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 33.375L27.5 29.375H21.5L24.5 33.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 33.375L27.5 29.375H21.5L24.5 33.375Z" fill="#3483FA" />
                                                            <path d="M24.5 33.375V37.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M20.5 37.375H28.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M17.5 24.375C18.6046 24.375 19.5 23.4796 19.5 22.375C19.5 21.2704 18.6046 20.375 17.5 20.375C16.3954 20.375 15.5 21.2704 15.5 22.375C15.5 23.4796 16.3954 24.375 17.5 24.375Z" fill="#3483FA" />
                                                            <path d="M31.5 24.375C32.6046 24.375 33.5 23.4796 33.5 22.375C33.5 21.2704 32.6046 20.375 31.5 20.375C30.3954 20.375 29.5 21.2704 29.5 22.375C29.5 23.4796 30.3954 24.375 31.5 24.375Z" fill="#3483FA" />
                                                            <path d="M14.442 9.085C14.471 8.846 14.5 8.622 14.5 8.375C14.5 5.061 11.814 2.375 8.5 2.375C5.186 2.375 2.5 5.061 2.5 8.375C2.5 11.689 5.186 14.375 8.5 14.375" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M34.558 9.085C34.529 8.846 34.5 8.622 34.5 8.375C34.5 5.061 37.186 2.375 40.5 2.375C43.814 2.375 46.5 5.061 46.5 8.375C46.5 11.689 43.814 14.375 40.5 14.375" stroke="#3483FA" stroke-miterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_585">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Juegos y Juguetes</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_603)">
                                                            <path d="M7.5 6.375H12.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M5.5 43.375H43.5C45.157 43.375 46.5 42.032 46.5 40.375V14.375C46.5 12.718 45.157 11.375 43.5 11.375H35.5L31.501 5.375H21.5L17.5 11.375H5.5C3.843 11.375 2.5 12.718 2.5 14.375V40.375C2.5 42.032 3.843 43.375 5.5 43.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M26.5 37.375C32.0228 37.375 36.5 32.8978 36.5 27.375C36.5 21.8522 32.0228 17.375 26.5 17.375C20.9772 17.375 16.5 21.8522 16.5 27.375C16.5 32.8978 20.9772 37.375 26.5 37.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M10.5 20.375C11.0523 20.375 11.5 19.9273 11.5 19.375C11.5 18.8227 11.0523 18.375 10.5 18.375C9.94772 18.375 9.5 18.8227 9.5 19.375C9.5 19.9273 9.94772 20.375 10.5 20.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M10.5 20.375C11.0523 20.375 11.5 19.9273 11.5 19.375C11.5 18.8227 11.0523 18.375 10.5 18.375C9.94772 18.375 9.5 18.8227 9.5 19.375C9.5 19.9273 9.94772 20.375 10.5 20.375Z" fill="#3483FA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_603">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Cámaras y Accesorios</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_616)">
                                                            <path d="M46 9.97509L40.1 15.8751L33 8.77509L38.9 2.87509C37.5 2.47509 36.1 2.27509 34.5 2.37509C28.9 2.87509 24.4 7.87509 24.5 13.4751C24.5 14.5751 24.7 15.6751 25 16.6751L5.80001 33.6751C2.90001 36.1751 2.80001 40.6751 5.50001 43.3751C8.20001 46.0751 12.6 45.9751 15.2 43.0751L32.2 23.8751C33.9 24.3751 35.8 24.5751 37.8 24.1751C41.8 23.3751 45.1 20.3751 46.2 16.4751C46.7 14.1751 46.6 11.9751 46 9.97509Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_616">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Herramientas</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="information-section">
                            <div className="information">
                                <div className="information-description">
                                    <svg width="66" height="46" viewBox="0 0 66 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_627)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.910339 4.06598C0.910339 2.40786 2.28769 1.06348 3.98457 1.06348H61.941C63.6388 1.06348 65.0152 2.40341 65.0152 4.06598V41.2467C65.0152 42.9049 63.6379 44.2493 61.941 44.2493H3.98457C2.28678 44.2493 0.910339 42.9093 0.910339 41.2467V4.06598Z" fill="white" />
                                            <mask id="mask0_1_627" /* style="mask-type:luminance" */ maskUnits="userSpaceOnUse" x="0" y="0" width="66" height="46">
                                                <path d="M65.9255 45.1387H0V0.174316H65.9255V45.1387Z" fill="#484848" />
                                            </mask>
                                            <g mask="url(#mask0_1_627)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.98455 1.95318C2.79154 1.95318 1.82066 2.9011 1.82066 4.06603V41.2468C1.82066 42.412 2.79154 43.3599 3.98455 43.3599H61.941C63.134 43.3599 64.1049 42.412 64.1049 41.2468V4.06603C64.1049 2.9011 63.134 1.95318 61.941 1.95318H3.98455ZM3.98455 45.1387C1.78743 45.1387 -3.05176e-05 43.3928 -3.05176e-05 41.2468V4.06603C-3.05176e-05 1.92027 1.78743 0.174316 3.98455 0.174316H61.941C64.1383 0.174316 65.9256 1.92027 65.9256 4.06603V41.2468C65.9256 43.3928 64.1383 45.1387 61.941 45.1387H3.98455Z" fill="#484848" />
                                            </g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2895 15.6911C19.8526 15.6911 21.9302 13.6859 21.9302 11.2121C21.9302 8.73838 19.8526 6.73315 17.2895 6.73315C14.7264 6.73315 12.6488 8.73838 12.6488 11.2121C12.6488 13.6859 14.7264 15.6911 17.2895 15.6911Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2895 7.62262C15.2325 7.62262 13.5591 9.23271 13.5591 11.2121C13.5591 13.1914 15.2325 14.8017 17.2895 14.8017C19.3464 14.8017 21.0201 13.1914 21.0201 11.2121C21.0201 9.23271 19.3464 7.62262 17.2895 7.62262ZM17.2895 16.5805C14.2287 16.5805 11.7384 14.1722 11.7384 11.2121C11.7384 8.25189 14.2287 5.84375 17.2895 5.84375C20.3503 5.84375 22.8407 8.25189 22.8407 11.2121C22.8407 14.1722 20.3503 16.5805 17.2895 16.5805Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M48 32.7969C48 31.8045 48.8268 31 49.848 31H58.3194C59.3399 31 60.1672 31.8049 60.1672 32.7969V37.9262C60.1672 38.9186 59.3406 39.7231 58.3194 39.7231H49.848C48.8273 39.7231 48 38.9182 48 37.9262V32.7969Z" fill="#3782F7" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6129 16.2848C13.5176 16.2848 15.8725 14.012 15.8725 11.2085C15.8725 8.40505 13.5176 6.13232 10.6129 6.13232C7.70826 6.13232 5.35342 8.40505 5.35342 11.2085C5.35342 14.012 7.70826 16.2848 10.6129 16.2848Z" fill="#3782F7" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8424 24.6277H6.66276C6.16002 24.6277 5.75241 24.2295 5.75241 23.7383C5.75241 23.2471 6.16002 22.8489 6.66276 22.8489H14.8424C15.3452 22.8489 15.7528 23.2471 15.7528 23.7383C15.7528 24.2295 15.3452 24.6277 14.8424 24.6277Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5916 34.0388H5.67431C5.36002 34.0388 5.10535 33.79 5.10535 33.4829C5.10535 33.1758 5.36002 32.927 5.67431 32.927H11.5916C11.9059 32.927 12.1605 33.1758 12.1605 33.4829C12.1605 33.79 11.9059 34.0388 11.5916 34.0388Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2115 34.0388H16.0318C15.7175 34.0388 15.4628 33.79 15.4628 33.4829C15.4628 33.1758 15.7175 32.927 16.0318 32.927H24.2115C24.5258 32.927 24.7804 33.1758 24.7804 33.4829C24.7804 33.79 24.5258 34.0388 24.2115 34.0388Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8535 37.7595H5.67437C5.36008 37.7595 5.10541 37.5107 5.10541 37.2036C5.10541 36.8965 5.36008 36.6477 5.67437 36.6477H20.8535C21.1678 36.6477 21.4224 36.8965 21.4224 37.2036C21.4224 37.5107 21.1678 37.7595 20.8535 37.7595Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2395 24.6277H21.0598C20.5571 24.6277 20.1494 24.2295 20.1494 23.7383C20.1494 23.2471 20.5571 22.8489 21.0598 22.8489H29.2395C29.7422 22.8489 30.1498 23.2471 30.1498 23.7383C30.1498 24.2295 29.7422 24.6277 29.2395 24.6277Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.6365 24.6277H35.4569C34.9541 24.6277 34.5465 24.2295 34.5465 23.7383C34.5465 23.2471 34.9541 22.8489 35.4569 22.8489H43.6365C44.1393 22.8489 44.5469 23.2471 44.5469 23.7383C44.5469 24.2295 44.1393 24.6277 43.6365 24.6277Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.2174 24.6277H49.6699C49.1672 24.6277 48.7596 24.2295 48.7596 23.7383C48.7596 23.2471 49.1672 22.8489 49.6699 22.8489H58.2174C58.7201 22.8489 59.1277 23.2471 59.1277 23.7383C59.1277 24.2295 58.7201 24.6277 58.2174 24.6277Z" fill="#484848" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_627">
                                                <rect width="66" height="46" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="information-description-title">Paga con tarjeta o en efectivo</span>
                                    <span className="information-description-text">Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</span>
                                    <span className="information-description-link">Cómo pagar con Mercado Pago</span>
                                </div>
                                <div className="information-description">
                                    <svg width="56" height="49" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_660)">
                                            <path d="M53.1568 1H2.8432C1.82523 1 1 1.82523 1 2.8432V8.87832C1 9.89629 1.82523 10.7215 2.8432 10.7215H53.1568C54.1748 10.7215 55 9.89629 55 8.87832V2.8432C55 1.82523 54.1748 1 53.1568 1Z" stroke="#484848" stroke-width="1.3824" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 10.7214H52.0909V47.0484C52.0909 47.7271 51.5408 48.2772 50.8621 48.2772H4.2288C3.55015 48.2772 3 47.7271 3 47.0484V10.7214Z" stroke="#484848" stroke-width="1.3824" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 21.5202L24.6366 19.8695L26.2727 21.5202L27.9091 19.8695L29.5454 21.5202L31.1819 19.8695L32.8182 21.5202V10H23V21.5202Z" fill="#4E89E5" />
                                            <path d="M32.8182 0.299805H23V10.7215H32.8182V0.299805Z" fill="#4C8CF1" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8726 43.9475H8.45479C8.20366 43.9475 8 43.7316 8 43.4657V33.4822C8 33.2159 8.20366 33 8.45479 33H26.8726C27.1237 33 27.3272 33.2159 27.3272 33.4822V43.4657C27.3272 43.7316 27.1237 43.9475 26.8726 43.9475Z" fill="white" stroke="#484848" stroke-width="1.2288" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5472 38.5807C12.2688 38.5807 12.0209 38.4534 11.8594 38.2535C11.7389 38.1047 11.6667 37.9158 11.6667 37.7098C11.6667 37.2288 12.0608 36.8391 12.5472 36.8391C13.0335 36.8391 13.4277 37.2288 13.4277 37.7098C13.4277 38.1911 13.0335 38.5807 12.5472 38.5807ZM12.5472 35.4304C11.2745 35.4304 10.2425 36.451 10.2425 37.7098C10.2425 38.1713 10.3874 38.5963 10.6258 38.9554L12.5472 41.5064L14.4743 38.9554C14.7114 38.5969 14.8517 38.1701 14.8517 37.7098C14.8517 36.451 13.8201 35.4304 12.5472 35.4304Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1985 36.6456H23.347C23.6825 36.6456 23.9545 36.3736 23.9545 36.038C23.9545 35.7024 23.6825 35.4304 23.347 35.4304H17.1985C16.8629 35.4304 16.5909 35.7024 16.5909 36.038C16.5909 36.3736 16.8629 36.6456 17.1985 36.6456Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1985 39.076H21.506C21.8416 39.076 22.1136 38.804 22.1136 38.4684C22.1136 38.1329 21.8416 37.8608 21.506 37.8608H17.1985C16.8629 37.8608 16.5909 38.1329 16.5909 38.4684C16.5909 38.804 16.8629 39.076 17.1985 39.076Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1985 41.5065H22.1197C22.4552 41.5065 22.7273 41.2344 22.7273 40.8989C22.7273 40.5633 22.4552 40.2913 22.1197 40.2913H17.1985C16.8629 40.2913 16.5909 40.5633 16.5909 40.8989C16.5909 41.2344 16.8629 41.5065 17.1985 41.5065Z" fill="#484848" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_660">
                                                <rect width="56" height="49" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="information-description-title">Envío gratis desde $ 90.000</span>
                                    <span className="information-description-text">Con solo estar registrado en Mercado Libre, tienes envíos gratis en miles de productos seleccionados.</span>
                                    <span className="information-description-link">Conoce más sobre este beneficio</span>
                                </div>
                                <div className="information-description">
                                    <svg width="52" height="55" viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_684)">
                                            <path d="M23.3787 33.8789L17.7929 28.2931C17.4024 27.9026 17.4024 27.2694 17.7929 26.8789L19.3787 25.2931C19.7692 24.9026 20.4024 24.9026 20.7929 25.2931L24.0858 28.586L33.3787 19.2931C33.7692 18.9026 34.4024 18.9026 34.7929 19.2931L36.3787 20.8789C36.7692 21.2694 36.7692 21.9026 36.3787 22.2931L24.7929 33.8789C24.4024 34.2695 23.7692 34.2695 23.3787 33.8789Z" fill="#3483FA" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2087 1.4126C26.2087 1.4126 19.2087 11.4126 2.20867 8.4126C2.20867 8.4126 -3.79133 37.7676 26.2087 53.5906C56.2087 37.7676 50.2087 8.4126 50.2087 8.4126C33.2087 11.4126 26.2087 1.4126 26.2087 1.4126Z" stroke="#474747" stroke-width="1.413" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_684">
                                                <rect width="51" height="55" fill="white" transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="information-description-title">Seguridad, de principio a fin</span>
                                    <span className="information-description-text">¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</span>
                                    <span className="information-description-link">Cómo te protegemos</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <footer>
                <div className="copyright">
                    <div className="copyright-links">
                        <ul className="interest-links">
                            <li><a href="#">Trabaja con nosotros</a></li>
                            <li><a href="#">Términos y condiciones</a></li>
                            <li><a href="#">Cómo cuidamos tu privacidad</a></li>
                            <li><a href="#">Accesibilidad</a></li>
                            <li><a href="#">Ayuda / PQR</a></li>
                            <li><a href="#">www.sic.gov.co</a></li>
                        </ul>
                        <span>Copyright © 1999-2023 MercadoLibre Colombia LTDA.</span>
                    </div>
                    <div className="copyright-address">
                        <span>Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
                    </div>
                </div>
                <div className="endorse">
                    <div>
                        <img src="media/logo industria y comercio.png" alt="Industria y Comercio" />
                    </div>
                    <div>
                        <img src="media/logo pare compare.png" alt="Pare y Compare" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export { Layout };