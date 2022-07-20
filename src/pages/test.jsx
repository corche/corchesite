import "./test.css";
import $ from 'jquery';

export default function Test() {
    window.scrollTo(0,0);
    var showelement1 = true;
    var scrollResult = 0
    $(window).scroll(function () { 
        // var scrollValue = $(document).scrollTop();
        // var scrollValue = scrollValue + 362;
        // // console.log(scrollValue);
        // var test = $('.scrollNav');
        // var print = test.offset().top;
        // console.log(print);

        // if (print <= scrollValue) {
        //     console.log("ㄴ아ㅓ롱놓ㄹ쥳ㄱ화ㅓㅕㄷㄱ4ㅓ히ㅑㅈ");
        // }

        // var scrollPosition = window.scrollY;
        // console.log(scrollPosition);




        // var div = document.getElementsByClassName(".scrollNav");
        // var divTop = div.getBoundingClientRect().top;
        // var absoluteTop = window.pageYOffset + div.getBoundingClientRect().top;

        // console.log(divTop);
        // console.log(absoluteTop);




        let scroll = document.documentElement.scrollTop;

        var scrollResult = window.innerHeight / scroll;

        if (scrollResult <= 3 && showelement1 === false) {
            showelement1 = true;
        }

        console.log(scrollResult);
        console.log(showelement1);
        console.log(scroll);
    });
    return (
        <>
            <div id="wrap">
            {showelement1 === true ? <> 
                <div class="mainNav showelement">
                    *^^*
                </div>
                <div class="scrollNav showelement" style={{"animation-delay":"0.5s"}}>
                    스크로오로로로롤
                </div>
            </> : null}
            </div>
        </>
    )
}