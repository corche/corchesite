import "./home.css";
import home_01 from "../media/h-1_img.jpg"
import home_02 from "../media/h-3_img.jpg"
import homebox_01 from "../media/h-2_button_box_img_1.jpg"
import homebox_02 from "../media/h-2_button_box_img_2.jpg"
import homebox_03 from "../media/h-2_button_box_img_3.jpg"
import homebox_04 from "../media/h-2_button_box_img_4.jpg"
import test from "../media/test.png"

export default function Home() {
    return (
        <>
            <div className="h-1_img"><img src={home_01} alt="메인화면 이미지"/></div>
            <div className="h-1 m white"><div className="fheavy show">Dev.코체</div><div className="h-01 fmedium show" style={{"animation-delay":"0.3s"}}>안녕하세요!<br />저는 학생 개발자 코체라고 해요!</div> </div>
            <a href="#h-a"><div className="h-tp_ h-tp1_ show" style={{"animation-delay":"0.7s"}} /></a>
            <div className="h-2" id="h-a">
                <div className="h-top">　</div>
                <div className="h-2_title fmedium  m">저는 이런사람 이에요</div>
                <div className="h-2_button">
                    <div className="h-2_button_group h-2_button_group_1">
                        <div className="h-2_button_box mh">
                            <img className="h-2_button_box_img h-st-1" src={homebox_01} alt="노력하는"/>
                            <div className="h-2_button_box_title fmedium  m">노력하는</div>
                            <div className="h-2_button_box_subtitle fregular  m">만족 할때까지<br />최선을 다해 노력해요!</div>
                        </div>
                        <div className="h-2_button_box mh">
                            <img className="h-2_button_box_img h-st-2" src={homebox_02} alt="사서고생하는"/>
                            <div className="h-2_button_box_title fmedium  m">사서고생하는</div>
                            <div className="h-2_button_box_subtitle fregular  m">제가 하고싶은 일이라면<br />고생을 사서라도 합니다!</div>
                        </div>
                    </div>
                    <div className="h-2_button_group h-2_button_group_2">
                        <div className="h-2_button_box mh">
                            <img className="h-2_button_box_img h-st-3" src={homebox_03} alt="다양한"/>
                            <div className="h-2_button_box_title fmedium  m">다양한</div>
                            <div className="h-2_button_box_subtitle fregular  m">여러가지를 만들고 싶어요!</div>
                        </div>
                        <div className="h-2_button_box mh">
                            <img className="h-2_button_box_img h-st-4" src={homebox_04} alt="배워가는"/>
                            <div className="h-2_button_box_title fmedium  m">배워가는</div>
                            <div className="h-2_button_box_subtitle fregular  m">더 많은걸 만들기 위해<br />여러가지를 배우고 싶어요!</div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#h-b"><div className="h-tp_" /></a>
            <div className="h-3" id="h-b">
                <div className="h-top">　</div>
                <div className="h-3_title fmedium m"><span className="fbold">진행중인 프로젝트들</span>을<br />만나보세요</div>
                <div className="h-3_box">
                    <div className="h-3_box_group">
                        <a href="/" target="_blank"><div className="mh h-3_box_">
                            <img className="h-3_box_img" src={test} alt="profile"/>
                            <div className="h-3_box_text">
                                <div className="h-3_box_text_title fbold">타이틀</div>
                                <div className="h-3_box_text_subtitle fregular">서브 타이틀<br />안녕하세요</div>
                            </div>
                        </div></a>
                    </div>
                </div>
            </div>
            <a href="#h-c"><div className="h-tp_" /></a>
            <div className="h-4_box">
                <div className="h-4_img" id="h-c"><img src={home_02} alt="연락화면 이미지"/></div>
                <div className="h-absolute">
                    <div className="h-4_button_group_">
                        <div className="h-4_button_group">
                            <a className="h-4_button_" rel="noreferrer" href="https://discord.com/users/706788425352740887" target="_blank"><div className="mh m"><div className="white felight">discord: 코체#4274</div></div></a>
                            <a className="h-4_button_" rel="noreferrer" href="mailto:corche2000@naver.com" target="_blank"><div className="mh m"><div className="white felight">email: corche2000@naver.com</div></div></a>
                        </div>
                    </div>
                    <div className="h-4_text">
                        <div className="h-4_title  m white fmedium">제게 연락하는 방법이에요<div className="m white flight">이곳으로 연락해야 제가 확인할 수 있어요</div></div>
                    </div>
                </div>
            </div>
        </>
    );
  }