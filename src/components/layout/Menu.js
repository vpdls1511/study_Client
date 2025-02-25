import {Link, NavLink} from "react-router-dom";
import {Users, Briefcase, Edit3, Activity, AlignJustify} from "react-feather";
import {useEffect, useState} from "react";
import Profile from "./Profile";

const Menu = () => {
  const mNavData = (state, l1, l2, l3, l4, l5) => {
    return {
      "state": state,
      "line-1": l1,
      "line-2": l2,
      "line-3": l3,
      "line-4": l4,
      "line-5": l5,
    }
  }
  const [menuWidth, setMenuWidth] = useState(mNavData(false, "30px", "30px", "30px", "30px", "30px"))
  const [menuHeight, setMenuHeight] = useState("80px")

  const handleMenuClick = () => {
    if (menuWidth.state) {
      setMenuWidth(mNavData(false, "30px", "30px", "30px", "30px", "30px"))
      setMenuHeight("80px")
    } else {
      setMenuWidth(mNavData(true, "25px", "10px", "20px", "15px", "23px"))
      setMenuHeight("600px")
    }
  }

  const handleMouseEnter = () => handleDesktopMenuHeight("180px")
  const handleMouseLeave = () => handleDesktopMenuHeight("80px")
  const handleDesktopMenuHeight = (height) => {
    if (window.innerWidth > 800) setMenuHeight(height)
  }

  const handleWindowResize = () => {
    if (window.innerWidth > 801) {
      setMenuHeight("80px");
      setMenuWidth(mNavData(false, "30px", "30px", "30px", "30px", "30px"))
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])


  return <nav style={{height: menuHeight}}>
    <div className={"menuBtn"} onClick={handleMenuClick}>
      <div style={{width: menuWidth["line-5"]}}/>
      <div style={{width: menuWidth["line-4"]}}/>
      <div style={{width: menuWidth["line-3"]}}/>
      <div style={{width: menuWidth["line-2"]}}/>
      <div style={{width: menuWidth["line-1"]}}/>
    </div>
    <Link to={"/"}> <img src={"/image/logo.png"} width={"80px"}/> </Link>
    <ul className={"DefaultSideMenu"}>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div><Users/></div>
        <p><NavLink to={"/info/intro"} onClick={handleMenuClick}>스터디 소개</NavLink></p>
        <ul>
          <li><NavLink to={"/info/intro"} onClick={handleMenuClick}> 목적 </NavLink></li>
          <li><NavLink to={"/info/event"} onClick={handleMenuClick}> 연간 행사 </NavLink></li>
          <li><NavLink to={"/info/member"} onClick={handleMenuClick}> 멤버 소개 </NavLink></li>
        </ul>
      </li>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div><Briefcase/></div>
        <p><NavLink to={"/company"} onClick={handleMenuClick}>기업 정보</NavLink></p>
        <ul>
          <li><Link to={"/company"} onClick={handleMenuClick}> IT 대기업 </Link></li>
          <li><Link to={"/company"} onClick={handleMenuClick}> 중소 & 스타트업 </Link></li>
        </ul>
      </li>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div><Edit3/></div>
        <p><NavLink to={"/talk"} onClick={handleMenuClick}>커뮤니티</NavLink></p>
        <ul>
          <li><Link to={"/talk"} onClick={handleMenuClick}> 정보공유 </Link></li>
          <li><Link to={"/talk"} onClick={handleMenuClick}> 대회 팀원 모집 </Link></li>
          <li><Link to={"/talk"} onClick={handleMenuClick}> Q&A </Link></li>
        </ul>
      </li>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div><Activity/></div>
        <p><NavLink to={"/activity"} onClick={handleMenuClick}>활동</NavLink></p>
        <ul>
          <li><Link to={"/activity"} onClick={handleMenuClick}> 진행 프로젝트 </Link></li>
          <li><Link to={"/activity"} onClick={handleMenuClick}> 스터디 일정 </Link></li>
          <li><Link to={"/activity"} onClick={handleMenuClick}> 취업 현황 </Link></li>
        </ul>
      </li>
    </ul>
    <Profile/>
  </nav>
}


export default Menu;