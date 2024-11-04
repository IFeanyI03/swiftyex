import data from "./data/data.json";

export default function Home() {
    return (
        <div className="w-full h-fit">
            <div className="relative h-[722px] md:h-[1747px] w-full bg-section1 bg-cover bg-center bg-no-repeat overflow-x-clip">
                <div className="flex md:px-0 w-full justify-between items-center absolute z-30 md:w-[89.51%] md:h-[88.19px] md:mx-[5.245%]">
                    <img
                        className="w-[111.97px] h-[24.71px] md:w-[230.58px] md:h-[48.19px] object-contain"
                        src="/images/logo.png"
                        alt="logo"
                    />
                    <div className="hidden md:flex justify-between items-center w-[243px]">
                        <p className="px-[15px]">Work</p>
                        <p className="px-[15px]">About</p>
                        <p className="px-[15px]">Contact</p>
                    </div>
                    <img
                        className="block md:hidden w-[31.68px] h-[31.68px] object-contain"
                        src="/images/Vector.png"
                        alt=""
                    />
                </div>

                <div className="mx-auto top-[50px] flex items-center flex-col gap-[24.7px] md:gap-[54px] relative md:w-[66.18%] md:top-[261px]">
                    <div className="flex items-center flex-col gap-[8.23px] md:gap-[18px] relative md:w-full ">
                        <p className="text-[32.93px] leading-[38.42px] md:text-[72px] w-[82.58%] md:w-full font-[500] text-center md:leading-[84px]">
                            Step into the future of crypto trading with
                            Swiftyex(Bot)
                        </p>
                        <p className="text-[11.55px] leading-[16.47px] md:text-[24px] font-[400] md:leading-[36px] text-center w-[82.58%]">
                            Meet Swifty, your human-like companion, making every
                            interaction as smooth as a chat with a seasoned
                            trader. Intelligence meets simplicity in our
                            fascinating app, even allowing seamless bill
                            payments.
                        </p>
                    </div>

                    <button className="px-[27.17px] md:text-[18px] text-[9.06px] h-[39.3px] md:h-[64px] md:px-[54px] py-[12.07px] md:py-[24px] rounded-[8px] bg-[#5B46F6]">
                        Get Started
                    </button>
                </div>
            </div>

            <div className="relative h-fit bg-gradient1 bg-cover bg-no-repeat pt-[119px] overflow-x-clip">
                <div className="relative h-fit md:h-[676.9px] ">
                    <span className="z-0 absolute top-[33.6px] md:top-[42px] w-full h-[426px]">
                        <img
                            className="w-full h-full object-cover md:object-contain"
                            src="/images/lines.png"
                            alt="lines"
                        />
                    </span>
                    <span className="opacity-60 md:opacity-75 w-[337.68px] h-[576.07px] z-0 absolute bottom-[29px] md:top-[29px] left-0 md:w-[670px] md:h-[1143px]">
                        <img
                            className="w-full h-full object-cover"
                            src="/images/bg-gradient-img.png"
                            alt="lines"
                        />
                    </span>
                    <span className="hidden md:block z-0 absolute bottom-0 left-[55px] w-[54px] h-[54px]">
                        <img
                            className="w-full h-full object-cover"
                            src="/images/star-img.png"
                            alt="lines"
                        />
                    </span>
                    <div className="flex flex-col items-center mx-auto w-full md:w-[1224px] gap-[15px]">
                        <p className="z-10 text-[19.2px] leading-[28.8px] md:text-[24px] font-[500] md:leading-[36px] text-[#8470FF]">
                            Top Features
                        </p>
                        <p className="z-10 w-[80%] text-center text-[30px] leading-[36px] md:text-[48px] font-[500] md:leading-[84px]">
                            Key Features of Swiftyex(Bot)
                        </p>

                        <div className="p-[18.24px] md:p-[24px] h-fit md:h-[447px] flex-col flex md:flex-row gap-[36.48px] md:gap-[48px] justify-between">
                            {data.cards.map((data, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="cursor-pointer z-10 rounded-[25px] bg-[#2B1762] w-[288.8px] md:w-[33.33%] h-full flex flex-col justify-between items-center gap-[19px] md:gap-[32px] px-[24px] py-[32px]"
                                    >
                                        <div className="flex flex-col gap-[12.16px] md:gap-[16px] justify-between items-center">
                                            <img
                                                src={`/images/img${
                                                    index + 1
                                                }.png`}
                                                alt="feature1"
                                            />
                                            <p className="text-[24.32px] w-[80%] leading-[26.75px] md:text-[32px] text-center md:leading-[35.2px] font-[700]">
                                                {data.title}
                                            </p>
                                            <p className="md:w-[304px] text-center text-[12.16px] md:text-[16px] leading-[18.24px] md:leading-[24px] font-[400]">
                                                {data.body}
                                            </p>
                                        </div>
                                        <div className="flex gap-[6px] items-center w-fit h-[24px]">
                                            <p className="text-[16px] text-[#B982FF] font-[600] leading-4">
                                                Get Started
                                            </p>
                                            <img
                                                className="w-[24px] h-full object-contain"
                                                src="/images/arrow.png"
                                                alt="arrow"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-full h-fit flex-col flex md:flex-row justify-between mt-0 md:mt-20 items-center md:items-end md:h-[598.07px] md:w-[1224px] gap-[40px] md:gap-0">
                    <div className="flex flex-col gap-[35.2px] items-center md:items-start h-full w-full md:w-[795.3px]">
                        <span className="flex justify-start w-[288.8px] md:w-full">
                            <img
                                className="w-[36px] md:w-[74px] md:h-[74px] object-contain"
                                src="/images/star-img2.png"
                                alt="star"
                            />
                        </span>
                        <div className="flex flex-col gap-[18px] relative w-full items-center md:items-start ">
                            <p className="text-[28.07px] w-[80%] text-center md:text-left leading-[36.49px] md:text-[59.4px] font-[500] md:leading-[77.22px]">
                                Ready to elevate your crypto trading experience?
                            </p>
                            <p className="text-[9.36px] leading-[14.97px] w-[80%] md:text-[19.8px] font-[400] text-center md:text-left md:leading-[35.64px] md:w-[638px]">
                                Start your free trial now and unlock a world of
                                unlimited transactions, intelligent features,
                                and seamless exchanges. Join us on the path to
                                smarter, more profitable trading. Let&apos;s
                                make every trade count
                            </p>
                        </div>

                        <button className="px-[27.17px] md:text-[18px] text-[9.06px] h-[39.3px] md:h-[64px] md:px-[54px] py-[12.07px] md:py-[24px] rounded-[8px] bg-[#5B46F6]">
                            Get Started
                        </button>
                    </div>
                    <img
                        className="w-[164.9px] h-[247.59px] md:w-[349px] md:h-[524px] object-contain"
                        src="/images/robot.png"
                        alt=""
                    />
                </div>

                <div className="relative w-full flex flex-col md:gap-10 gap-[14.78px] justify-center items-center py-[64px] md:py-0 h-fit md:h-[984px] mt-20">
                    <span className="hidden md:block opacity-20 z-0 absolute top-[-437px] left-0 w-fit md:h-[1482.22px]">
                        <img
                            className="w-full h-full object-contain"
                            src="/images/Looper-3.png"
                            alt="lines"
                        />
                    </span>
                    <span className="w-[247.8px] h-[551.04px] top-[-220.08px] z-0 absolute md:top-[-524px] right-0 md:w-[590px] md:h-[1312px]">
                        <img
                            className="w-full h-full object-cover"
                            src="/images/bg-gradient-img2.png"
                            alt="lines"
                        />
                    </span>
                    <span className="z-0 absolute top-[275px] left-[1325px] w-[61px] h-[61px]">
                        <img
                            className="hidden md:block w-full h-full object-cover"
                            src="/images/star-img3.png"
                            alt="lines"
                        />
                    </span>
                    <div className="w-full h-fit gap-[14.78px] md:gap-0 md:w-[858px] md:h-[288.2px] items-center flex flex-col justify-between">
                        <p className="w-[80%] text-[26.2px] leading-[34.05px] md:text-[59.4px] text-center md:leading-[77.22px] font-[500]">
                            Buy and sell with the lowest fees in the industry
                        </p>
                        <p className="w-[60%] md:w-[693px] text-center text-[8.73px] md:text-[19.8px] leading-[13.1px] md:leading-[29.7px] font-[400]">
                            Maximize your profits and minimize costs as you
                            navigate the crypto. Join us and take control of
                            your trades with fees that won&apos;t weigh you
                            down.
                        </p>

                        <div className="flex gap-[6px] items-center w-fit h-[24px]">
                            <p className="text-[16px] text-[#B982FF] font-[600] leading-4">
                                Learn More
                            </p>
                            <img
                                className="w-[24px] h-full object-contain"
                                src="/images/arrow.png"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <img
                        className="z-10 w-[361px] md:w-[1180px] h-[150.53px] md:h-[448px] object-contain"
                        src="/images/table.png"
                        alt=""
                    />
                </div>

                <div className="relative z-10 h-fit md:h-[804px] flex w-full bg-[#1D1347] ">
                    <span className="hidden z-0 opacity-80 md:0pacity-90 absolute w-[535.2px] h-[567px] left-[121px] top-[-247px] md:right-0 md:w-fit md:h-[945px]">
                        <img
                            className="w-full h-full object-contain"
                            src="/images/bg-gradient-img3.png"
                            alt="lines"
                        />
                    </span>
                    <div className="mx-auto flex flex-col md:flex-row justify-between w-full mt-20 items-end h-fit md:h-[598.07px] md:w-[1224px]">
                        <div className="flex flex-col gap-[35.2px] h-fit md:h-full items-center md:items-start w-full md:w-[638px]">
                            <img
                                className="hidden md:block w-[74px] h-[74px] object-contain"
                                src="/images/star-img2.png"
                                alt=""
                            />
                            <div className="flex flex-col gap-[18px] relative w-full items-center md:items-start">
                                <p className="text-[29.94px] text-center md:text-left md:text-[59.4px] font-[500] leading-[38.92px] md:leading-[77.22px]">
                                    Be among the first to experience Swifty App
                                </p>
                                <p className="text-[9.98px] md:text-[19.8px] text-center md:text-left font-[400] leading-[15.97px] md:leading-[35.64px] w-[80%] md:w-[638px]">
                                    Click the button to join the waitlist and
                                    chat with Swifty on Telegram. Enjoy early
                                    access, exclusive perks and front - row
                                    seats to the future of trading.
                                </p>
                            </div>

                            <button className="px-[27.17px] md:text-[18px] text-[9.06px] h-[39.3px] md:h-[64px] md:px-[54px] py-[12.07px] md:py-[24px] rounded-[8px] bg-[#5B46F6]">
                                Get Started
                            </button>
                        </div>
                        <div className="relative h-[297.94px] md:h-full w-full">
                            <img
                                className="absolute top-0 md:top-[49.93px] left-[-50px] md:left-[-100px] w-full md:w-[888.3px] h-[297.94px] md:h-[591.15px] md:object-cover object-contain"
                                src="/images/swift2 1.png"
                                alt=""
                            />
                            <img
                                className="absolute top-[12.29px] right-0 md:top-[96.13px] md:left-[75px] w-[80%] md:w-[811.65px] h-[272.54px] md:h-[540.75px] object-contain"
                                src="/images/swift1 1.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <footer className="relative bg-[#0F0730] flex items-center justify-between md:justify-center  w-full h-[415px] md:h-[556.26px]">
                    <span className="z-0 absolute bottom-0 left-0 w-full md:w-fit md:h-[613.23px]">
                        <img
                            className="w-full h-full object-contain"
                            src="/images/bg-gradient-img4.png"
                            alt="lines"
                        />
                    </span>
                    <span className="z-0 absolute bottom-0 right-[119px] h-fit w-[256.92px] md:w-[306px]">
                        <img
                            className="hidden md:block w-full h-full object-cover"
                            src="/images/robot2.png"
                            alt="lines"
                        />
                    </span>
                    <div className=" mx-auto flex flex-col gap-[20px] md:gap-0 md:flex-row justify-between md:w-[1202px] items-center md:items-start h-fit md:h-[299px]">
                        <div className="h-full flex items-center md:items-start gap-[20px] md:gap-0 flex-col justify-between w-[292.41px] md:w-[380px]">
                            <p className="opacity-70 text-[10.77px] md:text-[14px] leading-[16.16px] text-center leadind-[21px] md:text-left font-[400]">
                                Swiftyex Bot is your trusted partner in the
                                world of currency trading, we redefine the way
                                you exchange money, making it as simple as
                                chatting with a seasoned trader.
                            </p>
                            <p className="opacity-70 text-[10.77px] md:text-[14px] leading-[16.16px] text-center leadind-[21px] md:text-left font-[400]">
                                Sign up to get the latest in Swifty news,
                                discounts, and more.
                            </p>
                            <div className="z-20 flex justify-center items-center inset-0 bg-gradient-to-r from-[#18C8FF] to-[#933FFE] rounded-[10px] w-[233.93px] md:w-[304px] h-[43.09px] md:h-[56px]">
                                <div className="bg-[#0F0730] px-[10px] flex items-center justify-between w-[231.93px] md:w-[302px] h-[41.0px] md:h-[54px] rounded-[10px]">
                                    <input
                                        className="pl-[10px] bg-inherit outline-none h-[90%] w-[80%]"
                                        placeholder="Email Address"
                                        type="text"
                                    />
                                    <img
                                        className="w-[24px] h-full object-contain"
                                        src="/images/arrow.png"
                                        alt="arrow"
                                    />
                                </div>
                            </div>
                            <p className="text-[12px] leadind-[18x] font-[400]">
                                © 2023 Swiftyex(Bot){" "}
                            </p>
                        </div>

                        <div className="h-fit md:h-full justify-center md:justify-start flex-row flex md:flex-col gap-[24px] w-full md:w-fit">
                            <p className="opacity-30 text-[14px] leadind-[21x] font-[400]">
                                Home
                            </p>
                            <p className="opacity-30 text-[14px] leadind-[21x] font-[400]">
                                Features
                            </p>
                            <p className="opacity-30 text-[14px] leadind-[21x] font-[400]">
                                Rates
                            </p>
                            <p className="opacity-30 text-[14px] leadind-[21x] font-[400]">
                                Telegram
                            </p>
                        </div>

                        <div className="md:h-full h-fit flex-row flex justify-center md:justify-start md:flex-col gap-[24px] w-full md:w-fit">
                            <p className="hidden md:block opacity-30 text-[14px] leadind-[21x] font-[400]">
                                Privacy Policy and Terms of Service
                            </p>
                            <p className="opacity-30 text-[14px] leadind-[21x] font-[400]">
                                Swiftyex(Bot) Privacy Policy
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
